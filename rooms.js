function start() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  ctx.font = "40px Consolas";
  ctx.fillStyle = "white";
  ctx.fillText("CLICK TO START", 350, 285);
}

function house() {
  mainComponents();
  housecollisions();

  if (player.x + player.w > 799) {
    player.x = 5;
    player.y = 275;
    townEl.x = 0;
    state = "town";
  }
}

function town() {
  mainComponents();
  towncollisions();

  if (
    player.x < 1 &&
    player.y + townEl.y > 269 &&
    player.y + player.h + townEl.y < 331
  ) {
    state = "house";
    player.x = 745;
    player.y = 275;
  } else if (
    player.x + player.w > 799 &&
    player.y + townEl.y > 269 &&
    player.y + player.h < 331
  ) {
    state = "enemyroom";
    player.x = 5;
    player.y = 275;
  }
}

function enemyroom() {
  mainComponents();
  collisions();

  player.hp = 100;
  entity.hp = 100;

  if (
    player.x + player.w > 700 &&
    player.x < 800 &&
    player.y + player.h > 250 &&
    player.y < 350
  ) {
    state = "enemy";
  } else if (player.x < 1) {
    state = "town";
    player.x = 745;
    townEl.x = -800;
  }
}

function enemyroom2() {
  mainComponents();
  collisions();

  player.hp = 100;
  entity.hp = 150;

  if (
    player.x + player.w > 700 &&
    player.x < 800 &&
    player.y + player.h > 250 &&
    player.y < 350
  ) {
    state = "enemy2";
  }
}

function gameover() {
  ctx.drawImage(gameoverimg, 0, 0, cnv.width, cnv.height);

  ctx.font = "40px Consolas";
  ctx.fillStyle = "black";
  ctx.fillText("You have been transformed", 200, 200);
}

function win() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  ctx.font = "30px Consolas";
  ctx.fillStyle = "white";
  ctx.fillText("You won and were not transformed!", 10, cnv.height / 2);
}

function mainComponents() {
  if (state === "house") {
    ctx.fillStyle = "burlywood";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    ctx.fillStyle = "gray";
    ctx.fillRect(50, 50, cnv.width - 100, cnv.height - 100);
    ctx.fillRect(750, 250, 50, 100);

    ctx.drawImage(characterImg, player.x, player.y, player.h, player.h);
  } else if (state === "town") {
    ctx.fillStyle = "darkgray";
    ctx.fillRect(0, 0, 1600, 1200);

    ctx.fillStyle = "burlywood";
    ctx.fillRect(townEl.x + 0, townEl.y + 200, 50, 200);

    ctx.fillStyle = "brown";
    ctx.fillRect(townEl.x + 0, townEl.y + 270, 50, 60);

    ctx.fillStyle = "green";
    ctx.fillRect(townEl.x + 1550, townEl.y + 200, 50, 200);

    ctx.fillStyle = "sandybrown";
    ctx.fillRect(townEl.x + 1550, townEl.y + 270, 50, 60);

    ctx.font = "20px Consolas";
    ctx.fillStyle = "black";
    ctx.fillText("Home", townEl.x + 60, townEl.y + 305);

    ctx.drawImage(characterImg, player.x, player.y, player.h, player.h);
  } else if (state === "enemyroom") {
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    ctx.fillStyle = "sandybrown";
    ctx.fillRect(0, 250, cnv.width, 100);
    ctx.fillRect(50, 50, cnv.width - 100, cnv.height - 100);

    ctx.drawImage(characterImg, player.x, player.y, player.h, player.h);

    ctx.fillStyle = "red";
    ctx.fillRect(700, 250, 100, 100);
  } else if (state === "enemyroom2") {
    ctx.fillStyle = "darkgray";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    ctx.fillStyle = "gray";
    ctx.fillRect(0, 250, cnv.width, 100);
    ctx.fillRect(50, 50, cnv.width - 100, cnv.height - 100);

    ctx.drawImage(characterImg, player.x, player.y, player.h, player.h);

    ctx.fillStyle = "red";
    ctx.fillRect(700, 250, 100, 100);
  }
}
