let input = document.getElementById('data')

// Verifica se o valor do input está vazio
if (!input.value) {
  alert("O input de data está vazio!");
}

function calcTempo() {
    let input = document.getElementById('data')
    let dataDeNascimento = new Date(data.value)
    let dataAtual = new Date()
    
    //data completa
    //nasc.innerHTML = `${data.value}`
    
    //meses vividos
    let diferencaMeses = dataAtual - dataDeNascimento
    let mesesVividos = Math.floor(diferencaMeses / (1000 * 60 * 60 * 24 * 30.44))
    mes.innerHTML = `${mesesVividos.toLocaleString()} Meses`
    
    //semanas vividas
    let diferencaSem = dataAtual - dataDeNascimento
    let semanasVividas = Math.floor(diferencaSem / (1000 * 60 * 60 * 24 * 7))
    sem.innerHTML = `${semanasVividas.toLocaleString()} Semanas`
    
    //dias vividos
    let diferencaDias = dataAtual - dataDeNascimento
    let diasVividos = Math.floor(diferencaDias / (1000 * 60 * 60 * 24))
    dia.innerHTML = `${diasVividos.toLocaleString()} Dias`
    
    //horas vividas
    let diferencaHoras = dataAtual.getTime() - dataDeNascimento.getTime()
    let horasVividas = Math.floor(diferencaHoras / (1000 * 60 * 60))
    hora.innerHTML = `${horasVividas.toLocaleString()} Horas`
    
    //minutos vividos
    let diferencaMin = dataAtual.getTime() - dataDeNascimento.getTime()
    let minutosVividos = Math.floor(diferencaMin / (1000 * 60))
    min.innerHTML = `${minutosVividos.toLocaleString()} Minutos`
    
    //segundos vividos
    let diferencaSeg = dataAtual.getTime() - dataDeNascimento.getTime()
    let segundosVividos = Math.floor(diferencaSeg / (1000))
    seg.innerHTML = `${segundosVividos.toLocaleString()} Segundos`
    console.log(segundosVividos)
    /*
    res.innerHTML = 
    `<strong>
      ${mesesVividos.toLocaleString()} Meses<br>
      ${semanasVividas.toLocaleString()} semanas<br>
        ${diasVividos.toLocaleString()} dias<br> 
        ${horasVividas.toLocaleString()} horas<br> 
        ${minutosVividos.toLocaleString()} minutos<br> 
        ${segundosVividos.toLocaleString()} segundos
        </strong>`
        */
    
    setInterval(calcTempo, 1000)
}