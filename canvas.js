var myCanvas = document.getElementById("picasso");
var ctx = myCanvas.getContext("2d");
var clear = document.getElementById("clear");
var started = 0;
ctx.beginPath();
ctx.fillStyle = "#ff00ff";

/*myCanvas.onmousedown = function(e){
	ctx.fillStyle = "#ff00ff";
	ctx.fillRect(e.clientX,e.clientY,50,50);
};*/

clear.onclick = function(){
	ctx.clearRect(0,0,400,400)
}

myCanvas.onmousedown = function(e){
	if (started == 1) {
		ctx.lineTo(e.clientX, e.clientY);
	} else {
		started = 1;
	}
	ctx.moveTo(e.clientX + 15, e.clientY);
	ctx.arc(e.clientX,e.clientY,15,0,2 * Math.PI);
	ctx.moveTo(e.clientX, e.clientY);
	ctx.fill();
	ctx.stroke();
}
