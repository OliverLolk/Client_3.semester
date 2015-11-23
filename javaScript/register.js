/**
 * Created by oliverlolk on 23/11/2015.
 */
$(document).ready(function(){
    $("#registerBtn").click(function(){
        window.location.href = "../HTML/register.html";
    });

    $("#registerNowBtn").click(function(){

        var firstName = $("#newFirstName").val();
        var lastName = $("#newLastName").val();
        var username = $("#newUserName").val();
        var password = $("#newPassWord").val();
        var email = $("#newEmail").val();

        console.log(firstName, lastName, username, password, email);

        var registerData = {
            firstName: firstName,
            lastName: lastName,
            username: username,
            password: password,
            email: email
        };

        console.log(JSON.stringify(registerData));

        if(firstName == "" && lastName == "" && username == "" && password == "" && email == "") {
            alert("Fill out all the fields please")
        }
        else {
            $.ajax({
                async: true,
                crossDomain: true,
                type: "POST",
                url: "http://localhost:20011/api/users/",
                data: JSON.stringify(registerData),
                success: function (data, status, xhr) {
                    console.log(data, status, xhr);
                    alert("User was created");
                },

                error: function (err, status, xhr) {
                    alert("Username or Email, already exist");
                    console.log(err, status, xhr);
                }

            });
        }
    });
});