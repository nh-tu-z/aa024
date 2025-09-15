import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartState } from '../../global-state/reducers/cart.reducer';
import { Observable } from 'rxjs';
import { CartItem } from '../../models/cart-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  cartItems$: Observable<CartItem[]>;

  constructor(private readonly store: Store<{ cart: CartState }>) {
    this.cartItems$ = this.store.select(state => state.cart.cartItems)
  }

  ngOnInit() {

  }
}
