import {getData} from './getData.js';

const wishList = ['idd005', 'idd008', 'idd078', 'idd045'];
let blankListMessage = '';

const generateGoodsPage = () => {

    const mainHeader = document.querySelector('.main-header');
    const goodsList = document.querySelector('.goods-list');

    const generateCards = (data) => {
        let listHTML = '';

        // Each query result-list
        data.forEach(item => {
            listHTML += `
                <li class="goods-list__item">
					<a class="goods-item__link" href="card.html#idd001">
						<article class="goods-item">
							<div class="goods-item__img">
								<img src="${item.img[0]}"
									data-second-image="${item.img[1]}" alt="${item.name}">
							</div>
							<p class="goods-item__new">Новинка</p>
							<h3 class="goods-item__header">${item.name}</h3>
							<p class="goods-item__description">${item.description}</p>
							<p class="goods-item__price">
								<span class="goods-item__price-value">${item.price}</span>
								<span class="goods-item__currency"> ₽</span>
							</p>
							<button class="btn btn-add-card" aria-label="Добравить в корзину" data-idd="${item.id}"></button>
						</article>
					</a>
				</li>
            `;
        });

        // IF result-list is empty
        if (listHTML === '') {
            listHTML = '<li>' + blankListMessage + '</li>';
        }

        // add view
        goodsList.textContent = '';
        goodsList.insertAdjacentHTML('afterbegin', listHTML);
    };

    // Query routes
    if (location.pathname.includes('goods') && location.search) {
        const search = decodeURI(location.search);
        const prop = search.split('=')[0].substring(1);
        let value = search.split('=')[1];

        if (prop === 's') {
            if (value.includes("+")) value = value.split("+").join(" ");

            mainHeader.textContent = `Поиск: ${value}`;
            blankListMessage = 'По вашему запросу ничего не найдено!';
            getData.search(value, generateCards);
        } else if (prop === 'wishlist') {
            mainHeader.textContent = `Список желаний`;
            blankListMessage = 'Ваш список желаний пуст!';
            getData.wishList(wishList, generateCards);
        } else if (prop === 'cat' || prop === 'subcat') {
            mainHeader.textContent = value;
            blankListMessage = 'В этой категории пусто!';
            getData.category(prop, value, generateCards);
        }
    }
};

export default generateGoodsPage