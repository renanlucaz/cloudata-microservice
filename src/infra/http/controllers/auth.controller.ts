import { AuthService } from '@app/services/auth/auth.service';
import { Body, Controller, Post } from '@nestjs/common';
import { AuthDTO } from '../dtos/AuthDTO';
import { UserViewModel } from '../view-module/user-view-model';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  async auth(@Body() body: AuthDTO) {
    const { email, password } = body;

    const { user, accessToken } = await this.authService.execute({
      email,
      password,
    });

    return { user: UserViewModel.toHTTP(user), accessToken };
  }
}
