import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { GOOGLE_CLIENT_ID, GOOGLE_SECRET } from './constants/constants';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      clientID:
        '1020699277899-lcoksdq1ktfhn8gp7kk41rrgml65v8dm.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:3000/auth/google/callback',
      scope: ['email', 'profile'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    done(null, profile);
  }
}
