/**
 * Created by mengyan on 3/17/15.
 */
$(document).ready( function() {
    //TODO: need to draw a continuous running background
    function loop() {
        $('#box').css({left:0});
        $('#box').animate ({
            left: '+=1400'
        }, 45000, 'linear', function() {
            loop();
        });
    }
    loop();
});