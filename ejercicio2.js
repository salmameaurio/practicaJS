aleat1= Math.floor(Math.random()*(360-0))+0;
rounds= Math.floor(Math.random()*(11-5))+5;
aleat2=Math.floor(Math.random()*(360-0))+5;
valor=aleat2*rounds +aleat1;
anguloF= valor%360;

console.log("Posicion o angulo Inicial: "+aleat1+"\nValor Aleatorio Generado en Grados: "+valor+"\nAngulo final: "+anguloF);