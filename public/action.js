// jQuery that will "listen" to the html index.html
$(document).ready(function(){
  alert("Your Review has been Submitted!");
    $('form').on('submit', function(){
            
            // $("#sid").css("background-color", "#000033");
            $("#sid").css("display", "none");
            $("#sid").attr("disabled", true);
            // $("#afterSubmit").css("display", "block");
        return false;
    });
  });