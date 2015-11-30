/**
 * Created by oliverlolk on 29/11/2015.
 */
$(document).ready(function () {

    $("#startBtn").click(function () {

        var controls = $("#gameControls").val();

        console.log(controls);


        var startGameData = {
            gameId: $.sessionStorage.get("gameId"),
            opponent: {
                controls: controls
            }
        };

        console.log(JSON.stringify(startGameData));

        $.ajax({
            type: "POST",
            url: "http://localhost:20011/api/games/start",
            data: JSON.stringify(startGameData),
            success: function (data, status, xhr) {
                console.log(data, status, xhr);



                window.location.href = "../HTML/userMenu.html";

            },
            error: function (err, status, xhr) {
                console.log(err, status, xhr);
            }
        });
    });
});