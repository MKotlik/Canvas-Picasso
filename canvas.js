var myCanvas = document.getElementById("picasso");
var ctx = myCanvas.getContext("2d");

myCanvas.onclick = function(e){
	ctx.fillStyle = "#ff00ff";
	ctx.fillRect(e.clientX,e.clientY,e.clientX+100,e.clientY+100);
};
