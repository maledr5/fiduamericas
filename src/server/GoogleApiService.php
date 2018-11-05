<?php
require __DIR__ . '/vendor/autoload.php';

// if (php_sapi_name() != 'cli') {
//     throw new Exception('This application must be run on the command line.');
// }

$spreadsheetId = '1fnM_M5j2aZgIy8d7F61ONACZp8jaNRhNxtmWDiQyGeQ';
$range = 'Resoluciones!A:C';
$service;

/**
 * Returns an authorized API client.
 * @return Google_Client the authorized client object
 */
function getClient()
{
    $client = new Google_Client();
    $client->setApplicationName('Fiduamericas Resoluciones');
    $client->setScopes(Google_Service_Sheets::SPREADSHEETS_READONLY);
    $client->setAuthConfig('credentials.json');
    $client->setAccessType('offline');
    $client->setPrompt('select_account consent');

    // Load previously authorized token from a file, if it exists.
    $tokenPath = 'token.json';
    if (file_exists($tokenPath)) {
        $accessToken = json_decode(file_get_contents($tokenPath), true);
        $client->setAccessToken($accessToken);
    }

    // If there is no previous token or it's expired.
    if ($client->isAccessTokenExpired()) {
        // Refresh the token if possible, else fetch a new one.
        if ($client->getRefreshToken()) {
            $client->fetchAccessTokenWithRefreshToken($client->getRefreshToken());
        } else {
            // Request authorization from the user.
            $authUrl = $client->createAuthUrl();
            printf("Open the following link in your browser:\n%s\n", $authUrl);
            print 'Enter verification code: ';
            $authCode = trim(fgets(STDIN));

            // Exchange authorization code for an access token.
            $accessToken = $client->fetchAccessTokenWithAuthCode($authCode);
            $client->setAccessToken($accessToken);

            // Check to see if there was an error.
            if (array_key_exists('error', $accessToken)) {
                throw new Exception(join(', ', $accessToken));
            }
        }
        // Save the token to a file.
        if (!file_exists(dirname($tokenPath))) {
            mkdir(dirname($tokenPath), 0700, true);
        }
        file_put_contents($tokenPath, json_encode($client->getAccessToken()));
    }
    return $client;
}

// Get the API client and construct the service object.
function setUpGoogleApi() {
    global $service;
    $client = getClient();
    $service = new Google_Service_Sheets($client);
}

function getResolutionsData() {
	global $service, $spreadsheetId, $range;

    setUpGoogleApi();

    if( isset($service) ) {
    	$googleResponse = $service->spreadsheets_values->get($spreadsheetId, $range);
    	$sheetsData = removeHeadersFromSheetsData($googleResponse->getValues());

    	return getFoldersAndFilesForResponse($sheetsData);
    }

    return [];
}

function removeHeadersFromSheetsData($array) {
    array_splice($array, 0, 1);
    return $array;
}

function getFoldersAndFilesForResponse($sheetsData) {
    if (!isset($sheetsData) || !is_array($sheetsData)) { return []; }

    $dataObject = [];
    foreach ($sheetsData as $row) {
        $folderName = $row[0];
        $file = Array(
            "fileName" => $row[1],
            "fileURL" => $row[2]
        );
        if(!array_key_exists($folderName, $dataObject)) {
            $dataObject[$folderName] = [];
        }
        array_push($dataObject[$folderName], $file);
    }
    return $dataObject;
}