import { IsOptional, IsString, IsInt, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

export class FilterUsersDto {
  @IsOptional()
  @IsString()
  nombre?: string;

  @IsOptional()
  @IsString()
  apellido?: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(18)
  @Max(100)
  edad?: number;

  @IsOptional()
  @IsString()
  nacionalidad?: string;

  // Nuevos filtros
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  departamento?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  municipio?: number;

  @IsOptional()
  @Type(() => Date)
  fechanacimiento?: Date;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  idsexo?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  idestadocivil?: number;
}
