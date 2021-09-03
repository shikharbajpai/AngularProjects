import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTerm: any): any {
    console.log(value)
    return value.filter(function(search){
      return search.skill.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    })
  }
}
// filter -- prebuild method
//  filter method -- It will return something
// indexOf() -- method tb use krte hai jn hme jaanna ho ki jo
//hmara data hai usme koi value contain ho rhi h ki nhi

//Pipe: Jb bhi koi pipe hmara data transform krta hai to jb jb vo pipe data ko transform krta hai
// tb tb angular use pipe ko execute krta hai.

// pure pipe : ye tb execute hote hai jb koi pure change detect hota hai pipe ki input value me
