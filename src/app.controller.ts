import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/metrics/:term')
  getEcho(@Param('term') term: string): string {
    return this.appService.getEcho(term);
  }
}
