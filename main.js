function calcular () {

    let hIni = parseInt (document.getElementById ("horaIni").value);
    let mIni = parseInt (document.getElementById ("minIni").value);
    let hFim = parseInt (document.getElementById ("horaFim").value);
    let mFim = parseInt (document.getElementById ("minFim").value);

    let erro = document.getElementById("erro");
    erro.innerText = "";
    

    if (isNaN(hIni) || isNaN(mIni) || isNaN(hFim) || isNaN(mFim) ||
        hIni < 0 || hIni > 23 || hFim < 0 || hFim > 23 ||
        mIni < 0 || mIni > 59 || mFim < 0 || mFim > 59) {
        erro.innerText = "Horário inválido!";
        return;
    }


    let inicio = hIni * 60 + mIni;
    let fim = hFim * 60 + mFim;

    if (fim < inicio) {
        fim += 24 * 60;
    }

    let duracao = fim - inicio;
    let horas = Math.floor(duracao / 60);
    let minutos = duracao % 60;

    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;

    document.getElementById("horas").innerText = horas;
    document.getElementById("minutos").innerText = minutos;

    }