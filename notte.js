function NotteMode() {
    // aggiungi o rimuovi la classe "night-mode" al body
    document.body.classList.toggle('night-mode');
    
    // cambia il testo del bottone in base allo stato
    const button = document.getElementById('bottone_notte');
    if (document.body.classList.contains('night-mode')) {
        button.textContent = 'MODALITÀ GIORNO';
    } else {
        button.textContent = 'MODALITÀ NOTTE';
    }
}