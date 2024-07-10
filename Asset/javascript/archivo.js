

$(function(){
    $("[data-bs-toggle='tooltip']").tooltip()

    $('#enviarCorreo').click(function(){
        $('#emailAlert').removeClass('d-none')       
    })   
    $('h4').on('dblclick', function(event){
        $(event.currentTarget).addClass('text-red')       
    }) 
    $('.card-title').click(function(){
        $('.card-text').toggle()
    })
})






   
   
   
   
   
   
   
   
   
   
   
   
   
   