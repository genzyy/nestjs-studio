import { DataSource } from 'typeorm'
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions'
import { ConfigService } from '@nestjs/config'
import { Injectable } from '@nestjs/common'

export interface DatabaseConfigType {
  host: string
  port: number
  db_name: string
  user: string
  password: string
}

@Injectable()
export class DatabaseConfigService {
  constructor(private configService: ConfigService) {}

  get dbConfig(): DatabaseConfigType {
    return {
      host: this.configService.get<string>('DB_HOST'),
      port: this.configService.get<number>('DB_PORT', 5432),
      db_name: this.configService.get<string>('DB_NAME'),
      user: this.configService.get<string>('DB_USER'),
      password: this.configService.get<string>('DB_PASSWORD'),
    }
  }
}

// You can now use this service in your main module or wherever you configure your data source
export const databaseConfig = (
  configService: ConfigService,
): PostgresConnectionOptions => ({
  type: 'postgres',
  host: configService.get<string>('DB_HOST'),
  port: configService.get<number>('DB_PORT', 5432),
  database: configService.get<string>('DB_NAME'),
  username: configService.get<string>('DB_USER'),
  password: configService.get<string>('DB_PASSWORD'),
  entities: [__dirname + '/*.entity.ts'],
  migrations: [__dirname + '/migrations/*.{js,ts}'],
  migrationsRun: false,
  synchronize: false,
  connectTimeoutMS: 10_000,
  parseInt8: true,
})

export const dataSource = (configService: ConfigService): DataSource => {
  console.log(databaseConfig(configService))
  return new DataSource(databaseConfig(configService))
}
