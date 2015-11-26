/**
 * Created by oliverlolk on 26/11/2015.
 */


$(document).ready(function() {
    $("#showHighscore").click(function(){
        $.ajax({
            type: "GET",
            url: "http://localhost:20011/api/scores/",

            success: function (data, status, xhr) {
                console.log(data, status, xhr)
            },

            error: function (err, status, xhr) {
                console.log(err, status, xhr);
            }
        })
    });
});