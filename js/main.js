function Resposta(nivel, resposta) {
    switch (nivel) {
        case 1:
            if (resposta.toLowerCase() == "helio" || resposta.toLowerCase() == "hélio") {
                window.location = "https://leanzo.github.io/pedalarias/valeu_sherlock_holmes.html";
            }
            break;
        case 2:
            if (resposta.toLowerCase() == "realengo") {
                window.location = "https://leanzo.github.io/pedalarias/ta_sabendo.html";
            }
            break;
        case 3:
            if (resposta.toLowerCase() == "karl wilhelm reinmuth") {
                window.location = "https://leanzo.github.io/pedalarias/ta_gostando_ne.html";
            }
            break;
    }
}