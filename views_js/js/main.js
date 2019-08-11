function verificador(){
    if(document.getElementById('anoNasc').value.length != 0){
        let data     = new Date();
        let anoAtual = data.getFullYear();
        let anoNasc  = document.getElementById('anoNasc'); 
        let resposta = document.getElementById('resposta');
        let idade = anoAtual - Number(anoNasc.value);

        if(anoNasc.value <= 0 || anoNasc.value > anoAtual){
            alert("[ERRO] - Insira outra Data");
        }else{
            
            resposta.style.marginTop = '20px';
            resposta.style.textAlign = 'center';
            
            let img = document.createElement('img');
            img.setAttribute('id', 'foto');

            if(document.getElementsByName('txtSex')[0].checked){
                resposta.innerHTML = `Você é um Homem! e tem ${idade} anos!`;
                if(idade >= 0 && idade <= 15){
                    img.setAttribute('src', 'img/boy.png');
                }else if(idade <= 50){
                    img.setAttribute('src', 'img/man.png');
                }else{
                    img.setAttribute('src', 'img/vo.png');
                }
            }else if(document.getElementsByName('txtSex')[1].checked){
                resposta.innerHTML = `Você é uma Mulher! e tem ${idade} anos!`;
                if(idade >= 0 && idade <= 15){
                    img.setAttribute('src', 'img/girl.png');
                }else if(idade <= 50){
                    img.setAttribute('src', 'img/woman.png');
                }else{
                    img.setAttribute('src', 'img/vovo.png');
                }
            }else if(document.getElementsByName('txtSex')[2].checked){
                resposta.innerHTML = `Você não definiu Sexo! e tem ${idade} anos!`;
            }

            resposta.appendChild(img);
        }
    }else{
        let span = document.getElementById('semValor');
        span.innerHTML = '*Campo Obrigatorio!';
        span.style.fontSize = '10px';
        span.style.color = 'red'; 
        document.getElementById('anoNasc').style.border = 'solid 1px red';
        
    }
}

function sleeped(){
    document.getElementById('semValor').innerHTML = '';
    document.getElementById('anoNasc').style.border = 'none';
}