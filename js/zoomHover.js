var img, lens, result, cx, cy;

img = document.getElementById('js-gallery-img');
result = document.getElementById('myresult');
/*create lens:*/
lens = document.createElement("DIV");
lens.setAttribute("class", "img-zoom-lens");


    /*insert lens:*/
    console.log(img.dataset)
    img.parentElement.insertBefore(lens, img);
    /*calculate the ratio between result DIV and lens:*/

    console.log("result.offsetWidth  >>>>>", result.offsetWidth ,"lens.offsetWidth>>>>>>>>>>>",lens.offsetWidth);
    cx = 480 / lens.offsetWidth;
console.log('cx '  + cx )
    console.log("result.offsetHeight>>>>>",result.offsetHeight ,"llens.offsetHeighth>>>>>>>>>>>",lens.offsetHeight);
    cy = 500 / lens.offsetHeight;
console.log('cy '  + cy )
    /*set background properties for the result DIV:*/
    result.style.backgroundImage = "url('" + img.dataset.src + "')";
    result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
    /*execute a function when someone moves the cursor over the image, or the lens:*/
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);
    /*and also for touch screens:*/
    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);
    // img.addEventListener("mouseenter", bigImg);



    function bigImg(x) {
        console.log("onmouseenter >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    }

    function normalImg(x) {
//result.style.display ="none";
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>onmousLEAVE");
    }



    function moveLens(e) {
        var pos, x, y;
        /*prevent any other actions that may occur when moving over the image:*/
        e.preventDefault();
        /*get the cursor's x and y positions:*/
        pos = getCursorPos(e);
        /*calculate the position of the lens:*/
        x = pos.x - (lens.offsetWidth / 2);
        y = pos.y - (lens.offsetHeight / 2);
        // console.log("x" , x , "and Y " , y);
        /*prevent the lens from being positioned outside the image:*/
        if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;  } //else{img.addEventListener("mouseenter", bigImg);  }
        if (x < 0) {x = 0;}
        if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight; img.addEventListener("mouseleave",  normalImg);}//else{img.addEventListener("mouseenter", bigImg);  }
        if (y < 0) {y = 0;}
        /*set the position of the lens:*/
        lens.style.left = x + "px";
        lens.style.top = y + "px";
        /*display what the lens "sees":*/
        result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
    }
    function getCursorPos(e) {
        var a, x = 0, y = 0;
        e = e || window.event;
        /*get the x and y positions of the image:*/
        a = img.getBoundingClientRect();
        //console.log("------------------A  left" ,  a );
        /*calculate the cursor's x and y coordinates, relative to the image:*/
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        /*consider any page scrolling:*/
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return {x : x, y : y};
    }



function hideme(x) {
    //x.style.display = "none";

}
function showme(x) {
    //x.style.display = "block";

}


window.addEventListener("resize", function(){
    // img = document.getElementById('js-gallery-img');
    // result = document.getElementById('myresult');
    // console.log("result.offsetWidth  >>>>>", result.offsetWidth ,"lens.offsetWidth>>>>>>>>>>>",lens.offsetWidth);
    // cx = 480 / lens.offsetWidth;
    // console.log('resize '  + cx )
    // console.log("result.offsetHeight>>>>>",result.offsetHeight ,"llens.offsetHeighth>>>>>>>>>>>",lens.offsetHeight);
    // cy = 500 / lens.offsetHeight;
    // console.log('resize '  + cy )
    result.style.backgroundImage = "url('" + img.dataset.src + "')";
    result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
});