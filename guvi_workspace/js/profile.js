// $(document).ready(function () {
//     // Get the user data from local storage
//     var userData = JSON.parse(localStorage.getItem("userData"));
//       console.log(userData)
//       console.log(userData.username)
//     // Display the user data on the page
//     $("#name").val(userData.username);
  
//     // Set the value of the email input field
//     $("#email").val(userData.email);
//     // $("#email").val(userData.contact);
//     // $("#email").val(userData.age);
//     // ...
//   });

// // Make an AJAX request to the PHP script
// $.ajax({
//   url: "http://localhost/guvi_workspace/php/login.php",
//   dataType: "json",
//   success: function(data) {
//     // Handle the response
//     // var name = data.name;
//     var email = data.email;
//     alert(email)
//   },
//   // error: function(jqXHR, textStatus, errorThrown) {
//   //   alert(error)
//   // }
// });



// $(document).ready(function(){
//   $('#myForm').submit(function(e){
//     e.preventDefault();
//     $.ajax({
//       url: 'submit.php',
//       type: 'post',
//       data: $('#myForm').serialize(),
//       success: function(response){
//         $('#message').html(response);
//       }
//     });
//   });
// });
$(document).ready(function(){
  $('#myForm').submit(function(e){
    e.preventDefault();
    $.ajax({
      url: 'http://localhost/guvi_workspace/php/login.php',
      type: 'post',
      data: $('#myForm').serialize(),
      success: function(response){
        $('#message').html(response);
      }
    });
  });
});

// $(document).ready(function(){
//   $('#fetchButton').click(function(){
//     $.ajax({
//       url: 'http://localhost/guvi_workspace/php/login.php',
//       type: 'get',
//       dataType: 'json',
//       success: function(data){
//         $('#userInfo').html('Name: ' + data.name + '<br>Email: ' + data.email);
//       }
//     });
//   });
// });