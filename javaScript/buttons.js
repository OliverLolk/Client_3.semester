/**
 * Created by oliverlolk on 10/11/2015.
 */
$(document).ready(function(){

    $("#home").click(function(){
        window.location.href = "../HTML/userMenu.html";
    });

    $("#play").click(function() {
        window.location.href = "../HTML/play.html";
    });

    $("#deleteGame").click(function(){
        window.location.href = "../HTML/deleteGame.html";
    });

    $("#showHighscore").click(function() {
        window.location.href = "../HTML/showScore.html";
    });

    $("#logout").click(function(){
        window.location.replace("../HTML/login.html");
    });

    $("#createGame").click(function(){
        window.location.href = "../HTML/createGame.html";
    });

    $("#joinGame").click(function(){
        window.location.href = "../HTML/joinGame.html";
    });

});