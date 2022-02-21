import { Component } from "@angular/core";
import { CardModel } from "src/app/categories/card/lab3/card.model";
import { mock_card_list } from "src/app/categories/card/lab3/mock_card_list";
import { BalanceModel } from "./balance.model";
import { mock_card_balance } from "./mock_card_balance";


@Component ( {
    selector: 'manage-balance',
    templateUrl: 'manage-balance.component.html',
    styleUrls: ['manage-balance.component.css']
})
export class ManageBalanceComponent {
    cards: BalanceModel[] = [];
    constructor()
    {
      //put some code to fetch data from backend using http
      for(var card of mock_card_balance) {
        // console.log(card);
        this.cards.push(card);
      }
    }
}