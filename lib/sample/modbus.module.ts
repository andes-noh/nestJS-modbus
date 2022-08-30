/*
https://docs.nestjs.com/modules
*/
import { ModbusService } from './modbus.service'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [ConfigModule],
  controllers: [],
  providers: [ModbusService],
})
export class ModbusModule {}
