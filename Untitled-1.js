

var titre = document.getElementById("inp1");
var auteur = document.getElementById("inp2");
var prix = document.getElementById("inp3");
var date = document.getElementById("inp4");
var langue = document.getElementById("inp5");
var email = document.getElementById("inp7");



class ouvrage {
    constructor(T, AU, P, D, L, TY, E) {
        this.titre = T;
        this.auteur = AU;
        this.prix = P;
        this.date = D;
        this.langue = L;
        this.tp = TY;
        this.email = E;

    }
    DétailOuvrage() {
        return "L'ouvrage" + this.titre + "est un" + this.tp + "en langue"
            + this.langue + "écrit par" + this.auteur + "et publié le"
            + this.date + "le prix c'est" + this.prix + "Dhs";
    }
}

var table = document.getElementById("tbl");
var Tbl = [];

function add() {
    
    var tp = document.querySelector("input[type=radio]:checked");

    
    let O = new ouvrage(titre.value, auteur.value, prix.value, date.value,
        langue.value, tp.value, email.value);
        console.log("1");
    Tbl.push(O);

    for (let i= 0; i<Tbl.length; i++) {
        var tr = document.createElement("tr");
        tr.innerHTML = `<td>${O.titre}</td>
                            <td>${O.auteur}</td>
                        <td>${O.prix}</td>
                              <td>${O.date}</td>
                        <td>${O.langue}</td>
                              <td>${O.tp}</td>
                        <td>${O.email}</td>`

        table.appendChild(tr);

    }
}


let span = document.getElementById('span');
let span1 = document.getElementById('span1');
email.onkeydown = function() {
    const regex = /^.{5,}@.{5,}\.(?:com|fr|ma)$/i; 
    if (regex.test(email.value)) {
        span.innerHTML = "email valide"
        span.style.color = 'lime';
        
    }
    else {
        span.innerHTML = "email non valide"
        span.style.color = 'red';  
    }
}

prix.onkeydown = function() {
    const regexn = /^[0-9]{3,4}$/;
    if (regexn.test(prix.value)) {
        span1.innerHTML = "prix valide"
        span1.style.color = 'lime';
    }
    else {
        
        span1.innerHTML = "prix non valide"
        span1.style.color = 'red';  
    }
}

button.addEventListener("click", (e) => {
    e.preventDefault();

    if (prix.value == "") {
        prix.style.border = '2px solid red';
    } else {
        prix.style.border = '2px solid green';

    } if (auteur.value == "") {
        auteur.style.border = '2px solid red';
    } else {
        auteur.style.border = '2px solid green';
    } if (titre.value.length > 30 || titre.value == "") {
        titre.style.border = '2px solid red';
    } else {
        if (parseInt(titre.value)) {
            titre.style.border = '2px solid red';
        } else {
            titre.style.border = '2px solid green'
        } if (email.value == "") {
            email.style.border = '2px solid red';
        } else {
            email.style.border = '2px solid green';
        }
    }
});