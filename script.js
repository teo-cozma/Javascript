
function hoverImg() {
    document.getElementById("cookie").style.width = "320px";
    document.getElementById("cookie").style.height = "320px";
}
function normalImg() {
    document.getElementById("cookie").style.width = "300px";
    document.getElementById("cookie").style.height = "300px";
}

function update() {
    
    //increment
    document.getElementById('counter').value = counter;
    counter.innerHTML = cookies;
    //multiplier

     if ((cookies < (multiplier +1)*5) || cookies==0) {
        document.getElementById("multiplier").disabled = true;
    } else {
        document.getElementById("multiplier").disabled = false;
    }

    document.getElementById("mlt").innerHTML = (multiplier + 1);
    document.getElementById("costMultiplier").innerHTML = ((multiplier + 1) * 5);
    document.getElementById('currentMultiplier').innerHTML = ("Your current multiplier is x" + multiplier);
    
   
   
   //autoclicker
    document.getElementById('cookiesPerSecond').innerHTML = "You are gaining " + multiplier+ " cookies per second";
    document.getElementById('amountAutoClick').innerHTML = "You got " + autoClick + " Auto Clickers";
    document.getElementById('costAutoClick').innerHTML = ((autoClick + 1) * 20) + " Cookies";
    if (cookies < ((autoClick +1) * 20) || cookies == 0) {
        document.getElementById("autoclicker").disabled = true;
    } else {
        document.getElementById("autoclicker").disabled = false; 
    }

        
//booster

if ((cookies <= 100) || (cookies==0)) {
    document.getElementById("boosterCost").disabled = true;
    } else {
        document.getElementById("boosterCost").disabled = false;
    }
 
}
//setting variables 
var multiplier = 1;
var cookies = 0;
var autoClick=0;
var booster = document.getElementById("boosterCost").value;



//clicks pers/s

function timer() {
  
   cookies = cookies + multiplier*autoClick;
    
   update();
   
}


//cookie counter
function add(){
    cookies = cookies + 1;
    update();
}

function save(){
localStorage.setItem("cookies", cookies);
localStorage.setItem("multiplier", multiplier)
localStorage.setItem("autoClick", autoClick);
localStorage.setItem("booster", booster);

}
function load(){
    cookies = localStorage.getItem("cookies");
    cookies = parseInt(cookies);
    autoClick = localStorage.getItem("autoClick");
    autoClick = parseInt(autoClick);
    multiplier = localStorage.getItem("multiplier");
    multiplier = parseInt(multiplier); 
    booster = localStorage.getItem("booster");

   update();
}

function reset() {
    counter.innerHTML = 0;
    counter.value = 0;
    cookies = localStorage.getItem("cookies");
    cookies = 0;
    autoClick = localStorage.getItem("autoClick");
    autoClick = 0;
    multiplier = localStorage.getItem("multiplier");
    multiplier = 0; 
    booster = localStorage.getItem("booster");
    booster = 0;
}

/*function reset(){
    if(document.getElementById("reset").clicked = "true"){
        document.getElementById("counter").value = '0';
        document.getElementById("counter").innerHTML = 0;
    }
}*/


function buyMultiplier(){
    
    if ((cookies >= (multiplier+1) * 5)) {
    cookies = cookies - ((multiplier +1) * 5);
    multiplier =  multiplier +1;
}
/*if((document.getElementById("autoClick").cliked = "false")&&(document.getElementById('multiplier').clicked = "true")){
    cookies = cookies + (multiplier + 1);
 }
 if((document.getElementById("multiplier").clicked = "true")&& (document.getElementById("autoClick").cliked = "true")){
    cookies = cookies + multiplier + autoClick;}
*/
update();
}

   /* if(document.getElementById('multiplier').clicked = "true"){
        cookies = cookies + multiplier;
    }*/
    
   


function buyAutoClick() {
    if ((cookies >= ((autoClick + 1) * 20)) && (document.getElementById("autoclicker").clicked = "true")) {
      cookies = cookies - ((autoClick + 1) * 20);
      autoClick = autoClick + 1;
    }
      if(document.getElementById("autoclicker").clicked = "true") {
        cookies = cookies + (autoClick);
        update(); 
    }
    setInterval(timer, 1000);
}



function buyBooster(){
    if ((cookies>=100) && (document.getElementById("boosterCost").clicked = "true")) {
        cookies = cookies - 100; 
        
        }

        let time = 30;
            const countdownElement = document.getElementById("countdown");
            setInterval(updateCountdown,1000);

            function updateCountdown() {
                
                if (time <= 30 && time >= 0) {
                    countdownElement.innerHTML = time;
                    time--;
                    cookies = cookies + ((multiplier + autoClick) * 2);
                }
                else {
                    countdownElement.innerHTML = "Expired, buy again!!!";
                }
                update();
        }
     

    }
