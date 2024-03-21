document.addEventListener('DOMContentLoaded', function() {
    const formularz1 = document.getElementById('1');
    const formularz2 = document.getElementById('2');
    const formularz3 = document.getElementById('3');
    const formularz4 = document.getElementById('4');
    const formularz5 = document.getElementById('5');
    const wynik = document.querySelector('.zaoszczedzone');

    function check() {
        let kosztPZU = parseFloat(formularz1.querySelector('.pzu').value);
        let dywidenda = parseFloat(formularz2.querySelector('.dywidenda').value);
        let wiekKoniec = parseInt(formularz3.querySelector('.wiekK').value);
        let wiekPoczatek = parseInt(formularz4.querySelector('.wiekP').value);
        let kwotaInwestowana = parseFloat(formularz5.querySelector('.kwotaI').value);

        if(!isNaN(kosztPZU) && !isNaN(dywidenda) && !isNaN(wiekKoniec) && !isNaN(wiekPoczatek) && !isNaN(kwotaInwestowana)) {
            const ileLat = wiekKoniec - wiekPoczatek;
            let iloscdywidend = 0;
            let fundusz = 0;
            let ilekupie=0
            for(let i = 0; i < ileLat; i++) {
                fundusz = fundusz + kwotaInwestowana+iloscdywidend*dywidenda;
                iloscdywidend = iloscdywidend + Math.floor(fundusz / kosztPZU);
                ilekupie=Math.floor(fundusz / kosztPZU)
                fundusz = fundusz - ilekupie*kosztPZU;
            }
            let koncowaKwota = fundusz + iloscdywidend * kosztPZU;
            wynik.innerText = koncowaKwota + ' zł';
        } else {
            wynik.innerText = 'Błędne dane';
        }
        return false;
    }

    formularz1.addEventListener('submit', function(e) {
        e.preventDefault();
        check();
    });

    formularz2.addEventListener('submit', function(e) {
        e.preventDefault();
        check();
    });

    formularz3.addEventListener('submit', function(e) {
        e.preventDefault();
        check();
    });

    formularz4.addEventListener('submit', function(e) {
        e.preventDefault();
        check();
    });

    formularz5.addEventListener('submit', function(e) {
        e.preventDefault();
        check();
    });

});
