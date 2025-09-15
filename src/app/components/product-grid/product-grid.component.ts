import { Component, Input, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Item } from '../../models/item';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { CartState } from '../../global-state/reducers/cart.reducer';
import { addToCart, removeFromCart } from '../../global-state/actions/cart.actions';
import { CartItem } from '../../models/cart-item';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type ItemQuantity = {
  id: number
  count: number
}

@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [MatGridListModule, RouterLink, CommonModule, FormsModule],
  templateUrl: './product-grid.component.html',
  styleUrl: './product-grid.component.scss'
})
export class ProductGridComponent implements OnInit {
  @Input() items: Item[] = []
  cartItems$: Observable<CartItem[]>
  itemQuantities: ItemQuantity[] = []
  public stockMap: { [key: number]: number } = {};

  constructor(private readonly store: Store<{ cart: CartState }>) {
    this.cartItems$ = this.store.select(state => state.cart.cartItems)
  }

  ngOnInit() {
    this.itemQuantities = this.items.map(i => ({ id: i.id, count: 1 }))

    // get stock
    this.cartItems$.subscribe(cartItems => {
      this.stockMap = this.items.reduce((acc, item) => {
        const cartItem = cartItems.find(ci => ci.id === item.id);
        acc[item.id] = cartItem ? item.stock - cartItem.count : item.stock;
        return acc;
      }, {} as { [key: number]: number });
    });
  }

  public addToCart(item: Item): void {
    const itemQuantity = this.itemQuantities.find(iq => iq.id === item.id)
    if (itemQuantity) {
      this.store.dispatch(addToCart({ id: item.id, name: item.name, count: itemQuantity?.count }))
    }
  }

  public removeFromCart(id: number): void {
    this.store.dispatch(removeFromCart({ id }))
  }

  public isInCart(cartItems: CartItem[], itemId: number): boolean {
    return cartItems.some(cartItem => cartItem.id === itemId);
  }

  public updateQuantity(itemId: number, $event: Event): void {
    const inputElement = $event.target as HTMLInputElement;
    const quantity = inputElement.valueAsNumber;
    const index = this.itemQuantities.findIndex(q => q.id === itemId);
    if (index > -1) {
      this.itemQuantities[index].count = quantity; // Update existing quantity
    } else {
      this.itemQuantities.push({ id: itemId, count: quantity }); // Add new entry
    }
  }

  public getInputValue(id: number) {
    const itemQuantity = this.itemQuantities.find(iq => iq.id === id)
    if (itemQuantity) {
      return itemQuantity.count
    }
    return 1;
  }

  public getStock(id: number, total: number, cartItems: CartItem[]): number {
    const cartItem = cartItems.find(iq => iq.id === id);
    return cartItem ? total - cartItem.count : total;
  }
}
