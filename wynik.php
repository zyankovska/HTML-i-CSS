<!DOCTYPE html>
<html>
<script src=111.js></script>
<head>
	<link rel="stylesheet" href="styl.css">
	<meta charset="utf-8">
	<title>Strona domowa</title>
</head>

<body>
<?php
$wynik=$_GET["l1"]+$_GET["l2"]
?>
<h1><?php echo $wynik ?></h1>
<?php
 $t = date("H");
 if ($t < "10") {
 echo "Have a good morning!";
 } elseif ($t < "20") {
 echo "Have a good day!";
 } else {
 echo "Have a good night!";
 }
?>
</body>
</html>
