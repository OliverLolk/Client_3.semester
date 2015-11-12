/**
 * Created by oliverlolk on 10/11/2015.
 */
$(document).ready(function(){

    $("#home").click(function(){
        window.location.href = "../HTML/userMenu.html";
    });

    $("#newGame").click(function() {
        window.location.href = "../HTML/newGame.html";
    });

    $("#deleteGame").click(function(){
        window.location.href = "../HTML/deleteGame.html";
    });

    $("#showHighscore").click(function(){
        window.location.href = "../HTML/showHighscore.html";
    });

    $("#logout").click(function(){
        window.location.href = "../HTML/login.html";
    });

    $("#registerBtn").click(function(){
        window.location.href = "../HTML/register.html";
    });
});