import { IsNumber } from 'class-validator';

export class FindProdutoDto {
  @IsNumber()
  CodProd: number;
}
