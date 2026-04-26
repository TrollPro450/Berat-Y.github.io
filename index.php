<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="utf-8">
    <title>Berat Y.</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#FF0000">
    <link href="Foto/favicon.ico" rel="shortcut icon" type="image/x-icon">
    <link href="vendor.css" rel="stylesheet" type="text/css">
    <link href="app.css" rel="stylesheet" type="text/css">
    <link href="stil.css" rel="stylesheet" type="text/css">
</head>
<body>
    <div class="page-wrapper page-wrapper-linkpage" style="font-family:'Maitree',sans-serif">
        <div class="profile-bkg-hero-wrapper" style="background-image: url('Foto/aaa.png');">
            <div class="slice-div slice-div-large"></div>
        </div>

        <div class="section info-card">
            <div class="section-container">
                <div class="profile-info-wrapper">
                    <div class="profile-info-top-wrapper">
                        <div class="profile-image-wrapper">
                            <img src="Foto/661521f387d279_22882002.png" class="profile-image">
                        </div>
                    </div>

                    <div class="profile-info-bottom-wrapper">
                        <h1 class="profile-name">Berat Y.</h1>
                        <p class="profile-bio">Meb Craft Launcher 1.19.0.0</p>
                        <p class="profile-bio">Meb Craft Texture Pack 3.0</p>
                    </div>

                    <div class="btn-ana-grup">
                        <?php 
                            $conn = new mysqli("sql312.byetcluster.com", "ezyro_36347809", "75a1ebe76353", "ezyro_36347809_site_verileri");
                        ?>

                        <div class="buton-sayac-wrapper">
                            <a href="indir.php?dosya=launcher" class="contact-button w-inline-block">
                                <img src="Foto/download.png" class="contact-button-image">
                                <div class="contact-button-text">Windows : Meb Craft Launcher 1.19.0.0</div>
                            </a>
                            <div class="sayac-kutusu l-kenar">
                                <?php 
                                    $res = $conn->query("SELECT sayi FROM indirmeler WHERE id = 1");
                                    $row = $res->fetch_assoc();
                                    echo ($row['sayi'] ?? '0') . " İndirme"; 
                                ?>
                            </div>
                        </div>

                        <div class="buton-sayac-wrapper">
                            <a href="indir.php?dosya=texture" class="contact-button w-inline-block">
                                <img src="Foto/download.png" class="contact-button-image">
                                <div class="contact-button-text">Windows : Meb Craft (Texture Pack) 3.0</div>
                            </a>
                            <div class="sayac-kutusu t-kenar">
                                <?php 
                                    $res2 = $conn->query("SELECT sayi FROM indirmeler WHERE id = 2");
                                    $row2 = $res2->fetch_assoc();
                                    echo ($row2['sayi'] ?? '0') . " İndirme"; 
                                ?>
                            </div>
                        </div>
                    </div>

                    <div class="by-slider-area">
                        <div class="by-slide-item"><img src="Foto/2 shots_so.png" onclick="buyut(0)"></div>
                        <div class="by-slide-item"><img src="Foto/2.png" onclick="buyut(1)"></div>
                        <div class="by-slide-item"><img src="Foto/3.png" onclick="buyut(2)"></div>
                        <div class="by-slide-item"><img src="Foto/4.png" onclick="buyut(3)"></div>
                        <div class="by-slide-item"><img src="Foto/5.png" onclick="buyut(4)"></div>
                        <button class="by-nav-btn by-prev" onclick="byDegistir(-1)">&#10094;</button>
                        <button class="by-nav-btn by-next" onclick="byDegistir(1)">&#10095;</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="section link-section">
            <div class="section-container">
                <div class="profile-link-wrapper">
                    <div class="link-item-wrapper">
                        <a href="https://discord.gg/Xf9Ste7GWa" class="link-button w-inline-block">
                            <div class="link-icon-float" style="box-shadow:0 8px 14px -4px rgba(88,101,242,0.65)">
                                <img src="Foto/discord.svg" class="link-icon-float-image">
                            </div>
                            <div class="link-block-text-wrapper">
                                <div class="link-name">Discord Sunucumuz</div>
                                <div class="link-url">discord.gg/Xf9Ste7GWa</div>
                            </div>
                        </a>
                    </div>
                    <div class="link-item-wrapper">
                        <a href="https://youtube.com/@beraty.14?si=jEy7Zk2N2oEAmLDf" class="link-button w-inline-block">
                            <div class="link-icon-float" style="box-shadow:0 8px 14px -4px rgba(230,33,23,0.65)">
                                <img src="Foto/youtube.svg" class="link-icon-float-image">
                            </div>
                            <div class="link-block-text-wrapper">
                                <div class="link-name">YouTube Kanalım</div>
                                <div class="link-url">youtube.com/@BeratY.14</div>
                            </div>
                        </a>
                        <p></p>
                        <footer>
                            <p>&copy; Copyright Telif hakkı © 2019-2026 Berat Y. Tüm hakları saklıdır.</p>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="by-modal-overlay">
    <span class="by-close-btn" onclick="kapat()">&times;</span>
    <button class="by-nav-btn by-prev" style="position:absolute; left:40px; width:60px; height:60px;" onclick="byDegistir(-1)">&#10094;</button>
    <div class="by-modal-wrapper">
        <img id="by-img-target" class="by-modal-img">
    </div>
    <button class="by-nav-btn by-next" style="position:absolute; right:40px; width:60px; height:60px;" onclick="byDegistir(1)">&#10095;</button>
    <script src="etkileşim.js"></script>
</div>
    
    <script src="script.js"></script>
    <script src="etkileşim.js"></script>
</body>
</html>
