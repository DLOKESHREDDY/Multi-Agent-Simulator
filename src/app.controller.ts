import { Controller, Get } from '@nestjs/common';

@Controller('test') // Ensure 'test' is specified here
export class AppController {
  @Get()
  getData() {
    return { message: 'Backend is working!' };
  }
}
