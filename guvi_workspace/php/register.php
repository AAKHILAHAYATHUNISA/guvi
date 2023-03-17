<?php
    // Establish database connection
    $conn = mysqli_connect('localhost:3307', 'root', '', 'guvi');
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    if (isset($_POST['username']) && isset($_POST['email']) && isset($_POST['password'])) {
        // Get form data
        $name = $conn->real_escape_string($_POST['username']);
        $email = $conn->real_escape_string($_POST['email']);
        $password = $conn->real_escape_string($_POST['password']);

        // Prepare and execute insert statement
        $stmt = mysqli_prepare($conn, "INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
        mysqli_stmt_bind_param($stmt, "sss", $name, $email, $password);
        if (mysqli_stmt_execute($stmt)) {
            echo "User registered successfully!";
            header('Location: http://localhost/GUVI_WORKSPACE/login.html');
            exit();
        } else {
            echo "Error: " . mysqli_error($conn);
        }

        // Close statement and connection
        mysqli_stmt_close($stmt);
    }

    // Close connection
    mysqli_close($conn);
?>
