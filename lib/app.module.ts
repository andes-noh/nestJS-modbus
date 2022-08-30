import { TestModule } from './sample/test.module'
import { Module } from '@nestjs/common'
import { ScheduleModule } from '@nestjs/schedule'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [TestModule, ScheduleModule.forRoot(), ConfigModule.forRoot()],
  providers: [],
  controllers: [],
})
export class AppModule {}
