
var menuVisibleState = false;

$('#menu-button').click(function() {

    if(menuVisibleState === false) {

        $('#navbar-mini').css('display', 'block');
        menuVisibleState = true;
        
    } else {

        $('#navbar-mini').css('display', 'none');
        menuVisibleState = false;
        
    }

})
