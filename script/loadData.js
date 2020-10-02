import { getData } from './getData.js';

export const loadData = () => {

    if (location.pathname.includes('cart')) {
        getData.cart(cartList, (data) => console.log('cart: ', data));
    }
};