// import { Booking } from "./booking.js";
// import { Bus } from "./bus.js";
// import { log } from "./utils/logger.js";



// // Available Buses

// const bus1 = new Bus(101, "SRS Travels", "Hyderabad", "Bangalore", 1000);
// const bus2 = new Bus(102, "ExpressLine", "Hyderabad", "Chennai", 1500);

// console.log(bus1.getBusInfo());
// console.log(bus2.getBusInfo());


// // Booking 

// const booking = new Booking();

// booking.bookBus(bus1, 2);
// log("Booked 2 seats in SRS Travels");


// booking.bookBus(bus2, 1);
// log("Booked 1 seat in ExpressLine")


// console.log("\n Booking Details");
// console.log(booking.listBookings());


// console.log(`\n $ Total Fare : $ ${booking.getTotalFare()}`);



import { Booking } from "./booking.js";
import { Bus } from "./bus.js";
import { log } from "./utils/logger.js";

// Sample Buses
const buses = [
    new Bus(101, "SRS Travels", "Hyderabad", "Bangalore", 1000),
    new Bus(102, "ExpressLine", "Hyderabad", "Chennai", 1500),
    new Bus(103, "VRL", "Hyderabad", "Mumbai", 2000),
];

// Display Buses in UI
const busList = document.getElementById("busList");
const booking = new Booking();

buses.forEach(bus => {
    const busCard = document.createElement("div");
    busCard.className = "bg-white p-4 rounded shadow flex justify-between items-center";

    const info = document.createElement("div");
    info.innerHTML = `<div class="font-semibold">${bus.name}</div>
                      <div>${bus.source} ➡ ${bus.destination}</div>
                      <div class="text-sm text-gray-500">$${bus.fare} per seat</div>`;

    const action = document.createElement("div");
    action.innerHTML = `
        <input type="number" min="1" value="1" class="border p-1 w-16" />
        <button class="ml-2 bg-blue-500 text-white px-3 py-1 rounded">Book</button>
    `;

    const button = action.querySelector("button");
    const input = action.querySelector("input");

    button.addEventListener("click", () => {
        const seats = parseInt(input.value);
        if (seats > 0) {
            booking.bookBus(bus, seats);
            log(`Booked ${seats} seats in ${bus.name}`);
            updateBookingUI();
        }
    });

    busCard.appendChild(info);
    busCard.appendChild(action);
    busList.appendChild(busCard);
});

// Update UI
function updateBookingUI() {
    document.getElementById("bookingSummary").textContent = booking.listBookings();
    document.getElementById("totalFare").textContent = `$${booking.getTotalFare()}`;
}
