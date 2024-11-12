import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class createEmpleadoDto {
  cedula: string;

  @IsNotEmpty()
  @IsString()
  primer_nombre: string;

  @IsNotEmpty()
  @IsString()
  segundo_nombre: string;

  @IsNotEmpty()
  @IsString()
  primer_apellido: string;

  @IsNotEmpty()
  @IsString()
  segundo_apellido: string;

  @IsNotEmpty()
  @IsNumber()
  tipo_documento: number;

  @IsNotEmpty()
  @IsNumber()
  idpais: number;

  @IsNotEmpty()
  @IsNumber()
  iddepartamentoexpedicion: number;

  @IsNotEmpty()
  @IsNumber()
  idmunicipioexpedicion: number;

  @IsNotEmpty()
  @IsNumber()
  idpaisnacimiento: number;

  @IsNotEmpty()
  @IsNumber()
  iddepartamentonacimiento: number;

  @IsNotEmpty()
  @IsNumber()
  idmunicipionacimiento: number;

  @IsNotEmpty()
  @IsString()
  nacionalidad: string;

  @IsNotEmpty()
  @IsString()
  direccion: string;

  @IsNotEmpty()
  @IsString()
  telefono: string;

  @IsNotEmpty()
  @IsString()
  idsexo: string;

  @IsNotEmpty()
  @IsString()
  idestadocivil: string;
}
