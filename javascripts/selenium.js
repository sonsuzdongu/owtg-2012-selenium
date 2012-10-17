$(function () {

    var validateEmail = function (email) { 
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    var stringEndsWith = function (str, suffix) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    } 

    $("#owgt").submit(function (e) {
        e.preventDefault();
        var email = $("#emailField").val();

        var $messages = $("#messages").html('').removeClass("error").removeClass("success").hide();
    
        var errorMsg;
        if (!email) {
            errorMsg = "Lütfen bir e-posta adresi girin";
        }
        else if (!validateEmail(email)) {
            errorMsg = "Lütfen geçerli bir e-posta adresi girin";
        }
        else if (!stringEndsWith(email, "@sonsuzdongu.com")) {
            errorMsg = "İzin verilmiyor";
        }

        if(errorMsg) {
            $messages.addClass("error").append(errorMsg).show();
        }
        else {
            $messages.addClass("success").append("E-posta adresiniz başarıyla kaydedildi").show();
        }


    });
});
