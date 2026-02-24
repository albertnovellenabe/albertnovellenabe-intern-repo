import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DataSource } from 'typeorm';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly dataSource: DataSource,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test-db')
  async testDatabaseConnection() {
    try {
      const result = await this.dataSource.query('SELECT 1 AS is_connected');

      return {
        status: 'success',
        message: 'Successfully connected to the PostgreSQL database!',
        data: result,
      };
    } catch (error) {
      return {
        status: 'error',
        message: 'Failed to connect to the database.',
        errorDetail: error.message,
      };
    }
  }
}
