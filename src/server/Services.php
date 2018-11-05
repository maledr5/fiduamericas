<?php

require 'vendor/autoload.php';
require 'GoogleApiService.php';

$request = json_decode(file_get_contents('php://input'), true);
$requestData = isset($request) ? $request : $_POST;


if( getValue("resoluciones") ) {
	returnGoogleSheetsData();
}

// SERVICES
function returnGoogleSheetsData() {
	$data = getResolutionsData();
	$response = $data;
	setHeaders(200);
	echo json_encode($response, JSON_UNESCAPED_SLASHES);
}


function getValue($value){
	global $requestData;
	if( isset($requestData[$value]) && !empty($requestData[$value]) ){
		return $requestData[$value];
	}
	return false;
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

function debug($stringToPrint) {
	file_put_contents('custom_error.log', "*************" . $stringToPrint);
}