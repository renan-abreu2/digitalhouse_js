
/*---------CARROSEL-----------*/
function banner1(){
    document.getElementById('99').src='img/banner1.jpg';
    
    
    setTimeout("banner2()", 3000)
    document.getElementById("88").href="https://www.google.com/search?q=fun%C3%A7%C3%A3o+que+percorre+todo+um+array+em+loop&oq=fun%C3%A7%C3%A3o+que+percorre+todo+um+array+em+loop&aqs=chrome..69i57j33.11548j0j4&sourceid=chrome&ie=UTF-8";
}

function banner2(){
        document.getElementById('99').src='img/banner2.jpg';
        
        setTimeout("banner3()", 3000)
        document.getElementById("88").href="https://app.slack.com/client/T017ANARE1X/C016HBJ79U7";
}

function banner3(){
    document.getElementById('99').src='img/banner3.jpg';
    
    setTimeout("banner1()", 3000)
    document.getElementById("88").href="https://outlook.live.com/mail/inbox/id/AQQkADAwATY0MDABLThjNmUtNDgwMy0wMAItMDAKABAAFbPiMSoEaEKl%2F9Q1oki2gw%3D%3D";
    }
    

    /*---------------menu botao-----------------*/

    
    const aparecer = document.getElementById("dh_menu_btn");
    const lista = document.getElementById("menu-flex");
    
    aparecer.addEventListener("click", () => {
        lista.style.width = "200px";
        lista.style.height ="200px";
        
    })
    
    lista.addEventListener("mouseleave", () => {
        lista.style.width = "0px";
    })
