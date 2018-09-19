
	function setConfig(){
		//Criando um Objeto
		var texts = {
			"title":"Shopping Control"
		};
		//Pego o title da página e digo que ele é igual ao Objeto Title
		document.title = texts.title;
		//Adiciona o valor do Objeto title na navbar
		document.getElementById("navTitle").innerHTML = texts.title;
	}

	setConfig();