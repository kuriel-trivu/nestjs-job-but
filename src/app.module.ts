import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ScheduleModule } from "@nestjs/schedule";
import { TasksService } from "./task.service";
import { NoReqService } from "./no.req.service";

@Module({
  imports: [
    ScheduleModule.forRoot()
  ],
  controllers: [AppController],
  providers: [
    AppService,
    TasksService,
    NoReqService,
  ]
})
export class AppModule {
}
