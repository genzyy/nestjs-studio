const { DataSource } = require('typeorm')

module.exports = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  entities: ['dist/**/*.entity.js'],
  migrations: ['src/migrations/*.{js,ts}'],
  migrationsTableName: 'migration',
  migrationsRun: false,
  synchronize: false,
  connectTimeoutMS: 10_000,
  parseInt8: true,
})
