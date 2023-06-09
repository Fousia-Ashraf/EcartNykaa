import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[],filterString:string,propName:any):any {
    const result:any=[]

    if(!value||filterString==""||propName==""){
        return value
    }
    else{
      value.forEach((item:any)=>{
        if(item[propName].trim().toLowerCase().includes(filterString.trim().toLowerCase())){ 
          result.push(item)}
       
      })
      return result
    }



    return null;
  }
//transform-method to convert data
//unknown=ivide nammal arraylan apply cheyyunnath athond unklnown maty any[] kodku
}
