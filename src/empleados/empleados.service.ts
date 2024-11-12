import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Persona } from './empleado.entity';
import { Repository } from 'typeorm';
import { createEmpleadoDto } from './dto/createEmpleadoDto';
import * as PDFDocument from 'pdfkit';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class EmpleadosService {
  constructor(
    @InjectRepository(Persona) private personaRepository: Repository<Persona>,
  ) {}

  async createUsuario(Empleado: createEmpleadoDto) {
    const NewUsuario = this.personaRepository.create(Empleado);
    // const urlDocument = await this.generateDocumentPDF(NewUsuario);
    // NewUsuario.urlcartapdf = urlDocument;

    return this.personaRepository.save(NewUsuario);
  }

  async generateDocumentPDF(data: Persona): Promise<string> {
    // Crear el documento PDF
    const doc = new PDFDocument();

    // Definir la ruta donde se guardará el archivo
    const filePath = path.join(
      __dirname,
      `../../pdfs/certificado_${data.cedula}.pdf`,
    );
    const writeStream = fs.createWriteStream(filePath);
    doc.pipe(writeStream);

    // Configuración de estilo y texto del documento
    doc.fontSize(12).font('Times-Roman');

    // Encabezado de la dirección
    doc.text('DIRECCIÓN DE TALENTO HUMANO', { align: 'right' });
    doc.moveDown(2);

    // Número de referencia
    doc.text('0201-10, 02-119-02-2020', { align: 'left' });
    doc.text('Sincelejo, 24 de ABRIL DE 2020', { align: 'left' });
    doc.moveDown(2);

    // Destinatario
    doc.text(`Señor(a)`, { align: 'left' });
    doc.text(`VANESSA DEL CARMEN VANEGAS CONTRERAS`, { align: 'left' });
    doc.text(`C.C. N° ${data.cedula}`, { align: 'left' });
    doc.text(`Ciudad`, { align: 'left' });
    doc.moveDown(1);

    // Cuerpo del mensaje
    doc.text(`Cordial saludo`, { align: 'left' });
    doc.moveDown(1);

    const message = `A través del presente oficio me informarle a usted, que mediante DECRETO No 324 de 18 de marzo de 2020, Ha sido nombrado para proveer el cargo de DOCENTE DE AULA Código 9001 Grado 2DE, adscrito a INSTITUCION EDUCATIVA NUESTRA SEÑORA DEL CARMEN, de la planta de cargos de la Alcaldía de Sincelejo. Adjunto fotocopia de DECRETO.`;
    doc.text(message, {
      align: 'justify',
      lineGap: 5,
      indent: 20,
    });

    doc.moveDown(1);
    doc.text(
      `Sírvase acercarse a esta oficina a fin de efectuar los trámites pertinentes a la posesión de cargo.`,
    );
    doc.moveDown(2);

    // Firma
    doc.text(`Atentamente,`, { align: 'left' });
    doc.moveDown(3);
    doc.text(`__________________________`, { align: 'left' });
    doc.text(`HAUDY SAMIR MONTERROSA`, { align: 'left' });
    doc.text(`Director de Talento Humano`, { align: 'left' });
    doc.moveDown(3);

    // Pie de página
    doc.text(`Anexo Un (1) folio`, { align: 'left' });
    doc.text(`Elaboró: Nalvarez`, { align: 'left' });

    // Finalizar el documento
    doc.end();

    // Retornar la ruta del archivo cuando esté guardado
    return new Promise<string>((resolve, reject) => {
      writeStream.on('finish', () => resolve(filePath));
      writeStream.on('error', reject);
    });
  }

  findAll() {
    return this.personaRepository.find();
  }
}
