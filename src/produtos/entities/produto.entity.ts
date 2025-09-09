/* eslint-disable prettier/prettier */
import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('Produto')
export class Produto {
  @PrimaryColumn({ type: 'int' })
  CodProd: number;

  @Column({ type: 'varchar', length: 80 })
  DescrProd: string;
}
