var x = 0;
var z = 0;



$(document).ready(function (){
    $("#heart").attr("width", 15);
    $("#heart").attr("height", 15);


    $("#heart").click(function(){
            x+=80;
            doIt();
            console.log("didit")
            z++;

        if (z>0){
            $("#message").html(" ");
        }
    });
}

);
$("#body").click(function(){
    x+=100;
});
function doIt() {
    var sizeW = 5 + x;
    $("#heart").attr("width", sizeW);
    $("#heart").attr("height", sizeW);


    // + x + "px;  height:(4" + x + ")px;" +
    //     "  margin-left: auto;\n" +
    //     "  margin-right: auto;"
    // );
}