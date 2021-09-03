import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {
// interface hai PipeTransform

  transform(value: any, limit:number){
    // console.log(value)  // 1. Ye html me jiske baad pipe use ho rha hai unki stored string to usko console kra rha hai
    // return value + ' 2021'   // 2. Ye value me update krke string value add kr rha hai
    // return value.substr(0, 5)  // 3. Ye slice ki trarah work krta hai
    // return value.substr(0, 5) + '...' //4.  Combination of first and second
  //   if(value.length > 8){             // 5. length > 8 hogi to if condition apply hogi varna same value return ho jaayegi
  //     return value.substr(0, 8) + '...'
  //   }
  //   else{
  //     return value
  //   }
  // }
  if(value.length > limit){             // 6. limit html se hi ab change kiya jaa skta hai
        return value.substr(0, limit) + '...'
      }
      else{
        return value
      }
    }
}
