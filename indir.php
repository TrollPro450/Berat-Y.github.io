<?php
require_once 'baglan_site.php';

// Sadece geçerli değerleri kabul et
$gecerli = ['launcher', 'texture'];
$tip = $_GET['dosya'] ?? '';

if (!in_array($tip, $gecerli)) {
    http_response_code(400);
    exit("Geçersiz istek.");
}

if ($tip === "launcher") {
    $conn->query("UPDATE indirmeler SET sayi = sayi + 1 WHERE id = 1");
    $link = "https://drive.usercontent.google.com/download?id=1AWT5MVVUDW48R1F4khR0JVNrPdoCCShg&export=download&authuser=0&confirm=t&uuid=72d017ce-ec17-4ddb-9691-1520c9be8fe4&at=AFYLz4OtF7pJUFGf1Q5QRGo3VYQG%3A1787931974272";
} elseif ($tip === "texture") {
    $conn->query("UPDATE indirmeler SET sayi = sayi + 1 WHERE id = 2");
    $link = "https://drive.usercontent.google.com/download?id=14Gp08QhpTpQHA5Namw3U4sccktHnTfxT&export=download&confirm=t";
}

header("Location: " . $link);
exit;
?>