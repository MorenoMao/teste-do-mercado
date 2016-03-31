// JavaScript Document
function validaCampos(){
	var cod_produto = document.forms["formercado"]["cd_produto"].value;
	var tip_mercadoria = document.forms["formercado"]["tp_mercadoria"].value;
	var nm_mercoria_add = document.forms["formercado"]["nm_mercadoria"].value;
	var qtd_mercadoria_add = document.forms ["formercado"]["qt_mercadoria"].value;
	var val_Mercadoria = document.forms["formercado"]["vl_mercadoria_unit"].value;	
	var tip_negocio = document.forms["formercado"]["tp_negocio"].value;

	
	if((cod_produto == "") ||(cod_produto == null)){
		alert("O codigo da mercadoria deve ser preenchido");
		return false;	
	}
	
	if((tip_mercadoria=="0")||(tip_mercadoria=="null")){
			alert("deve ser selecionado o tipo da mercadoria");	
			return false;
	}
		
	if((nm_mercoria_add=="")||(nm_mercoria_add=="null")){
		alert("O Nome do Produto deve ser preenchido");
		return false;
	}
	
	if((qtd_mercadoria_add=="")||(qtd_mercadoria_add=="null")){
		alert("Informe a Quantidade");
		return false;
	}
		
	if((val_Mercadoria=="")||(val_Mercadoria=="null")||val_Mercadoria=="0,00"){
		alert("Informe Valor");
		return false;
	}
	
	if((tip_negocio=="")||(tip_negocio=="null")){
		alert("Informe o negocio");
		return false;
	}
	
	exibindo_dados();
}

function exibindo_dados(){
	
	
	
}


