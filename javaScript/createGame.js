/**
 * Created by oliverlolk on 26/11/2015.
 */
$(document).ready(function(){

    $("#createBtn").click(function(){

        var name = $("#gameName").val();
        var mapSize = $("#mapSize").val();
        var controls = $("#controls").val();

        console.log(name, mapSize, controls);

        var createGameData = {
            name: name,
            mapSize: mapSize,
            host : {
                id : $.sessionStorage.get("Id"),
                controls: controls
            }
        };

        console.log(JSON.stringify(createGameData));


        $.ajax({
            type: "POST",
            url: "http://localhost:20011/api/games/",
            data: JSON.stringify(createGameData),
            success: function (data, status, xhr) {
                console.log(data, status, xhr);
            },

            error: function (err, status, xhr) {
                console.log(err, status, xhr);
            }
            });
    });

});