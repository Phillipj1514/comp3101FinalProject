// CANVAS INITIALIZATION //
const canvas = document.getElementById('canvas');
canvas.width = 1225;
canvas.height = 500;
const ctx = canvas.getContext('2d');

// GET CONTROLS & TEXT PANEL FROM DOM
const sidePanel = document.getElementsByClassName("text-region")[0];
const playButton = document.getElementById("play-button");
const stopButton = document.getElementById("stop-button");
const backButton = document.getElementById("back-button");
const nextButton = document.getElementById("next-button");

// GET IMAGES FROM DOM
const cpuImg = document.getElementById("cpu");
const dmaImg = document.getElementById("dma");
const memoryImg = document.getElementById("memory");
const controllerImg = document.getElementById("controller");
const deviceImg = document.getElementById("device");

// ANNOTATIONS
let deviceReady = "The Device controller’s Status Register indicates that bytes are ready to be transferred.";
let dmaRequest = "A DMA Request a.k.a (DRQ) is then issued to the DMA Controller";
let holdRequest = "The DMA Controller now issues a HOLD Request (HRQ) to the CPU";
let fillBuffer = "DMA starts filling its internal buffer while awaiting the HOLD ACKNOWLEDGEMENT";
let holdAckReceived = "The DMA receives the HOLD ACKNOWLEDGEMENT from the cpu";
let cpuRequestReceived = "The CPU receives the HOLD REQUEST from the DMA";
let cpuAckSent = "CPU sends the HOLD ACKNOWLEDGEMENT to the DMA";
let memTransfer = "The DMA starts the transfer of bytes to Memory";
let bytesSent = "All bytes have been successfully sent to memory.";
let interrupt = "An interrupt to the CPU is now in order.";

// The CPU component
const cpu = {
    name: "CPU",
    x: 525,
    y: 0,
    width: 100,
    height: 70,
    inside: true,
    color: "#5cb85c"
}

// CPU TO CACHE CONNECTION
const cpu_cac = {
    x: cpu.x+(cpu.width/2)-5,
    y: cpu.y+cpu.height-8,
    w: 10,
    h: 50
}

const cache = {
    name: "Cache",
    x: cpu.x + cpu.width/4,
    y: cpu.y + cpu.height + cpu_cac.h-8,
    width: 50,
    height: cpu.height/2,
    inside: true,
    color: "#d9534f"
}

// CACHE TO MEMORY-BUS CONNECTION
const cac_mem = {
    x: cache.x+(cache.width/2)-5,
    y: cache.y+cache.height,
    w: 10,
    h: 75
}

// CPU TO MEMORY BUS
const cpuToMemoryBus = {
    name: "CPU - Memory Bus",
    x: cpu.x-cpu.width+20,
    y: cac_mem.y+cac_mem.h,
    width: 250,
    height: 20,
    inside: true,
    color: "#1bafdf"
}

// The main memory component
const memory = {
    name: "Memory",
    x: cpuToMemoryBus.x+cpuToMemoryBus.width-25,
    y: cpuToMemoryBus.y-48,
    width: cpu.width,
    height: cpu.height,
    inside: true,
    color: "#d9534f"
}

// The DMA Controller component
const dma = {
    name: "DMA Controller",
    x: cpuToMemoryBus.x-60,
    y: cpuToMemoryBus.y-20,
    width: 60,
    height: 60,
    color: "#5cb85c"
}

// PCI BUS TO DMA CONTROLLER CONNECTION
const pci_dma = {
    x: dma.x+(dma.width/2)-5,
    y: dma.y+dma.height,
    w: 10,
    h: 55
}

// THE PCI BUS
const pciBus = {
    name: "PCI Bus",
    x: 0,
    y: pci_dma.y+pci_dma.h,
    width: canvas.width,
    height: 20,
    inside: true,
    color: "#1bafdf"
}

// PCI BUS TO DEVICE CONTROLLER CONNECTION
const pci_con = {
    x: 125,
    y: pciBus.y+pciBus.height,
    w: 10,
    h: 50
}

// The Device Controller Component
// Represents a generic device controller
const controller = {
    name: "Device Controller",
    x: pci_con.x-35,
    y: pci_con.y+pci_con.h+15,
    width: 80,
    height: 10,
    inside: true,
    color: "#5cb85c"
}

