var canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

var c = canvas.getContext("2d");

var x = 550
function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0, 0, innerWidth, innerHeight)
    //dma
    
    //cpu
    

    //memory

    //bus
    c.beginPath();
    c.lineWidth = 7;
    c.moveTo(325,240)
    c.lineTo(550,240)
    c.strokeStyle = "#ce9417"
    c.stroke();

    //message
    c.beginPath()
    c.arc(x, 240, 4, 0, Math.PI * 2, false);
    c.strokeStyle = "#2e92e4"
    c.stroke()
    if(x > 325){
        x -= 1;
    }
}

animate();