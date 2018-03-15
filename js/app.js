/* This script displays text when user
hits the 'yes' radio button. */

$("#howdareyou").hide();
$(".yes").click(function(){
    $('#howdareyou').show();
});