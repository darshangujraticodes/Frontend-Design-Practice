<?php
     //ini_set('display_errors', 1);
//ini_set('display_startup_errors', 1);
//error_reporting(E_ALL);
$source = $_REQUEST['source'];

$email = $_REQUEST['email'];


if($email == "jayesh04@gmail.com" || $email == "jayesh06@gmail.com" || $email == "jayesh@gmail.com" || $email == "jay@gmail.com" || $email == "jay04@gmail.com" || $email == "jay06@gmail.com" ) {
    die;
}



session_start();
require_once 'send_leads.php';

$postData = new PostData();

if ((!isset($_COOKIE['formfilled'])) && isset($_REQUEST['mobile'])) {

    $mailsent = $postData->callback();
    setcookie('formfilled', 'yes');
} else {
    $mailsent = false;
}


?>
<!doctype html>
<html lang="en">

<head>
    <!-- Google Tag Manager -->

    <!-- End Google Tag Manager -->

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Satre Happy Nest | Thank You</title>

    <link rel="icon" href="images/favicon.png" type="image/png" sizes="16x16">
    <!-- Bootstrap CSS -->
    <!-- Latest compiled and minified bootstrap CSS -->
    <link rel="stylesheet" href="css/plugin.min.css">
    <link rel='stylesheet prefetch' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css'>


    <link rel="stylesheet" href="css/style.css">

</head>

<body>
    <?php
