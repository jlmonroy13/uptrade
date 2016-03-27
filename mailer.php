<?php
require 'PHPMailer/PHPMailerAutoload.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET'):
	header('HTTP/1.1 403 Forbidden');
	header('Content-Type: application/json');
	echo '{"error":"No permitido"}';
	exit;
endif;

$mail = new PHPMailer;

$mail->setLanguage('es');
//$mail->SMTPDebug = 3;

$mail->isSMTP();
$mail->Host = 'mail.uptrade.cl';
$mail->SMTPAuth = true;
$mail->Username = 'uptradec';
$mail->Password = base64_decode('YnN6MjZ0MVVROQ==');
$mail->SMTPSecure = 'tls';
$mail->Port = 587;

$mail->setFrom('uptradec@uptrade.cl');
$mail->addAddress('info@infouptrade.com');

$mail->CharSet = 'UTF-8';
$mail->Subject = 'Correo desde uptrade.cl - ' . $_POST['seccion'];
$mail->Body = 'Nombre: ' . $_POST['nombre'] . "\r\n\r\n" . 'Correo: ' . $_POST['correo'] . "\r\n\r\n" . 'Telefono: ' . $_POST['tel'] . "\r\n\r\n" . 'Mensaje: ' . $_POST['mensaje'];

if(!$mail->send()):
	header('HTTP/1.1 500 Internal Server Error');
	header('Content-Type: application/json');
	echo '{"error":"' . $mail->ErrorInfo . '"}';

else:
	header('Content-Type: application/json');
	echo '{"ok":"Mensaje enviado exitosamente"}';
endif;
