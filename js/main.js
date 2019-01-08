function Resposta(nivel, resposta) {
    switch (nivel) {
        case 1:
            if (resposta.toLowerCase() == "helio" || resposta.toLowerCase() == "hélio") {
                window.location = "https://leanzo.github.io/pedalarias/Era-uma-vez.html";
            }
            break;
    }
}