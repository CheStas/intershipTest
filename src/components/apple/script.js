$(document).ready(function () {
    $submenuParent = $('.apple .submenu').parent('li');

    $submenuParent.on('click', function () {
        var $submenu = $(this).children('.apple .submenu');
        $title = $(this).children('h2');
        $title.toggleClass('rotate');

        if ($(document).width() < 769) {
            if ($submenu.css('display') == 'block') {
                $submenu.css({ 'display': ''});
                $title.css({ 'color': '', 'fontWeight': ''});
            } else {
                $submenu.animate({ height: 'toggle'}, 250);
                $title.css({ 'color': '#333', 'fontWeight': 600});
            }
        }
    });
});
