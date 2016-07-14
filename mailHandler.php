<?php
require 'lib/PHPmailer/class.phpmailer.php';

$vorname = filter_input(INPUT_POST, 'vorname');
$name = filter_input(INPUT_POST, 'name');
$firma = filter_input(INPUT_POST, 'firma');
$phone = filter_input(INPUT_POST, 'phone');
$fax = filter_input(INPUT_POST, 'fax');
$eMail = filter_input(INPUT_POST, 'mail');
$page = filter_input(INPUT_POST, 'page');
$textarea = filter_input(INPUT_POST, 'textarea');

$mail = new PHPMailer(true);

$empfaenger = "sascha@mick-solutions.de";

$mail->AddAddress($empfaenger, 'Solarev.de');
$mail->SetFrom($eMail, $vorname . ' ' . $name);
$mail->Subject = "Kontaktanfrage über solarev.de";
$mail->Body = $vorname . ' ' . $name . " hat folgende Nachricht hinterlassen: \n\n"
        . $textarea . "\n\n"
        . "Kontaktdaten des Absenders: \n\n"
        . "Telefon: " . $phone . "\n"
        . "Fax: " . $fax . "\n"
        . "eMail: " . $eMail . "\n"
        . "Homepage: " . $page . "\n";
 
try{
    $mail->Send();
    echo "true";
} catch(Exception $e){
    //Something went bad
    echo "false";
}

