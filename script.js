// Image hover
function hoverImg() {
    document.getElementById("cookie").style.width = "320px";
}
function normalImg() {
    document.getElementById("cookie").style.width = "300px";
}

var cookiecount = 0;
var autoClick = 0; 
var multiplier = 0;

function update() {
    document.getElementById('text').value = cookiecount;
    document.title = cookiecount + " cookies"; 

    document.getElementById("amountCookies").innerHTML = "You've got " + cookiecount + " cookies.";
    document.getElementById("CPS").innerHTML = "per second : " + ((autoClick) * multiplier);

    //document.getElementById("amountMultiplier").innerHTML = "You own " + "0" + " multipliers."
    document.getElementById("amountAutoClick").innerHTML = "You own " + autoClick + " Auto Clickers.";
}

/*function timer() {
    cookiecount = cookiecount + autoClick;
    update();
}
setInterval(timer, 1000)*/


// Image increment
function add() {
    cookiecount = cookiecount + 1;
    update();
}


// Buttons
function save() {
    localStorage.setItem("cookiecount", cookiecount);
    localStorage.setItem("autoClick", autoClick);
    //localStorage.setItem("multiplier", multiplier);
}
function load() {
    localStorage.getItem("cookiecount", cookiecount);
    cookiecount = parseInt(cookiecount);
    
    autoClick = localStorage.getItem("autoClick");
    autoClick = parseInt(autoClick);

    //multiplier = localStorage.setItem("multiplier", multiplier);
    //multiplier = parseInt(multiplier);

    update();
}

/*function buyMultiplier() {
    if (cookiecount >= ((multiplier + 1) * 100)) {
        cookiecount = cookiecount - ((multiplier + 1) * 100);
        multiplier = multiplier + 1;
        update();
    }
}*/

function buyAutoClick() {
    if (cookiecount >= ((autoClick + 1) * 20)) {
        cookiecount = cookiecount - ((autoClick + 1) * 20);
        autoClick = autoClick + 1;
        update();
    }
}

/*
function disableButton() {
    let input = document.querySelector('input').value;
    let buttons = document.querySelector('btn');
    if (input = 0) {
        buttons.setAttribute('disabled', 'disabled');
    }
}*/

// Disable tests

/*
function disableButton() {
    let cookiecount = document.getElementById('text1').innerHTML;
    const save = document.getElementById("save");
    const save_btn = document.getElementById("save-btn")

    if (cookiecount == 0) {
        save.disabled = true;
        save().disabled = true;
    }
    else {
        save.disabled = false;
        save().disabled = false;
    }
}*/


/*function disableButton_2() {
    var count = document.getElementById('text1').innerHTML;
    var save = document.getElementById("save");

    if (count == 0) {
        save.disabled = true;
    }
    else {
        save.disabled = false;
    }
}*/

/*function disable () {
    const save = document.getElementById("save-btn");
    const input = document.getElementById('text_1');

    input.addEventListener('change', () => {
        if (input.value == 0) {
            save.disabled = true;
            console.log("Disabled");
        }
        else {
            save.disabled = false;
            console.log("Enabled");
        }
    })
}*/

// Reset function ?

function reset () {
    let reset = document.getElementById("reset");
    reset.addEventListener(onclick, () => {
        return cookiecount = 0;
    })
    update();
}

