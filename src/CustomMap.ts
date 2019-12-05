import { Company } from "./Company";


export interface Mappable{
    location:{
        lat:number;
        lng:number;
    };
    color:string;
    displayContent():string;
}

export class CustomMap{
    private googleMap :google.maps.Map;
    constructor(map1:string){
        this.googleMap = new google.maps.Map(document.getElementById(map1),{
            zoom: 1,
            center:{
                lat: 0,
                lng: 0
            }
        });

    }
   
    // addUserMarker(user: User):void{
    //     new google.maps.Marker({
    //         map:this.googleMap,
    //         position:{
    //             lat:user.location.lat,
    //             lng:user.location.lng
    //         }
    //     })
    // }
    // addCompanyMarker(company:Company):void{
    //     new google.maps.Marker({
    //         map:this.googleMap,
    //         position:{
    //             lat:company.location.lat,
    //             lng:company.location.lng
    //         }
    //     })
    // }
    
    addMarker(obj :Mappable){
        const marker = new google.maps.Marker({
            map:this.googleMap,
            position:{
                lat:obj.location.lat,
                lng:obj.location.lng
                }
            })
            
            marker.addListener('click',()=>{
                const info = new google.maps.InfoWindow({
                    content:obj.displayContent()
                });
                info.open(this.googleMap , marker)
            });
    }
   
   
    
    
}