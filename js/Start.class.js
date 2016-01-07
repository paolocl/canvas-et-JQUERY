var Start = function(){
	this.ardoise = null;
	this.crayon = null;
}

Start.prototype.run = function(){
	
	//*********** COLOR PÏCKER ******************
	
	$('#colorpickerHolder').ColorPicker({flat: true});
	
	
	
	//****************** PEN ****************
	
	this.crayon = new Pen();

	this.crayon.config();

	this.ardoise = new Ardoise();
	this.ardoise.pen = this.crayon;
	console.log(this.ardoise);
	
	//************ TAILLE GOMME *****************
	$('#indicSizeGomme').html($('#sizeGomme')[0].value);
	$('#indicDessinSizeGomme')[0].style.width = $('#sizeGomme')[0].value + 'px';
	$('#indicDessinSizeGomme')[0].style.height = $('#sizeGomme')[0].value + 'px';
	
	
	$('#sizeGomme').mouseup((function(){
		this.ardoise.tailleEcrase = $('#sizeGomme')[0].value;
		$('#indicSizeGomme').html($('#sizeGomme')[0].value);
		$('#indicDessinSizeGomme')[0].style.width = $('#sizeGomme')[0].value + 'px';
	$('#indicDessinSizeGomme')[0].style.height = $('#sizeGomme')[0].value + 'px';
	}).bind(this));

	//********* ACTION CANVAS ***************
	$('#ecrire').click((function(){
		this.ardoise.onOff = 1;
	}).bind(this));
	$('#gomme').click((function(){
		this.ardoise.onOff = 0;
	}).bind(this));
		this.ardoise.dessiner();
	
	//***********TOUS EFFACER******************

	$('#tool-clear-canvas').click((function(){
		this.ardoise.delete();
	}).bind(this));
	
	console.log($('document'));
	
	$('#colorPickerButton').click((function(){
		console.log($('#colorPickerButton'));
		$('.colorpicker').toggleClass('colorpickerHolderShow');
	}).bind(this))

}