// $("li").click(function(){
//     $(this).css("color", "grey");
//     $(this).css("text-decoration", "line-through");              
// });

// Check Off Specific Todos By Clicking

// $("li").click(function(){
//     //if li is gray turn it to black
//     if($(this).css("color") === "rgb(128, 128, 128)"){
//         $(this).css("color", "black");
//     }
//     //else turn it to gray
//     else {
//         $(this).css({
//             color: "gray",
//             textDecoration: "line-through"
//         });            
//     }
// });

$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
})

//Click on X to delete TODO

$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    e.stopPropagation();
})

$("input[type='text']").keypress(function(e){
    if(event.which === 13){
        //grabbing new todo text from input
        var todoText = $(this).val();
        //clears the input
        $(this).val("");
        //create new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
})

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})

