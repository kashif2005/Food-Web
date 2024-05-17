import { Injectable } from '@angular/core';
import { CartItem } from 'src/app/shared/models/CartItem';
import { Cart } from 'src/app/shared/models/Carts';
import { Food } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {

private cart:Cart = new Cart();
 
   addToCart (food:Food):void{
    let cartItem = this.cart.items.find(item => item.food.id == food.id);
    if(cartItem){
      this.changeQuantity(food.id, cartItem.qunatity +1);
        return;
    }
    this.cart.items.push(new CartItem(food));
   }
  removeFromCart(foodId:number): void{
    this.cart.items =
    this.cart.items.filter(item => item.food.id != foodId)
  }
  changeQuantity(foodId:number, qunatity:number){
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if(!cartItem) return;
    cartItem.qunatity = qunatity;
  }
  getCart():Cart{
    return this.cart;
  }
}