// The I/O Device Component
// Represents a generic i/o device
const device = {
    name: "I/O Device",
    x: controller.x+controller.width+80,
    y: controller.y + controller.height/2,
    radius: 20,
    width: 100,
    height: 30,
    color: "#d9534f" //"#1bafdf"
}

// DEVICE CONTROLLER TO DEVICE CONNECTION
const con_dev = {
    x: controller.x+controller.width,
    y: controller.y+(controller.height/2)-5,
    w: 60,
    h: 10
}


// The starting transfer object
const instructionObj = {
    name: "Inst. obj",
    x:pci_con.x+5,
    y:pci_con.y+pci_con.h+20,
    dx:2.5,
    dy:1.2,
    newx: 0,
    newy: 0,
    state: false,
    stops: 0
}

// The starting transfer object
const dataObj = {
    name: "Data obj",
    x:pci_con.x+5,
    y:pci_con.y+pci_con.h+20,
    dx:2.3,
    dy:1.5,
    newx: 0,
    newy: 0,
    state: false,
    stops: 0
}

// The starting transfer object
const dataObj2 = {
    name: "Data obj2",
    x:pci_con.x+5,
    y:pci_con.y+pci_con.h+20,
    dx:2.3,
    dy:1.2,
    newx: 0,
    newy: 0,
    state: false,
    stops: 0
}

// The starting transfer object
const dataObj3 = {
    name: "Data obj3",
    x:pci_con.x+5,
    y:pci_con.y+pci_con.h+20,
    dx:2.5,
    dy:1.5,
    newx: 0,
    newy: 0,
    state: false,
    stops: 0
}

// FUNCTION TO DRAW A RECTANGULAR COMPONENT //
drawRect = (obj) => {
    ctx.fillStyle = obj.color;
    ctx.fillRect(obj.x,obj.y,obj.width,obj.height);
    ctx.lineWidth = 3;
    ctx.fillStyle = "black";
    ctx.font = "13px Arial";
    ctx.textAlign = "center"
    if (obj.inside == true) {
        ctx.fillText(obj.name, obj.x+(obj.width)/2, obj.y+(obj.height/2)+5);
    } else {
        ctx.fillText(obj.name, obj.x+(obj.width)/2, obj.y-10);
    }
}

// FUNCTION TO DRAW A CIRCLE
drawCircle = (obj) => {
    ctx.fillStyle = obj.color;
    ctx.beginPath();
    ctx.arc(obj.x, obj.y, obj.radius, 0, 2 * Math.PI);
    ctx.font = "13px Arial";
    ctx.textAlign = "center";
    ctx.fillText(obj.name, obj.x, obj.y-obj.height);
    ctx.fill();
}

// FUNCTION TO DRAW A SIMPLE CONNECTION TO BUS OR OTHER OBJECTS //
drawConnection = (conn) => {
    ctx.fillStyle = "gray";
    ctx.fillRect(conn.x,conn.y,conn.w,conn.h);
}

// FUNCTION FOR CONTROLLING OBJECT VELOCITY AND DIRECTION //
function transfer(obj,dist,dir) {
    
    ctx.beginPath();

    // STATEMENTS THAT MANIPULATE OBJEECT COLOR & SHAPE //
    if (obj.stops < 3 && obj.name == "Inst. obj") {
        ctx.arc(obj.x, obj.y, 8, 0, Math.PI * 2);
        ctx.fillStyle = "red";
        ctx.fill();
    } else if (obj.stops >= 3 && obj.stops < 5 && obj.name == "Inst. obj" ) {
        ctx.arc(obj.x, obj.y, 12, 0, Math.PI * 2);
        ctx.fillStyle = "#ffd700";
        ctx.fill();
    } else if (obj.stops >= 5 && obj.stops <= 7 && obj.name == "Inst. obj") {
        ctx.arc(obj.x, obj.y, 12, 0, Math.PI * 2);
        ctx.fillStyle = "green";
        ctx.fill();
    } else if (obj.name == "Data obj" || obj.name == "Data obj2" || obj.name == "Data obj3") {
        ctx.rect(obj.x-12, obj.y-12, 24,24);
        ctx.fillStyle = "black";
        ctx.fill();
    }

    // SWITCH STATEMENT TO CONTROL OBJECT DIRECTION //
    switch (dir) {
        case "r":
            if (obj.state == false) {        
                obj.newx = obj.x + dist;
                obj.state = true;
            }
            if(obj.x < obj.newx){
                obj.x += obj.dx;
            }
            // Destination reached
            if(obj.x >= obj.newx){
                obj.state = false;
                obj.stops += 1;
            }
            break;
        case "l":
            if (obj.state == false) {
                obj.newx = obj.x - dist;
                obj.state = true;
            }
            if(obj.x > obj.newx){
                obj.x -= obj.dx;
            }
            // Destination reached
            if(obj.x <= obj.newx){
                obj.state = false;
                obj.stops += 1;
            }
            break;
        case "u":
            if (obj.state == false) {
                obj.newy = obj.y - dist;
                obj.state = true;
            }
            if(obj.y > obj.newy){
                obj.y -= obj.dy;
            }
            // Destination reached
            if(obj.y <= obj.newy){
                obj.state = false;
                obj.stops += 1;
            }
            break;
        case "d":
            if (obj.state == false) {
                obj.newy = obj.y + dist;
                obj.state = true;
            }
            if(obj.y < obj.newy){
                obj.y += obj.dy;
            }
            // Destination reached
            if(obj.y >= obj.newy){
                obj.state = false;
                obj.stops += 1;
            }
            break;
        default:
            break;
    }
};

