const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// The processer component
const processor = {
    name: "Processor",
    x: 210,
    y: 220,
    width: 100,
    height: 150,
    color: "#d9534f",
    style: "fill"
}

// The main memory component
const memory = {
    name: "Memory",
    x: 30,
    y: 450,
    width: 80,
    height: 120,
    color: "#5cb85c",
    style: "fill"
}

// The DMA component
const dma = {
    name: "DMA",
    x: 470,
    y: 450,
    width: 120,
    height: 120,
    color: "#5cb85c",
    style: "fill"
}

// The Device Driver Component
// Represents a generic device driver
const driver = {
    name: "Device Driver",
    x: processor.x,
    y: 20,
    width: 100,
    height: 70,
    color: "#5bc0de",
    style: "fill"
}

// The Device Controller Component
// Represents a generic device controller
const controller = {
    name: "Device Controller",
    x: 470,
    y: processor.y,
    width: 120,
    height: 70,
    color: "#5bc0de",
    style: "fill"
}

// The I/O Device Component
// Represents a generic i/o device
const device = {
    name: "I/O Device",
    x: 470,
    y: driver.y,
    width: 120,
    height: 70,
    color: "#5bc0de",
    style: "fill"
}

// Partial bus structure leading from the processor component
const busFromProcessor = {
    name: "",
    x: processor.x+(processor.width/2)-10,
    y: processor.y+processor.height,
    width: 20,
    height: 120,
    color: "#011f4b",
    style: "fill"
}

// Partial bus structure leading from the memory component
const busFromMemory = {
    name: "",
    x: memory.x+memory.width,
    y: memory.y+(memory.height/2)-20,
    width: 150,
    height: 50,
    color: busFromProcessor.color,
    style: "fill"
}

// Partial bus structure leading from the DMA component
const busFromDma = {
    name: "",
    x: busFromMemory.x+busFromMemory.width,
    y: busFromMemory.y,
    width: 210,
    height: busFromMemory.height,
    color: busFromMemory.color,
    style: "fill"
}

// Function to draw a component
function drawComponent(obj) {
    context.fillStyle = obj.color;
    if (obj.style == "fill") {
        context.fillRect(obj.x,obj.y,obj.width,obj.height);
    } else if (obj.style == "stroke") {
        context.strokeRect(obj.x,obj.y,obj.width,obj.height);
    }
    context.lineWidth = 3;
    context.fillStyle = "black";
    context.font = "13px Comic Sans MS";
    context.textAlign = "center";
    context.fillText(obj.name, obj.x+(obj.width)/2, obj.y+(obj.height)/2);
    context.fill()
    return obj
}

// Function to draw a vertical double-headed arrow at pos(x,y) and size(scale)
function verticalArrow(x,y,scale) {
    context.beginPath();
    context.moveTo(x,y);
    context.lineTo(x-scale,y+(scale*2));
    context.lineTo(x-(scale*2/5),y+(scale*2));
    context.lineTo(x-(scale*2/5),y+(scale*6));
    context.lineTo(x-scale,y+(scale*6));
    context.lineTo(x,y+(scale*8));
    context.lineTo(x+scale,y+(scale*6));
    context.lineTo(x+(scale*2/5),y+(scale*6));
    context.lineTo(x+(scale*2/5),y+(scale*2));
    context.lineTo(x+scale,y+(scale*2));
    context.fill();
}

// Function to draw a horizontal double-headed arrow at pos(x,y) and size(scale)
function horizontalArrow(x,y,scale) {
    context.beginPath();
    context.moveTo(x,y);
    context.lineTo(x-scale,y+(scale*2));
    context.lineTo(x,y+(scale*4));
    context.lineTo(x,y+(scale*3));
    context.lineTo(x+(scale*4),y+(scale*3));
    context.lineTo(x+(scale*4),y+(scale*4));
    context.lineTo(x+(scale*5),y+(scale*2));
    context.lineTo(x+(scale*4),y);
    context.lineTo(x+(scale*4),y+scale);
    context.lineTo(x,y+scale);
    context.fill();
}

// Function to draw a diagonal double-headed arrow
function diagonalArrow() {
    context.beginPath();
    context.moveTo(315,88);
    context.lineTo(348,70);
    context.lineTo(340,100);
    context.lineTo(448,205);
    context.lineTo(455,170);
    context.lineTo(465,235);
    context.lineTo(435,260);
    context.lineTo(442,230);
    context.lineTo(335,125);
    context.lineTo(327,155);
    context.fill();
}

// MAIN METHOD
main = () => {
    drawComponent(processor);
    drawComponent(memory);
    drawComponent(dma);
    drawComponent(driver);
    drawComponent(controller);
    drawComponent(device);
    drawComponent(busFromProcessor);
    drawComponent(busFromMemory);
    drawComponent(busFromDma);
    verticalArrow(processor.x+(processor.width/2)-3,driver.y+driver.height+10,14);
    verticalArrow(controller.x+(controller.width/2)-3,device.y+device.height+10,14);
    verticalArrow(dma.x+(dma.width/2)-3,controller.y+controller.height+10,17);
    diagonalArrow();
}

main();

// Function to animate an object
/*function animate() {
    context.clearRect(0,0, canvas.width, canvas.height)
    obj = someObject();
    obj.x += obj.dx // movement 
    obj.y += obj.dy // movement
    //requestAnimationFrame(animate)
};*/