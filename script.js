/*
$( document ).ready( function( ) {
    $( '.tree li' ).each( function() {
        if( $( this ).children( 'ul' ).length > 0 ) {
            $( this ).addClass( 'parent' );     
        }
    });
 
    $( '.tree li.parent > a' ).click( function( ) {
        $( this ).parent().toggleClass( 'active' );
        $( this ).parent().children( 'ul' ).slideToggle( 'fast' );
    });
 
    $( '#all' ).click( function() {
 
        $( '.tree li' ).each( function() {
            $( this ).toggleClass( 'active' );
            $( this ).children( 'ul' ).slideToggle( 'fast' );
        });
    });
 
});
*/


(function ($) {
  $.fn.simplePlugin = function (options) {
    // Establish our default settings
    var settings = $.extend({
      color: "red",
      title: "some time"
    }, options);

    return this.each(function () {
      var ele = $(this);
      ele.html(settings.title);
      ele.css("color", settings.color).hide().slideDown();

    });
  };

}(jQuery));