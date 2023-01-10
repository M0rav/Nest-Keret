import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Redirect,
  Render,
} from '@nestjs/common';
import { AppService } from './app.service';
import db from './db';
import { CatsDto } from './cats.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('list')
  async list(@Query('szem_szin') szem_szin: string) {
    const [rows] = await db.execute(
      'SELECT szem_szin, suly FROM macskak WHERE szem_szin = ?',
      [szem_szin],
    );
    return {
      macskak: rows,
    };
  }

  @Post('macskak/new')
  @Render('index')
  newcatindex() {
    return {};
  }
}
