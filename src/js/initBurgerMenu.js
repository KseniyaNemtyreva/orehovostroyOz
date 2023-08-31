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
}