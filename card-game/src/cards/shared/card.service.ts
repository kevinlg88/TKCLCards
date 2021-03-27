import { Injectable } from '@nestjs/common';
import { Card } from './card';

@Injectable()
export class CardService 
{
    cards: Card[]= [
        {id: "003",uuid: "a9099a45-3334-9e55-7b14-0561e350770c" },
        {id:"004", uuid:"03acb46b-6a69-3c63-e14d-30d0f94fa161"},
        {id:"005", uuid:"092bdcf2-eb25-6672-5b1c-2b9a079e6fb9"},
        {id:"006", uuid:"68cee3e7-50f3-9eaf-3771-86b7061d1ba6"},
        {id:"007", uuid:"cf204413-9e80-29de-69cc-eea68e4b060d"},
        {id:"008", uuid:"36e79db0-0f32-05ab-32d5-3d4f48049773"},
        {id:"009", uuid:"e84cdf18-508c-acf0-16eb-71399e59f835"},
        {id:"010", uuid:"0ef20532-b9de-baee-36e8-7d989b345fa7"},
        {id:"011", uuid:"91becf90-df80-e7f4-b60b-abd6f2f7b38b"},
        {id:"012", uuid:"b0ac392b-e799-1583-844a-900866321bfe"},
        
    ];

    getAll()
    {
        return this.cards;
    }

    getById(id:string)
    {
        const card = this.cards.find((value) => value.id == id);
        return card;
    }

    create(card:Card)
    {
        this.cards.push(card);
        return card;
    }

    update(card:Card)
    {
        const cardArray = this.getById(card.id);
        if(cardArray)
        {
            cardArray.uuid = card.uuid;
        }

        return cardArray;
    }

    delete(id:string)
    {
        const index = this.cards.findIndex((value) => value.id == id);
        this.cards.splice(index, 1);
    }
}
