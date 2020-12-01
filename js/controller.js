var canvas = document.querySelector('canvas')


canvas.width = window.innerWidth
canvas.height = window.innerHeight
var c = canvas.getContext("2d");

var a=true; 

function build(){
//cpu to memory
    c.beginPath();
    c.lineWidth = 7;
    c.moveTo(618,150)
    c.lineTo(618,269)
    c.strokeStyle = "#ce9417"
    c.stroke();

    c.beginPath();
    c.lineWidth = 7;
    c.moveTo(642,150)
    c.lineTo(642,269)
    c.strokeStyle = "#ce9417"
    c.stroke();

    //cpu to device 
    c.beginPath();
    c.lineWidth = 7;
    c.moveTo(697,347)
    c.lineTo(1185,347)
    c.strokeStyle = "#ce9417"
    c.stroke();


}

var x = 1050               //smaller value
function animate(){
    requestAnimationFrame(animate)
    build();
    c.clearRect(0, 0, innerWidth, innerHeight)
    
    c.beginPath();
    c.lineWidth = 7;
    c.moveTo(220,270)// moves the starting point 
    c.lineTo(1050,270)// represents end points
    c.strokeStyle = "#ce9417"
    c.stroke();

    
    c.beginPath()
    c.arc(x, 270, 4, 0, Math.PI * 2, false);
    c.strokeStyle = "#2e92e4"
    c.stroke()
    if(x > 220){ // makes it move sir  //left to right larger value ,less than sign 
        x -= 1; // minus makes it go far left
    }
}
build();
animate();

