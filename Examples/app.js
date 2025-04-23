
// Promises
// Fetch
// Async & Await
// API



// fetch :


// Fetch is a function or method is used in Js to make https requests to API's or webServers and get data.

// It returns a Promise, so we use .then() and catch() or (async/await) to handle the response.

// Syntax :

// fetch("url")
//     .then((response)=>{response.json()})
//     .then((data)=>{
//         // work with the data
//         console.log(data);
//     })
//     .catch((error)=>{
//         // Handle the error appropriately
//         console.error("Error fetching data:", error);
//     })

function loadUsers(){
    fetch("https://dummyjson.com/users")
    .then((res)=>{ return res.json()})
    .then((data)=>{
        console.log(data.users);
    }).catch((error)=>{
        console.error("Error fetching users:", error);
    })
}function loadUsers() {
    const spinner = document.getElementById("spinner");
    const container = document.getElementById("container");

    // Show spinner and clear previous content
    spinner.classList.remove("hidden");
    container.innerHTML = "";

    fetch("https://dummyjson.com/users")
        .then((res) => res.json())
        .then((data) => {
            spinner.classList.add("hidden");

            data.users.forEach(user => {
                const card = document.createElement("div");
                card.className = "bg-white shadow-lg rounded-xl p-4 m-4 w-64 text-center";
                card.innerHTML = `
                    <img class="w-24 h-24 mx-auto rounded-full mb-2" src="${user.image}" alt="${user.firstName}">
                    <h2 class="text-lg font-semibold">${user.firstName} ${user.lastName}</h2>
                    <p class="text-gray-600">${user.email}</p>
                    <p class="text-sm text-gray-500">${user.gender}, Age: ${user.age}</p>
                `;
                container.appendChild(card);
            });
        })
        .catch((error) => {
            spinner.classList.add("hidden");
            console.error("Error fetching users:", error);
            container.innerHTML = `<p class="text-red-500">Failed to load users.</p>`;
        });
}





/// fetch("https://dummyjson.com/users")
//     .then((response)=>{response.json()})
//     .then((data)=>{
//         // work with the data
//         console.log(data);
//     })
//     .catch((error)=>{
//         // Handle the error appropriately
//         console.error("Error fetching data:", error);
//     })

// async and await

const apiEndPoint = "https://dummyjson.com/users";

async function fetchUsers() {
    try{
        const response = await fetch(apiEndPoint);
        const data = await response.json();
        const users = data.users;
    }catch(error){
        console.error("Error fetching users:", error);
    }
}



