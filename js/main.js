// JavaScript & jquery © 2017 by Timo Nowak, Artur Makarenko & Till Hammer


// Wenn der Menü Button geklickt wird,
// soll das mobile Menü aufgeklappt oder
// wieder geschlossen werden

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


// Wenn der Bildschirm kleiner als 600px ist,
// soll das Logo ohne Text angezeigt werden,
// um Überscheidung mit dem Menü-Button oder
// dem rechten Bilschirmrand zu verhindern
if($(window).width() <= 600) {

    $('#logo').attr("src", "../img/logo.png");
    
}
