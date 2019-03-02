/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function resNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
} 

$(document).on('ready', function() {
	$(".carousel" ).slick({
        adaptiveHeight: true,        
        variableWidth: true,
        slidesToScroll: 1,
        initialSlide: 1
    });
    $(".cosplayStars" ).slick({
        adaptiveHeight: true,        
        variableWidth: true,
        slidesToScroll: 1,
        initialSlide: 1,
        centerMode: true,
        infinite: true,
    });

    $(".light").hover(function() {
        $(this).parent().addClass( "turnOn" );
      });

});


