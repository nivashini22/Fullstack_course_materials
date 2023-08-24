// for(var i=0;i<5;i++){
//     document.querySelectorAll("button")[i].addEventListener("click", function() {
//         document.querySelector("h1").style.color="purple";

//     });
//     }
    
$("button").on("click",function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});


// $("input").keypress(function(event){
//     $("h1").text(event.key);
// }
// );