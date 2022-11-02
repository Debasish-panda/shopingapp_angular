import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import {CartService} from '../shared/cart.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public productlist:any;
  public totalItem : number = 0;
  constructor( private api:ApiService, private cartService:CartService) { }

  ngOnInit(): void {

    let userdata = this.api.getUserData().subscribe(res=>{
      this.productlist = res;

      this.productlist.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});
      })

    });
    this.cartService.getProduct()
    .subscribe(res=>{
      this.totalItem = res.length;

    })
  
  }
  addtocart(item:any){
    this.cartService.addtoCart(item);

  }

}
