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

$(document).ready(function () {
    var $search = $('.button-search');
    var $form = $('.search-form');
    var $buttonMenu = $('.button-hamburger');
    var $menu = $('.microsoft nav');
    var $submenuParent = $('.submenu-parent a');
    
    $search.on('click', function () {
        if ($(document).width() < 1025 && $(document).width() > 768 ) {
            if ($form.css('display') == 'flex') {
                $form.css({'display': ''});
            } else {
                $form.css({'display': 'flex'});
            }
        } if ($(document).width() < 769) {
            if ($form.css('display') == 'flex') {
                $form.css({'display': ''});
            } else {
                $form.css({'display': 'flex'});
                $menu.css({'display': ''});
            }
        }
    });

    $buttonMenu.on('click', function () {
        if ($(document).width() < 769) {
            if ($menu.css('display') == 'block') {
                $menu.animate({ width: 'toggle'},
                    250,
                    function () {
                        $menu.css({ 'display': ''});
                });
            } else {
                $menu.css({ 'display': 'block'});
            }
        }
    });

    $submenuParent.on('click', function () {
        var $submenu = $(this).siblings('.submenu');
        var $siblingsSubmenu = $(this).parent('.submenu-parent').siblings('.submenu-parent').children('.submenu');
        var siblingsSubmenu = [];

        $(this).parent('.submenu-parent').css({'backgroundColor': '#e5e5e5'});

        /*close submenu*/

        if ($submenu.css('display') == 'block') {
            $submenu.animate({ height: 'toggle'},
                250,
                function () {
                    $submenu.css({'display': ''});
                    $(this).parent('.submenu-parent').css({'backgroundColor': ''});
            })
        } else {
            $submenu.animate({ height: 'toggle'}, 250);
        }

        /*close siblingsSubmenu*/

        for (var i = 0; i < $siblingsSubmenu.length; i++) {
                siblingsSubmenu.push($siblingsSubmenu[i]);

            if (siblingsSubmenu[i].style.display == 'block') {

                $(siblingsSubmenu[i]).animate({ height: 'toggle'},
                    250,
                    function () {
                        $(siblingsSubmenu[i]).css({'display': ''});
                        $(this).parent('.submenu-parent').css({'backgroundColor': ''});
                    }
                )
            }
        }
    });
});
