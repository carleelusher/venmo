import { Component } from "@angular/core";
import { CardModel } from "src/app/categories/card/lab3/card.model";
import { mock_card_list } from "src/app/categories/card/lab3/mock_card_list";

@Component ( {
    selector: 'how-it-works',
    templateUrl: 'how-it-works.component.html',
    styleUrls: ['how-it-works.component.css']
})
export class HowItWorksComponent {
    cards: CardModel[] = [];
    constructor()
    {
      //put some code to fetch data from backend using http
      for(var card of mock_card_list) {
        // console.log(card);
        this.cards.push(card);
      }
    }
}