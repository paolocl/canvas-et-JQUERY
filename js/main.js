$(document).ready(function () { //************** READY ***********
	
	
	//************************ LE CANVAS **********************
	
	
	var start = new Start();
	start.run();
	
	//************************** PETIT FONCTION ***********************

	//************************** SURVOL TEXTE **********************
	
	$('#hello').on("mouseover", function(){$('#hello+p').css({color : function(index, value){
		console.log(index);
		console.log(value);
		if(value === 'rgb(0, 0, 255)'){
			return 'red';
		}else{
			return 'blue';
		}
	}})});
	
	
	//***************** CLICK TEXTE *********************
	
	$('#hello+p').click(function(){$('#hello p').toggleClass('yahoo');});
	
	
	//*************************** SAPIN ************************
	console.log(Math.random());
	var randX = Math.random()*500;
	var randY = Math.random()*300;
	var zoom =  (zoom<1) ? zoom : Math.random()*2 ;
	console.log(zoom);
	
		
	
		var ctx = $('#slate')[0].getContext('2d');
		console.log(ctx);
		ctx.beginPath();
		ctx.moveTo((50+randX)*zoom, (50+randY)*zoom);
    ctx.lineTo((70+randX)*zoom, (70+randY)*zoom);
    ctx.lineTo((50+randX)*zoom, (70+randY)*zoom);
    ctx.lineTo((80+randX)*zoom, (90+randY)*zoom);
    ctx.lineTo((50+randX)*zoom, (90+randY)*zoom);
    ctx.lineTo((90+randX)*zoom, (110+randY)*zoom);
    ctx.lineTo((20+randX)*zoom, (110+randY)*zoom);
    ctx.lineTo((50+randX)*zoom, (90+randY)*zoom);
    ctx.lineTo((20+randX)*zoom, (90+randY)*zoom);
    ctx.lineTo((50+randX)*zoom, (70+randY)*zoom);
    ctx.lineTo((20+randX)*zoom, (70+randY)*zoom);
    ctx.lineTo((50+randX)*zoom, (50+randY)*zoom);
    ctx.lineWidth = 5;
		ctx.strokeStyle = '#246a0c';
		ctx.stroke();
		ctx.beginPath();
    ctx.lineTo((60+randX)*zoom, (110+randY)*zoom);
    ctx.lineTo((40+randX)*zoom, (110+randY)*zoom);
    ctx.lineTo((40+randX)*zoom, (130+randY)*zoom);
    ctx.lineTo((60+randX)*zoom, (130+randY)*zoom);
    ctx.lineTo((60+randX)*zoom, (110+randY)*zoom);
    ctx.lineWidth = 5;
		ctx.strokeStyle = '#4f1212';
		ctx.stroke();
		ctx.beginPath();
		ctx.arc((90+randX)*zoom, (115+randY)*zoom, (5)*zoom, 0, 2 * Math.PI, false);
		ctx.fillStyle = 'red';
		ctx.fill();
		ctx.lineWidth = 1;
		ctx.strokeStyle = '#003300';
		ctx.stroke();
		ctx.beginPath();
		ctx.arc((50+randX)*zoom, (45+randY)*zoom, (5)*zoom, 0, 2 * Math.PI, false);
		ctx.fillStyle = 'red';
		ctx.fill();
		ctx.lineWidth = 1;
		ctx.strokeStyle = '#003300';
		ctx.stroke();
		ctx.beginPath();
		ctx.arc((20+randX)*zoom, (95+randY)*zoom, (5)*zoom, 0, 2 * Math.PI, false);
		ctx.fillStyle = 'red';
		ctx.fill();
		ctx.lineWidth = 1;
		ctx.strokeStyle = '#003300';
		ctx.stroke();
	
	
	//***************FIN READY******************
	
});
