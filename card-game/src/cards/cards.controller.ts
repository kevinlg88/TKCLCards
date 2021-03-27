import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Card } from './shared/card';
import { CardService } from './shared/card.service';

@Controller('cards')
export class CardsController 
{
    constructor(private cardService: CardService) {}

    @Get()
    async getAll(): Promise<Card[]> 
    {
        return this.cardService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string): Promise<Card> 
    {
        return this.cardService.getById(id);
    }

    @Post()
    async create(@Body() card: Card): Promise<Card>
    {
        return this.cardService.create(card);
    }

    @Put(':id')
    async update(@Param('id') id:string, @Body() card:Card):Promise<Card>
    {
        card.id = id;
        return this.cardService.update(card);
    }

    @Delete(':id')
    async delete(@Param('id') id:string)
    {
        this.cardService.delete(id);
    }
}
