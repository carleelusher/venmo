import { Component, OnInit } from '@angular/core';
import { CardModel } from '../categories/card/lab3/card.model';
import { BackendManageBalance } from '../routing/manage-balance/backend-manage-balance';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(public ps : BackendManageBalance) { }

  ngOnInit(): void {
  }
  addCard(product : CardModel) {
    console.log("You clicked submit");
    console.log(product);
    this.ps.addCard(product);
  }
}
