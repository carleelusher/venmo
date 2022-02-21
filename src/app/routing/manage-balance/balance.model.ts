export class BalanceModel {
    img: string;
    title: string;
    description: string;
    

    constructor(img: string, title: string, description:string, order:number) {
        this.img = img;
        this.title = title;
        this.description = description;
      
    }
}