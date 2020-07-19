//variaveis da bolinha
let xBolinha = 300;
let yBolinha =  200;
let = diametro= 15;
let = raio = diametro/2;

// variaveis da raquete
let xRaquete = 5
let yRaquete = 150
let raqueteComprimento = 10
let raqueteAltura = 90

// variaveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;


//velocidade da bolinha
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete,yRaquete);
  movimentaMinhaRaquete();
  verificaColisaoRaquete();
  mostraRaquete(xRaqueteOponente,yRaqueteOponente);
  monvimentaRaqueteOponente();
  verificaColisaoRaqueteOponente();
  incluirPlacar();
  marcaPontos();
  
}

function mostraBolinha(){
  circle(xBolinha,yBolinha,diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
   
  
  if (xBolinha + raio > width || xBolinha - raio <0){
    velocidadeXBolinha *= -1;
  }
  
  if (yBolinha + raio > height || yBolinha - raio <0){
     velocidadeYBolinha *= -1;
  }
  
}

function mostraRaquete(x,y) {
  rect(x,y,raqueteComprimento,raqueteAltura); 
}


function movimentaMinhaRaquete() {
   if (keyIsDown(UP_ARROW)){
     yRaquete -= 10;
   }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }

}

function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + raqueteComprimento 
&& yBolinha - raio < yRaquete + raqueteAltura && 
yBolinha + raio > yRaquete) {
    velocidadeXBolinha *= -1;
    id=raquetada.play();
    
  }   
}

function monvimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente -   raqueteComprimento / 2 -50;
  yRaqueteOponente += velocidadeYOponente;
}

function verificaColisaoRaqueteOponente(){
  if (xBolinha + raio > xRaqueteOponente 
&& yBolinha - raio < yRaqueteOponente + raqueteAltura && 
yBolinha + raio > yRaqueteOponente) {
    velocidadeXBolinha *= -1;
    id=raquetada.play();

  }   
}

function incluirPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140,0));
  rect(150,10,40,20);
  fill(255);
  text(meusPontos,170,26);
  fill(color(255,140,0));
  rect(450,10,40,20)
  fill(255);
  text(pontosDoOponente,470,26);
}
  
  
function marcaPontos(){
  
  if(xBolinha+raio >= width){
  meusPontos++  
  } 
  if(xBolinha-raio <= 0){
  pontosDoOponente++
  id=ponto.play();
  
  }
  
}


