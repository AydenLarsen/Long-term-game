function start() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  ctx.font = "40px Consolas";
  ctx.fillStyle = "white";
  ctx.fillText("CLICK TO START", 350, 285);
}

function room() {
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
  }
}

function room2() {
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
  if (state === "room") {
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    ctx.fillStyle = "sandybrown";
    ctx.fillRect(0, 250, cnv.width, 100);
    ctx.fillRect(50, 50, cnv.width - 100, cnv.height - 100);

    ctx.drawImage(characterImg, player.x, player.y, player.h, player.h);

    ctx.fillStyle = "red";
    ctx.fillRect(700, 250, 100, 100);
  } else if (state === "room2") {
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
