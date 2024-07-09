const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip1"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const tooltipTriggerList1 = document.querySelectorAll('[data-bs-toggle="tooltip2"]')
const tooltipList2 = [...tooltipTriggerList1].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
 
 
$(document).ready(function() {
    $('.card-title1').click(function() {
        $('.card-text1').toggle();
    });
});

$(document).ready(function() {
    $('.card-title2').click(function() {
        $('.card-text2').toggle();
    });
});

$(document).ready(function() {
    $('.card-title3').click(function() {
        $('.card-text3').toggle();
    });
});












   
   
   
   
   
   
   
   
   
   
   
   
   
   