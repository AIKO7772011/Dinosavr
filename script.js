const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

var tID; //we will use this variable to clear the setInterval()

function stopAnimate() {
	clearInterval(tID);
} //end of stopAnimate()

function animateScript() {
	var    position = 88; //start position for the image slicer
	const  interval = 100; //100 ms of interval for the setInterval()
	const  diff = 88;     //diff as a variable for position offset
	tID = setInterval ( () => { document.getElementById("dino").style.backgroundPosition = `${position}px 0px`; 
	//we use the ES6 template literal to insert the variable "position"
	if (position < 528)
	{ position = position + diff;}
	//we increment the position by 256 each time
	else
	{ position = 88; }
	//reset the position to 256px, once position exceeds 1536px
	}
	, interval ); //end of setInterval
} //end of animateScript()

document.addEventListener("click", function(event){
    jump();
});

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump")
    }
    setTimeout (function() {
        dino.classList.remove("jump")
    }, 300)
    
}


let isAlive = setInterval (function() {
   // let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    console.log(dinoTop);

    if (cactusLeft < 40 && cactusLeft > 0 && dinoTop >= 140) {
        alert("простите но, вы проиграли!!!");
        console.log(cactusLeft+"cactus");
    }

})


