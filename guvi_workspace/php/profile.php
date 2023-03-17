<?
$name = $_POST['name'];
$email = $_POST['email'];

// Store name and email in a database
$conn = mysqli_connect($servername, $username, $password, $dbname);
$sql = "INSERT INTO users (name, email) VALUES ('$name', '$email')";
mysqli_query($conn, $sql);

// Send a response message to the user
echo "Thanks for signing up, $name!";