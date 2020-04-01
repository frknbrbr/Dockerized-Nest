import { Controller, Get, Patch } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Patch('/counter')
  async increaseRedisCount() {
    return await this.appService.increaseRedisCount();
  }

  @Get('/counter')
  async getRedisCount() {
    return await this.appService.getRedisCount();
  }
}
