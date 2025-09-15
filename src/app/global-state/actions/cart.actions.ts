import { createAction, props } from '@ngrx/store';

export const addToCart = createAction(
    '[Product Catalog] AddToCart',
    props<{ id: number; name: string, count: number }>()
);

export const removeFromCart = createAction(
    '[Product Catalog] RemoveFromCart',
    props<{ id: number }>()
);