import { Module } from '@nestjs/common';
import { CardsController } from './cards.controller';
import { CardService } from './shared/card.service';

@Module({
    controllers:[CardsController],
    providers:[CardService]
})
export class CardsModule {}
