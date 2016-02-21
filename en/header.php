<?php
if ($_SERVER['REQUEST_URI'] == "/") {
    header('Location: http://arfwm.org/en/index.php');
    die();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title><?php echo $title; ?></title>
    <link rel="icon" href="../images/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" href="../css/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script src="../js/main.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <div class="container" id="content">
                <ul class="nav nav-justified" id="navigation">
                    <li class="active"><a href="./index.php">Home</a></li>
                    <li class="dropdown">
                        <a href="./getting-help.php" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Getting Help <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="./getting-help.php">Getting Help</a></li>
                            <li><a href="./clinics.php">Clinics</a></li>
                            <li><a href="./masshealth.php">MassHealth and Health Safety Net</a></li>
                        </ul>
                    </li>
                    <li><a href="./contact.php">Contact Us</a></li>
                    <li><a href="./about.php">About Us</a></li>
                    <li><a href="./donate.php">Donate</a></li>
                    <li><a href="./volunteer.php">Volunteer</a></li>
                </ul>
        <img class="img-responsive" src="../images/sail-women-2x4-350.jpg">
