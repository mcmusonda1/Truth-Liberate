function validation(){
      var name = document.getElementById("name").value;
      var phone = document.getElementById("phone").value;
      var email = document.getElementById("email").value;
      var subject = document.getElementById("subject").value;
      var message = document.getElementById("message").value;
      var error_message = document.getElementById("error_message").value;
      var text;

      error_message.style.padding = "10px";

      if(name.length <5){
        text = "Please Enter Valid Name";
        error_message.innerHTML = text;
        return false;
      }

      return false;

    }