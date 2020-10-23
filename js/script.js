const calcular = function(){
    let nome = document.getElementById('nome').value
    let valor = document.getElementById('valorhr').value
    let qtde = document.getElementById('horastrabalhadas').value
    let salariobruto = 0

    if (valor.length == 0 || qtde.length == 0 || nome.length == 0){
        //alert('Preencha corretamente os campos')
        //Via JavaScript manipulando css
        //document.getElementById('alert-erro').style.display ="block"
        //document.getElementById('alert-sucesso').style.display ="none"
        //via jQuery        
        $('#alert-erro').slideDown(400).delay(2000).slideUp(400);
        
    } else {
        salariobruto = parseFloat(valor) * parseFloat(qtde)

        document.getElementById('salariobruto').value = salariobruto
        //alert('Cálculo realizado com sucesso!')
        $('#alert-sucesso').slideDown(400).delay(2000).slideUp(400);


    }
}