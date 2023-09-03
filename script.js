class MaquinaCassino {
  constructor() {
    this.configs = {
      facil: ['7️⃣','7️⃣','7️⃣','7️⃣','7️⃣','7️⃣','7️⃣','7️⃣','7️⃣','7️⃣','7️⃣','7️⃣','7️⃣','7️⃣','7️⃣','7️⃣','7️⃣','7️⃣','7️⃣','7️⃣','7️⃣','7️⃣','7️⃣','7️⃣','7️⃣','7️⃣','7️⃣','7️⃣','🍎', '🍎', '🍎','🍎','🍇', '🍇','🍇','🍇', '🍊', '🍊','🍊', '🍋','🍋','🍋', '7️⃣', '🔔','🔔','🔔','🔔','🔔','🔔'],
      medio: ['🍎', '🍇', '🍊', '🍋', '7️⃣', '🔔'],
      dificil: ['🍎', '🍇', '🍋', '7️⃣', '7️⃣', '🔔', '🔔']
    };
    this.simbolos = this.configs.medio;
    this.intervals = [];
  }

  girarRoleta() {
    const indiceAleatorio = Math.floor(Math.random() * this.simbolos.length);
    return this.simbolos[indiceAleatorio];
  }

  jogar() {
    const dificuldade = document.getElementById("dificuldade").value;
    this.simbolos = this.configs[dificuldade];
    this.iniciarAnimacao();

    setTimeout(() => {
      this.pararAnimacao();
      const resultado = Array.from(document.querySelectorAll("#resultado span")).map(span => span.innerText);
      if (resultado[0] === resultado[1] && resultado[1] === resultado[2]) {
        alert("Parabéns! Você ganhou!");
      } else {
        alert("Tente novamente!");
      }
    }, 5000);
  }

  iniciarAnimacao() {
    const spans = document.querySelectorAll("#resultado span");
    spans.forEach((span, index) => {
      this.intervals[index] = setInterval(() => {
        span.innerText = this.girarRoleta();
      }, 100);
    });
  }

  pararAnimacao() {
    this.intervals.forEach(interval => clearInterval(interval));
  }
}

const maquina = new MaquinaCassino();

function jogar() {
  maquina.jogar();
}

