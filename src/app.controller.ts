// https://www.youtube.com/watch?v=lgyszZhAZOI

import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
const puppeteer = require('puppeteer');

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get('/api')
  async getProduct(@Query('product') product: string, @Res() res: Response) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const url = `https://kontakt.az/?s=${product}&ord=prub`
    await page.goto(url);

    // await page.screenshot({ path: 'amazing.png', fullPage: true });

    await browser.close();
    res.json({ statusCode: res.statusCode, timeStamp: new Date().toUTCString(), data: { } });
    return
  }
}
