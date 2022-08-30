import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Cron, CronExpression } from '@nestjs/schedule'
import * as Modbus from 'jsmodbus'
import { Socket } from 'net'

interface Config {
  readonly MODBUS_HOST: string
  readonly MODBUS_PORT: number
}

@Injectable()
export class ModbusService implements OnModuleInit, OnModuleDestroy {
  private socket = new Socket()

  constructor(private readonly config: ConfigService<Config>) {}
  async onModuleInit() {
    //
  }
  async onModuleDestroy() {
    this.socket.end()
  }

  // 매 10초마다 데이터 수집
  @Cron(CronExpression.EVERY_10_SECONDS)
  async getModbusData() {
    //
    try {
      const sc = new Socket()

      const modbusClient = new Modbus.client.TCP(sc)

      sc.on('connect', async () => {
        // readHoldingRegisters
        // 0번지 부터 4번째 데이터까지 수집 40000 ~ 40004
        const res = await modbusClient.readHoldingRegisters(0, 4)
        // 읽은 데이터 출력
        console.log('160: ', res.response.body.valuesAsBuffer.readInt16BE(0))
        console.log('161: ', res.response.body.valuesAsBuffer.readInt16BE(2))
        console.log('162: ', res.response.body.valuesAsBuffer.readInt16BE(4))
        console.log('163: ', res.response.body.valuesAsBuffer.readInt16BE(6))

        sc.end()
      })
        .connect({
          // .env 파일 통해 입력 없을시 디폴트값으로 연결
          host: this.config.get('MODBUS_HOST') ?? '127.0.0.1',
          port: this.config.get('MODBUS_PORT') ?? 502,
        })
        .on('error', (err) => {
          console.log('modbus error')
        })
    } catch (e) {
      console.error(e)
    }
  }
}
