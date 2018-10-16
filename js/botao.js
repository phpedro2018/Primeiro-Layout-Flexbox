$(function(){
	$('.botao-mobile').bind('click', function(){ // onde vou clicar pra abrir, click, ao clicar
		$('.menu nav ul').slideToggle('fast'); //o que vou mostrar/ocultar clicando, velocidade fast ou  slow
	});
});