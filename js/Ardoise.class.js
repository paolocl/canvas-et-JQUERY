
	var Ardoise = function(){
		
		this.dessin = $('#slate');
		this.dessinContexte = $('#slate')[0].getContext('2d');
		this.pen = null;
		this.onOff = null;
		this.coords={posX:0,posY:0};
		this.tailleEcrase = 10;
	}
	
	
	//COORDONNEE
	Ardoise.prototype.getCursorLocation = function(event){
	this.dessincoord = this.dessin[0].getBoundingClientRect();
	var posX=event.pageX-this.dessincoord.left- window.pageXOffset;
	var posY=event.pageY-this.dessincoord.top- window.pageYOffset;
	return {posX:posX,posY:posY};
}

	Ardoise.prototype.dessiner = function(){
		this.dessin.on('mousedown', (function(event){
			this.dessinContexte.beginPath();//On démarre un nouveau tracé
			this.dessinContexte.lineWidth = this.pen.getSize();
			this.dessinContexte.strokeStyle = this.pen.getColor();

			this.dessin.on('mouseup mouseout', (function(){
				this.dessin.off('mousemove');
			}).bind(this))

			this.dessin.on('mousemove', (function(event){
			var coords = this.getCursorLocation(event);
				if(this.onOff === 1){
					this.dessinContexte.lineTo(coords.posX, coords.posY);
					this.dessinContexte.stroke();//On trace seulement les lignes.
				}else if(this.onOff === 0){
					this.dessinContexte.clearRect(coords.posX, coords.posY, this.tailleEcrase, this.tailleEcrase);//ON EFFACE
				}

			}).bind(this))

		}).bind(this));
		
	}
	
	
	Ardoise.prototype.delete = function(){
		this.dessinContexte.clearRect(0, 0, this.dessin[0].width, this.dessin[0].height);
	}	