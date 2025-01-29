
function calcTempo() {
		let input = document.getElementById('data')
		let dataDeNascimento = new Date(data.value)
		let dataAtual = new Date()
		let erro = document.getElementById('erro')

		if (!input.value) {
			erro.innerHTML = "Por favor, insira uma data."
			return
		}

		if (dataDeNascimento > dataAtual) {
			erro.innerHTML = "A data não pode ser maior que a atual."
			return
		}

		erro.innerHTML = ''

		let diferenca = dataAtual - dataDeNascimento

		
		let mesesVividos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 30.44));
    	let semanasVividas = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 7));
    	let diasVividos = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    	let horasVividas = Math.floor(diferenca / (1000 * 60 * 60));
    	let minutosVividos = Math.floor(diferenca / (1000 * 60));
    	let segundosVividos = Math.floor(diferenca / 1000);
		
		
		//meses vividos
		document.getElementById('mes').innerHTML = `${mesesVividos.toLocaleString()} Meses`
		
		document.getElementById('sem').innerHTML = `${semanasVividas.toLocaleString()} Semanas`
		
		//dias vividos
		document.getElementById('dia').innerHTML = `${diasVividos.toLocaleString()} Dias`
		
		//horas vividas
		document.getElementById('hora').innerHTML = `${horasVividas.toLocaleString()} Horas`
		
		//minutos vividos
		document.getElementById('min').innerHTML = `${minutosVividos.toLocaleString()} Minutos`
		
		//segundos vividos
		document.getElementById('seg').innerHTML = `${segundosVividos.toLocaleString()} Segundos`
		console.log(segundosVividos)

		setInterval(calcTempo, 1000)
	}
		
	