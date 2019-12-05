import { Company } from './Company';
import { User } from './User'
import { CustomMap } from './CustomMap'
const company = new Company();
console.log(company);
const user = new User();
console.log(user);

// new google.maps.Map(document.getElementById('map'),{
//     zoom: 1,
//     center:{
//         lat: 0,
//         lng: 0
//     }
// });



let custom = new CustomMap('map');
custom.addMarker(user);
custom.addMarker(company);