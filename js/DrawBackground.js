/**
 * Created by mengyan on 3/17/15.
 */
var boxList = [];
var left = '+90%';
$(document).ready( function() {
    showNewPipe(0);
    setTimeout(function() {
        showNewPipe(2)
    }, 5000);
});

function showNewPipe(starter) {
    for (var i = 0+starter; i < 2+starter; i++) {
        var box = generateNewBox(i);
        document.getElementById("playing").appendChild(box);
        var customBox = new CustomBox(i);
        boxList.push(customBox);
        doMove(i);
    }
}

function doMove(i){
    $('#box' + i).animate ({
        left: '-=50'
    }, 500, 'linear', function() {
        if ($('#box' + i).offset().left > $('#playing').offset().left) {
            doMove(i);
        } else {
            $('#box' + i).css(
                "left", left
            );
            doMove(i);
        }
    });
}

function generateNewBox(i) {
    var d = document.createElement("div");
    var x = document.createElement("CANVAS");
    var ctx = x.getContext("2d");
    d.style.backgroundImage = 'url(images/Pipe_1.png)';
    d.style.backgroundRepeat = "no-repeat";
    d.setAttribute("id", "box"+i);
    d.style.left = left;
    d.style.top = (i%2)!=0 ? calculateDownTop() : "+0%";
    d.appendChild(x);
    return d;
}

function calculateDownTop() {
    return "+45.5%";
}
