//Entry creator for Developer Designated Database

function generate(){
    var devitom = document.getElementById("meters").value

    document.getElementById("var1").innerHTML = (Math.round(devitom/1.47 * 100) / 100).toFixed(2) + " Long Dev1t0s (Ld0)"



    var devitof = document.getElementById("inches").value
    document.getElementById("var2").innerHTML = (Math.round(devitof/59 * 100) / 100).toFixed(2) + " Long Dev1t0s (Ld0)"


   /* document.getElementById("var2").innerHTML = (Math.round(devitof*1.2/4.93 * 100) / 100).toFixed(2) + " Long Dev1t0s (Ld0)" */
    
    var devitom = document.getElementById("mass").value

    document.getElementById("var3").innerHTML = (Math.round(devitom/56.7 * 100) / 100).toFixed(2) + " Mass Dev1t0s (Md0)"

    var devitoo = document.getElementById("weighto").value

    document.getElementById("var4").innerHTML = (Math.round(devitoo/2 * 100) / 100).toFixed(2) + " Mass Dev1t0s (Md0)"
    

}

/* 
Mass is based on the average weight of a chicken egg in the USA.
*/