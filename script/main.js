// day1

const btnBurger = document.querySelector('.btn-burger');
const btnClose = document.querySelector('.btn-close');
const overlay = document.querySelector('.overlay');
const catalog = document.querySelector('.catalog');
const subCatalog = document.querySelector('.subcatalog');
const subCatalogHeader = document.querySelector('.subcatalog-header');

const openMenu = () => {
    catalog.classList.add('open');
    overlay.classList.add('active');
};

const closeMenu = () => {
    catalog.classList.remove('open');
    overlay.classList.remove('active');
};

const openSubMenu = event => {
    event.preventDefault();
    const target = event.target;
    const itemList = target.closest('.catalog-list__item');

    if (itemList) {
        subCatalogHeader.innerHTML = itemList.innerHTML;
        subCatalog.classList.add('subopen');
    }
    console.log('event: ', itemList);
}

btnBurger.addEventListener('click', openMenu);
catalog.addEventListener('click', openSubMenu);

btnClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
document.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
        closeMenu();
    }
    
})