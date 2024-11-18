import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';
import { EmpleadosModule } from './empleados/empleados.module';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ArpModule } from './arp/arp.module';
import { BancoModule } from './banco/banco.module';
import { CargosModule } from './cargos/cargos.module';
import { ClaseModule } from './clase/clase.module';
import { CodigosModule } from './codigos/codigos.module';
import { ConsecutivosModule } from './consecutivos/consecutivos.module';
import { DepartamentosModule } from './departamentos/departamentos.module';
import { EstadocivilModule } from './estadocivil/estadocivil.module';
import { FormatosModule } from './formatos/formatos.module';
import { GradoModule } from './grado/grado.module';
import { MisrolesModule } from './misroles/misroles.module';
import { MunicipiosModule } from './municipios/municipios.module';
import { NacionalidadModule } from './nacionalidad/nacionalidad.module';
import { NotificacionesModule } from './notificaciones/notificaciones.module';
import { NovedadnominaModule } from './novedadnomina/novedadnomina.module';
import { OficinaadscritaModule } from './oficinaadscrita/oficinaadscrita.module';
import { PaisModule } from './pais/pais.module';
import { PensionModule } from './pension/pension.module';
import { PlantaModule } from './planta/planta.module';
import { PosesionesModule } from './posesiones/posesiones.module';
import { RolesModule } from './roles/roles.module';
import { SaludModule } from './salud/salud.module';
import { SexoModule } from './sexo/sexo.module';
import { SituacionadministrativaModule } from './situacionadministrativa/situacionadministrativa.module';
import { TipoActoAdministrativoModule } from './tipo_acto_administrativo/tipo_acto_administrativo.module';
import { TipoDocumentoModule } from './tipo_documento/tipo_documento.module';
import { TiposPosesionesModule } from './tipos_posesiones/tipos_posesiones.module';
import { TiposangreModule } from './tiposangre/tiposangre.module';
import { TipovinculacionModule } from './tipovinculacion/tipovinculacion.module';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: +process.env.DB_PORT,
      //port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsuariosModule,
    AuthModule,
    EmpleadosModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    ArpModule,
    BancoModule,
    CargosModule,
    ClaseModule,
    CodigosModule,
    ConsecutivosModule,
    DepartamentosModule,
    EstadocivilModule,
    FormatosModule,
    GradoModule,
    MisrolesModule,
    MunicipiosModule,
    NacionalidadModule,
    NotificacionesModule,
    NovedadnominaModule,
    OficinaadscritaModule,
    PaisModule,
    PensionModule,
    PlantaModule,
    PosesionesModule,
    RolesModule,
    SaludModule,
    SexoModule,
    SituacionadministrativaModule,
    TipoActoAdministrativoModule,
    TipoDocumentoModule,
    TiposPosesionesModule,
    TiposangreModule,
    TipovinculacionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
