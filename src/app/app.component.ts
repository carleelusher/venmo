import { Component } from '@angular/core';
import { CardModel } from './categories/card/lab3/card.model';
import { mock_card_list } from './categories/card/lab3/mock_card_list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'venmo';

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

