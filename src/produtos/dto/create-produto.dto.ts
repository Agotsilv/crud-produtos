/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import { IsInt, IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateProdutoDto {
  @IsInt()
  @IsNotEmpty()
  CodProd: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(80)
  DescrProd: string;
}
