class Flock {
    constructor(n) {
        this.seagulls = n;
    }

    // plus
    conjoin(other) {
        this.seagulls += other.seagulls;
        return this;
    }

    // times
    breed(other) {
        this.seagulls = this.seagulls * other.seagulls;
        return this;
    }
}

const flockA = new Flock(4);
const flockB = new Flock(2);
const flockC = new Flock(0);
const result = flockA
    .conjoin(flockC)
    .breed(flockB)
    .conjoin(flockA.breed(flockB))
    .seagulls;
console.log(result)