<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $fname = $_POST["fname"];
    $email = $_POST["email"];
    $message = $_POST["message"];
  
    // Prepare the message for WhatsApp
    $whatsappMessage = "Topic: Portfolio Redirection\nName: $fname\nEmail: $email\nMessage: $message";
  
    // Encode the message for URL
    $encodedMessage = urlencode($whatsappMessage);
  
    // WhatsApp phone number (replace with your own number)
    $phoneNumber = "+2349121424608";
  
    // Generate the WhatsApp chat URL
    $whatsappURL = "https://wa.me/$phoneNumber?text=$encodedMessage";

    // Detect the user agent to determine if it's a mobile device
    $isMobile = preg_match('/\b(?:Android|iPhone|Windows Phone)\b/', $_SERVER['HTTP_USER_AGENT']);

    // redirect back to my website
    $redirectURL = 'https://ademic.rf.gd/'; // Replace with your website URL
    $delaySeconds = 3; // Number of seconds to wait before redirecting
    echo "<script>
      setTimeout(function() {
        window.location.href = '$redirectURL';
      }, $delaySeconds * 1000);
    </script>";
    
    // Redirect or open the WhatsApp app based on the device
    if ($isMobile) {
        header("Location: $whatsappURL");
    } else {
        echo "<script>window.open('$whatsappURL', '_blank');</script>";
    }
    exit();
}
?>