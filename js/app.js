var imageLoader = document.getElementById('imageLoader');
    imageLoader.addEventListener('change', handleImage, false);
var canvas = document.getElementById('imageCanvas');
    canvas.width = 600;
    canvas.height = 600;
var ctx = canvas.getContext('2d');
var frame = "frame-1";


function popupResult(result) {
  var html;
  if (result.html) {
  	html = result.html;
  }
  if (result.src) {
  	html = '<img src="' + result.src + '" class="img-result" />' +
    '<div class="caption"><p>You can publish it on your timeline or instagram with this caption :)</p> <textarea class="caption-text">I support @Arkavidia Informatics and IT Festival because I am aware that IT could make big impact on the Economy of Indonesia.\n.\nSaturday, 19 November 2016\nInstitut Teknologi Bandung, Jln. Ganeca No.10\n.\narkavidia.id\nInstagram : @arkavidia\nFacebook : arkavidia\nTwitter : @arkavidia3_0\nLine : @aab5143y\n.\nArkavidia Informatics & IT Festival Through The Era of Digital Economy\n.\nOrganized by : Himpunan Mahasiswa Informatika ITB, Program Studi Teknik Informatika, dan Program studi Sistem dan Teknologi Infomasi ITB\n#Arkavidia #EraOfDigitalEconomy</textarea><a href="#" class="copy-caption">Copy caption to clipboard</a></div>' +    
    '<a href="'+ result.src +'" id="downloadlink" class="button" download="arkavidia.jpg">Download</a>' +
    '<button class="confirm button" tabindex="1">Cancel</button>';
  }
  swal({
    title: '',
    html: true,
    text: html,
    animation: 'slide-from-top',
    confirmButtonColor:	"#0EB9BC",
  });
}

/**
 * Draw arkavidia badge
 */
function drawFrame() {
  var img = new Image();
  img.src = 'images/' + frame + '.png';

  img.onload = function() {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    popupResult({
			src: document.getElementById('imageCanvas').toDataURL('image/jpeg'),
		});
  }
}


function drawProfPict(src) {
  var img = new Image();
  img.onload = function(){
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    drawFrame();
  }

  img.src = src;
}

/**
 * Load image from user
 */
function handleImage(e) {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  var reader = new FileReader();
  reader.onload = function(event) {
    $('.cr-slider').css('visibility', 'visible');
    $('.loader').remove();

    // Resize the image
    var image = new Image();
    image.onload = function (imageEvent) {

        // Resize the image
        var canvas = document.createElement('canvas'),
            max_size = 1000,// TODO : pull max size from a site config
            width = image.width,
            height = image.height;
        if (width > height) {
            if (width > max_size) {
                height *= max_size / width;
                width = max_size;
            }
        } else {
            if (height > max_size) {
                width *= max_size / height;
                height = max_size;
            }
        }
        canvas.width = width;
        canvas.height = height;
        canvas.getContext('2d').drawImage(image, 0, 0, width, height);
        var dataUrl = canvas.toDataURL('image/jpeg');
        basic.croppie('bind', {
            url: dataUrl,
        });
    }
    image.src = event.target.result;
  }

  reader.onloadstart = function(event) {
    $('.cr-viewport').append('<div class="loader"></div>');
  }
  reader.readAsDataURL(e.target.files[0]);
}


/**
 * Download image from canvas
 */
function downloadCanvas(link, canvasId, filename) {
  link.href = document.getElementById(canvasId).toDataURL('image/jpeg');
  link.download = filename;
}

$('#downloadlink').on('click', '.sweet-alert', function() {
  downloadCanvas(this, 'imageCanvas', 'arkavidia.jpg');
});


var basic = $('#demo-basic').croppie({
    viewport: {
        width: Math.min(300, window.innerWidth - 50),
        height: Math.min(300, window.innerWidth - 50)
    },
    boundary: {
      width: Math.min(300, window.innerWidth - 50),
      height: Math.min(300, window.innerWidth - 50),
    },
});


$('.basic-result').on('click', function(e) {
  e.preventDefault();
  var downloadButton = this;
	basic.croppie('result', {
		type: 'canvas',
	}).then(function (resp) {
    drawProfPict(resp);
	});
});

$('.frame-picker a').on('click', function(e) {
  e.preventDefault();
  var $this = $(this);
  
  $('.frame-picker li a').removeClass('active');

  $('.cr-boundary').removeClass(frame);
  frame = $this.data('frame');
  $('.cr-boundary').addClass(frame);
  
  $this.addClass('active');
  
});


$('body').on('click', '.copy-caption', function(event) {
  var copyTextarea = document.querySelector('.caption-text');
  copyTextarea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    alert('Text has been copied!')
  } catch (err) {
    alert('Oops, unable to copy');
  }
});