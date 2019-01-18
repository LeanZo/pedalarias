function Resposta(nivel, resposta) {
    switch (nivel) {
        case 1:
            if (resposta.toLowerCase() == "helio" || resposta.toLowerCase() == "hélio") {
                window.location = "https://leanzo.github.io/pedalarias/valeu_sherlock_holmes.html";
            }
            break;
        case 1:
            if (resposta.toLowerCase() == "realengo" || resposta.toLowerCase() == "REALEANGO") {
                window.location = "https://leanzo.github.io/pedalarias/tu_eh_da_tim.html";
            }
            break;
    }
}