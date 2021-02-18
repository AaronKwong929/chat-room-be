import { DocumentBuilder } from '@nestjs/swagger';

const swaggerOptions = new DocumentBuilder()
    .setTitle(`Aaron聊天室`)
    .setDescription(`Aaron聊天室Api`)
    .setVersion(`1.0`)
    .build();

export default swaggerOptions;
