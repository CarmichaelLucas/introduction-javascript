function carrega(){
    var img = document.getElementById('img');
    var msg = document.getElementById('msg');
    var time = new Date();
    var hora = time.getHours();

    msg.innerHTML = `Agora são ${hora}:00 horas!`;
    
    if(hora > 4 && hora <= 12){
        img.src = 'img/manha.png';
        document.body.style.backgroundColor = '#e2cd9f';
    }else if(hora > 12 && hora <= 18){
        img.src = 'img/tarde.png';
        document.body.style.backgroundColor = '#b9846f';
    }else{
        img.src = 'img/noite.png';
        document.body.style.backgroundColor = '#515154';
    } 
    
}