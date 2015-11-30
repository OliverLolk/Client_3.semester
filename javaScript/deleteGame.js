/**
 * Created by oliverlolk on 29/11/2015.
 */
$(document).ready(function(){

    $.ajax({
        type: "GET",
        url: "http://localhost:20011/api/games/host/" + $.sessionStorage.get("Id"),

        success: function (data, status, xhr) {
            console.log(data, status, xhr);

            data.forEach(function (item) {

                var table = '<tr><td>' + item.gameId + '</td><td>' + item.name + '</td><td>'
                    + item.status + '</td><td>' + item.winner + '</td><td>' + item.created + '</td></tr>';

                $('#showGames').append(table);
            });
        },
        error: function (err, status, xhr) {
            console.log(err, status, xhr);
        }

    });

    $("#deleteBtn").click(function(){
       var gameId = $("#deleteGameInput").val();

        console.log(JSON.stringify(gameId));

        $.ajax({
           type: "DELETE",
            url: "http://localhost:20011/api/games/" + $.sessionStorage.get("Id"),
            data: JSON.stringify(gameId),
            success: function (data, status, xhr) {
                console.log(data, status, xhr);
            },
            error: function (err, status, xhr) {
                console.log(err, status, xhr);
            }
        });
    });
});