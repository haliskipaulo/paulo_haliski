function trocaImagem() {
    const imagem = document.querySelector('.produtos #item1 img');

    imagem.onclick = () => {
        const mySrc = imagem.getAttribute("src");
        if (mySrc === "./imagens/pngwing.com (1).png") {
            imagem.setAttribute("src", "./imagens/camiseta.png");
        } else {
            imagem.setAttribute("src", "./imagens/pngwing.com (1).png");
        }
    };
    
    const imagem2 = document.querySelector('.produtos #item2 img');

    imagem2.onclick = () => {
        const mySrc = imagem2.getAttribute("src");
        if (mySrc === "./imagens/camiseta.png") {
            imagem2.setAttribute("src", "./imagens/pngwing.com (1).png");
        } else {
            imagem2.setAttribute("src", "./imagens/camiseta.png");
        }
    };

    const imagem3 = document.querySelector('.produtos #item3 img');

    imagem3.onclick = () => {
        const mySrc = imagem3.getAttribute("src");
        if (mySrc === "./imagens/pngwing.com (2).png") {
            imagem3.setAttribute("src", "./imagens/tenuspretop.png");
        } else {
            imagem3.setAttribute("src", "./imagens/pngwing.com (2).png");
        }
    };

    const imagem4 = document.querySelector('.produtos #item4 img');

    imagem4.onclick = () => {
        const mySrc = imagem4.getAttribute("src");
        if (mySrc === "./imagens/tenuspretop.png") {
            imagem4.setAttribute("src", "./imagens/pngwing.com (2).png");
        } else {
            imagem4.setAttribute("src", "./imagens/tenuspretop.png");
        }
    };

    const imagem5 = document.querySelector('.produtos #item5 img');

    imagem5.onclick = () => {
        const mySrc = imagem5.getAttribute("src");
        if (mySrc === "./imagens/blusanike.png") {
            imagem5.setAttribute("src", "./imagens/camiseta.png");
        } else {
            imagem5.setAttribute("src", "./imagens/blusanike.png");
        }
    };
    
    const imagem6 = document.querySelector('.produtos #item6 img');

    imagem6.onclick = () => {
        const mySrc = imagem6.getAttribute("src");
        if (mySrc === "./imagens/tenis nike.png") {
            imagem6.setAttribute("src", "imagens/tenis vans.png");
        } else {
            imagem6.setAttribute("src", "./imagens/tenis nike.png");
        }
    };

    const imagem7 = document.querySelector('.produtos #item7 img');

    imagem7.onclick = () => {
        const mySrc = imagem7.getAttribute("src");
        if (mySrc === "imagens/tenisadidass.png") {
            imagem7.setAttribute("src", "imagens/tenis vans.png");
        } else {
            imagem7.setAttribute("src", "imagens/tenisadidass.png");
        }
    };

    const imagem8 = document.querySelector('.produtos #item8 img');

    imagem8.onclick = () => {
        const mySrc = imagem8.getAttribute("src");
        if (mySrc === "imagens/tenis vans.png") {
            imagem8.setAttribute("src", "imagens/tenisadidass.png");
        } else {
            imagem8.setAttribute("src", "imagens/tenis vans.png");
        }
    };
}

function mudarEstilo() {
    const confirma = window.confirm("Deseja alterar o estilo do site?");
    var mainElement = document.querySelector('main');
    var headerElement = document.querySelector('header');
    
    if (confirma) {
        mainElement.style.cssText = `
        background-color: #c5bbb4;
        `;
        headerElement.style.cssText = `
        background-color: #c99e7f;
        `;
    } else {
        mainElement.style.cssText = `
        background-color: white;
        `;
        headerElement.style.cssText = `
        background-color: #c5bbb4;
        `;
    }
}

trocaImagem();