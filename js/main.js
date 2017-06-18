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


$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return decodeURI(results[1]) || 0;
    }
}

if($.urlParam('person_count') != null) {

    $('#form-reservieren').css("display", "none");

    $('#success-div').css("display", "block");

    setTimeout(function() {

        $('#spin').css("display", "none");
        $('#message').css("display", "block");
        $('#message-title').css("display", "none");
        $('#success-title').css("display", "block");
        $('#dismiss').removeClass('disabled');
        
    }, 6000);
    
}


function sendFeedback() {

    $('#feedback-success').css('display', 'block');
    $('#give-feedback').css('display', 'none');
    
}

function sendMessage() {

    $('#kontakt-success').css('display', 'block');
    $('#send-message').css('display', 'none');
    
}
