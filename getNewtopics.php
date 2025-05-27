<?php
	//first connect to the database 
    require_once('connect.php');  

    //create the sql query and send it
    $query = "select * from `newtopics`";
    $result = $con->query($query);
    
    //if we get data back, display it 
    if($result != FALSE) 
    {
        $data = [];
        while ($row = $result->fetch()) {
            $data[] = [
                'ID' => $row['id'],
                'Topic' => $row['topic'],
                'Active' => $row['active'],
            ];
        }
          // Send the JSON response
          header('Content-Type: application/json');
          echo json_encode($data);
      } else {
          // Handle database query error
          echo "Error executing the query";
      }
  ?>