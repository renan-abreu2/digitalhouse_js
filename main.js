
/*---------CARROSEL-----FUNÇÃO DE ALTERAR AS IMAGENS E LINKS DE UMA TAG a - PROBLEMAS COM A ADPTAÇÃO DA TELA ------*/
function banner1(){
    document.getElementById('99').src='img/banner1.jpg';
    
    
    setTimeout("banner2()", 2000)
    document.getElementById("88").href="https://www.digitalhouse.com/br/?gclid=CjwKCAjw97P5BRBQEiwAGflV6ebF_GDoW9aotzwTBqLZHYfIsIxwIsJ2iaALy6YC26HPwgEp65xQkhoCvSIQAvD_BwE";
}

function banner2(){
        document.getElementById('99').src='img/banner2.jpg';
        
        setTimeout("banner3()", 2000)
        document.getElementById("88").href="https://www.santander.com.br/";
}

function banner3(){
    document.getElementById('99').src='img/banner3.jpg';
    
    setTimeout("banner1()", 2000)
    document.getElementById("88").href="https://www.java.com/pt_BR/download/";
    }
    

    /*---------------menu botao------- EVENTO DE COLOCAR UMA ALTURA E LARGURA PROVISORIA----------*/

    
    const aparecer = document.getElementById("dh_menu_btn");
    const lista = document.getElementById("menu-flex");
    
    aparecer.addEventListener("click", () => {
        lista.style.width = "200px";
        lista.style.height ="199px";
        
    })
    
    lista.addEventListener("mouseleave", () => {
        lista.style.width = "0px";
    })


    /* ----- ADICIONAR IMAGENS -  ADICIONANDO ATRAVES DE ID EM CADA ELEMENTO DO HTML--*/

    document.getElementById('img1').src = "./img/img1.jpg";
    
    document.getElementById('img2').src = "./img/img2.jpg";
    document.getElementById('img3').src = "./img/img3.jpg";
    document.getElementById('img4').src = "./img/img4.jpg";
    document.getElementById('img5').src = "./img/img5.jpg";
    document.getElementById('img6').src = "./img/img6.jpg";
