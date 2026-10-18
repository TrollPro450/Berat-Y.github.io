<?php
$host = "sql312.byetcluster.com";
$user = "ezyro_36347809"; 
$pass = "75a1ebe76353"; 
$db   = "ezyro_36347809_site_verileri";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Bağlantı hatası.");
}
?>