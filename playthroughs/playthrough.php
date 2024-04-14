<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Whiskeryfrog / Playthroughs</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="icon" href="../images/whiskeryface.png" type="image/x-icon">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <style>
        .anchorgroup {
            margin-top: 20px;
        }

        .bigtext {
            text-align: center;
        }
    </style>
</head>

<body>
    <main>
        <div class="topPanel" id="topPage">
            <a href="../index"><i class="fa-solid fa-house"></i>
                <div class="smallscreen"> Home</div>
            </a>
            <a href="https://www.youtube.com/channel/UCWQhZn7Z-zg7VI_wpOLNKvA" target="_blank"><i class="fa-brands fa-youtube"></i>
                <div class="smallscreen">My YouTube Channel</div>

            </a>
            <a href="https://odysee.com/@Whiskeryfrog:5" target="_blank"><i class="fa-brands fa-odysee"></i>
                <div class="smallscreen"> My Odysee Page</div>
            </a>
            <div class="rightSide">
                <a href="#" class="mode" onclick="darkMode()"><i id="sunMoon" class="fa-solid fa-sun"></i>
                    <div class="smallscreen"> Dark Mode:</div>
                    <span class="change"> Off</span>
                </a>
                <a href="#" id="versionnumber">
                    <div>V</div>
                </a>
            </div>
        </div>
        <div class="containerMainplus">
            <div class="shaper">
                <div class="limiter" style="color: white;">
                    <span class="bigtext">PLAYTHROUGHS</span>
                </div>
                <div class=" theTop">
                    <header>
                        <div class="topPanel1">
                            <input type="text" id="searchInputwalk" placeholder="Search playthrough">
                        </div>
                    </header>
                </div>
                <div class="row">
                    <a href="pokemonleafgreennuzlocke/leafgreennuzlockeplay" class="anchorgroup col">
                        <div class=" col row containerMain">
                            <img src="../images/leafgreenbanner.png" class="bannerimage" alt="" loading="lazy">
                            <span class="bigtext" style="display: block !important;">Pokemon Leafgreen Nuzlocke (GBA)

                            </span>

                        </div>
                    </a>
                    <a href="#" class="anchorgroup col">
                        <div class=" col row containerMain">
                            <img src="../images/terrariabanner.png" class="bannerimage" alt="" loading="lazy">
                            <span class="bigtext" style="display: block !important;">Terraria Bow Run - Expert Mode (PC)
                            </span>

                        </div>
                    </a>
                </div>
                <div class="row">
                    <a href="#" class="anchorgroup col">
                        <div class=" col row containerMain pokemoncrystal">
                            <img src="../images/pokemoncrystal.png" class="bannerimage" alt="" loading="lazy">
                            <span class="bigtext" style="display: block !important;">Pokemon Crystal Nuzlocke (GBC)
                            </span>

                        </div>
                    </a>
                    <a href="#" class="anchorgroup col">
                        <div class=" col row containerMain coffeetalk">
                            <img src="../images/coffeetalk.png" class="bannerimage" alt="" loading="lazy">
                            <span class="bigtext" style="display: block !important;">Coffee Talk (PC)
                            </span>

                        </div>
                    </a>
                </div>
                <div class="row">
                    <a href="#" class="anchorgroup col">
                        <div class=" col row containerMain dinosaurking">
                            <img src="../images/dinosaurking.png" class="bannerimage" alt="" loading="lazy">
                            <span class="bigtext" style="display: block !important;">Dinosaur King (NDS)
                            </span>

                        </div>
                    </a>
                    <a href="#" class="anchorgroup col">
                        <div class=" col row containerMain coromon">
                            <img src="../images/coromonbanner.png" class="bannerimage" alt="" loading="lazy">
                            <span class="bigtext" style="display: block !important;">Coromon (PC)
                            </span>

                        </div>
                    </a>
                </div>
                <a href="#" class="anchorgroup col" id="nogame" style="display: none;">
                    <div class=" col row containerMain containerMainNoResult">
                        <span class="bigtext">No Playthrough Available
                        </span>

                    </div>
                </a>
            </div>
        </div>
    </main>
    <!--
    <a href=" #topPage" id="arrowButton" class="arrowButton">
                            <i class="fa-solid fa-arrow-up"></i>
                </a>
                -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.6.7/axios.min.js" integrity="sha512-NQfB/bDaB8kaSXF8E77JjhHG5PM6XVRxvHzkZiwl3ddWCEPBa23T76MuWSwAJdMGJnmQqM0VeY9kFszsrBEFrQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="../js/app.js"></script>
</body>

</html>