import {
  Controller,
  Get,
  Post,
  Put,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/authGoogle/authGoogleService';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
  ) {}
  public jwtToken = { access_token: '' };
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(AuthGuard('google'))
  @Get('google')
  async google() {}

  @UseGuards(AuthGuard('google'))
  @Get('auth/google/callback')
  async googleCallback(@Req() req, @Res() res: Response) {
    const jwt = await this.authService.login(req.user);
    this.jwtToken = jwt;
    res.set('authorization', jwt.access_token);
    res.status(200);
    return res.json(req.user);
    // res.redirect('/profile', )
  }
}
