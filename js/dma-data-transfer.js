// The main script for the dma transfer screen. 

$(document).ready(function(){
    console.log("- simulation ready");

    //      Main Variables
    // ============================

    let data_element = $("#comp-data");
    let data_element_label = $("#comp-data-label");
    let comment_text = $("#text-explain");

    // data_element.hide();
    data_element.css({
        "left": "83.7%", 
        "top": "19rem"
    });

    let play_btn = $("#play_btn");
    let stop_btn = $("#stop_btn");
    let next_btn = $("#next_btn");
    let prev_btn = $("#prev_btn");


    let blink = 0;

    data_element.hide();

    play_btn.click(start_simulation);
    stop_btn.click(stop_simulation);
    next_btn.click(stop_simulation);
    prev_btn.click(stop_simulation);

    //      Main Functions
    // ============================

    function blink_text() {
        data_element.fadeOut(500);
        data_element.fadeIn(500);
    }

    function performAction(element, label, Actions, timetotake, delay, comments,end){
        // Blink the Data when still
        blink = setInterval(blink_text, 2000);

        // Show the comment,element and label
        element.fadeIn(10,function(){
            // set label text
            console.log("label set");
            data_element_label.text(label);

            // set comment text
            comment_text.text(comments);
        });
        
        
        // Perform the action
        element.animate(Actions,timetotake);
        // delay for a while then clear the comment and disappear
        
        element.delay(delay);
        if(end == true){
            element.fadeOut(200);
        }
        clearInterval(blink);       
    }

    function reposition(element, reposition){
        element.fadeOut(0,function(){
            if(reposition){
                console.log("reposition");
                element.css(reposition);
            }
        });
    }

    // Start and stop Functions

    function start_simulation(){
        // Plays the animation routine base on the how the
        // dma transfer works
        console.log("- simulation started");
        data_element.css({ "left": "83.7%", "top": "19rem"});
        data_element.show();

        // send the signal from the device controller to the dma
        performAction(data_element,
            "DMA request(DRQ)",
            { top: "28rem" },
            2000,
            2000,
            `Device controller issues a DMA request 
             (DRQ) to the DMA Controller.`, true);

        // Send a Hold request to the cpu
        performAction(data_element,
            "Hold Request(HRQ)",
            { left: "48.5%" },
            3000,
            500,
            `If the device controller Status Register indicates a ready state, 
            the DMA issues a Hold request to the CPU before filling its buffer.`);

        performAction(data_element,
            "Hold Request(HRQ)",
            { top: "19rem" },
            1500,
            3000,
            `If the device controller Status Register indicates a ready state, 
            the DMA issues a Hold request to the CPU before filling its buffer.`, true);

        // DMA fill its buffer with the data from the device controller
        reposition(data_element,{ "left": "83.7%", "top": "19rem"});
        performAction(data_element,
            "<blocks of data> ",
            { top: "28rem" },
            1000,
            300,
            `The DMA controller starts to fill its buffer while it 
            waits on an acknowedgement from the CPU`);

        reposition(data_element,{ "left": "83.7%", "top": "19rem"});
        performAction(data_element,
            "<blocks of data> ",
            { top: "28rem" },
            1000,
            300,
            `The DMA controller starts to fill its buffer while it 
            waits on an acknowedgement from the CPU`);

        reposition(data_element,{ "left": "83.7%", "top": "19rem"});
        performAction(data_element,
            "<blocks of data> ",
            { top: "28rem" },
            1000,
            1000,
            `The DMA controller starts to fill its buffer while it 
            waits on an acknowedgement from the CPU`);

        
        // When the bus is available the processor set the dma registers
        reposition(data_element,{ "left": "48.5%", "top": "19rem"});
        performAction(data_element,
            "Register values",
            { top: "28rem" },
            1000,
            300,
            `The CPU initializes the Start Address Register (target address), 
            Word Count Register, source address and the type of operation to be performed by the DMA Controller.
             This is programming the DMA`);
        
        performAction(data_element,
            "Register values",
            { left: "83.7%" },
            1500,
            2000,
            `The CPU initializes the Start Address Register (target address), 
            Word Count Register, source address and the type of operation to be performed by the DMA Controller.
             This is programming the DMA`, true);

        // When the bus is available and the dma programmedthe processor sends a acknowledgemnt the dma
        reposition(data_element,{ "left": "48.5%", "top": "19rem"});
        performAction(data_element,
            "Hold Acknowledgement <HLDA>",
            { top: "28rem" },
            1000,
            300,
            `The processor sends a hold acknowledgement to the DMA (HLDA), 
            to indicate that it can perform the data transfer on the bus to the memory. `);
        
        performAction(data_element,
            "Hold Acknowledgement <HLDA>",
            { left: "83.7%" },
            1500,
            1000,
            `The processor sends a hold acknowledgement to the DMA (HLDA), 
            to indicate that it can perform the data transfer on the bus to the memory`, true);

        // The DMA performs the operation (The simulation shows data been saved to the memory)
        reposition(data_element,{ "left": "83.7%", "top": "28rem"});
        performAction(data_element,
            "<Block of data>",
            { left: "13%" },
            4000,
            500,
            `The DMA now have contol over the bus along with the CPU. It then transfers the data to the memory.
            This is done by stealing cycles from the processor (cycle stealing) to the memory. Therefore, the processor works in
            parallel with the DMA transfer`);

        reposition(data_element,{ "left": "83.7%", "top": "28rem"});
        performAction(data_element,
            "<Block of data>",
            { left: "13%" },
            4000,
            2000,
            `The DMA now have contol over the bus along with the CPU. It then transfers the data to the memory.
            This is done by stealing cycles from the processor (cycle stealing) to the memory. Therefore, the processor works in
            parallel with the DMA transfer`, true);
        
        // The processor get the opportuinity to retrieve something from memory
        reposition(data_element,{ "left": "20%", "top": "28rem"});
        performAction(data_element,
            "<Block of data>",
            { left: "48.5%" },
            2000,
            400,
            `The processor was blocked while the DMA uses the bus and got a chance after the DMA took a break. 
            This could be a case of somethign that  was needed by the processor that was causing the process tp be blocked`);
        performAction(data_element,
            "<Block of data>",
            { top: "19rem" },
            1000,
            1000,
            `The processor was blocked while the DMA uses the bus and got a chance after the DMA took a break.
            This could be a case of somethign that  was needed by the processor that was causing the process tp be blocked.`, true);

        // The DMA continues its process
        reposition(data_element,{ "left": "83.7%", "top": "28rem"});
        performAction(data_element,
            "<Block of data>",
            { left: "13%" },
            3000,
            2000,
            `The DMA continues by sending its last block when the processor finished its process.`, true);

        // End this section of the simulation
        data_element.fadeOut(0,function(){
            data_element.stop(true, true);
            clearInterval(blink);
            data_element.css({
                "left": "83.7%", 
                "top": "19rem"
            });
            comment_text.text("- You can replay this simulation or you can press next to see the next stage in the process.");
        });
    }
    
    function stop_simulation(){
        // stop the animation wherever 
        // it is and return it to its starting position
        console.log("- simulation stopped");
        data_element.hide();
        data_element.stop(true, true);
        clearInterval(blink);
        data_element.css({
            "left": "83.7%", 
            "top": "19rem"
        });
        comment_text.text("- To start the simulation press the play button");
       
    }
});

