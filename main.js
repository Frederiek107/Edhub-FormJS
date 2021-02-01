//Iedere keer als de gebruiker de waarde in het gebruikersnaam-veld veranderd, checkt jouw script of de gebruikersnaam geen @ bevat. Als dat zo is, wordt de melding "Gebruikersnaam mag geen @ bevatten" getoond.
//event: gebruiker typt in invoerveld
//event-trigger:gebruiker typt @

//lokaliseer de elementen
const username=document.getElementById("label1");
const password=document.getElementById("label2");

//maak de waarschuwing
let warningMessage=document.createElement("div");
warningMessage.setAttribute('class', 'warning');
let warningMessage2=document.createElement("div");
warningMessage2.setAttribute('class', 'warning');

//maak een functie met het uit te voeren event
function eventUsername(e) {
    let condition= e.target.value.includes("@");
    if (condition) {
        warningMessage.textContent = "De gebruikersnaam mag geen @ bevatten";
        username.appendChild(warningMessage);
    }
    else if (!condition) {
        username.removeChild(warningMessage);
    }
}

//voeg een event listener toe
username.addEventListener("input", eventUsername);

//Iedere keer als de gebruiker de waarde van het wachtwoord-veld veranderd, checkt jouw script of het wachtwoord langer is dan 6 tekens. Als dat niet zo is, wordt de melding "Wachtwoord is te kort, gebruik minimaal 6 tekens" getoond. Als de gebruiker het veld weer helemaal leeg heeft gemaakt, moet de melding ook verdwenen zijn.

//maak een functie met het uit te voeren event
function eventPassword(e) {
    let condition= e.target.value.length>0 && e.target.value.length<6;
    if (condition) {
        warningMessage2.textContent = "Wachtwoord is te kort, gebruik minimaal 6 tekens";
        password.appendChild(warningMessage2);
    }
    else if (!condition) {
        password.removeChild(warningMessage2);
    }
}

//voeg een event listener toe
password.addEventListener("input", eventPassword);
