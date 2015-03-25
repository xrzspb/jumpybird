/**
 * Created by mengyan on 3/17/15.
 */
var boxList = [];
$(document).ready( function() {
    for (var i = 0; i < 2; i++) {
        var box = generateNewBox(i);
        document.getElementById("playing").appendChild(box);
        var customBox = new CustomBox(i);
        boxList.push(customBox);
        doMove(i);
    }

    function doMove(i){
        $('#box' + i).animate ({
            left: '-=50'
        }, 500, 'linear', function() {
            if ($('#box' + i).offset().left > 0-$('#box' + i).outerWidth()) {
                doMove(i);
            }
        });
    }
});

function generateNewBox(i) {
    var d = document.createElement("div");
    var x = document.createElement("CANVAS");
    var ctx = x.getContext("2d");
    d.style.backgroundImage = 'url(images/Pipe_1.png)';
    d.style.backgroundRepeat = "no-repeat";
    d.setAttribute("id", "box"+i);
    d.appendChild(x);
    return d;
}
