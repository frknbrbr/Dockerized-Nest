import { Injectable } from '@nestjs/common';
const asyncRedis = require("async-redis");

@Injectable()
export class AppService {
  constructor() {
    this.client = asyncRedis.createClient({
      host: process.env.REDIS_HOST || 'redis-server',
      port: process.env.REDIS_PORT || 6379
    });
    this.client.set("Request count", 0);
  }

  client;

  getHello(): string {
    return 'Hello World!';
  }

  async increaseRedisCount() {
    let currentCount = await this.client.get("Request count");
    currentCount++;
    await this.client.set("Request count", currentCount);
    return {
      message: `You requested and increased redis count to: ${currentCount}`
    }
  }

  async getRedisCount() {
    const currentCount = await this.client.get("Request count");
    return {
      message: `Current count is: ${currentCount}`
    }
  }
}
