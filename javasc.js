var flag = false, newP=true;
var cantClicks_1P = 0, cantClicks_2P = 0, time = 5000, key1 = 97, key2 = 108, victorias1=0, victorias2=0;
var timeSet;

name1 = prompt("Ingrese nombre del jugador 1");
name2 = prompt("Ingrese nombre del jugador 2");


function key(event)
{
  if(!flag && event.keyCode == 32)
  {
    flag=true;
    startClock();
  }

  if (time>0 && flag)
  {
    if(event.keyCode == 65)
    {
      cantClicks_1P++;
      $("#cont1").html(cantClicks_1P);
    }

    if(event.keyCode == 76)
    {
      cantClicks_2P++;
      $("#cont2").html(cantClicks_2P);
    }

  }

}


function startClock()
{
  $("#audio").trigger("play");
  timeSet = setInterval(function(){Time()}, 5);
}


function Time()
{
  if(time > 0)
  {
    time -=5;
    $("#reloj").html(time);
  }
  else
  {
    clearInterval(timeSet);

    alert( cantClicks_1P === cantClicks_2P? "Empate":( (cantClicks_1P>cantClicks_2P? name1:name2)+" gana"));
    $("#final").css("display","block");
    $("#finalp1").html("La puntuación de "+name1+" fue dee: "+ cantClicks_1P);
    $("#finalp2").html("La puntuación de "+name2+" fue de: "+ cantClicks_2P);

    newP = confirm("Nuevos jugadores?");
    if(newP)
    {
      name1 = prompt("Ingrese nombre del jugador 1");
      name2 = prompt("Ingrese nombre del jugador 2");
      $("#p1").html(name1);
      $("#p2").html(name2);
      victorias1=0;
      victorias2=0;
      $("#Victorias1").html(victorias1);
      $("#Victorias2").html(victorias2);
    }
    else
    {
      if(cantClicks_1P>cantClicks_2P)
        victorias1++;
      else if(cantClicks_1P<cantClicks_2P)
        victorias2++;

      $("#Victorias1").html(victorias1);
      $("#Victorias2").html(victorias2);

    }

    $("#audio").trigger("pause");
    time = 5000;
    $("#reloj").html(time);
    flag=false;
    cantClicks_1P=0;
    cantClicks_2P=0;
    $("#cont1").html(cantClicks_1P);
    $("#cont2").html(cantClicks_2P);

  }

}