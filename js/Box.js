function CustomBox(id) {
    this.id = id;
    this.timer = null; //timer to check if we should remove animation
    this.number = 1; //how many
    this.setTimer = function(timer) {
        this.timer = timer;
    };
}

