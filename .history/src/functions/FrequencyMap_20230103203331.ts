// to
export class FrequencyMap extends Map {
    constructor(iterable: any[]) {
        super();
        iterable.forEach(value => this.add(value))
    }


    add(value: any) {
        console.log('this', this);
        
        if (this.has(value)) super.set(value, this.get(value) + 1);
        else super.set(value, 1);
        return this;
    }
}

