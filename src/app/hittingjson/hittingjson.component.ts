import { Component, OnInit,AfterViewInit } from '@angular/core';
import { ServicesComponent } from '../services/services.component';

@Component({
  selector: 'hittingjson',
  templateUrl: './hittingjson.component.html',
  styleUrls: ['./hittingjson.component.css']
})
export class HittingjsonComponent implements OnInit {
data:any;
SelectedItem:HittingjsonComponent;

  constructor(private _MyService : ServicesComponent) {
   this._MyService.GetPosts().subscribe(Posts => {this.data = Posts});

/*   if (this.data != null){
    console.log ( "this.data.productName");
   }
*/
  }
   onSelect(productName){
 //  for (let productName in this.data) {
      console.log (productName);   
    // }
   }


 // onSelect(item:HittingjsonComponent):void{
   //   this.SelectedItem=item;


     // }
   
  ngOnInit() {
  }
}
