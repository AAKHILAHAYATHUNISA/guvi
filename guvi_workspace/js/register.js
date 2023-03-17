$(document).ready(function () {
  $("#signup-form").submit(function (e) {
    e.preventDefault();

    var username = $("input[name='username']").val();
    var email = $("input[name='email']").val();
    var password = $("input[name='password']").val();
    alert(username);
    $.ajax({
      url: "php/register.php",
      method: "POST",
      data: {
        username: username,
        email: email,
        password: password,
      },
      success: function (data) {
        alert(data);
        $("#signup-form")[0].reset();
      },
    });
  });
});