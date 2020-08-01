// alert("HU")

window.onload = function () {
    function chY() {
        for (let y = 2010; y < 2021; y++) {
            let option = document.createElement("option");
            option.innerHTML = y;
            document.querySelector("#idY").appendChild(option);
        }
    }
    chY();

    function chM() {
        for (let m = 1; m < 13; m++) {
            let option = document.createElement("option");
            option.innerHTML = "";
            option.innerHTML = m;
            document.querySelector("#idM").appendChild(option);
            
        }
    }
    chM();
};

var endY;
var endM;
var endD;

// document.getElementById("idY").addEventListener("change", chD)
// document.getElementById("idY").addEventListener("change", chD)
document.getElementById("idM").addEventListener("change", chD)


    function chD() {
        if(idY.selectedIndex !=0 ){
            endY = idY.selectedIndex + 2009;
            endM = idM.selectedIndex;
            endD = new Date(endY, endM, 0).getDate();
            console.log(endD)
    
            document.querySelector("#idD").innerHTML = '';
            for (let d = 1; d <= endD; d++) {
                let option = document.createElement("option");                
                option.innerHTML = d;
                document.querySelector("#idD").appendChild(option);       
        }
        
    }
    else{
        return;
    }
}



var showDay;

document.getElementById("idD").addEventListener("change", show)
    function show(){
        showDay = idD.selectedIndex;
        if (idY.selectedIndex != 0 && idM.selectedIndex != 0 && idD.selectedIndex != 0) {
            let shwoInfo = "您選擇的日期是："+ endY + "年" + endM + "月" + (showDay+1) + "日";
            document.querySelector(".info-con").innerHTML = shwoInfo;
            }
            else{
                return;
            }
        } 







