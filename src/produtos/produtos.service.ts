/* eslint-disable prettier/prettier */
import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Produto } from './entities/produto.entity';
import { CreateProdutoDto } from './dto/create-produto.dto';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectRepository(Produto)
    private readonly produtoRepository: Repository<Produto>,
    @InjectDataSource() private dataSource: DataSource,
  ) {}

  async create(
    createProdutoDto: CreateProdutoDto,
  ): Promise<{ message: string }> {
    const { CodProd, DescrProd } = createProdutoDto;

    const produtoExists = await this.produtoRepository.findOne({
      where: { CodProd },
    });

    if (produtoExists) {
      throw new ConflictException(
        `O código ${CodProd} já existe no banco de dados.`,
      );
    }

    try {
      // Chama a stored procedure
      await this.dataSource.query(
        `EXEC SpGrProduto @CodProd = @0, @DescrProd = @1`,
        [CodProd, DescrProd],
      );

      return { message: 'Produto criado com sucesso ✅' };
    } catch (error) {
      console.error('Erro ao criar produto:', error);

      return { message: 'Erro ao criar produto ❌' };
    }
  }

  async findAll(): Promise<Produto[]> {
    return await this.produtoRepository.find();
  }

  async findOne(CodProd: number): Promise<Produto> {
    const produto: Produto[] = await this.dataSource.query(
      `EXEC SpSe1Produto @CodProd = @0`,
      [CodProd],
    );

    if (produto.length === 0) {
      throw new NotFoundException(
        `Produto com código ${CodProd} não encontrado`,
      );
    }

    return produto[0];
  }

  async update(
    CodProd: number,
    updateData: { CodProd?: number; DescrProd?: string },
  ): Promise<void> {
    const { CodProd: newCodProd, DescrProd } = updateData;

    // Se não forneceu novos dados, mantém os atuais
    const finalCodProd = newCodProd || CodProd;
    const finalDescrProd = DescrProd || '';

    await this.dataSource.query(
      `EXEC SpGrProduto @CodProd = @0, @DescrProd = @1`,
      [finalCodProd, finalDescrProd],
    );
  }

  async findCaracter(DescrProd: string): Promise<Produto[]> {
    const produtos: Produto[] = await this.dataSource.query(
      `EXEC SpSeProduto @DescrProd = @0`,
      [DescrProd],
    );

    return produtos;
  }

  async remove(CodProd: number): Promise<void> {
    await this.dataSource.query(`EXEC SpExProduto @CodProd = @0`, [CodProd]);
  }
}
