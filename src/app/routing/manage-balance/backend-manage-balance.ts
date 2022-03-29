import { Injectable } from "@angular/core";
import { BalanceModel } from "./balance.model";
import { AngularFireDatabase} from "@angular/fire/compat/database";
import { CardModel } from "src/app/categories/card/lab3/card.model";

@Injectable ({
    providedIn: 'root'
})

export class BackendManageBalance {
    private baseURL: string = "https://venmo-f5382-default-rtdb.firebaseio.com"
    private manageBalanceEndpoint: string = "/manageBalance.json"

    constructor(private db: AngularFireDatabase){

    }
    public getBalance(){
        return this.db.list<BalanceModel>("manageBalance").valueChanges();
    }
    public getBalances(index: number){
        //return this.http.get<BalanceModel>(this.baseURL+ 'manageBalance/' + index + '.json');
    }
    addCard(product: CardModel) {
        this.db.list<CardModel>("products").push(product);
    }
}