// DRAW COMPONENTS ON THE CANVAS
drawComponents = () => {
    // DRAW MAIN COMPONENTS
    ctx.drawImage(cpuImg,cpu.x, cpu.y,cpu.width,cpu.height);
    drawRect(cache);
    drawConnection(cpu_cac); // CPU to cache connection
    drawConnection(cac_mem); // Cache to Memory Bus
    drawRect(cpuToMemoryBus); 
    ctx.drawImage(dmaImg,dma.x,dma.y, dma.width,dma.height);
    drawRect(pciBus);
    ctx.drawImage(controllerImg,controller.x, controller.y-28, controller.width+2,controller.height+50);
    ctx.drawImage(deviceImg,device.x-25, device.y-23, device.width,device.height);
    drawConnection(con_dev);    
    drawConnection(pci_con); // Device Controller to PCI bus connection
    drawConnection(pci_dma); // DMA Controller to PCI Bus

    // SIDE PANEL ANNOTATION //
    if (instructionObj.stops < 3) {
        annotate(deviceReady, sidePanel);   // Annotate the side panel
        annotate(dmaRequest, sidePanel);  // Annotate the side panel
    }
    if (instructionObj.stops == 3){
        clearPanel(sidePanel);
        annotate(holdRequest,sidePanel);
        annotate(fillBuffer,sidePanel);
    }
    if (instructionObj.stops == 4){
        clearPanel(sidePanel);
        annotate(holdRequest,sidePanel);
        annotate(fillBuffer,sidePanel);
    }
    if (instructionObj.stops == 5){
        clearPanel(sidePanel);
        annotate(cpuRequestReceived,sidePanel);
        annotate(cpuAckSent,sidePanel);
    }
    if (instructionObj.stops == 6){
        clearPanel(sidePanel);
        annotate(cpuRequestReceived,sidePanel);
        annotate(cpuAckSent,sidePanel);
    }
    if (instructionObj.stops == 7){
        clearPanel(sidePanel);
        annotate(holdAckReceived,sidePanel);
        annotate(memTransfer,sidePanel);
    }
    if (dataObj3.stops == 4){
        clearPanel(sidePanel);
        annotate(bytesSent,sidePanel);
        annotate(interrupt,sidePanel);
    }
}

