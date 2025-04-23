
function loadProducts(){
   document.getElementById("productList").innerText = "Loading.....";

//    Step1 : Fetch API returns a promise

      fetch("https://dummyjson.com/products")
      .then((response)=>{
        return response.json();
      }).then((data)=>{
        console.log(data);
        displayProducts(data.products);
      }).catch((error)=>{
        console.error("Failed to load products.");
        document.getElementById("productList").innerText = "Failed to load products";
      })
}


function displayProducts(products){
    const container = document.getElementById("productList");
    container.innerHTML= "";  

    products.forEach((product)=>{
        const div = document.createElement("div");
        div.className = "product";

        div.innerHTML = `

        <img src=${product.thumbnail} alt=${product.title}>
        <div>
            <h3>${product.title}</h3>
            <p>${product.price}</p>
            <p>${product.description}</p>
        </div>
        `;

        container.appendChild(div);
    })

}

