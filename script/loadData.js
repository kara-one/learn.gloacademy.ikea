import { getData } from './getData.js';

const wishList = ['idd005', 'idd008', 'idd078', 'idd045'];
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
    if (location.search) {
        const search = decodeURI(location.search);
        const prop = search.split('=')[0].substring(1);
        const value = search.split('=')[1];

        if (prop === 's') {
            getData.search(value, (data) => console.log('search: ', data));
        } else if (prop === 'wishlist') {
            getData.wishList(wishList, (data) => console.log('wishlist: ', data));
        } else if (prop === 'cat' || prop === 'subcat') {
            getData.category(prop, value, (data) => console.log('category: ', data));
        }

    }

    if (location.hash) {
        getData.item(location.hash.substring(1), (data) => console.log('hash: ', data));
    }

    if (location.pathname.includes('cart')) {
        getData.cart(cartList, (data) => console.log('cart: ', data));
    }

    getData.catalog((data) => console.log('catalog: ', data));
    getData.subCatalog('Текстиль', (data) => console.log('subCatalog: ', data));
};