function clicar() {
		
		let input = document.getElementById('data')
		let dataDeNascimento = new Date(data.value)
		let dataAtual = new Date()
		
		//meses vividos
		let diferencaMeses = dataAtual - dataDeNascimento
		let mesesVividos = Math.floor(diferencaMeses / (1000 * 60 * 60 * 24 * 30.44))
		
		//semanas vividas
		let diferencaSem = dataAtual - dataDeNascimento
		let semanasVividas = Math.floor(diferencaSem / (1000 * 60 * 60 * 24 * 7))
		
		//dias vividos
		let diferencaDias = dataAtual - dataDeNascimento
		let diasVividos = Math.floor(diferencaDias / (1000 * 60 * 60 * 24))
		
		//horas vividas
		let diferencaHoras = dataAtual.getTime() - dataDeNascimento.getTime()
		let horasVividas = Math.floor(diferencaHoras / (1000 * 60 * 60))
		
		//minutos vividos
		let diferencaMin = dataAtual.getTime() - dataDeNascimento.getTime()
		let minutosVividos = Math.floor(diferencaMin / (1000 * 60))
		
		//segundos vividos
		let diferencaSeg = dataAtual.getTime() - dataDeNascimento.getTime()
		let segundosVividos = Math.floor(diferencaSeg / (1000))
		
		setInterval(clicar, 1000)
		
		res.innerHTML = 
		`<strong>
		  ${mesesVividos.toLocaleString()} Meses<br>
		  ${semanasVividas.toLocaleString()} semanas<br>
			${diasVividos.toLocaleString()} dias<br> 
			${horasVividas.toLocaleString()} horas<br> 
			${minutosVividos.toLocaleString()} minutos<br> 
			${segundosVividos.toLocaleString()} segundos
			</strong>`
	}