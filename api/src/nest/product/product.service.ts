import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { DB } from 'src/resources/DB';

@Injectable()
export class ProductService {
  create(data: CreateProductDto) {
    const now = new Date();
    return DB.product.create({
      data: { ...data, updated_at: now },
    });
  }

  findAll() {
    return DB.product.findMany();
  }

  findOne(id: number) {
    return DB.product.findFirst({ where: { id } });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    const updated_at = new Date();
    return DB.product.update({
      where: { id },
      data: { ...updateProductDto, updated_at },
    });
  }

  remove(id: number) {
    return DB.product.delete({ where: { id } });
  }
}
