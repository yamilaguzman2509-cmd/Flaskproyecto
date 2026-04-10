// Esperamos a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA DE SIMULACIÓN (TCP vs UDP) ---
    const btnTcp = document.getElementById('btn-tcp');
    const btnUdp = document.getElementById('btn-udp');
    const simResult = document.getElementById('resultado');

    btnTcp.addEventListener('click', () => {
        simResult.innerHTML = `
            <strong>[TCP] Protocolo de Control de Transmisión</strong><br>
            <span style="color:#16a34a;">&gt; Origen: Solicitando conexión (SYN)...</span><br>
            <span style="color:#16a34a;">&gt; Destino: Conexión aceptada (SYN-ACK).</span><br>
            <span style="color:#16a34a;">&gt; Origen: Enviando segmento 1/1...</span><br>
            <span style="color:#16a34a;">&gt; Destino: Segmento recibido (ACK). ✅</span>
        `;
        simResult.style.borderLeftColor = '#16a34a'; // Verde
    });

    btnUdp.addEventListener('click', () => {
        simResult.innerHTML = `
            <strong>[UDP] Protocolo de Datagramas de Usuario</strong><br>
            <span style="color:#ca8a04;">&gt; Origen: Enviando segmento (sin conexión)...</span><br>
            <span style="color:#ca8a04;">&gt; Origen: Enviando segmento... 🚀</span><br>
            <em>(El destino puede o no haberlo recibido, UDP no lo verifica)</em>
        `;
        simResult.style.borderLeftColor = '#ca8a04'; // Amarillo
    });

    // --- LÓGICA DEL QUIZ ---
    const quizOptions = document.querySelectorAll('.btn-option');
    const quizFeedback = document.getElementById('quiz-feedback');

    quizOptions.forEach(button => {
        button.addEventListener('click', (event) => {
            // Obtenemos si la respuesta es correcta desde el atributo data
            const isCorrect = event.target.dataset.correct === 'true';
            
            // Reiniciamos estilos de los botones
            quizOptions.forEach(btn => {
                btn.style.background = 'white';
                btn.style.color = 'var(--primary)';
            });

            // Aplicamos feedback visual
            if (isCorrect) {
                event.target.style.background = '#16a34a'; // Verde
                event.target.style.color = 'white';
                quizFeedback.innerText = "¡Correcto! UDP es ideal para streaming porque es rápido y no necesita confirmación.";
                quizFeedback.style.color = '#16a34a';
            } else {
                event.target.style.background = '#dc2626'; // Rojo
                event.target.style.color = 'white';
                quizFeedback.innerText = "Incorrecto. TCP es demasiado lento para streaming en vivo debido a las verificaciones.";
                quizFeedback.style.color = '#dc2626';
            }
        });
    });
});