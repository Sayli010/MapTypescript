import faker from 'faker';
import { Mappable } from './CustomMap'

export class Company implements Mappable{
    companyName: string;
    catchPhress:string;
    location:{
        lat:number;
        lng:number;
    };
    color:'red'
    constructor(){
        this.companyName = faker.company.companyName();
        this.catchPhress = faker.company.catchPhrase();
        this.location = {
            lat :parseFloat(faker.address.latitude()),
            lng :parseFloat(faker.address.longitude())
        }
    }
    displayContent(){
        return `<div>${this.companyName} ::::: ${this.catchPhress}</div>`
    }
}

