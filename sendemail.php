<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  $to = 'zahidullah.halimi14@gmail.com';
  $subject = 'New message from contact form';

  $headers = array(
    'From: ' . $name . ' <' . $email . '>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'X-Mailer: PHP/' . phpversion()
  );

  if (mail($to, $subject, $message, implode("\r\n", $headers))) {
    http_response_code(200);
    echo json_encode(array('message' => 'Message sent successfully.'));
  } else {
    http_response_code(500);
    echo json_encode(array('message' => 'An error occurred while sending the message.'));
  }
}
