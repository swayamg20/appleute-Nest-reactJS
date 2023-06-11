import { Controller, Get, Post } from '@nestjs/common';
import product_data from '../products.json';
@Controller('product')
export class ProductController {
  @Get()
  async fetchProduct() {
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const maindata = require('../products.json');
      return maindata;
    } catch (error) {
      // Handle any errors that occur during file reading or parsing
      console.error('Error reading JSON file:', error);
      throw new Error('Failed to fetch data');
    }
  }
}
