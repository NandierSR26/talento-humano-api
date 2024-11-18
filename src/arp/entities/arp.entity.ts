import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'arp' })
export class Arp {
  @PrimaryGeneratedColumn()
  idarp: number;

  @Column()
  arp: string;
}
