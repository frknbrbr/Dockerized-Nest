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
    try {
      return await this.appService.increaseRedisCount();
    } catch (error) {
      console.log(error);
    }
  }

  @Get('/counter')
  async getRedisCount() {
    try {
      return await this.appService.getRedisCount();
    } catch (error) {
      console.log(error);
    }
  }
}
