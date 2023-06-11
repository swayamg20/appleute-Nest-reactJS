import { Controller, Get, Post } from '@nestjs/common';

@Controller('data')
export class UsersController {
  @Get()
  async fetchData() {
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const data1 = require('../users.json');
      return data1;
    } catch (error) {
      // Handle any errors that occur during file reading or parsing
      console.error('Error reading JSON file:', error);
      throw new Error('Failed to fetch data');
    }
  }
}
