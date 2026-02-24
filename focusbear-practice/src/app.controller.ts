import {
  Controller,
  Get,
  UseGuards,
  Req,
  ExecutionContext,
  CanActivate,
} from '@nestjs/common';
import { AppService } from './app.service';
import { DataSource } from 'typeorm';
import { Roles } from './auth/decorators/roles.decorator';
import { RolesGuard } from './auth/guards/roles.guard';
import { Observable } from 'rxjs';

class MockAdminAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();
    req.user = { 'https://focusbear.com/roles': ['admin'] };

    return true;
  }
}

class MockUserAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();
    req.user = { 'https://focusbear.com/roles': ['user'] };

    return true;
  }
}

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

  @Get('admin-only-success')
  @UseGuards(MockAdminAuthGuard, RolesGuard)
  @Roles('admin')
  testAdminSuccess() {
    return { message: 'Success! The RolesGuard let the Admin in.' };
  }

  @Get('admin-only-fail')
  @UseGuards(MockUserAuthGuard, RolesGuard)
  @Roles('admin')
  testAdminFail() {
    return {
      message: 'You should never see this. The guard should block you.',
    };
  }

  @Get('public-test')
  @UseGuards(MockUserAuthGuard, RolesGuard)
  testPublic() {
    return {
      message: 'Success! RolesGuard ignores routes without decorators.',
    };
  }
}
