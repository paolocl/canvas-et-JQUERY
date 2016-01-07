var Pen = function(){
	this.color = '';
	this.size = 2;
}

//********** CONFIG COULEUR PEN ******************

Pen.prototype.getColor = function(){
	return this.color;
}
Pen.prototype.setColor = function(newColor){
	this.color = newColor;
}


//********** CONFIG TAILLE PEN *************

Pen.prototype.getSize = function(){
	return this.size;
}

Pen.prototype.setSize = function(newSize){
	this.size = newSize;
}

//********** vOIR DETAILS PEN *****************

Pen.prototype.showDetails = function(){
	console.log(this.color);
	console.log(this.size);
}

//************** ATTRIBUTION *******************

Pen.prototype.config = function(){
		$('#crayon').click((function(){this.showDetails()}).bind(this));
		
	
		//********* COULEUR  VIA BOUTON **************
		$('.pen-color').click((function(event){
			this.setColor(event.currentTarget.dataset.color);
			$('#colorPickerButton')[0].style.backgroundColor = this.getColor();//CHANGER LA COLEUR DE L4INDICATEUR DE COULEUR
		}).bind(this));
		//********* SIZE VIA BUTTON**************
		$('.pen-size').click((function(event){
			this.setSize(event.currentTarget.dataset.size);
			$('#pen-size-entree')[0].value = event.currentTarget.dataset.size;//INDIQUE LA TAILLE
		}).bind(this));
		//********* SIZE VIE INPUT **************
		$('#pen-size-entree').keyup((function(){
			this.setSize($('#pen-size-entree')[0].value);
		}).bind(this));
		//********* COULEUR  VIA INPUT TYPE COLOR **************
		$('#tool-color-picker').mouseout((function(){
		//console.log($('#tool-color-picker'));
		//console.log($('#tool-color-picker')[0].value);
			this.setColor($('#tool-color-picker')[0].value);
			$('#colorPickerButton')[0].style.backgroundColor = this.getColor();//CHANGER LA COLEUR DE L4INDICATEUR DE COULEUR
		}).bind(this));
	
		//********* COULEUR VIE PLUGIN JQUERY **************
		$('#colorpickerHolder').click((function(){
			this.setColor($('.colorpicker_new_color')[0].style.backgroundColor);
			console.log(this.setColor);
			$('#colorPickerButton')[0].style.backgroundColor = this.getColor();//CHANGER LA COLEUR DE L4INDICATEUR DE COULEUR
		}).bind(this));
}




