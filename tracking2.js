var Pixel = function(r, g, b, a){
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
}

var get_row = function(index, width, height)
{
    return index / width;
}

var get_column = function(index, width, height){
    return index % width;
}

var is_valid_pixel = function(row, col, width, height)
{
    return 0<=row && row<height && 0<=col && col<width;
}

var get_index = function(row, col, width, height)
{
    return (row*width) + col;
}

var pixelate = function(arr, width, height, length){
    var output = [];
    for(var j = 0; j < height;  )
    for(var i = 0; i < width; i+= 4){
       
        var pix = new Pixel(arr[i], arr[i + 1], arr[i + 2], arr[i + 3]);
        output.push(pix);
    }
    console.log("done");
    return output;
}

window.onload = function() {
      var video = document.getElementById('video');
      var canvas = document.getElementById('canvas');
      var context = canvas.getContext('2d');
      var image = document.getElementById('smile');

    
    var left = 0;
    var top = 0;
    var width = 300;
    var height = 200; 
    context.drawImage(image, left, top, width, height);

    var frame = context.getImageData(left, top, width, height).data;
    
    var back = frame.length;
    
    var pixarray = pixelate(frame, width, height, back);
    var upshiftscale = 1/3;
    var upshift = height*upshiftscale;
    var curvature = 1/3;
    var curv = width * curvature;
    var step = upshift/curv;
    
    
    
    
    
};




      // var moutharray;

      // var faceTracker = new tracking.ObjectTracker('face');
      // var mouthTracker = new tracking.ObjectTracker('mouth');

      // faceTracker.setInitialScale(4);
      // faceTracker.setStepSize(2.2);
      // faceTracker.setEdgesDensity(0.1);

      // mouthTracker.setInitialScale(1);
      // mouthTracker.setStepSize(2.2);
      // mouthTracker.setEdgesDensity(0.08);

      // tracking.track('#video', faceTracker, { camera: true });
      // tracking.track('#video', mouthTracker, { camera: true });

      // mouthTracker.on('track', function(event) {
      //   moutharray = event;
      // });

      // faceTracker.on('track', function(event) {
      //   //context.clearRect(0, 0, canvas.width, canvas.height);

      //   event.data.forEach(function(faceRect) {
      //     moutharray.data.forEach(function(mouthRect){
      //       if(mouthRect.x > faceRect.x && mouthRect.x < (faceRect.x + faceRect.width) && mouthRect.y > faceRect.y + ((faceRect.height)*2/3) && mouthRect.y < (faceRect.y + faceRect.height)){
      //          context.clearRect(0, 0, canvas.width, canvas.height);
      //          context.drawImage(image, mouthRect.x - 8.5, mouthRect.y - 5, mouthRect.width + 20, mouthRect.height + 10);
      //       }
      //     });
      //   });
      // });
// faceTracker.on('track', function(event) {
//         context.clearRect(0, 0, canvas.width, canvas.height);

//         event.data.forEach(function(rect) {

//             context.drawImage(image, rect.x, rect.y, rect.width, rect.height);
//         });
//     });