document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('form-sorteador').addEventListener('submit', function (e) {
        e.preventDefault();

        const numeroMaximo = parseInt(document.getElementById('numero-maximo').value);
        const numeroAleatorio = Math.floor(Math.random() * numeroMaximo + 1);

        document.getElementById('resultado-valor').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';
    });
});
