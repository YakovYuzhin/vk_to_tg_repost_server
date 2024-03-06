import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const SmeeClient = require('smee-client');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.enableCors();
  await app.listen(3000);
}

// const smee = new SmeeClient({
//   source: 'https://smee.io/T6URTJrcr5kZWAt4',
//   target: 'http://localhost:3000/events',
//   logger: console,
// });

//smee.start()
bootstrap();

