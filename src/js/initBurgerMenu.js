export function burgerMenu(){
    const burgerMenuButton = document.querySelector('#header__burger-btn');
    const burgerMenuWrapper = document.querySelector('#wrapper__burger-menu');
    const burgerMenuList = document.querySelector('#block__burger-menu');
    const burgerMenuClose = document.querySelector('#burger__menu-close');

    document.addEventListener('click', (e) => {
    const onButton = e.composedPath().includes(burgerMenuButton);
    const onBurgerList = e.composedPath().includes(burgerMenuList);
    const onBurgerClose = e.composedPath().includes(burgerMenuClose);
    let open = false;

    if (burgerMenuWrapper) {
        if (onButton) {
            burgerMenuWrapper.classList.add('open');
            burgerMenuWrapper.classList.remove('close');
            burgerMenuButton.classList.add('hide');
            burgerMenuButton.classList.remove('show');
            open = true;
        } else {
            if (onBurgerList) {
                if (onBurgerClose) {
                burgerMenuWrapper.classList.remove('open');
                burgerMenuWrapper.classList.add('close');
                burgerMenuButton.classList.remove('hide');
                burgerMenuButton.classList.add('show');
                open = false;
                }
                return;
            } else {
                burgerMenuWrapper.classList.remove('open');
                burgerMenuWrapper.classList.add('close');
                burgerMenuButton.classList.remove('hide');
                burgerMenuButton.classList.add('show');
                open = false;
            }
        }
    }
    });


    const filterButton = document.querySelector('#filter-btn');
    const filterWrapper = document.querySelector('#filter-wrapper');
    const filterList = document.querySelector('#filter-list');
    const filterClose = document.querySelector('#filter-close');

    document.addEventListener('click', (e) => {
    const onButton = e.composedPath().includes(filterButton);
    const onBurgerList = e.composedPath().includes(filterList);
    const onBurgerClose = e.composedPath().includes(filterClose);
    let open = false;

    if (filterWrapper) {
        if (onButton) {
            filterWrapper.classList.add('open');
            filterWrapper.classList.remove('close');
            filterButton.classList.add('hide');
            filterButton.classList.remove('show');
            open = true;
        } else {
            if (onBurgerList) {
                if (onBurgerClose) {
                filterWrapper.classList.remove('open');
                filterWrapper.classList.add('close');
                filterButton.classList.remove('hide');
                filterButton.classList.add('show');
                open = false;
                }
                return;
            } else {
                filterWrapper.classList.remove('open');
                filterWrapper.classList.add('close');
                filterButton.classList.remove('hide');
                filterButton.classList.add('show');
                open = false;
            }
        }
    }
    });


    const searchButton = document.querySelector('#search-main__btn');
    const searchWrapper = document.querySelector('#search-main__wrap');
    const searchList = document.querySelector('#search-main__block');

    document.addEventListener('click', (e) => {
    const onButton = e.composedPath().includes(searchButton);
    const onBurgerList = e.composedPath().includes(searchList);
    let open = false;

    if (searchWrapper) {
        if (onButton) {
            searchWrapper.classList.add('open');
            searchWrapper.classList.remove('close');
            searchButton.classList.add('hide');
            searchButton.classList.remove('show');
            open = true;
        } else {
            if (onBurgerList) {
                return;
            } else {
                searchWrapper.classList.remove('open');
                searchWrapper.classList.add('close');
                searchButton.classList.remove('hide');
                searchButton.classList.add('show');
                open = false;
            }
        }
    }
    });
}