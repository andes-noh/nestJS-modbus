import { ModbusModule } from './sample/modbus.module'
import { Module } from '@nestjs/common'
import { ScheduleModule } from '@nestjs/schedule'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [ModbusModule, ScheduleModule.forRoot(), ConfigModule.forRoot()],
  providers: [],
  controllers: [],
})
export class AppModule {}
