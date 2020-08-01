        
        // document.querySelector(".bg-img-group").onmouseout=mouseout0;
        document.querySelector("#hw3-img5").onmouseover=mouseover5;
        document.querySelector("#hw3-img5").onmouseout=mouseout5;
        document.querySelector("#hw3-img4").onmouseover=mouseover4;
        document.querySelector("#hw3-img4").onmouseout=mouseout4;
        document.querySelector("#hw3-img3").onmouseover=mouseover3;
        document.querySelector("#hw3-img3").onmouseout=mouseout3;
        document.querySelector("#hw3-img2").onmouseover=mouseover2;
        document.querySelector("#hw3-img2").onmouseout=mouseout2; 
        document.querySelector("#hw3-img1").onmouseover=mouseover1;
        document.querySelector("#hw3-img1").onmouseout=mouseout1;

        document.querySelector("#hw3-img5").onclick=click5;
        document.querySelector("#hw3-img4").onclick=click4;
        document.querySelector("#hw3-img3").onclick=click3;
        document.querySelector("#hw3-img2").onclick=click2;
        document.querySelector("#hw3-img1").onclick=click1;
        
        // function mouseout0(){
        //     document.querySelector("#hiking").innerText=""
        //     document.querySelector("#high").innerText=""
        //     document.querySelector("#area").innerText=""
        //     document.querySelector("#this").innerText=""
        // }

        function click5() {
            document.querySelector("#img5").src="./images/img5.jpg"
            document.querySelector("#img4").src="#"
            document.querySelector("#img3").src="#"
            document.querySelector("#img2").src="#"
            document.querySelector("#img1").src="#"
            document.querySelector("#hiking").innerText="恭喜~ "
            document.querySelector("#now").innerText="你到達"
            document.querySelector("#high").innerText=" 500 ∼ 1,800 "
            document.querySelector("#area").innerText=""
            document.querySelector("#up").innerText="，"
            document.querySelector("#this").innerText="下次再一起爬山喔！"

        }
        function click4() {
            document.querySelector("#img5").src="./images/img5.jpg"
            document.querySelector("#img4").src="./images/img4.jpg"
            document.querySelector("#img3").src="#"
            document.querySelector("#img2").src="#"
            document.querySelector("#img1").src="#"
            document.querySelector("#hiking").innerText="恭喜~ "
            document.querySelector("#now").innerText="你到達"
            document.querySelector("#high").innerText=" 1,800 ∼ 2,500 "
            document.querySelector("#area").innerText=""
            document.querySelector("#up").innerText="，"
            document.querySelector("#this").innerText="下次再一起爬山喔！"
        }
        function click3() {
            document.querySelector("#img5").src="./images/img5.jpg"
            document.querySelector("#img4").src="./images/img4.jpg"
            document.querySelector("#img3").src="./images/img3.jpg"
            document.querySelector("#img2").src="#"
            document.querySelector("#img1").src="#"
            document.querySelector("#hiking").innerText="恭喜~ "
            document.querySelector("#now").innerText="你到達"
            document.querySelector("#high").innerText=" 2,500 ∼ 3,000 "
            document.querySelector("#area").innerText=""
            document.querySelector("#up").innerText="，"
            document.querySelector("#this").innerText="下次再一起爬山喔！"
        }
        function click2() {
            document.querySelector("#img5").src="./images/img5.jpg"
            document.querySelector("#img4").src="./images/img4.jpg"
            document.querySelector("#img3").src="./images/img3.jpg"
            document.querySelector("#img2").src="./images/img2.jpg"
            document.querySelector("#img1").src="#"
            document.querySelector("#hiking").innerText="恭喜~ "
            document.querySelector("#now").innerText="你到達"
            document.querySelector("#high").innerText=" 3,000 ∼ 3,500 "
            document.querySelector("#area").innerText=""
            document.querySelector("#up").innerText="，"
            document.querySelector("#this").innerText="下次再一起爬山喔！"
        }
        function click1() {
            document.querySelector("#img5").src="./images/img5.jpg"
            document.querySelector("#img4").src="./images/img4.jpg"
            document.querySelector("#img3").src="./images/img3.jpg"
            document.querySelector("#img2").src="./images/img2.jpg"
            document.querySelector("#img1").src="./images/img1.jpg"
            document.querySelector("#hiking").innerText="恭喜~ "
            document.querySelector("#now").innerText="你到達"
            document.querySelector("#high").innerText=" 3,500 "
            document.querySelector("#area").innerText=""
            document.querySelector("#up").innerText="，"
            document.querySelector("#this").innerText="下次再一起爬山喔！"
        }
        function mouseover5() {
            document.querySelector("#img5").src="./images/img5.jpg"
            document.querySelector("#hiking").innerText="爬山中~ "
            document.querySelector("#now").innerText="現在"
            document.querySelector("#high").innerText=" 500 ∼ 1,800 "
            document.querySelector("#up").innerText="，"
            document.querySelector("#area").innerText="本區為暖溫帶闊葉林，" 
            document.querySelector("#this").innerText="圖中的植物為台灣山香圓。"
        }
        function mouseout5() {
            document.querySelector("#img5").src="#"
            document.querySelector("#img4").src="#"
            document.querySelector("#img3").src="#"
            document.querySelector("#img2").src="#"
            document.querySelector("#img1").src="#"
            document.querySelector("#hiking").innerText="準備出發~ "
            document.querySelector("#now").innerText="現在"
            document.querySelector("#high").innerText=" 0 "
            document.querySelector("#up").innerText="，"
            document.querySelector("#area").innerText="將滑鼠移至畫面中間的格子，"
            document.querySelector("#this").innerText="開始登山吧。"
        }
        function mouseover4() {
            document.querySelector("#img5").src="./images/img5.jpg"
            document.querySelector("#img4").src="./images/img4.jpg"
            document.querySelector("#hiking").innerText="爬山中~ "
            document.querySelector("#now").innerText="現在"
            document.querySelector("#high").innerText=" 1,800 ∼ 2,500 "
            document.querySelector("#up").innerText="，"
            document.querySelector("#area").innerText="本區為涼溫帶針闊葉混合林，" 
            document.querySelector("#this").innerText="圖中的植物為台灣紅檜。"
        }
        function mouseout4() {
            document.querySelector("#img5").src="#"
            document.querySelector("#img4").src="#"
            document.querySelector("#img3").src="#"
            document.querySelector("#img2").src="#"
            document.querySelector("#img1").src="#"
            document.querySelector("#hiking").innerText="準備出發~ "
            document.querySelector("#now").innerText="現在"
            document.querySelector("#high").innerText=" 0 "
            document.querySelector("#up").innerText="，"
            document.querySelector("#area").innerText="將滑鼠移至畫面中間的格子，"
            document.querySelector("#this").innerText="開始登山吧。"
        }
        function mouseover3() {
            document.querySelector("#img5").src="./images/img5.jpg"
            document.querySelector("#img4").src="./images/img4.jpg"
            document.querySelector("#img3").src="./images/img3.jpg"
            document.querySelector("#hiking").innerText="爬山中~ "
            document.querySelector("#now").innerText="現在"
            document.querySelector("#high").innerText=" 2,500 ∼ 3,000 "
            document.querySelector("#up").innerText="，"
            document.querySelector("#area").innerText="本區為冷溫帶針葉林，" 
            document.querySelector("#this").innerText="圖中的植物為台灣華山松。"
        }
        function mouseout3() {
            document.querySelector("#img5").src="#"
            document.querySelector("#img4").src="#"
            document.querySelector("#img3").src="#"
            document.querySelector("#img2").src="#"
            document.querySelector("#img1").src="#"
            document.querySelector("#hiking").innerText="準備出發~ "
            document.querySelector("#now").innerText="現在"
            document.querySelector("#high").innerText=" 0 "
            document.querySelector("#up").innerText="，"
            document.querySelector("#area").innerText="將滑鼠移至畫面中間的格子，"
            document.querySelector("#this").innerText="開始登山吧。"
        }
        function mouseover2() {
            document.querySelector("#img5").src="./images/img5.jpg"
            document.querySelector("#img4").src="./images/img4.jpg"
            document.querySelector("#img3").src="./images/img3.jpg"
            document.querySelector("#img2").src="./images/img2.jpg"
            document.querySelector("#hiking").innerText="爬山中~ "
            document.querySelector("#now").innerText="現在"
            document.querySelector("#high").innerText=" 3,000 ∼ 3,500 "
            document.querySelector("#up").innerText="，"
            document.querySelector("#area").innerText="本區為亞高山針葉林，" 
            document.querySelector("#this").innerText="圖中的植物為玉山龍膽。"
        }
        function mouseout2() {
            document.querySelector("#img5").src="#"
            document.querySelector("#img4").src="#"
            document.querySelector("#img3").src="#"
            document.querySelector("#img2").src="#"
            document.querySelector("#img1").src="#"
            document.querySelector("#hiking").innerText="準備出發~ "
            document.querySelector("#now").innerText="現在"
            document.querySelector("#high").innerText=" 0 "
            document.querySelector("#up").innerText="，"
            document.querySelector("#area").innerText="將滑鼠移至畫面中間的格子，"
            document.querySelector("#this").innerText="開始登山吧。"
        }
        function mouseover1() {
            document.querySelector("#img5").src="./images/img5.jpg"
            document.querySelector("#img4").src="./images/img4.jpg"
            document.querySelector("#img3").src="./images/img3.jpg"
            document.querySelector("#img2").src="./images/img2.jpg"
            document.querySelector("#img1").src="./images/img1.jpg"
            document.querySelector("#hiking").innerText="攻頂了！"
            document.querySelector("#now").innerText="現在"
            document.querySelector("#high").innerText=" 3,500 "
            document.querySelector("#up").innerText="以上，"
            document.querySelector("#area").innerText="本區為高山寒原，" 
            document.querySelector("#this").innerText="圖中的植物為玉山圓柏。"
        }
        function mouseout1() {
            document.querySelector("#img5").src="#"
            document.querySelector("#img4").src="#"
            document.querySelector("#img3").src="#"
            document.querySelector("#img2").src="#"
            document.querySelector("#img1").src="#"
            document.querySelector("#hiking").innerText="準備出發~ "
            document.querySelector("#high").innerText=" 0 "
            document.querySelector("#up").innerText="，"
            document.querySelector("#area").innerText="將滑鼠移至畫面中間的格子，"
            document.querySelector("#this").innerText="開始登山吧。"
        }