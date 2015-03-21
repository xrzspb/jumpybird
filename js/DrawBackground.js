/**
 * Created by mengyan on 3/17/15.
 */
$(document).ready( function() {
    //TODO: need to draw a continuous running background

    for (var i = 0; i < 1; i++) {
        var box = generateNewBox(i);
        document.getElementById("playing").appendChild(box);
        loop(i);
    }


    function loop(i) {
        if (shouldStop(i)) {
            return;
        }
        $('#box'+i).css({left:0});
        $('#box'+i).animate ({
            left: '+=1400'
        }, 5000, 'linear', function() {
            loop(i);
        });
    }
});

function shouldStop(i) {
    return $('#box'+i).offset.left + ($('#box'+i).outerWidth()) >= $(window).outerWidth();
}

function generateNewBox(i) {
    var x = document.createElement("CANVAS");
    var ctx = x.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(20, 20, 150, 100);
    x.setAttribute("id", "box"+i);
    return x;
}