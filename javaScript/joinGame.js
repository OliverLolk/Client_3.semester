/**
 * Created by oliverlolk on 29/11/2015.
 */
$(document).ready(function() {

    $.ajax({
        type: "GET",
        url: "http://localhost:20011/api/games/open",

        success: function (data, status, xhr) {
            console.log(data);

            data.forEach(function (item) {

                var table = '<tr><td>' + item.gameId + '</td><td>' + item.host.id + '</td><td>'
                    + item.name + '</td><td>' + item.mapSize + '</td><td>'
                    + item.created + '</td></tr>';

                $('#joinGame').append(table);
            });
        },
        error: function (err, status, xhr) {
            console.log(err, status, xhr);
        }

    });

    $("#joinBtn").click(function () {

        var game = $("#gameId").val();

        console.log(gameId);

        var joinGameData = {
            gameId: game,
            opponent: {
                id : $.sessionStorage.get("Id")
            }
        };

        console.log(JSON.stringify((joinGameData)));

        $.ajax({
            type: "POST",
            url: "http://localhost:20011/api/games/join",
            data: JSON.stringify(joinGameData),
            success:function(data, status, xhr) {
                console.log(data, status, xhr);
                alert("You have successfully joined the game");
                $.sessionStorage.set("gameId", game);

                window.location.href ="../HTML/startGame.html";
            },
            error: function (err, status, xhr) {
                console.log(err, status, xhr);
            }
        });
    });

});
