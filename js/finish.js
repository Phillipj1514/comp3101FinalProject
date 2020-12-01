/*
    Written by Nathaniel Bedassie
    December 1st, 2020
*/

var canvas = document.querySelector('canvas')
var narration = document.getElementById('narration')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

//Used to indicate which animation sequence to play
var playindex = 0;
//Used to indicate when to clear the canvas
var clearindex = false;

//Contains function names to reference animation frames with
var functions = [
    firstframe,
    secondframe,
    thirdframe
]

var c = canvas.getContext("2d");
var doanim = true

//USED TO DRAW CIRCUIT LINES
function build(){
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
}

//VALUES FOR ANIMATION
var data_x = 1183
var device_y = 159
var controller_y = 382
var dma_cpu_y = 650

//FIRST ANIMATION SEQUENCE
function firstframe(restart){
    if(!doanim){context=null; return;}
    requestAnimationFrame(firstframe)
    
    
    if(restart == 1){
        c.clearRect(0, 0, innerWidth, innerHeight)
        clearindex = 0;
    }
    narration.innerHTML = "<strong> Part 1</strong><br><br>The device is now transferring its pages,<em> represented by the blues shading</em>, into memory through the DMA. <br> DMA Controller transfers bytes of data from its buffer into memory while decrementing its Word Count Register "

    document.getElementById("dma").style.fillOpacity = 1;
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
    if(data_x <= 121){
        clearindex = 1;
        doanim = false;
        data_x = 1183
        device_y = 159
        controller_y = 382
    }
}

//SECOND ANIMATION FRAME
function secondframe(restart){
    if(!doanim){context=null; return;}
    requestAnimationFrame(secondframe)

    if(restart == 1){
        c.clearRect(0, 0, innerWidth, innerHeight)
        clearindex = 0;
    }
    narration.innerHTML = "<strong> Part 2</strong><br><br>When the Word Count Register value reaches zero (all data has been sent or received), the DMA Controller issues an interrupt, <em> represented by the black shading</em>, to the processor, returning control of the bus until it is again made available for another transfer to occur <em>represented by the green shading</em>.. "

    document.getElementById("dma").style.fillOpacity = 1;

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
    if(data_x > 645 && dma_cpu_y >400){
        c.beginPath()
            c.arc(data_x, 650, 4, 0, Math.PI * 2, false);
            c.strokeStyle = "#000000"
            c.stroke()

        if(data_x > 645){
            data_x -= 6;
        }
    } else if(dma_cpu_y > 400 && data_x > 620){
        c.beginPath()
        c.arc(data_x, dma_cpu_y, 4, 0, Math.PI * 2, false);
        c.strokeStyle = "#000000"
        c.stroke()
        //console.log(data_x, dma_cpu_y)

        if(dma_cpu_y > 400){
            dma_cpu_y -= 6;
            if(dma_cpu_y <= 400) {
                data_x = 620
            } 
        } 
    } else if(dma_cpu_y < 650 && data_x <= 645){
        c.beginPath()
        c.arc(data_x, dma_cpu_y, 4, 0, Math.PI * 2, false);
        c.strokeStyle = "#00ff00"
        c.stroke()
        //console.log(data_x, dma_cpu_y)
        if(dma_cpu_y < 650){
            dma_cpu_y += 6;
        }  
    } else if(dma_cpu_y >= 650 && data_x > 121){
        c.beginPath()
        c.arc(data_x, dma_cpu_y, 4, 0, Math.PI * 2, false);
        c.strokeStyle = "#00ff00"
        c.stroke()

        if(data_x > 121){
            data_x -= 6;
        }   
    }
    if(dma_cpu_y >= 650 && data_x <= 121){
        clearindex = 1;
        doanim = false;
        data_x = 121
        device_y = 159
        controller_y = 382
        dma_cpu_y = 650

    }
}

//THIRD ANIMATION FRAME
function thirdframe(restart){
    if(!doanim){context=null; return;}
    requestAnimationFrame(secondframe)

    if(restart == 1){
        c.clearRect(0, 0, innerWidth, innerHeight)
        clearindex = 0;
    }
    narration.innerHTML = "<strong> Part 3</strong><br><br>Move data from kernel buffer to user buffer and wakeup blocked process, <em>represented by the red shading</em>. The user process then continues and the driver is updated that the process was completed.";
    //console.log("thrid frame");
    document.getElementById("dma").style.fillOpacity = .04;
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
    if(dma_cpu_y >= 650 && data_x <= 620){
        c.beginPath()
        c.arc(data_x, dma_cpu_y, 4, 0, Math.PI * 2, false);
        c.strokeStyle = "#ff0000"
        c.stroke()
        //console.log(data_x, dma_cpu_y)
        if(data_x < 620){
            data_x += 6;
        }  
    } else if(dma_cpu_y >= 650 && data_x >= 620){
        c.beginPath()
        c.arc(data_x, dma_cpu_y, 4, 0, Math.PI * 2, false);
        c.strokeStyle = "#ff0000"
        c.stroke()

        if(dma_cpu_y > 400){
            dma_cpu_y -= 6;
        }   
    }
    if(dma_cpu_y <= 400 && data_x >= 620){
        clearindex = 1;
        doanim = false;
        data_x = 1183
        device_y = 159
        controller_y = 382
        dma_cpu_y = 650

    }
}

//TRANSPORT CONTROLS
var play = document.getElementById('play')
var stop = document.getElementById('stop')
var back = document.getElementById('back')
var next = document.getElementById('next')

build()

//ASSIGNING LISTENERS
play.addEventListener('click', ()=>{
    c = canvas.getContext("2d");
    doanim = true;
    functions[playindex](clearindex);
})

stop.addEventListener('click',()=>{
    doanim = false;
})

next.addEventListener('click', ()=>{
    playindex += 1;
    console.log(playindex)
    doanim = false
    data_x = 1183
    device_y = 159
    controller_y = 382
    dma_cpu_y = 650
    c.clearRect(0, 0, innerWidth, innerHeight)
    build();
})

back.addEventListener('click', ()=>{
    playindex -= 1;
    doanim = false
    data_x = 1183
    device_y = 159
    controller_y = 382
    dma_cpu_y = 650
    c.clearRect(0, 0, innerWidth, innerHeight)
    build();
})