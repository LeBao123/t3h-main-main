$("#login-button").click(function (event) {
    var userName = document.getElementById("userName").value;
    var pwd = document.getElementById("pwd").value;
    if (userName == "admin" && pwd == "admin") {
      event.preventDefault();
      $("form").fadeOut(500);
      $(".wrapper").addClass("form-success");
      setTimeout(function () {
        location.href = "admin.html";
      }, 2000);
    }
    else if (userName == "user" && pwd == "user"){
        event.preventDefault();
        $("form").fadeOut(500);
        $(".wrapper").addClass("form-success");
        setTimeout(function () {
          location.href = "user.html";
        }, 2000);  
    }
    else {
      alert("Wrong Password");
    }
  });
  