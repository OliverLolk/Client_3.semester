/**
 * Created by oliverlolk on 10/11/2015.
 */
$(document).ready(function(){

    $("#newGame").click(function() {
        window.location.href = "../HTML/newGame.html";
    });

    $("#deleteGame").click(function(){
        window.location.href = "../HTML/deleteGame.html";
    });

    $("#showHighscore").click(function(){
        window.location.href = "../HTML/showHighscore.html";
    });
});