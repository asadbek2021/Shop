import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order',
  pure: false
})
export class OrderPipe implements PipeTransform {

  transform(value: any[], key: string, isAsc: boolean, ...args: unknown[]): any[] {
    let increaseFunc = (a:{[key:string]:string},b:{[key:string]:string})=>{
      if ( a[key]>b[key] ){
       return 1;
      }
      if ( b[key]>a[key] ){
       return -1;
      }
      else{
        return 0;
      }
    }
    let deccreaseFunc = (a:{[key:string]:string},b:{[key:string]:string})=>{
      if (a[key]>b[key]){
       return 1;
      }
      if (b[key]>a[key]){
       return -1;
      }
      else{
        return 0;
      }
    }
    return isAsc ? value.slice().sort(increaseFunc) : value.slice().sort(deccreaseFunc);
  }

}
