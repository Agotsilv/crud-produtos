/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectDataSource()
    private dataSource: DataSource,
  ) {}
  async getHello(): Promise<string> {
    try {
      await this.dataSource.query('SELECT 1');
      return 'Conectado com sucesso no MSSQL 🚀';
    } catch (err) {
      console.error('Erro de conexão:', err);
      return 'Falha na conexão ❌';
    }
  }
}
