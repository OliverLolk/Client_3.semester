
/**
 * Created by oliverlolk on 09/11/2015.
 */
$(document).ready(function() {

    $("#loginBtn").click(function() {

            var username = $("#Username").val();
            var password = $("#Password").val();


       console.log(username, password);

        var loginData = {
            username: username,
            password: password
        };

        console.log(JSON.stringify(loginData));


        if(username == "" && password == ""){
            alert("Fill in the login information")
        }

        else {
            $.ajax({
                //async: true,
                //crossDomain: true,
                type: "POST",
                url: "http://localhost:20011/api/login/",
                data: JSON.stringify(loginData),
                success: function (data, status, xhr) {
                    console.log(data, status, xhr);
                    alert("You are now logged in");

                    window.location.href ="../HTML/userMenu.html";
                    },

                error: function (err, status, xhr) {
                    alert("Wrong Username or Password");
                    console.log(err, status, xhr);
                }

            });

        }
    });
});








