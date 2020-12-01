var canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

var c = canvas.getContext("2d");

var data_x = 1183
var device_y = 159
var controller_y = 382
//var address_y = 690


function animate(){
    requestAnimationFrame(animate)
    //c.clearRect(0, 0, innerWidth, innerHeight)
    
    //cpu to os
    c.beginPath();
    c.lineWidth = 7;
    c.moveTo(137,347)
    c.lineTo(566,347)
    c.strokeStyle = "#ce9417"
    c.stroke();

    //cpu to Device driver
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

    //cpu to Memory and Dma
    c.beginPath();
    c.lineWidth = 7;
    c.moveTo(642,400)
    c.lineTo(642,650)
    c.lineTo(121, 650)
    c.strokeStyle = "#ce9417"
    c.stroke();

    c.beginPath();
    c.lineWidth = 7;
    c.moveTo(620,400)
    c.lineTo(620,650)
    c.lineTo(1183.5, 650)
    c.strokeStyle = "#ce9417"
    c.stroke();

    c.beginPath();
    c.lineWidth = 7;
    c.moveTo(1183.5 ,690)
    c.lineTo(121, 690)
    c.strokeStyle = "#ce9417"
    c.stroke();

    //cpu to device controller
    c.beginPath();
    c.lineWidth = 7;
    c.moveTo(697,347)
    c.lineTo(1185,347)
    c.strokeStyle = "#ce9417"
    c.stroke();

    //device controller to device
    c.beginPath();
    c.lineWidth = 7;
    c.moveTo(1216,289)
    c.lineTo(1216,159)
    c.strokeStyle = "#ce9417"
    c.stroke();

    c.beginPath();
    c.lineWidth = 7;
    c.moveTo(1234,289)
    c.lineTo(1234,159)
    c.strokeStyle = "#ce9417"
    c.stroke();

    //controller to dma
    c.beginPath();
    c.lineWidth = 7;
    c.moveTo(1216,382)
    c.lineTo(1216,583)
    c.strokeStyle = "#ce9417"
    c.stroke();
    

    //message
    if(device_y < 289){
        c.beginPath()
        c.arc(1216, device_y, 4, 0, Math.PI * 2, false);
        c.strokeStyle = "#2e92e4"
        c.stroke()

        c.beginPath()
        c.arc(1234, device_y, 4, 0, Math.PI * 2, false);
        c.strokeStyle = "#2e92e4"
        c.stroke()

        if(device_y < 289){
            device_y += 2
        }
    } else if(controller_y < 583){

        c.beginPath()
        c.arc(1216, controller_y, 4, 0, Math.PI * 2, false);
        c.strokeStyle = "#2e92e4"
        c.stroke() 

        if(controller_y < 583){
            controller_y += 2
        }

    } else if(data_x <= 1183){

        c.beginPath()
        c.arc(data_x, 650, 4, 0, Math.PI * 2, false);
        c.strokeStyle = "#2e92e4"
        c.stroke()

        c.beginPath()
        c.arc(data_x, 690, 4, 0, Math.PI * 2, false);
        c.strokeStyle = "#2e92e4"
        c.stroke()

        if(data_x > 121){
            data_x -= 6;
        }
    }
}

// build();
animate();