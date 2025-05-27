<?php
   try{
   	$con = new PDO('mysql:host=learn-mysql.cms.waikato.ac.nz;dbname=wm83','wm83','my223571sql');
   	} catch (PDOException $e) {
   		echo "Database connection error " . $e->getMessage();
   	}
   
