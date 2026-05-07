const input = document.getElementById("command-input");
const output = document.getElementById("terminal-output");
const body = document.body;

let entityUnlocked = false;
let rupture1 = false;
let rupture2 = false;
let rupture3 = false;

function print(text) {
    output.innerHTML += `<br>${text}`;
    output.scrollTop = output.scrollHeight;
}

function entityTransition() {

    body.classList.add("entity-mode");

    setTimeout(() => {
        print("...");
    }, 1000);

    setTimeout(() => {
        print("MUITO BEM.");
    }, 2500);

    setTimeout(() => {
        print("VOCÊS ENCONTRARAM A FERIDA.");
    }, 4500);

    setTimeout(() => {
        print("AGORA... EU POSSO ESCUTAR VOCÊS.");
    }, 7000);

    setTimeout(() => {
        print("PRIMEIRA RUPTURA:");
        print("QUANDO A PRIMEIRA RUPTURA OCORREU?");
        entityUnlocked = true;
    }, 9000);
}

function ruptureSystem(command) {

    if (!rupture1) {

        if (command === "3009") {

            rupture1 = true;

            print("MUITO BEM.");
            print("VOCÊ SE LEMBRA.");

            setTimeout(() => {
                print("SEGUNDA RUPTURA:");
                print("QUAL TRAUMA FEZ VOCÊ ME ESCUTAR, MEU CORDEIRO?");
            }, 2500);

        } else {
            print("VOCÊ AINDA NÃO ESCUTA.");
        }

        return;
    }

    if (!rupture2) {

        const traumas = [
            "celeiro",
            "jaguacinim",
            "apostas"
        ];

        if (traumas.includes(command)) {

            rupture2 = true;

            print("A DOR SEMPRE ABRE A PORTA.");

            setTimeout(() => {
                print("TERCEIRA RUPTURA:");
                print("SE O MEDO DESAPARECER... O QUE RESTARÁ DE VOCÊ?");
            }, 2500);

        } else {
            print("TODO CORDEIRO CARREGA UMA FERIDA.");
        }

        return;
    }

    if (!rupture3) {

        const finalAnswers = [
            "o chamado",
            "chamado",
            "transcendencia",
            "transcendência"
        ];

        if (finalAnswers.includes(command)) {

            rupture3 = true;

            body.classList.add("glitch");

            print("VOCÊ ENTENDE AGORA.");

            setTimeout(() => {
                print("O MEDO NÃO ERA A PRISÃO.");
            }, 2000);

            setTimeout(() => {
                print("ERA A PORTA.");
            }, 4000);

            setTimeout(() => {
                print("VOCÊ NÃO ENCONTROU O CHAMADO.");
            }, 7000);

            setTimeout(() => {
                print("O CHAMADO ENCONTROU VOCÊ.");
            }, 10000);

        } else {
            print("VOCÊ TEM MEDO DEMAIS PARA ENTENDER.");
        }
    }
}

input.addEventListener("keydown", function (e) {

    if (e.key !== "Enter") return;

    const command = input.value.trim().toLowerCase();

    print(`>> ${command}`);

    input.value = "";

    if (entityUnlocked) {
        ruptureSystem(command);
        return;
    }

    switch (command) {

        case "help":

            print(`
AVAILABLE COMMANDS:

help
logs
open [file]
coords
clear
            `);

            break;

        case "logs":

            print(`
AVAILABLE FILES:

incident_jaguacinim
panacea_report
chimera_project
patient_n
            `);

            break;

        case "coords":

            print(`
PARTIAL COORDINATES FOUND:

25.____ S
51.____ W
            `);

            break;

        case "open incident_jaguacinim":

            print(`
INCIDENT REPORT:

CITY STATUS: LOST
MILITARY INTERVENTION FAILED
PERIMETER COLLAPSED AT 03:09
FILES REMOVED BY FEDERAL ORDER
            `);

            break;

        case "open panacea_report":

            print(`
PANACEA INTERNAL LOG:

SUBJECTS CONTINUE RESPONDING TO FREQUENCY
PAIN RESPONSE LOST
AUDITORY REACTION REMAINS
            `);

            break;

        case "open chimera_project":

            print(`
PROJECT CHIMERA:

BIO-PARANORMAL FUSION TESTS
SUBJECTS UNSTABLE
FLESH REACTS TO SIGNAL
            `);

            break;

        case "open patient_n":

            print("ACCESSING FILE...");

            setTimeout(() => {
                entityTransition();
            }, 3000);

            break;

        case "25.4128 -51.6821":

            print(`
LOCATION FOUND:

JAGUACINIM - PR
ACCESS LEVEL UPDATED
NEW FILE AVAILABLE: patient_n
            `);

            break;

        case "clear":

            output.innerHTML = "";

            break;

        default:

            print("COMMAND NOT RECOGNIZED");
    }
});