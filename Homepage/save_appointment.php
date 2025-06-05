<?php
$servername = "localhost";
$username = "root";  // Default XAMPP username
$password = "";  // Default XAMPP password is empty
$database = "hospital_db";  // Change to your actual database name

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$name = $_POST['name'];
$age = $_POST['age'];
$gender = $_POST['gender'];
$phone = $_POST['phone'];
$appointment_date = $_POST['date'];
$appointment_time = $_POST['time'];
$procedure_name = $_POST['procedure_name'];  // Changed from `procedure`
$department = $_POST['department'];

// Prepare SQL statement
$sql = "INSERT INTO appointments (name, age, gender, phone, appointment_date, appointment_time, procedure_name, department)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("sissssss", $name, $age, $gender, $phone, $appointment_date, $appointment_time, $procedure_name, $department);

if ($stmt->execute()) {
    header("Location: index.html?success=1");
        exit();

} else {
    header("Location: appointment.html?error=1");
    exit();
}

// Close connection
$stmt->close();
$conn->close();
?>
