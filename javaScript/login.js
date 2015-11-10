
/**
 * Created by oliverlolk on 09/11/2015.
 */
$(document).ready(function(){

    $("#loginBtn").click(function(){

        var username = $("#Username").val();
        var password = $("#Password").val();

        if(username == "" && password == "") {
            alert('Please remember to type both username and password');
        }
        else if(username == "Oliver" && password != "1234abcd") {
            alert('Wrong password, try again');
        }
        else if(username != "Oliver" && password == "1234abcd") {
            alert("something was wrong");
        }
        else if(username == "Oliver" && password == "1234abcd") {
            window.location.href = "../HTML/userMenu.html";
        }

    });

    //$("#registerBtn").click(function(){
        //alert('Remember to fill out anything in the formular');
        //});

});


