import { DataSource } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export interface DatabaseConfigType {
  host: string;
  port: number;
  user: string;
  password: string;
  db_name: string;
}

export const dbConfigVars: DatabaseConfigType = {
  host: process.env.DB_PORT,
  port: parseInt(process.env.DB_PORT || '5432'),
  db_name: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
};

export const databaseConfig: PostgresConnectionOptions = {
  type: 'postgres',
  entities: [__dirname + '/*.entity.ts'],
  migrations: [__dirname + '/migrations/*.{js,ts}'],
  migrationsRun: false,
  synchronize: false,
  connectTimeoutMS: 10_000,
  parseInt8: true,
  ...dbConfigVars,
};

export const dataSource: DataSource = new DataSource({
  ...databaseConfig,
  host: 'localhost',
});