// FUNCTION TO CONTROL OBJECT PATHS (ROUTE) //
animate = () => {
    if (instructionObj.stops == 0) {
        transfer(instructionObj, pci_con.h+30,"u");
    } else if (instructionObj.stops == 1){
        transfer(instructionObj, pci_dma.x-pci_con.x,"r"); 
    } else if (instructionObj.stops == 2){
        transfer(instructionObj, pci_dma.h+40,"u");
    } else if (instructionObj.stops == 3){
        transfer(instructionObj, cpuToMemoryBus.width-90,"r"); // from dma to cpu-mem bus
        if (dataObj.stops == 0) {
            // Controller begins data transfer to dma
            transfer(dataObj, pci_con.h+30,"u"); 
        }  
    } else if (instructionObj.stops == 4){
        transfer(instructionObj, cac_mem.h+cpu_cac.h+70,"u");
    } else if (instructionObj.stops == 5){
        transfer(instructionObj, pci_con.h+cac_mem.h+70,"d"); // sending hold acknowledgement
    } else if (instructionObj.stops == 6){
       transfer(instructionObj, (cpuToMemoryBus.width/2)+25,"l"); // sending hold acknowledgement
    } else if (instructionObj.stops == 7){
        // DMA RECEIVES HOLD ACKNOWLEDGEMENT
        // IF DATA OBJECT ARRIVES AT DMA - BEGIN TRANSFER TO MEMORYY
        if (dataObj.stops == 3) {
            transfer(dataObj, cpuToMemoryBus.width+30,"r"); // send dataobj from dma to memory
            console.log("Block 1 successfully transferred to memory");
        }
        // IF DATA OBJECT 2 ARRIVES AT DMA and dataobj has been sent to memory
        if (dataObj2.stops == 3 && dataObj.stops == 4) {
            transfer(dataObj2, cpuToMemoryBus.width+30,"r"); // send dataobj2 from dma to memory     
            console.log("Block 2 successfully transferred to memory");
        }
        // IF DATA OBJECT 3 ARRIVES AT DMA and dataobj2 has been sent to memory
        if (dataObj3.stops == 3 && dataObj2.stops == 4) {
            transfer(dataObj3, cpuToMemoryBus.width+30,"r"); // send dataobj2 from dma to memory     
            console.log("Block 3 successfully transferred to memory");
        }
    }

    // TRANSFERS A BLOCK OF DATA
    if (dataObj.stops == 1) {
        transfer(dataObj, pci_dma.x-pci_con.x,"r"); 
        if (dataObj2.stops == 0) {
            // controller starts transfer of a second block of data to dma
            transfer(dataObj2, pci_con.h+30,"u"); 
        } 
    } else if (dataObj.stops == 2){
        transfer(dataObj, pci_dma.h+40,"u");
    } else if (dataObj.stops == 3){
        console.log("Block 1 successfully sent to dma");
    }

    // TRANSFERS A SECOND BLOCK OF DATA
    if (dataObj2.stops == 1) {
        transfer(dataObj2, pci_dma.x-pci_con.x,"r");
        if (dataObj3.stops == 0) {
            // controller starts transfer of a third block of data to dma
            transfer(dataObj3, pci_con.h+30,"u"); 
        }  
    } else if (dataObj2.stops == 2){
        transfer(dataObj2, pci_dma.h+40,"u");
    } else if (dataObj2.stops == 3){
        console.log("Block 2 successfully sent to dma");
    }

    // TRANSFERS A THIRD BLOCK OF DATA
    if (dataObj3.stops == 1) {
        transfer(dataObj3, pci_dma.x-pci_con.x,"r");
        // DATA TRANSFER 4 WOULD GO HERE 
    } else if (dataObj3.stops == 2){
        transfer(dataObj3, pci_dma.h+40,"u");
    } else if (dataObj3.stops == 3){
        console.log("Block 3 successfully sent to dma");
    }
}

// FUNCTION FOR ANNOTATING SIDE PANEL
annotate = (text, thisElement) => {
    let ptag = document.createElement("P");           // Create a <p> node
    let string = document.createTextNode(text);      // Create a text node
    ptag.appendChild(string);                       // Append the text to <p>
    thisElement.appendChild(ptag);   
}

// FUNCTION FOR REFRESHING SIDE PANEL
clearPanel = (thisElement) => {
    while (thisElement.hasChildNodes()) {  
        thisElement.removeChild(thisElement.firstChild);
    }
}

let mainStarted = false;
// THE DRIVER FUNCTION
main = () => {
    if (mainStarted == false) {
        ctx.clearRect(0,0, canvas.width, canvas.height);
        clearPanel(sidePanel);
        drawComponents();
        animate();
        requestAnimationFrame(main);
    }
    playButton.addEventListener("click", function changeStatus() {
        if (mainStarted == false) {
            mainStarted = true;
        }
    });
    stopButton.addEventListener("click", function changeStatus() {
        history.go(0);
    });
}

drawComponents(); // Draw initial components

// The play button starts the main function
playButton.addEventListener("click", main);

