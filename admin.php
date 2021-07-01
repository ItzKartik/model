<?php

if(isset($_GET['error'])){
    echo "<h1>".$_GET['error']."</h1>";
}

?>
<div class="container main_con mx-auto text-center" style="display: none;">
    <br>
    <h1>Admin Panel</h1>
    <br>
    <div class="col-md-7 nav-cen text-center mx-auto">
        <div class="row">
            <div class="col-md-3">
                <h6 onclick="open_it(this, '.colors');" class="opt-btn">Colors</h6>
            </div>
            <div class="col-md-3">
                <h6 onclick="open_it(this, '.interiors');" class="opt-btn">Interior</h6>
            </div>
            <div class="col-md-3">
                <h6 onclick="open_it(this, '.exteriors');" class="opt-btn">Exterior</h6>
            </div>
            <div class="col-md-3">
                <h6 onclick="open_it(this, '.price_form');" class="opt-btn">Change Price</h6>
            </div>
        </div>
    </div>
    <hr>
    <div class="col-md-12 box_con colors">
        <div class="row color_div animate__animated animate__fadeInLeft">
        </div>
        <div class="col-md-3 text-center mx-auto animate__animated animate__fadeInUp">
            <br>
            <h6 onclick="open_it(this, '.color_form');" class="opt-btn">Add Color</h6>
        </div>
    </div>
    <div class="col-md-12 box_con interiors">
        <div class="row interior_div animate__animated animate__fadeInLeft">
        </div>
        <div class="col-md-3 text-center mx-auto animate__animated animate__fadeInUp">
            <br>
            <h6 onclick="open_it(this, '.interior_form');" class="opt-btn">Add Interior</h6>
        </div>
    </div>
    <div class="col-md-12 box_con exteriors">
        <div class="row exterior_div animate__animated animate__fadeInLeft"></div>
        <div class="col-md-3 text-center mx-auto animate__animated animate__fadeInUp">
            <br>
            <h6 onclick="open_it(this, '.exterior_form');" class="opt-btn">Add Exterior</h6>
        </div>
    </div>
</div>
<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header('Location: login.php');
    exit;
} else {
    include 'php/header.php';
    echo '
        <form action="change.php?change=price" enctype="multipart/form-data" method="POST"
            class="price_form form col-md-3 text-center mx-auto">
            <h3>Change Price</h3>
            <br>
            <div class="form-group">
                <input required class="form-control fc price_field" placeholder="Your Price (i.e. 700.00)" type="text"
                    name="price">
            </div>
            <br>
            <button class="btn button btn-outline-dark">Change</button>
        </form>
        <form action="change.php?change=texture&texture_type=exterior" enctype="multipart/form-data" method="POST"
            class="exterior_form form col-md-3 text-center mx-auto">
            <h3>Add Exterior Image</h3>
            <br>
            <div class="form-group">
                <input required class="form-control fc" type="file" name="img_file">
                <small style="color: red;">Please Select An Image To Upload.</small>
            </div>
            <br>
            <button class="btn button btn-outline-dark">Upload</button>
        </form>
        <form action="change.php?change=texture&texture_type=interior" enctype="multipart/form-data" method="POST"
            class="form interior_form col-md-3 text-center mx-auto">
            <h3>Add Interior Image</h3>
            <br>
            <div class="form-group">
                <input required class="form-control fc" type="file" name="img_file">
                <small style="color: red;">Please Select An Image To Upload.</small>
            </div>
            <br>
            <button class="btn button btn-outline-dark">Upload</button>
        </form>
        <form action="change.php?change=color" method="POST" class="form color_form col-md-3 text-center mx-auto">
            <h3>Add Color</h3>
            <br>
            <div class="form-group">
                <input required class="form-control fc" type="text" placeholder="Color Name" name="name">
            </div>
            <div class="form-group">
                <input required class="form-control fc" type="text" placeholder="HexCode (i.e. 0xffffff)"
                    name="hex_code">
            </div>
            <br>
            <button class="btn button btn-outline-dark">Submit</button>
        </form>
        </div><script src="js/main.js"></script>';
    include 'php/footer.php';
}
?>