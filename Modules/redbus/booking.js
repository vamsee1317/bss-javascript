
export class Booking{
    constructor(){
        this.bookedBuses = [];
    }


    bookBus(bus, seats){
        this.bookedBuses.push({bus, seats});
    }


    getTotalFare(){
        return this.bookedBuses.reduce((sum, item)=> sum + item.bus.fare * item.seats, 0)
    }

    listBookings(){
        return this.bookedBuses.map((b)=>
            `${b.bus.name} | ${b.seats} | $ ${b.bus.fare * b.seats}`
        ).join("\n")
    }
}