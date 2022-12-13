// Menangkap semua elemen a
document.querySelectorAll("#opts a").forEach((a) =>
    // Jika di klik akan menjalankan fungsi computerchoice
    a.addEventListener("click", (element) => {
        computerChoice(element);
    })
);
function computerChoice(element) {
    // tangkap pilihan user
    let pilihanuser = element.target.innerText;

    // menangkap element result dengan queryselector untuk menampung
    // nilai hasil dari game
    let pilihanComputer = document.querySelector("#result");

    // Membuat array pilihan untuk komputer
    let choices = ["Rock", "Paper", "Scissors"];

    // Pilihan random untuk komputer
    pilihanComputer.innerHTML = 
    choices[Math.round(Math.random() * choices.length)];
    pilihanComputer = pilihanComputer.innerHTML;

    // Jika pilihan komputer dan user sama (draw)
    if (pilihanuser == pilihanComputer) {
        alert("DRAW");
    }

    // Jika pilihan user yang menang
    if (pilihanuser == "Rock" && pilihanComputer == "Scissors") {
        alert("YOU WIN")
    }else if (pilihanuser == "Paper" && pilihanComputer == "Rock") {
        alert("YOU WIN")
    }else if (pilihanuser == "Scissors" && pilihanComputer == "Paper") {
        alert("YOU WIN")
    }
}

    // Jika Pilihan Computer Menang
    if (pilihanComputer == "Rock" && pilihanuser == "Paper") {
        alert("YOU LOSE")
    }else if (pilihanComputer == "Paper" && pilihanuser == "Scissors") {
        alert("YOU LOSE")
    }else if (pilihanComputer == "Scissors" && pilihanuser == "Paper") {
        alert("YOU LOSE")
    }


