<?php
header("Content-Type: text/html");
include dirname(__FILE__) . '/AltoRouter.php';

// Neue Instanz von AltoRouter erstellen und Basepath setzen
$router = new AltoRouter();
$router->setBasePath('');

// Definition der Routen
$router->map('GET','/', 'pages/home.html', 'home');
$router->map('GET','/home', 'pages/home.html', 'home-home');
$router->map('GET','/impressum', 'pages/impressum.html', 'impressum');
$router->map('GET','/kontakt', 'pages/kontakt.html', 'kontakt');

// Header einbinden
include 'header.php';

// Aktuelle Route matchen
$match = $router->match();

// Und Output zurückgeben
if($match) {
  require $match['target'];
}
else {
  require 'pages/404.html';
}

// Footer einbinden
include 'footer.php';
?>