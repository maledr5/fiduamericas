<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'vendor/autoload.php';

$phpmailer = new PHPMailer(true);
// $phpmailer->SMTPDebug = 1;

$request = json_decode(file_get_contents('php://input'), true);
$requestData = isset($request) ? $request : $_POST;

if( getValue("name") && getValue("mail") ){

	$name = validateInput("name", FILTER_SANITIZE_STRING, "No se ingresó este campo");
	$mail = validateInput("mail", FILTER_SANITIZE_EMAIL, "No se ingresó este campo");

	$phone = validateInput("phone", FILTER_SANITIZE_NUMBER_FLOAT, "El usuario no ingresó un número telefónico.");
	$message = validateInput("message", FILTER_SANITIZE_STRING, "El usuario no ingresó un mensaje.");
	$type = validateInput("type", FILTER_SANITIZE_STRING, "Otro tipo de Consulta.");

	sendMail($name, $mail, $phone, $message, $type);

	// $response = testInputValidation();

	$response["data"] = "Gracias por su mensaje. Se contactarán pronto con usted.";
	setHeaders(200);
	echo json_encode($response);

} else {
	$response["data"] = "Los campos Nombre y Email son requeridos.";
	setHeaders(400);
	echo json_encode($response);
}

function sendMail($name, $mail, $phone, $message, $type){
	$message = createMessage($name, $mail, $phone, $message, $type);

	// $toList = $arrayName = array('Test User' => 'maledr5@gmail.com');
	$toList = array(
		'Info' => 'info@fiduamericas.com',
		'Paula Canaz' => 'pcanaz@fiduamericas.com',
		'Juan Francisco Andrade' => 'jfandrade@fiduamericas.com'
	);
    send($message, $toList);
}

function send($message, $toList){
	global $phpmailer;

	$phpmailer->Host       = "relay-hosting.secureserver.net";
	$phpmailer->Port       = 25;
	$phpmailer->SMTPDebug  = 0;
	$phpmailer->SMTPSecure = "none";
	$phpmailer->SMTPAuth   = false;
	$phpmailer->Username   = "";
	$phpmailer->Password   = "";

	$phpmailer->From = 'info@fiduamericas.com';
	$phpmailer->FromName= 'Formulario de contacto';
	$phpmailer->Subject = 'Mensaje enviado desde fiduamericas.com';
	$phpmailer->Body = $message;
	$phpmailer->addReplyTo('info@fiduamericas.com', 'Informacion');

	foreach ($toList as $name => $mailAddress) {
		$phpmailer->addAddress($mailAddress, $name);
	}

	$phpmailer->isHTML(true);
	$phpmailer->CharSet = 'UTF-8';
	$phpmailer->send();
}

function createMessage($name, $mail, $phone, $message, $type){
	return 	"Mensaje enviado desde el formulario de contacto de fiduamericas.com con la siguiente información:<br/>"
            . "Nombre: " . $name . "<br/>"
            . "Mail: " . $mail . "<br/>"
            . "Teléfono: " . $phone . "<br/>"
            . "Tipo de consulta: " . $type . "<br/>"
            . "Mensaje o pregunta: " . $message . "<br/>";
}

function setHeaders($statusCode){
	$httpStatus = array(
		200 => 'OK',
		400 => 'Bad Request',
		401 => 'Unauthorized',
		403 => 'Forbidden',
		404 => 'Not Found',
		405 => 'Method Not Allowed',
		408 => 'Request Timeout',
		500 => 'Internal Server Error',
		502 => 'Bad Gateway',
		503 => 'Service Unavailable',
		504 => 'Gateway Timeout'
	);

	header('Content-Type: application/json; charset=utf-8');
	header("HTTP/1.1 ". $statusCode ." ". $httpStatus[$statusCode]);
}

function validateInput($inputName, $sanitizeFilter, $errorMessage) {
	$inputValue = getValue($inputName);
	if ( !empty($inputValue) ) {
		$filteredValue = filter_var($inputValue, $sanitizeFilter);
		$value = $filteredValue ? $filteredValue : "El formato para este campo fue ingresado incorrectamente.";
		return $value;
	}
	else {
		return $errorMessage;
	}
}

function getValue($value){
	global $requestData;
	if( isset($requestData[$value]) && !empty($requestData[$value]) ){
		return $requestData[$value];
	}
	return false;
}

function testInputValidation() {
	global $name, $mail, $phone, $message, $type;
	$response["name"] = $name;
	$response["mail"] = $mail;
	$response["phone"] = $phone;
	$response["message"] = $message;
	$response["type"] = $type;
	return $response;
}

?>