<!DOCTYPE html>
<html>
<head>
    <title>PlayStation Game Progress</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="css/style.css" />
    <!--<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.17/angular.min.js"></script>-->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="js/getgames.js"></script>
</head>
<body>
<?php
    $psn = file_get_contents('http://psnprofiles.com/iam_DADE');
?>
    <section id="progress">
        <?php print_r($psn); ?>
    </section>
</body>
</html>