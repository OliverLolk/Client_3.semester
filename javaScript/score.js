/**
 * Created by oliverlolk on 26/11/2015.
 */


$(document).ready(function() {

        $.ajax({
            type: "GET",
            url: "http://localhost:20011/api/games/open",

            success: function (data, status, xhr) {
                console.log(data);

                data.forEach(function (item) {

                    var table = '<tr><td>' + item.gameId + '</td><td>' + item.host.id + '</td><td>'
                        + item.opponent.id + '</td></tr>';

                    $('#showScores').append(table);
                });
        },
            error: function (err, status, xhr) {
                console.log(err, status, xhr);
            }

});
});