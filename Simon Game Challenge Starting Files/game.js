var buttonColours=["red","blue","green","yellow"];
var gamepattern = [];
var userclickedpattern = [];
var started = false;
var level = 0;
$(document).keypress(function(){
    if(!started){
        $("#level-title").text("level"+level);
        nextSequence();
        started=true;
  }
})
$(".btn").click(function(){
  var userchosencolor = $(this).attr("id");
    
    userclickedpattern.push(userchosencolor);
    playsound(userchosencolor);
    animatepress(userchosencolor);
    checkanswer(userclickedpattern.length-1);
});
function checkanswer(currentlevel){
    if (gamepattern[currentlevel] === userclickedpattern[currentlevel]){
        console.log("success");
    
        if (userclickedpattern.length === gamepattern.length){
        setTimeout(() => {
            nextSequence();
            
        }, 1000);
    }

}     else {
    playsound("wrong");
    $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    
}

}
function nextSequence(){
    userclickedpattern=[];
    level++;
    $("#level-title").text("level "+level);
 
    var randomnum=Math.floor(Math.random()*4);
   

    var randomchosencolor=buttonColours[randomnum];
    gamepattern.push(randomchosencolor);

    $("#" + randomchosencolor).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(randomchosencolor);


    
}
function playsound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
                   
 }

 function animatepress(currentcolor){
    $("#" + currentcolor).addClass("pressed");
    setTimeout(function(){
      $("#" + currentcolor).removeClass("pressed");

         
    },100);

    
}
function startOver(){
    level=0;
    gamepattern=[];
    started=false;
}
