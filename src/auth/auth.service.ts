import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/usuarios/usuario.entity';
import { Repository } from 'typeorm';
import { registerAuthDto } from './dto/register-auth.dto';
import { loginAuthDto } from './dto/login-auth.dto';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Usuario) private usuariosRepository: Repository<Usuario>,
    private jwtService: JwtService,
  ) {}

  async register(usuario: registerAuthDto) {
    const emailExist = await this.usuariosRepository.findOneBy({
      email: usuario.email,
    });

    if (emailExist) {
      // 409 CONFLICT
      return new HttpException('email ya existe', HttpStatus.CONFLICT);
    }
    //GENERAR USUARIO
    const newUsusario = this.usuariosRepository.create(usuario);

    //GUARDAR
    const userSave = await this.usuariosRepository.save(newUsusario);

    //GENERAR TOKEN
    const payload = { id: userSave.idUsuario, email: userSave.email };
    const token = this.jwtService.sign(payload);
    //RETORNO DE INFORMACION
    const data = {
      user: userSave,
      token: token,
    };

    //delete data.user.control
    return data;
    delete data.user.control;

    return data;
  }

  async login(loginDto: loginAuthDto) {
    const { email, control } = loginDto;
    const userFound = await this.usuariosRepository.findOneBy({ email: email });

    if (!userFound) {
      // 404 CONFLICT
      return new HttpException('email ya existe', HttpStatus.NOT_FOUND);
    }

    const isPasswordValid = await compare(control, userFound.control);
    if (!isPasswordValid) {
      return new HttpException('Password no es valido', HttpStatus.FORBIDDEN);
    }

    const payload = { id: userFound.idUsuario, email: userFound.email };
    const token = this.jwtService.sign(payload);

    const data = {
      user: userFound,
      token: token,
    };

    //delete data.user.control

    delete data.user.estado;

    return data;
  }
}
