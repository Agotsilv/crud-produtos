/* eslint-disable prettier/prettier */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'mssql',
  host: 'mssql-196998-0.cloudclusters.net',
  port: 10024,
  username: 'teste',
  password: 'Full@2000',
  database: 'teste',
  synchronize: false,
  logging: true,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  extra: {
    encrypt: true,
    trustServerCertificate: true,
  },
};
