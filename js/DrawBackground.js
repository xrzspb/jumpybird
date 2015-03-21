/**
 * Created by mengyan on 3/17/15.
 */
$(document).ready( function() {
    for (var i = 0; i < 2; i++) {
        var box = generateNewBox(i);
        document.getElementById("playing").appendChild(box);
        setTimeout(doMove, 500);
        setInterval(doMove, 500);
    }

    function doMove(){
        for (var i = 0; i < 2; i++) {
            $('#box' + i).animate ({
                left: '+=100'
            }, 500, 'linear', function() {
            });
        }
    }

});

function generateNewBox(i) {
    var d = document.createElement("div");
    var x = document.createElement("CANVAS");
    var ctx = x.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(20, 20, 150, 100);
    d.setAttribute("id", "box"+i);
    d.appendChild(x);
    return d;
}
