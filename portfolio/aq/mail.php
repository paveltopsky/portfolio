<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $name = $_POST['user_name'];
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'mail.hosting.reg.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'info@stoleshnitsaizkamnya.rf'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = '4M8w4F0b'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'TLS';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587; // TCP port to connect to / этот порт может отличаться у других провайдеров

// $mail->setFrom('info@stoleshnitsaizkamnya.rf'); // от кого будет уходить письмо?
$mail->addAddress('Absolut.quartz@gmail.com');     // Кому будет уходить письмо 
// $mail->addAddress('vakulanikita01@gmail.com');
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
$mail->addAttachment($_FILES['upload']['tmp_name'], $_FILES['upload']['name']);    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Новая заявка';
$mail->Body    = 'Имя: '.$name.'<br>Телефон: '.$phone.'<br>Примечание: '.$message;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: index.html');
}
?>