    window.onload=function(){
    lunBo("lbimg","lbbtn");
}
function lunBo(lbimg,lbbtn){
    var lbimgs=document.getElementsByClassName(lbimg);
    var lbbtns=document.getElementsByClassName(lbbtn);
    function initSet(index){
        for(var i=0;i<lbimgs.length;i++){
            lbimgs[i].style.opacity='0';
            lbbtns[i].style.backgroundColor='gray';
        }
            lbimgs[index].style.opacity='1';
            lbbtns[index].style.backgroundColor='pink';
    }
    initSet(0);
    var count=1;
    function autoMove(){
        if(count==lbimgs.length){
            count=0;
        }
        initSet(count);
        count++;
    }
    var scollMove=setInterval(autoMove,2000);
    lbbtns[0].onclick=function(){
        clearInterval(scollMove);
        count=0;
        initSet(count);
        scollMove=setInterval(autoMove,2000);
    }
    lbbtns[1].onclick=function(){
        clearInterval(scollMove);
        count=1;
        initSet(count);
        scollMove=setInterval(autoMove,2000);
    }
    lbbtns[2].onclick=function(){
        clearInterval(scollMove);
        count=2;
        initSet(count);
        scollMove=setInterval(autoMove,2000);
    }
    lbbtns[3].onclick=function(){
        clearInterval(scollMove);
        count=3;
        initSet(count);
        scollMove=setInterval(autoMove,2000);
    }
    lbbtns[4].onclick=function(){
        clearInterval(scollMove);
        count=4;
        initSet(count);
        scollMove=setInterval(autoMove,2000);
    }
    lbbtns[5].onclick=function(){
        clearInterval(scollMove);
        count=5;
        initSet(count);
        scollMove=setInterval(autoMove,2000);
    }
    lbbtns[6].onclick=function(){
        clearInterval(scollMove);
        count=6;
        initSet(count);
        scollMove=setInterval(autoMove,2000);
    }
    var rightbtn=document.getElementById("rightbtn");
    var lefttbtn=document.getElementById("leftbtn");
    rightbtn.onclick=function(){
        clearInterval(scollMove);
        autoMove();
        scollMove=setInterval(autoMove,2000);
    }
    leftbtn.onclick=function(){
        clearInterval(scollMove);
        if(count==0){
            count=lbimgs.length;
        }
        count--;
        initSet(count);
        scollMove=setInterval(autoMove,2000);
    };
}