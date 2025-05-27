<?php
require_once('connect.php'); // Replace with the path and name of your connection script

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['id'])) {
    $topicId = $_POST['id'];
    
    // Update the active status of the topic in the database
    $query = "UPDATE newtopics SET active = 0 WHERE Topic = :topicId"; // Assuming 'topics' is your table name
    $stmt = $con->prepare($query);
    $stmt->bindParam(':topicId', $topicId);
    
    if ($stmt->execute()) {
        echo "Topic activated successfully";
    } else {
        echo "Error activating topic";
    }
}
?>
