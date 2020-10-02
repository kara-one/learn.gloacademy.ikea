import { getData } from './getData.js';

const cartList = [
    {
        id: 'idd012',
        count: 3
    },
    {
        id: 'idd016',
        count: 2
    },
    {
        id: 'idd072',
        count: 1
    },
];

export const loadData = () => {

    if (location.hash) {
        getData.item(location.hash.substring(1), (data) => console.log('hash: ', data));
    }

    if (location.pathname.includes('cart')) {
        getData.cart(cartList, (data) => console.log('cart: ', data));
    }

    //getData.catalog((data) => console.log('catalog: ', data));
    //getData.subCatalog('Текстиль', (data) => console.log('subCatalog: ', data));
};