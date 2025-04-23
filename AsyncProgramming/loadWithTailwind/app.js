// Function to load products from an API
function loadProducts() {
  // Get the container where products will be displayed
  const productList = document.getElementById("productList");

  // Show a loading message while fetching data
  productList.innerHTML = `<p class="col-span-full text-center text-lg text-gray-500">Loading...</p>`;

  // Fetch product data from the DummyJSON API
  fetch("https://dummyjson.com/products")
    .then((response) => response.json()) // Convert response to JSON
    .then((data) => {
      // Call the function to display products on the page
      displayProducts(data.products);
    })
    .catch((error) => {
      // Handle any errors during fetch and display error message
      console.error("Failed to load products.", error);
      productList.innerHTML = `<p class="col-span-full text-center text-red-600 font-semibold">Failed to load products</p>`;
    });
}

// Function to render product cards on the UI
function displayProducts(products) {
  // Get the product container
  const container = document.getElementById("productList");

  // Clear the container before displaying new products
  container.innerHTML = "";

  // Loop through each product and create a card
  products.forEach((product) => {
    // Create a div element for each product card
    const div = document.createElement("div");

    // Add utility classes for styling the product card
    div.className =
      "bg-white rounded-lg shadow-md p-4 flex flex-col space-y-3 hover:shadow-lg transition";

    // Set the inner HTML of the card with product details
    div.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.title}" class="w-full h-48 object-cover rounded-md" />
      <div>
        <h3 class="text-xl font-semibold mb-1">${product.title}</h3>
        <p class="text-green-600 font-bold mb-1">$${product.price}</p>
        <p class="text-gray-600 text-sm">${product.description}</p>
      </div>
    `;

    // Append the product card to the container
    container.appendChild(div);
  });
}
