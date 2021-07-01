<?php

include "php/header.php";

?>
<div class="container mx-auto text-center">
    <?php
    $password = "e83ab5945c4b30782d89a79d634b0f36";
    $username = "Hari";
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $pword = $_POST['pword'];
        $uname = $_POST['uname'];
        if (empty($pword) || empty($uname)) {
            echo "<h1>Blank Field Not Allowed</h1>";
        } else if ((md5($pword) == $password) and ($uname == $username)) {
            session_start();
            $_SESSION['user_id'] = $username;
            header("location: admin.php");
        } else {
            echo  "<br><Br><h1>Wrong Details</h1><br><a style='color: red; font-weight: 800;' href='login.php'>Try Again...</a>";
        }
    } else {
        echo '<div class="container mx-auto text-center">
            <form method="POST" class="col-md-3 mx-auto" style="margin-top: 13%;" action="login.php">
                <i class="fas fa-user-circle"></i>
                <br><br>
                <div class="form-group">
                    <input required class="form-control fc" type="text" placeholder="Username" name="uname">
                </div>
                <div class="form-group">
                    <input required class="form-control fc" type="password" placeholder="Password" name="pword">
                </div>
                <br>
                <button class="btn button btn-outline-dark">Submit</button>
            </form>
        </div>';
    }
    ?>
</div>
<?php
include "php/footer.php";
?>