export class Bus{
    constructor(id, name, source, destination, fare){
        this.id = id;
        this.name = name;
        this.source = source;
        this.destination = destination;
        this.fare = fare;
    }

    getBusInfo(){
        return `${this.name} - ${this.source} to ${this.destination} @ $ ${this.fare}`
    }
}