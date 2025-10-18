document.addEventListener('DOMContentLoaded', function() {
    // ===== MENU HAMBÚRGUER =====
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function(event) {
            event.stopPropagation();
            console.log('Menu hambúrguer clicado');
            this.classList.toggle('active');
            nav.classList.toggle('active');
        });
        
        // Fechar menu ao clicar em um link
        const menuLinks = document.querySelectorAll('.menu-link');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                console.log('Link do menu clicado');
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }
   
    // Versão mais simples - toggle ao clicar
document.querySelectorAll('.quadrado').forEach(quadrado => {
    quadrado.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});
    // ===== MODO CLARO =====
    const btnModoClaro = document.querySelector('.btnModoClaro');
    if (btnModoClaro) {
        btnModoClaro.addEventListener('click', function() {
            console.log('Modo claro clicado');
            document.body.classList.toggle('modo-claro');
        });
    }

    // ===== ÁUDIO =====
    const audio = document.getElementById('audio');
    const audioImage = document.getElementById('audioImage');
    if (audioImage && audio) {
        audioImage.addEventListener('click', function() {
            console.log('Áudio clicado');
            if (audio.paused) {
                audio.play();
                this.classList.add('playing');
            } else {
                audio.pause();
                this.classList.remove('playing');
            }
        });
    }

    // ===== PLANOS =====
    const planos = document.querySelectorAll('.plano');
    planos.forEach(plano => {
        plano.addEventListener('click', function() {
            planos.forEach(p => p.classList.remove('ativo'));
            this.classList.add('ativo');
        });
    });
    
    // ===== BOTÃO VOLTAR AO TOPO =====
    window.onscroll = function() {
        const btnSubir = document.querySelector('.btn-subir');
        if (btnSubir) {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                btnSubir.style.display = "flex";
            } else {
                btnSubir.style.display = "none";
            }
        }
    };
});
window.addEventListener('scroll', function() {
    const icones = document.querySelector('.icones');
    // Verifica se é mobile (largura menor que 768px)
    if (window.innerWidth < 768) {
        if (window.scrollY > 50) {
            icones.style.opacity = "0";
            icones.style.pointerEvents = "none";
        } else {
            icones.style.opacity = "1";
            icones.style.pointerEvents = "auto";
        }
    }
});
   // 2. Aguarda a página carregar e depois inicializa o widget
    document.addEventListener('DOMContentLoaded', function() {
        new VLibras.Widget({
            rootPath: 'https://vlibras.gov.br/app',
            personalization: 'https://vlibras.gov.br/api/config',
            opacity: 0.5,
            position: 'BL', // Bottom Left
            avatar: 'ana'
        });
    });

    // 3. Função independente para subir ao topo
    function subirTopo(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

function verificarFormulario() {
    // Obtém os valores dos campos
    var nome = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var assunto = document.getElementById('subject').value;
    var mensagem = document.getElementById('message').value;
    
    // Validações básicas
    if (nome === "") {
        alert("❌ Por favor, escreva seu nome!");
        return false;
    }
    
    if (email === "") {
        alert("❌ Por favor, escreva seu email!");
        return false;
    }
    
    if (assunto === "") {
        alert("❌ Por favor, escreva o assunto!");
        return false;
    }
    
    if (mensagem === "") {
        alert("❌ Por favor, escreva sua mensagem!");
        return false;
    }
    
    // Mensagem de sucesso
    alert(" Mensagem enviada com sucesso!✅ \n\nObrigado pelo contato com a Ameli, responderemos em breve!");
    
    // Limpa os campos após envio
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('subject').value = "";
    document.getElementById('message').value = "";
    
    return false;
}

function iniciarMascara() {
    // Criar apenas a máscara (o botão já existe no HTML)
    var mascara = document.createElement('div');
    mascara.id = 'mascaraLeitura';
    mascara.style.cssText = 'position:fixed; background:rgba(255,255,0,0.2); border-top:2px solid #FFD700; border-bottom:2px solid #FFD700; display:none; height:80px; width:100%; pointer-events:none; z-index:99999; top:0; left:0;';
    
    document.body.appendChild(mascara);
    
    var ligada = false;
    var botao = document.getElementById('botaoMascara');
    
    botao.onclick = function() {
        ligada = !ligada;
        mascara.style.display = ligada ? 'block' : 'none';
    };
    
    document.onmousemove = function(e) {
        if (ligada) {
            mascara.style.top = (e.clientY - 50) + 'px';
        }
    };
}

window.onload = iniciarMascara;

  document.addEventListener('touchmove', function(e) {
        if (!ligada) return;
        var touch = e.touches[0];
        mascara.style.top = (touch.clientY - 50) + 'px';
        e.preventDefault();
    });






