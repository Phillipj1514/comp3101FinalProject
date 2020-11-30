var canvas = document.querySelector('canvas')
var narration = document.getElementById('narration')
narration.innerHTML = "Lorus Ipsum";

canvas.width = window.innerWidth
canvas.height = window.innerHeight

var c = canvas.getContext("2d");

var x = 550
function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0, 0, innerWidth, innerHeight)
    //dma
    c.fillStyle = "rgba(0, 200, 0, .5)"
    c.fillRect(550, 200, 150, 300)
    //cpu
    c.fillStyle = "rgba(200, 0, 0, .5)"
    c.fillRect(150, 150, 175, 175)

    //memory

    //bus
    c.beginPath();
    c.lineWidth = 7;
    c.moveTo(325,240)
    c.lineTo(550,240)
    c.strokeStyle = "grey"
    c.stroke();

    //message
    c.beginPath()
    c.arc(x, 240, 4, 0, Math.PI * 2, false);
    c.strokeStyle = "blue"
    c.stroke()
    if(x > 325){
        x -= 1;
    }
}

animate();