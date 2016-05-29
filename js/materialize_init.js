$(document).ready(function () {
    $('.button-collapse').sideNav();
    $(".dropdown-button").dropdown({beloworigin: false, constrain_width: false});
    $('input#input_text, textarea#textarea1').characterCounter();
    $('.materialboxed').materialbox();
});
