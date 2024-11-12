import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'persona' })
export class Persona {
  @PrimaryGeneratedColumn()
  idpersona: number;

  @Column()
  cedula: string;

  @Column()
  primer_nombre: string;

  @Column()
  segundo_nombre: string;

  @Column()
  primer_apellido: string;

  @Column()
  segundo_apellido: string;

  @Column()
  tipo_documento: number;

  @Column()
  idpais: number;

  @Column()
  iddepartamentoexpedicion: number;

  @Column()
  idmunicipioexpedicion: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fechanacimiento: Date;

  @Column()
  idpaisnacimiento: number;

  @Column()
  iddepartamentonacimiento: number;

  @Column()
  idmunicipionacimiento: number;

  @Column()
  nacionalidad: string;

  @Column()
  direccion: string;

  @Column()
  telefono: string;

  @Column()
  idsexo: string;

  @Column()
  idestadocivil: string;

  @Column()
  urlcartapdf: string;
}
