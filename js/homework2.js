const form = {
    name: false,
    password: false,
    date: false
}

function checkName(id) {
    let displayName = document.getElementById("displayName"); 
    let theNameLen = id.value.length;

    if (id.value == "") {
        displayNameIcon.innerHTML = '<i class="fas fa-times-circle"></i>'
        displayName.innerHTML = "<span class='red'>不可為空白，請輸入<span>"
    }
    else if(theNameLen >= 2){
        for (let i = 0; i < theNameLen; i++) {
            let NameChr = id.value.charAt(i).charCodeAt();
            if (NameChr > 40869 || NameChr < 19968){
                displayNameIcon.innerHTML = '<i class="fas fa-times-circle"></i>'
                displayName.innerHTML = "<span class='red'>請輸入中文<span>" 
            }
            else {
                displayNameIcon.innerHTML = '<i class="fas fa-check-circle"></i>'
                displayName.innerHTML = "<span class='green'>正確<span>" 
                form.name = true
                return
            }
        }
    }
    else {
        displayNameIcon.innerHTML = '<i class="fas fa-times-circle"></i>'
        displayName.innerHTML = "<span class='red'>請輸入至少兩個字<span>" 
    }

    form.name = false

}
function checkPassword(id) {
    let displayPassword = document.getElementById("displayPassword"); 
    let thePwdLen = id.value.length;
    let flag1 = false, flag2 = false, flag3 = false;
    if (id.value == "") {
        displayPasswordIcon.innerHTML = '<i class="fas fa-times-circle"></i>'
        displayPassword.innerHTML = "<span class='red'>不可為空白，請輸入<span>"
    }
    else if(thePwdLen >= 6){
        for (let i = 0; i < thePwdLen; i++) {
            let PwdChr = id.value.charAt(i).charCodeAt();
            if (PwdChr <= 112 && PwdChr >= 65){
                flag1 = true;
            }
            else if (PwdChr <= 57 && PwdChr >= 48){
                flag2 = true;
            }
            else if (PwdChr <= 94 && PwdChr >= 33){
                flag3 = true;
            if (flag1 && flag2 && flag3) break;
            }           
        }

        if (!flag1){
            displayPasswordIcon.innerHTML = '<i class="fas fa-times-circle"></i>'
            displayPassword.innerHTML = "<span class='red'>密碼必須包含英文字母<span>"
            return;
        }
        if (!flag2){
            displayPasswordIcon.innerHTML = '<i class="fas fa-times-circle"></i>'
            displayPassword.innerHTML = "<span class='red'>密碼必須包含數字<span>"
            return;
        }
        if (!flag3){
            displayPasswordIcon.innerHTML = '<i class="fas fa-times-circle"></i>'
            displayPassword.innerHTML = "<span class='red'>密碼必須包含特殊符號<span>"
            return;
        }
        displayPasswordIcon.innerHTML = '<i class="fas fa-check-circle"></i>'
        displayPassword.innerHTML = "<span class='green'>正確<span>"
        form.password = true;
        return    
    }    
    else {
        displayPasswordIcon.innerHTML = '<i class="fas fa-times-circle"></i>'
        displayPassword.innerHTML = "<span class='red'>密碼長度不可短於 6 個字<span>" 
    }
    form.password = false
}
function checkDate(id) {
    let displayDate = document.getElementById("displayDate");
    let theDateLen = id.value.length;
    let flag1 = false, flag2 = false, flag3 = false;
    if (id.value == "") {
        displayDateIcon.innerHTML = '<i class="fas fa-times-circle"></i>'
        displayDate.innerHTML = "<span class='red'>不可為空白，請輸入<span>"
    }
    else if(theDateLen == 10){
        for (let i = 0; i < theDateLen; i++) {
            let DateChr = id.value.charAt(i).charCodeAt();

            if (id.value.charAt(i) <= 57 && id.value.charAt(i).charCodeAt() >= 47){
                flag1 = true;
            }            
            else if (i == 4){
                if (DateChr ="/"){
                flag2 = true;            
                }                               
            }
            else if (i == 7){
                if (DateChr ="/"){
                flag3 = true;            
                }    
            }
            if (flag1 && flag2 && flag3) break;
            form.date = true;
            return
            }            
        if (!flag1){
            displayDateIcon.innerHTML = '<i class="fas fa-times-circle"></i>'
            displayDate.innerHTML = "<span class='red'>請勿輸入「/」及「0 - 9」以外的字符"
            return;
        }
        if (!flag2){
            displayDateIcon.innerHTML = '<i class="fas fa-times-circle"></i>'
            displayDate.innerHTML = "<span class='red'>請以「/」分開年月日<span><span>"
            return;
        }
        if (!flag3){
            displayDateIcon.innerHTML = '<i class="fas fa-times-circle"></i>'
            displayDate.innerHTML = "<span class='red'>請以「/」分開年月日<span><span>"
            return;
        }
        displayDateIcon.innerHTML = '<i class="fas fa-check-circle"></i>'
        displayDate.innerHTML = "<span class='green'>正確<span>"         
}
    else {
        displayDateIcon.innerHTML = '<i class="fas fa-times-circle"></i>'
        displayDate.innerHTML = "<span class='red'>請檢查格式。<span>"
        form.date = false 
    }
}
document.getElementById("sub").addEventListener("click",sub);
function sub(event){
    event.preventDefault();        

    let Namecon = document.getElementById("user").value;
    let Passcon = document.getElementById("password").value;
    let Datecon = document.getElementById("date").value;    
    if(Namecon == "" && Passcon == "" && Datecon == ""){
        err();
        err1();
        err2();
        err3();
    }
    else if(Namecon == "" && Passcon == ""){
        err();
        err1();
        err2();
    }
    else if(Passcon == "" && Datecon == "" ){
        err();
        err2();
        err3();
    }
    else if(Namecon == "" && Datecon == "" ){
        err();
        err1();
        err3();
    }
    else if(Namecon == ""){
        err();
        err1();
    }
    else if(Passcon == ""){
        err();
        err2();
    }
    else if(Datecon == ""){
        err();
        err3();
    }
    else if(Namecon !== "" && Passcon !== "" && Datecon !== ""){
        if (!form.name || !form.password || !form.date)  
        return swal("資料格式有誤", "請依欄位下方的格式要求輸入資料", "error", {button: "確定"}); 
    }
    else{
        okk();
    }
}

