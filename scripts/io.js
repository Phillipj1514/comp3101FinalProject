const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const processor = {
    name: "Processor",
    x: 200,
    y: 220,
    width: 90,
    height: 150,
    color: "gray",
    style: "fill"
}

const memory = {
    name: "Memory",
    x: 30,
    y: 450,
    width: 80,
    height: 120,
    color: "black",
    style: "stroke"
}

const dma = {
    name: "DMA",
    x: 470,
    y: 450,
    width: 120,
    height: 120,
    color: "black",
    style: "stroke"

}

const driver = {
    name: "Device Driver",
    x: processor.x,
    y: 20,
    width: 100,
    height: 70,
    color: "black",
    style: "stroke"
}

const controller = {
    name: "Device Controller",
    x: 470,
    y: processor.y,
    width: 120,
    height: 70,
    color: "black",
    style: "stroke"
}

const device = {
    name: "I/O Device",
    x: 470,
    y: driver.y,
    width: 120,
    height: 70,
    color: "black",
    style: "stroke"
}

function drawComponent(obj) {
    context.fillStyle = obj.color;
    if (obj.style == "fill") {
        context.fillRect(obj.x,obj.y,obj.width,obj.height);
    } else if (obj.style == "stroke") {
        context.strokeRect(obj.x,obj.y,obj.width,obj.height);
    }
    context.font = "13px Comic Sans MS";
    context.fillStyle = "black";
    context.textAlign = "center";
    context.fillText(obj.name, obj.x+(obj.width)/2, obj.y+(obj.height)/2);
    context.fill()
    return obj
}

/*function animate() {
    context.clearRect(0,0, canvas.width, canvas.height)
    obj = drawComponent(component);
    obj.x += obj.dx // movement 
    obj.y += obj.dy // movement
    //requestAnimationFrame(draw)
};*/

// SYSTEM BUS // Structure subject to change
context.beginPath();
context.moveTo(memory.x+memory.width, memory.y+(memory.height/2));
context.lineTo(dma.x, dma.y+(dma.height)/2);
context.lineTo(dma.x, dma.y+(dma.height/2)-20);
context.lineTo(memory.x+memory.width, memory.y+(memory.height/2)-20);
//context.closePath()
context.fill()

drawComponent(processor);
drawComponent(memory);
drawComponent(dma);
drawComponent(driver);
drawComponent(controller);
drawComponent(device);
drawComponent(bus);
