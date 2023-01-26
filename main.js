function redirect_home() {
    window.location.href = "de/";
}

$(window).scroll(function () {
    if ($(window).scrollTop() >= 1) {
        $('.navbar').css('background','#191b24');
        $('.navbar_links_current').css('background-color','darkslateblue');
        $('.navbar_links_current').css('border','darkslateblue solid 10px');
        $('.navbar_links_current').css('color','white');
        $('.navbar').css('opacity','100%');
    } else {
        $('.navbar').css('background','transparent');
        $('.navbar_links_current').css('background-color','white');
        $('.navbar_links_current').css('border','white solid 10px');
        $('.navbar_links_current').css('color','black');
    }
});