AOS.init();

$(document).ready(function() {
	$(".loader").fadeOut("slow");
});
$('.nav-link').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1200);
    return false;
});

$('.btn').addClass("hvr-pop");
$('textarea').on('click',function(){
	$(this).text("");
});

// ===== Scroll to Top ====
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});


//service worker
if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
    .then(()=>console.log("Service worker registered"))
}