function okk(){
    swal("資料正確", "您已成功登入", "success",{button:"確定"});
    displayNameIcon.innerHTML = '<i class="fas fa-check-circle"></i>'
    displayName.innerHTML = "<span class='green'>正確<span>" 
    displayPasswordIcon.innerHTML = '<i class="fas fa-check-circle"></i>'
    displayPassword.innerHTML = "<span class='green'>正確<span>" 
    displayDateIcon.innerHTML = '<i class="fas fa-check-circle"></i>'
    displayDate.innerHTML = "<span class='green'>正確<span>" 
}
function err(){
    swal("資料有誤", "所有欄位皆不可為空白", "error", {button: "確定"});    
}
function err1(){
    displayNameIcon.innerHTML = '<i class="fas fa-times-circle"></i>'
    displayName.innerHTML = "<span class='red'>不可為空白，請輸入<span>"
}
function err2(){
    displayPasswordIcon.innerHTML = '<i class="fas fa-times-circle"></i>'
    displayPassword.innerHTML = "<span class='red'>不可為空白，請輸入<span>"
}
function err3(){
    displayDateIcon.innerHTML = '<i class="fas fa-times-circle"></i>'
    displayDate.innerHTML = "<span class='red'>不可為空白，請輸入<span>"
}


document.getElementById("res").addEventListener("click",res);
function res(){
    displayNameIcon.innerHTML = '<i class="fas fa-exclamation-triangle"></i>'
    displayName.innerHTML = "<span class='yellow'>請重新輸入<span>" 
    displayPasswordIcon.innerHTML = '<i class="fas fa-exclamation-triangle"></i>'
    displayPassword.innerHTML = "<span class='yellow'>請重新輸入<span>" 
    displayDateIcon.innerHTML = '<i class="fas fa-exclamation-triangle"></i>'
    displayDate.innerHTML = "<span class='yellow'>請重新輸入<span>" 
}

function hideShowPsw(){  
    if (password.type == "password") {  
        password.type = "text";
        document.getElementById("Password_icon").classList.remove("fa-eye");
        document.getElementById("Password_icon").classList.add("fa-eye-slash");
    }else {  
        password.type = "password";
        document.getElementById("Password_icon").classList.remove("fa-eye-slash");
        document.getElementById("Password_icon").classList.add("fa-eye"); 
    }  
} 