let num_adivina, intentos, txt_numero, lbl_intentos, txt_guia, guia_valores, btn_v

function inicio() {
    
    intentos = 1;
    
    guia_valores = new Array();
    
    num_adivina = Math.floor(Math.random() * (100 - 1));
    
    txt_numero = document.getElementById('field_adivina');
    
    lbl_intentos = document.getElementById('intentos');
    
    lbl_intentos.innerHTML = `Intentos: ${intentos}/10`

    txt_numero.value = ''
    
    txt_guia = document.getElementById('guia');
    
    html_valores = document.getElementById('guia_valores');

    btn_v = document.getElementById('btn_v');

    alert('INTENTE ADIVINAR EL NUMERO');
}

inicio();

function reiniciar() {
    txt_numero.value = ''
    location.reload()
}

function validar() {
    if (intentos != 10) {
        guia_valores.push(txt_numero.value);
        guia_valores.forEach(element => {
            valor = element;
        });

        html_valores.innerHTML += `<li>${valor}</li>`;

        if (intentos === 9) {
            alert('Ultima Oportunidad')
        }

        if (parseInt(txt_numero.value) === num_adivina) {
            alert(`¡FELICIDADES! Has adivinado el Número: ${num_adivina}`);
            txt_guia.style.color = '#ffffff'
            txt_guia.innerHTML = `Has adivinado el Número`;
            txt_numero.disabled = true;
            btn_v.disabled = true;
        } else {
            if (parseInt(txt_numero.value) < num_adivina) {
                txt_guia.innerHTML = `El número ingresado: ${parseInt(txt_numero.value)}, esta por debajo del número que se esta adivinando`;
            } else {
                txt_guia.innerHTML = `El número ingresado: ${parseInt(txt_numero.value)}, esta por encima del número que se esta adivinando`;
            }

            intentos++;

            txt_numero.value = ''

            lbl_intentos.innerHTML = `Intentos: ${intentos}/10`
        }
    } else {
        alert(`¡FINALIZADO, No adivino!, el número es ${num_adivina}`);
        txt_guia.style.color = '#ff0000';
        txt_guia.innerHTML = `¡GAME OVER! el numero es ${num_adivina}, INTENTELO NUEVAMANTE`;
        txt_numero.disabled = true;
        btn_v.disabled = true;
        html_valores.innerHTML += `<li>${txt_numero.value}</li>`;
    }
}