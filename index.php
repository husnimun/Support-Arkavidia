<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link href='https://fonts.googleapis.com/css?family=Fira+Sans:400,700' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" href="bower_components/croppie/croppie.css">
  <link rel="stylesheet" href="bower_components/sweetalert/dist/sweetalert.css">
  <link rel="stylesheet" href="css/app.css">
  <title>Support Arkavidia!</title>
</head>
<body>
  <h1 class="title">Support Arkavidia dengan menambahkan <br> frame Arkavidia di fotomu!</h1>

  <div class="uploader">
    <canvas id="imageCanvas" class="image-canvas"></canvas>
    <div class="profile-pic-wrap">
        <div id="demo-basic"></div>
    </div>
    <div class="download-button">
      <input type="file" name="file" id="imageLoader" class="inputfile" />
      <label for="imageLoader">Choose Photo</label>
      <a class="basic-result button">Preview</a>
    </div>
  </div>

  <div class="frame-picker">
    <h2>Choose your frame</h2>
    <ul>
      <li><a data-frame="frame-1" href="#" class="active">Frame 1</a></li>
      <li><a data-frame="frame-2" href="#">Frame 2</a></li>
    </ul>
  </div>

  <script src="bower_components/jquery/dist/jquery.js"></script>
  <script src="bower_components/croppie/croppie.js"></script>
  <script src="bower_components/sweetalert/dist/sweetalert.min.js"></script>
  <script src="js/app.js"></script>
</body>
</html>
