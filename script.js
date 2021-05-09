const h = document.getElementById("heading");
var mm = 0;
var ss = 0;
var ms = 0;
var msec = 0;
var x;
var count = 0;

function n(n){
    return n > 9 ? "" + n: "0" + n;
}
function st(){
    x = setInterval(function(){
        mm = n(parseInt((msec / (60 * 100) % 60)));
        ss = n(parseInt((msec / 100) % 60));
        ms = n(msec%100);
        let k = mm + ":" + ss + ":" + ms;
        h.innerHTML = k;
        msec++;
    },10);
}

function unst(){
    clearInterval(x);
}

function reset(){
    msec = 0;
    clearInterval(x);
    h.innerHTML = "00:00:00";
}

function start(){
    let r = document.getElementById("start");
    if(r.value == "Start")
    {
        r.value = "Stop";
        r.textContent = "Stop";
        r.style.backgroundColor = "rgba(255, 0, 0, 0.644)";
        document.getElementById("lap").value = "Lap";
        document.getElementById("lap").textContent = "Lap";
        st();
    }
    else
    {
        r.value = "Start"
        r.textContent = "Start";
        r.style.backgroundColor = "grey";
        document.getElementById("lap").value = "Reset";
        document.getElementById("lap").textContent = "Reset";
        unst();
    }
}

function lap(){
    let r = document.getElementById("lap");
    if(r.value == "Lap")
    {
        let k = mm + ":" + ss + ":" + ms;
        count = count + 1;
        let tableRef = document.getElementById("my_table");
        let row = tableRef.insertRow(count - 1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.innerHTML = "Lap" + count;
        cell2.innerHTML = k;
        cell2.style.textAlign = "right";
    }
    else
    {
        r.value = "Lap";
        r.textContent = "Lap";
        msec = 0;
        clearInterval(x);
        h.innerHTML = "00:00:00";
        el = 0;
        count = 0;
        document.getElementById("start").value = "Start";
        document.getElementById("start").textContent = "Start";
        var Parent = document.getElementById("my_table");
        while(Parent.hasChildNodes())
        {
            Parent.removeChild(Parent.firstChild);
        }
    }
}