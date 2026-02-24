import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Controller('admin')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class AdminController {
  @Get('dashboard')
  @Roles('admin')
  getAdminData() {
    return { message: 'Welcome to the super secret admin dashboard!' };
  }

  @Get('reports')
  @Roles('admin', 'manager')
  getReports() {
    return { message: 'Here are the company reports.' };
  }
}
