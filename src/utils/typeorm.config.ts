import { TypeOrmModuleOptions } from "@nestjs/typeorm";

// TypeOrm configuration options
export const typeOrmCOnfig: TypeOrmModuleOptions = {
  type: "postgres",
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  username: process.env.DATABASE_USER || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'postgres',
  database: process.env.DATABASE_NAME || 'postgres_db',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true
}

