<?php
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    // Validate inputs
    if (empty($name) || empty($phone) || empty($email) || empty($message)) {
        echo json_encode(["success" => false, "message" => "All fields are required!"]);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["success" => false, "message" => "Invalid email format!"]);
        exit;
    }

    if (!preg_match('/^\d{10}$/', $phone)) {
        echo json_encode(["success" => false, "message" => "Invalid phone number!"]);
        exit;
    }

    // Prepare data for API
    $data = array(
        'name' => $name,
        'phone_number' => $phone,
        'email' => $email,
        'description' => $message
    );

    $ch = curl_init('https://api.capriolesportstech.com/api/contactus');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));

    $response = curl_exec($ch);
    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);

    if (curl_errno($ch)) {
        echo json_encode(["success" => false, "message" => "cURL error occurred: " . curl_error($ch)]);
    } elseif ($http_code == 200) {
        echo json_encode(["success" => true, "message" => "Your message has been sent successfully!"]);
    } else {
        echo json_encode(["success" => false, "message" => "Failed to send message. HTTP Code: $http_code. Response: $response"]);
    }

    // added test
    var_dump($response);

    curl_close($ch);
} else {
    echo json_encode(["success" => false, "message" => "Invalid request method"]);
}
?>
