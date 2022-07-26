$( window ).resize(function() {
    if($(window).width() <=768) {
        $('#show').toggleClass(function() {
           if ( $( this ).is( ".col-12" ) ) {
               console.log("class already there good to go");
           } else {
              $( this ).removeClass("col-5");
              $( this ).addClass("col-12");
           }
        })
    }else{
        $( '#show' ).removeClass("col-12");
        $( '#show' ).addClass("col-5");
    }
});



