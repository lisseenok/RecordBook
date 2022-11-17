function burgerMenu(selector){
    let menu = $(selector);
    let button = menu.find('.burger_menu_button');
    let links = menu.find('.burger_menu_link');
    let overlay = menu.find('.burger_menu_overlay');

    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());

    function toggleMenu(){
        menu.toggleClass('burger_menu_active');
        if (menu.hasClass('burger_menu_active')){
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', 'visible');
        }
    }
}


burgerMenu('.burger_menu')