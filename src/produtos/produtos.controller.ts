/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseIntPipe,
  Put,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { CreateProdutoDto } from './dto/create-produto.dto';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createProdutoDto: CreateProdutoDto) {
    return this.produtosService.create(createProdutoDto);
  }

  @Get()
  findAll() {
    return this.produtosService.findAll();
  }

  @Get(':CodProd')
  findOne(@Param('CodProd', ParseIntPipe) CodProd: number) {
    return this.produtosService.findOne(CodProd);
  }

  @Post('search')
  findCaracter(@Body() body: { DescrProd: string }) {
    return this.produtosService.findCaracter(body.DescrProd);
  }

  @Put(':CodProd')
  async update(
    @Param('CodProd', ParseIntPipe) CodProd: number,
    @Body() body: { CodProd?: number; DescrProd?: string },
  ) {
    await this.produtosService.update(CodProd, body);
    return { message: 'Produto atualizado com sucesso' };
  }

  @Delete(':CodProd')
  remove(@Param('CodProd', ParseIntPipe) CodProd: number) {
    return this.produtosService.remove(CodProd);
  }
}