date_default_timezone_set('Asia/Calcutta'); 
define("ABSPATH",$_SERVER["DOCUMENT_ROOT"].$FOLDER);
?>
    <!-- Google Tag Manager (noscript) -->

    <!-- End Google Tag Manager (noscript) -->



    <header id="home">
        <nav class="navbar navbar-default" id="hide-menu">
            <div class="container pd0-m">
                <!-- Brand and toggle get grouped for better mobile display -->

                <div class="col-md-2 hidden-xs">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="index.php">
                            <img src="images/project-logo.png">
                        </a>
                    </div>
                </div>
                <div class="col-md-9 col-xs-12 pd0-m">
                    <div class="navbar-header visible-xs">
                        <button type="button" class="navbar-toggle collapsed open-menu">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="index.php">
                            <img src="images/project-logo.png">
                            <img class="visible-xs nav-logo" src="images/developer-logo-white.png">
                        </a>
                    </div>
                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="index.php" class="m-link">Home</a></li>
                            <li><a href="index.php" class="m-link">Overview</a></li>
                            <li><a href="index.php" class="m-link">Amenities</a></li>
                            <li><a href="index.php" class="m-link">Location</a></li>
                            <li><a href="index.php" class="m-link">Gallery</a></li>
                            <li><a href="index.php" class="m-link">About Satre</a></li>
                            <li><a href="index.php" class="m-link">Contact Us</a></li>
                            <!--<li><a class="nav-call" href="tel:0000000000"><i class="fa fa-phone"></i> 0000000000</a></li>-->
                        </ul>
                    </div><!-- /.navbar-collapse -->
                </div>

                <div class="col-md-1 hidden-xs">
                    <div class="navbar-header nav-logowrap">
                        <a class="navbar-brand" href="index.php">
                            <img class="nav-logo" src="images/developer-logo-white.png">
                        </a>
                    </div>
                </div>


            </div><!-- /.container-fluid -->
        </nav>
    </header>
    <!--Mobile Menu-->
    <div id="myNav" class="menu-overlay">
        <a href="javascript:void(0)" class="closebtn close-menu">&times;</a>
        <div class="menu-overlay-content">
            <a href="index.php" class="close-menu m-link"><span>Home</span></a>
            <a href="index.php" class="close-menu m-link"><span>Legacy</span></a>
            <a href="index.php" class="close-menu m-link"><span>Location</span></a>
            <a href="index.php" class="close-menu m-link"><span>Fortune City</span></a>
            <a href="index.php" class="close-menu m-link"><span>About Us</span></a>
        </div>
    </div>
    <!--Mobile Menu-->

    <img src="images/inner-img.jpg">


    <section class="sec-thankyou">
        <div class="container">

            <div class="wrap" style="padding:15px;height:auto !important;">
                <?php
            //if (!$mailsent) {
            if (!$mailsent) {
                ?>

                <span class="msgicon" aria-hidden="true"><i class="fa fa-times" aria-hidden="true"></i></span>
                <h2 class="oops">Oops!</h2>
                <h3 class="oops-subtitle" style="text-align:center;">
                    Sorry for the inconvenience! Mail could not be sent.<br />
                    Please try again after some time.
                </h3>

                <a href="index.php" style="text-decoration: none;">
                    <h2 class="go-home">
                        <span class="" aria-hidden="true">
                            <i class="fa fa-arrow-left" aria-hidden="true"></i>
                        </span> GO BACK TO HOME
                    </h2>
                </a>
                <?php
            } else {
                ?>
                <span class="msgicon" aria-hidden="true"><i class="fa fa-check" aria-hidden="true"></i></span>
                <h2 class="oops"><span>You're</span> All Set!</h2>
                <h3 class="oops-greet" style="text-align:center;">Greetings from Satre Happy Nest</h3>
                <h3 class="oops-subtitle" style="text-align:center;">
                    Thank you for your Interest.<br />
                    Our Sales Manager will get in touch with you shortly.
                </h3>
                <a href="index.php" style="text-decoration: none;">
                    <h2 class="go-home">
                        <span class="" aria-hidden="true">
                            <i class="fa fa-arrow-left" aria-hidden="true"></i>
                        </span> GO BACK TO HOME
                    </h2>
                </a>

                <?php
            }
            ?>

            </div>

        </div>
    </section>
    <footer class="sec_footer">
        <div class="container">
            <div class="footer_wrap">
                <div class="text-center">
                    <img class="qrcode" src="images/QR.jpg" alt="Runwal Codename Rare QR Code">
                </div>
                <p>MAHARERA REGISTRATION. NO: P51800054595, available on www.maharera.mahaonline.gov.in</p>
                <p>
                    Disclaimer - The plans, specifications, image and other details herein are only indicative and
                    subject to the approval of the concerned authorities. The Developer/Owner reserves the right to
                    change any or all of these in interest
                    of the development, without prior notice or obligation. Artist's impressions are used to illustrate
                    the amenities, specification, image and other details and these may be applicable to select
                    apartments only. Tolerance of +/-2%
                    is possible in the unit areas on account of design and construction variance. All brands stated are
                    subject to final decision of the project architect. This printed material does not constitute an
                    offer and/or contract of any type
                    between the Developer/Owner and the recipient. Any Purchase/Lease of this in development shall be
                    governed by the terms and conditions of the agreement for Sale/Lease entered into between the
                    parties, and no detail
                    mentioned in this printed material shall in any way govern such transaction.

                </p>
                <p>
                    Copyright © <?php echo date('Y') ?> All rights reserved
                </p>
            </div>
        </div>
    </footer>


    <!-- ============================================= -->


    <!-- Optional JavaScript -->
    <script src="js/jquery.min.js"></script>
    <!--<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>-->
    <!--Menu Link-->
    <!--<script src="assets/js/imagesloaded.pkgd.min.js"></script>
<script src="assets/js/TweenMax.min.js"></script>
<script src="assets/js/main.js"></script>-->
    <!--End Menu Link-->

    <script src="js/plugin.min.js"></script>
    <script src="js/cookie.js"></script>
    <!--<script src="js/mobilevalidate.js"></script>-->
    <script src="js/custome.js"></script>
    <script>
    $('.open-menu').click(function() {
        document.getElementById("myNav").style.right = "0";
    });

    $('.close-menu').click(function() {
        document.getElementById("myNav").style.right = "-100%";
    });
    </script>



</body>

</html>