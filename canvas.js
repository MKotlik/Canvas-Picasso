var myCanvas = document.getElementById("picasso");
var ctx = myCanvas.getContext("2d");
var clear = document.getElementById("clear");

myCanvas.onmousedown = function(e){
	ctx.fillStyle = "#ff00ff";
	ctx.fillRect(e.clientX,e.clientY,50,50);
};

clear.onclick = function(){
	ctx.clearRect(0,0,400,400)
}
