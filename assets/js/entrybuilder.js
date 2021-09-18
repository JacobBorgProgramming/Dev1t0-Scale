//Entry creator for Developer Designated Database

function generate(){
    var devitom = document.getElementById("meters").value

    document.getElementById("var1").innerHTML = (Math.round(devitom/1.47 * 100) / 100).toFixed(2) + " Dev1t0s (d0)"



    var devitof = document.getElementById("feet").value

    document.getElementById("var2").innerHTML = (Math.round(devitof/4.11 * 100) / 100).toFixed(2) + " Dev1t0s (d0)"
    
    var devitom = document.getElementById("mass").value

    document.getElementById("var3").innerHTML = (Math.round(devitom/56.7 * 100) / 100).toFixed(2) + " Dev1t0s (d0)"

    var devitoo = document.getElementById("weighto").value

    document.getElementById("var4").innerHTML = (Math.round(devitoo/2 * 100) / 100).toFixed(2) + " Dev1t0s (d0)"
    

}

/* 
Mass is based on the average weight of a chicken egg in the USA.
*/