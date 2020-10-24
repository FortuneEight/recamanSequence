class Arc {
    static clrs = ["#FFFFFF", "#0000AA"];
    constructor(start, end, dir) {
        this.start = start;
        this.end = end;
        this.dir = dir;
        this.clr = random(Arc.clrs);
    }

    show() {
        let diameter = abs(this.end - this.start);
        let x = (this.end + this.start) / 2;

        stroke(this.clr);
        strokeWeight(0.5);
        noFill();

        if (this.dir == 0) {
            arc(x, 0, diameter, diameter, PI, 0);
        } else {
            arc(x, 0, diameter, diameter, 0, PI);
        }
    }

}