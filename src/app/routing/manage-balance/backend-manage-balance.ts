import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { BalanceModel } from "./balance.model";

@Injectable ({
    providedIn: 'root'
})

export class BackendManageBalance {
    private baseURL: string = "https://venmo-f5382-default-rtdb.firebaseio.com"
    private manageBalanceEndpoint: string = "/manageBalance.json"

    constructor(private http: HttpClient){

    }
    public getBalance(){
        return this.http.get<BalanceModel []>(this.baseURL + this.manageBalanceEndpoint);
    }
    public getBalances(index: number){
        return this.http.get<BalanceModel>(this.baseURL+ 'manageBalance/' + index + '.json');
    }
}