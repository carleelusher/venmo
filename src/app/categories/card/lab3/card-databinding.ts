import { Component, Input } from "@angular/core";
@Component({
    selector: 'card-databinding',
    templateUrl: 'card-databinding.html',
    styleUrls: ['card-databinding.css']
    
})
export class DataBindingCardComponent {
@Input() img: string;
@Input() description: string;
@Input() title: string;

constructor(){
    this.img = "";
    this.description = "Missing Description";
    this.title = "Title"
}

}