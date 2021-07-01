<?php

echo '
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Admin</title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <style>
        img {
            max-width: 100%;
            height: auto;
        }

        body,
        html {
            background-color: whitesmoke;
            font-family: "Roboto" !important;
        }

        .fas {
            font-size: 6rem;
        }

        .button {
            font-weight: 800;
        }

        .button:active,
        .button:focus,
        .button:hover {
            border: none !important;
            outline: none !important;
        }

        .fc:focus {
            outline-color: none !important;
            border-color: none !important;
            outline: none !important;
            -webkit-appearance: none;
            box-shadow: none !important;
        }

        .fc {
            font-size: 0.9rem;
            font-weight: 900;
            border: 0.1px solid whitesmoke;
            border-radius: 20px;
        }

        .fc::placeholder {
            font-size: 0.9rem;
            font-weight: 900;
        }

        .opt-btn {
            border: 1.5px solid rgb(219, 219, 219);
            padding: 5px;
            cursor: pointer;
            transition: 0.3s;
            border-radius: 20px;
        }

        .opt-btn:hover {
            color: white;
            background: black;
        }

        .ac {
            color: white;
            background: black;
        }

        .form {
            margin-top: 5%;
            border: 1.5px solid rgb(228, 228, 228);
            padding: 30px 25px 30px 25px;
            border-radius: 20px;
            display: none;
        }

        .box {
            margin: 5px;
            background-color: white !important;
            padding: 20px;
            border: 1.5px solid rgb(201, 201, 201);
            border-radius: 10px;
        }

        .fa-times {
            margin-top: 10px;
            cursor: pointer;
            color: red;
            font-size: 1.5rem;
        }

        .box_con {
            margin-top: 4%;
            display: none;
        }

        p {
            margin-bottom: 0 !important;
        }
    </style>
</head>
<body>';

?>