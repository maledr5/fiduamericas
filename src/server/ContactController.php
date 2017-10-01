<?php


$request = json_decode(file_get_contents('php://input'), true);

if(valueExist($request["name"]) && valueExist($request["mail"])){

	$name = $request["name"];
	$mail = $request["mail"];

	$phone = valueExist($request["phone"]) ? $request["phone"] : "El usuario no ingresó un número telefónico.";
	$message = valueExist($request["message"]) ? $request["message"] : "El usuario no ingresó un mensaje.";
	$type = valueExist($request["type"]) ? $request["type"] : "Otro tipo de Consulta.";

	sendMail($name, $mail, $phone, $message, $type);

	$response["data"] = "Gracias por su mensaje. Se contactarán pronto con usted.";
	setHeaders(200);
	echo $response;

} else {

	$response["data"] = "Los campos Nombre y Email son requeridos.";
	setHeaders(400);
	echo $response;

}

function valueExist($value){
	if( isset($value) && !empty($value) ){
		return true;
	}
	return false;
}

function sendMail($name, $mail, $phone, $message, $type){
	$message = createMessage($name, $mail, $phone, $message, $type);
	$headers = createMailHeaders($mail);

	$to = "maledr5@gmail.com";
    $subject = "Mensaje enviado desde fiduamericas.com";
        
    mail($to, $subject, $message, $headers);
}

function createMessage($name, $mail, $phone, $message, $type){
	return 	"Mensaje enviado desde el formulario de contacto de fiduamericas.com con la siguiente información:\n" 
            . "Nombre: " . $name . "\n"
            . "Mail: " . $mail . "\n"
            . "Teléfono: " . $phone . "\n"
            . "Tipo de consulta: " . $type . "\n"
            . "Mensaje o pregunta: " . $message . "\n";
}

function createMailHeaders($mail){
	return 	"From: " . $mail . "\r\n"
            .  "Reply-To: " . $mail . "\r\n"
            .  "X-Mailer: PHP/"  .  phpversion();
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

?>