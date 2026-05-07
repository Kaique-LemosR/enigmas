// --- Dicas no F12 (Console) ---
console.log("%c[ACESSO RESTRITO - EMPRESAS ARGENTTO]", "color: #9300ff; font-size: 16px; font-weight: bold;");
// Pista sobre o incidente de Jaguacinim com Leon Canídis
console.log("LOG: Interrogatório de Leon Canídis finalizado em 30/09.");
// Pista sobre o deslocamento da Cifra de César (Delta)
console.log("DICA: O deslocamento é a diferença (Δ) entre o início e o fim do incidente.");
// Referência ao avô e à família Moretti
console.log("STATUS: Ativo de alto valor (Avô) movido para Setor Moretti.");

const lanterna = document.getElementById('lanterna');
const btnUv = document.getElementById('btn-uv-toggle');
const input = document.getElementById('input-final');
let uvAtivada = false;

// 1. Ligar/Desligar Lanterna UV através do ponto invisível
btnUv.addEventListener('click', () => {
    uvAtivada = !uvAtivada;
    lanterna.style.display = uvAtivada ? 'block' : 'none';
    console.log(uvAtivada ? "Sensor UV: ATIVADO" : "Sensor UV: DESATIVADO");
});

// 2. Movimentação da Lanterna e Efeito de Revelação de Símbolos
document.addEventListener('mousemove', (e) => {
    if (!uvAtivada) return;

    // Ajusta a posição do brilho violeta
    lanterna.style.left = (e.clientX - 150) + 'px';
    lanterna.style.top = (e.clientY - 150) + 'px';

    // Lógica para detectar símbolos dos Moretti ou pistas de Nathan
    const simbolos = document.querySelectorAll('.simbolo');
    simbolos.forEach(s => {
        const rect = s.getBoundingClientRect();
        const centroX = rect.left + rect.width / 2;
        const centroY = rect.top + rect.height / 2;
        
        const dist = Math.hypot(e.clientX - centroX, e.clientY - centroY);
        
        if (dist < 120) {
            s.classList.add('revelado');
        } else {
            s.classList.remove('revelado');
        }
    });
});

// 3. Verificação da Palavra-Chave Final
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const resposta = input.value.toLowerCase().trim();
        
        // Se a resposta for a correta (exemplo: argentto)
        if (resposta === "leon") {
            alert("ACESSO CONCEDIDO. Localizando alvo...");
            // Redireciona para o mapa ou próxima pista
            window.location.href = "https://www.google.com/maps?q=-26.3045,-48.8434";
        } else {
            input.value = "";
            console.warn("TENTATIVA INVÁLIDA REGISTRADA NO SISTEMA.");
        }
    }
});