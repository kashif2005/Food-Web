import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/models/Carts';
import { CartItem } from '../shared/models/CartItem';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{
  cart!:Cart;
 constructor(private cartService:CartService){
  this.setCart();
 }
 
 removeFromCart(cartItem:CartItem){
  this.cartService.removeFromCart(cartItem.food.id);
  this.setCart();
 }

 changeQuantity(cartItem:CartItem, qunatityInString:string){
  const qunatity = parseInt(qunatityInString);
  this.cartService.changeQuantity(cartItem.food.id, qunatity)
  this.setCart();
 }
 ngOnInit(): void {}

 setCart(){
  this.cart = this.cartService.getCart();
}
}
