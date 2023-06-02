cnv.addEventListener("click", cnvClicked);

function cnvClicked(event) {
  let cnvRect = cnv.getBoundingClientRect();

  let mouseX = event.clientX - cnvRect.left;
  let mouseY = event.clientY - cnvRect.top;

  if (state === "enemy") {
    if (mouseX > 0 && mouseX < 200 && mouseY > 0 && mouseY < 100) {
      console.log("Click Worked");

      attack = "Slap";

      slap.currentTime = 0;
      slap.play();

      setTimeout(() => {
        slap.pause();
      }, 1000);

      dmgRoll = Math.random();
      enemyDmgRoll = Math.random();

      if (dmgRoll < 0.2) {
        dmgDealt = 8;
      } else if (dmgRoll > 0.2 && dmgRoll < 0.4) {
        dmgDealt = 9;
      } else if (dmgRoll > 0.4 && dmgRoll < 0.6) {
        dmgDealt = 10;
      } else if (dmgRoll > 0.6 && dmgRoll < 0.8) {
        dmgDealt = 11;
      } else if (dmgRoll > 0.8) {
        dmgDealt = 12;
      }
      entity.hp -= dmgDealt;
      if (randNum <= 0.25) {
        if (enemyDmgRoll < 0.2) {
          enemyDmgDealt = 8;
        } else if (enemyDmgRoll > 0.2 && enemyDmgRoll < 0.4) {
          enemyDmgDealt = 9;
        } else if (enemyDmgRoll > 0.4 && enemyDmgRoll < 0.6) {
          enemyDmgDealt = 10;
        } else if (enemyDmgRoll > 0.6 && enemyDmgRoll < 0.8) {
          enemyDmgDealt = 11;
        } else if (enemyDmgRoll > 0.8) {
          enemyDmgDealt = 12;
        }

        enemyAttack = "Slap";

        enemyattacktext = `Red used ${enemyAttack}! It dealt ${enemyDmgDealt}!`;

        setTimeout(() => {
          player.hp -= enemyDmgDealt;
        }, 1000);
      } else if (randNum >= 0.25 && randNum <= 0.5) {
        if (enemyDmgRoll < 0.2) {
          enemyDmgDealt = 6;
        } else if (enemyDmgRoll > 0.2 && enemyDmgRoll < 0.4) {
          enemyDmgDealt = 6;
        } else if (enemyDmgRoll > 0.4 && enemyDmgRoll < 0.6) {
          enemyDmgDealt = 7;
        } else if (enemyDmgRoll > 0.6 && enemyDmgRoll < 0.8) {
          enemyDmgDealt = 7;
        } else if (enemyDmgRoll > 0.8) {
          enemyDmgDealt = 8;
        }

        enemyAttack = "Squeeze";

        enemyattacktext = `Red used ${enemyAttack}! It dealt ${enemyDmgDealt}!`;

        setTimeout(() => {
          player.hp -= enemyDmgDealt;
        }, 1000);
      } else if (randNum >= 0.5 && randNum <= 0.75) {
        enemyAttack = "Eat Food";

        enemyattacktext = `Red used ${enemyAttack}! It healed 3 health!`;

        setTimeout(() => {
          entity.hp += 3;
        }, 1000);
      } else {
        if (enemyDmgRoll < 0.2) {
          enemyDmgDealt = 3;
        } else if (enemyDmgRoll > 0.2 && enemyDmgRoll < 0.4) {
          enemyDmgDealt = 4;
        } else if (enemyDmgRoll > 0.4 && enemyDmgRoll < 0.6) {
          enemyDmgDealt = 4;
        } else if (enemyDmgRoll > 0.6 && enemyDmgRoll < 0.8) {
          enemyDmgDealt = 4;
        } else if (enemyDmgRoll > 0.8) {
          enemyDmgDealt = 5;
        }

        enemyAttack = "Poke";

        enemyattacktext = `Red used ${enemyAttack}! It dealt ${enemyDmgDealt}!`;

        setTimeout(() => {
          player.hp -= enemyDmgDealt;
        }, 1000);
      }

      state = "attackused1";

      randNum = Math.random();

      if (entity.hp > 0) {
        setTimeout(() => {
          state = "enemyattackused1";
        }, 1000);
      } else if (entity.hp <= 0) {
        setTimeout(() => {
          state = "info1";
        }, 1000);
      }

      if (entity.hp > 0) {
        setTimeout(() => {
          state = "enemy";
        }, 2000);
      }
    }
  }
  if (state === "enemy2") {
    if (mouseX > 0 && mouseX < 200 && mouseY > 0 && mouseY < 100) {
      console.log("Click Worked");

      attack = "Slap";

      slap.currentTime = 0;
      slap.play();

      setTimeout(() => {
        slap.pause();
      }, 1000);

      dmgRoll = Math.random();
      enemyDmgRoll = Math.random();

      if (dmgRoll < 0.2) {
        dmgDealt = 8;
      } else if (dmgRoll > 0.2 && dmgRoll < 0.4) {
        dmgDealt = 9;
      } else if (dmgRoll > 0.4 && dmgRoll < 0.6) {
        dmgDealt = 10;
      } else if (dmgRoll > 0.6 && dmgRoll < 0.8) {
        dmgDealt = 11;
      } else if (dmgRoll > 0.8) {
        dmgDealt = 12;
      }

      entity.hp -= dmgDealt;

      if (randNum <= 0.25) {
        if (enemyDmgRoll < 0.2) {
          enemyDmgDealt = 10;
        } else if (enemyDmgRoll > 0.2 && enemyDmgRoll < 0.4) {
          enemyDmgDealt = 11;
        } else if (enemyDmgRoll > 0.4 && enemyDmgRoll < 0.6) {
          enemyDmgDealt = 12;
        } else if (enemyDmgRoll > 0.6 && enemyDmgRoll < 0.8) {
          enemyDmgDealt = 13;
        } else if (enemyDmgRoll > 0.8) {
          enemyDmgDealt = 14;
        }

        enemyAttack = "Clap";

        enemyattacktext = `Red used ${enemyAttack}! It dealt ${enemyDmgDealt}!`;

        setTimeout(() => {
          player.hp -= enemyDmgDealt;
        }, 1000);
      } else if (randNum >= 0.25 && randNum <= 0.5) {
        if (enemyDmgRoll < 0.2) {
          enemyDmgDealt = 8;
        } else if (enemyDmgRoll > 0.2 && enemyDmgRoll < 0.4) {
          enemyDmgDealt = 8;
        } else if (enemyDmgRoll > 0.4 && enemyDmgRoll < 0.6) {
          enemyDmgDealt = 8;
        } else if (enemyDmgRoll > 0.6 && enemyDmgRoll < 0.8) {
          enemyDmgDealt = 8;
        } else if (enemyDmgRoll > 0.8) {
          enemyDmgDealt = 9;
        }

        enemyAttack = "Grabby";

        enemyattacktext = `Red used ${enemyAttack}! It dealt ${enemyDmgDealt}!`;

        setTimeout(() => {
          player.hp -= enemyDmgDealt;
        }, 1000);
      } else if (randNum >= 0.5 && randNum <= 0.75) {
        enemyAttack = "Eat Food";

        enemyattacktext = `Red used ${enemyAttack}! It healed 3 health!`;

        setTimeout(() => {
          entity.hp += 5;
        }, 1000);
      } else {
        if (enemyDmgRoll < 0.2) {
          enemyDmgDealt = 4;
        } else if (enemyDmgRoll > 0.2 && enemyDmgRoll < 0.4) {
          enemyDmgDealt = 5;
        } else if (enemyDmgRoll > 0.4 && enemyDmgRoll < 0.6) {
          enemyDmgDealt = 5;
        } else if (enemyDmgRoll > 0.6 && enemyDmgRoll < 0.8) {
          enemyDmgDealt = 5;
        } else if (enemyDmgRoll > 0.8) {
          enemyDmgDealt = 6;
        }

        enemyAttack = "Poke";

        enemyattacktext = `Red used ${enemyAttack}! It dealt ${enemyDmgDealt}!`;

        setTimeout(() => {
          player.hp -= enemyDmgDealt;
        }, 1000);
      }

      state = "attackused2";

      if (entity.hp > 0) {
        setTimeout(() => {
          state = "enemyattackused2";
        }, 1000);
      } else if (entity.hp <= 0) {
        setTimeout(() => {
          state = "win";
        }, 1000);
      }

      if (entity.hp > 0) {
        setTimeout(() => {
          state = "enemy2";
        }, 2000);
      }

      randNum = Math.random();
    } else if (mouseX > 200 && mouseX < 400 && mouseY > 0 && mouseY < 100) {
      console.log("Click Worked");

      attack = "Chomp";

      dmgRoll = Math.random();
      enemyDmgRoll = Math.random();

      if (dmgRoll < 0.2) {
        dmgDealt = 12;
      } else if (dmgRoll > 0.2 && dmgRoll < 0.4) {
        dmgDealt = 14;
      } else if (dmgRoll > 0.4 && dmgRoll < 0.6) {
        dmgDealt = 15;
      } else if (dmgRoll > 0.6 && dmgRoll < 0.8) {
        dmgDealt = 16;
      } else if (dmgRoll > 0.8) {
        dmgDealt = 18;
      }

      entity.hp -= dmgDealt;

      if (randNum <= 0.25) {
        if (enemyDmgRoll < 0.2) {
          enemyDmgDealt = 10;
        } else if (enemyDmgRoll > 0.2 && enemyDmgRoll < 0.4) {
          enemyDmgDealt = 11;
        } else if (enemyDmgRoll > 0.4 && enemyDmgRoll < 0.6) {
          enemyDmgDealt = 12;
        } else if (enemyDmgRoll > 0.6 && enemyDmgRoll < 0.8) {
          enemyDmgDealt = 13;
        } else if (enemyDmgRoll > 0.8) {
          enemyDmgDealt = 14;
        }

        enemyAttack = "Clap";

        enemyattacktext = `Red used ${enemyAttack}! It dealt ${enemyDmgDealt}!`;

        setTimeout(() => {
          player.hp -= enemyDmgDealt;
        }, 1000);
      } else if (randNum >= 0.25 && randNum <= 0.5) {
        if (enemyDmgRoll < 0.2) {
          enemyDmgDealt = 8;
        } else if (enemyDmgRoll > 0.2 && enemyDmgRoll < 0.4) {
          enemyDmgDealt = 8;
        } else if (enemyDmgRoll > 0.4 && enemyDmgRoll < 0.6) {
          enemyDmgDealt = 8;
        } else if (enemyDmgRoll > 0.6 && enemyDmgRoll < 0.8) {
          enemyDmgDealt = 8;
        } else if (enemyDmgRoll > 0.8) {
          enemyDmgDealt = 9;
        }

        enemyAttack = "Grabby";

        enemyattacktext = `Red used ${enemyAttack}! It dealt ${enemyDmgDealt}!`;

        setTimeout(() => {
          player.hp -= enemyDmgDealt;
        }, 1000);
      } else if (randNum >= 0.5 && randNum <= 0.75) {
        enemyAttack = "Eat Food";

        enemyattacktext = `Red used ${enemyAttack}! It healed 5 health!`;

        setTimeout(() => {
          entity.hp += 5;
        }, 1000);
      } else {
        if (enemyDmgRoll < 0.2) {
          enemyDmgDealt = 4;
        } else if (enemyDmgRoll > 0.2 && enemyDmgRoll < 0.4) {
          enemyDmgDealt = 5;
        } else if (enemyDmgRoll > 0.4 && enemyDmgRoll < 0.6) {
          enemyDmgDealt = 5;
        } else if (enemyDmgRoll > 0.6 && enemyDmgRoll < 0.8) {
          enemyDmgDealt = 5;
        } else if (enemyDmgRoll > 0.8) {
          enemyDmgDealt = 6;
        }

        enemyAttack = "Poke";

        enemyattacktext = `Red used ${enemyAttack}! It dealt ${enemyDmgDealt}!`;

        setTimeout(() => {
          player.hp -= enemyDmgDealt;
        }, 1000);
      }

      state = "attackused2";

      if (entity.hp > 0) {
        setTimeout(() => {
          state = "enemyattackused2";
        }, 1000);
      } else if (entity.hp <= 0) {
        setTimeout(() => {
          state = "win";
        }, 1000);
      }

      if (entity.hp > 0) {
        setTimeout(() => {
          state = "enemy2";
        }, 2000);
      }
    }

    randNum = Math.random();
  }
}
