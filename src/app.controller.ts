import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/events')
  getEvents(@Body() payload: any, @Res() res: any): any {
    console.log(payload);

    res.status(202).send('Accepted');
    return 'OK'
  }
}
