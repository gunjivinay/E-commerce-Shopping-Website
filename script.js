const products = [
    {
      id: 1,
      name: "Hertfoid Upholstered Chair",
      price: 101,
      image: "/images/1.png",
      slug: "hertfoid-upholstered-chair",
    },
    {
      id: 12,
      name: 'Nilkamal Freedom Large 18 (FMSC18) Shoe Rack Plastic',
      price: 270,
      image: "/images/12.webp",
      slug: "Nilkamal Freedom Large 18 (FMSC18) Shoe Rack Plastic",
    },

    {
      id: 3,
      name: "Jeses Minimore Modern Style Etta",
      price: 181,
      image: "/images/3.png",
      slug: "jeses-minimore-modern-style-etta",
    },
    {
      id: 10,
      name: 'Lukzer 3 Layer Engineered Wood Multipurpose Rack',
      price: 500,
      image: "/images/10.webp",
      slug: "Lukzer 3 Layer Engineered Wood Multipurpose Rack",
    },
    {
      id: 4,
      name: "JJeses Minimore Modern Style",
      price: 201,
      image: "/images/4.png",
      slug: "jjeses-minimore-modern-style",
    },
    {
      id: 20,
      name: "RAEGR RapidGear X30 Wired Gaming Keyboard and Mouse Combo 1200 DPI, LED Rainbow Backlit",
      price: 129,
      image: "/images/20.jpg",
      slug: "RAEGR RapidGear X30 Wired Gaming Keyboard and Mouse Combo 1200 DPI, LED Rainbow Backlit",
    },
  
    {
      id: 6,
      name: "Jaqueze Upholstered Armchair",
      price: 111,
      image: "/images/6.png",
      slug: "jaqueze-upholstered-armchair",
    },
    {
      id: 16,
      name: "WHITEDOT SPORTS",
      price: 1500,
      image: "/images/16.jpg",
      slug: "WHITEDOT SPORTS",
    },
  
    {
      id: 8,
      name: 'Stephanny 27.5" Wide Tufted',
      price: 220,
      image: "/images/8.png",
      slug: "stephanny-275-wide-tufted-armchair",
    },
    {
      id: 9,
      name: 'Skafa Metal End of Bed Bench-Upholstered Entry Shoe Storag',
      price: 350,
      image: "/images/9.webp",
      slug: "Skafa Metal End of Bed Bench-Upholstered Entry Shoe Storag",
    },

    {
      id: 11,
      name: 'UHUD Crafts Beautiful Antique Wooden Fold-able Side',
      price: 50,
      image: "/images/11.webp",
      slug: "UHUD Crafts Beautiful Antique Wooden Fold-able Side",
    },
    {
      id: 12,
      name: 'Nilkamal Freedom Large 18 (FMSC18) Shoe Rack Plastic',
      price: 270,
      image: "/images/12.webp",
      slug: "Nilkamal Freedom Large 18 (FMSC18) Shoe Rack Plastic",
    },
    {
      id: 2,
      name: "Abingdon Upholstered Chair Swivel",
      price: 151,
      image: "/images/2.png",
      slug: "abingdon-upholstered-chair-swivel",
    },
    {
      id: 13,
      name: "Bacca BucciMen's Sneaker ",
      price: 393,
      image: "/images/13.webp",
      slug: "Bacca BucciMen's Sneaker ",
    },
    {
      id: 14,
      name: "CB-COLEBROOK Men's Casual Button Down Shirts Long Sleeve",
      price: 270,
      image: "/images/14.jpg",
      slug: "Nilkamal Freedom Large 18 (FMSC18) Shoe Rack Plastic",
    },
    {
      id: 15,
      name: "Mens Chronograph Watch Gold Silver Stainless Steel Chain",
      price: 900,
      image: "/images/15.webp",
      slug: "Mens Chronograph Watch Gold Silver Stainless Steel Chain",
    },
    {
      id: 7,
      name: "Leston Wide Upholstered Fabric",
      price: 121,
      image: "/images/7.png",
      slug: "leston-wide-upholstered-fabric",
    },
    {
      id: 17,
      name: "Boldfit Adjustable Hand Grip Strengthener",
      price: 27,
      image: "/images/17.jpg",
      slug: "Boldfit Adjustable Hand Grip Strengthener",
    }, 
    {
      id: 18,
      name: "Samsung 653 L, 3 Star, Frost Free, Double Door, Convertible 5-in-1 Digital Inverter",
      price: 5000,
      image: "/images/18.jpg",
      slug: "Samsung 653 L, 3 Star, Frost Free, Double Door, Convertible 5-in-1 Digital Inverter",
    }, {
      id: 19,
      name: "Blue Star 2 Ton 5 Star, 60 Months Warranty, Inverter Split AC",
      price: 3000,
      image: "/images/19.jpg",
      slug: "Blue Star 2 Ton 5 Star, 60 Months Warranty, Inverter Split AC",
    }, 
    {
      id: 5,
      name: "Bolanle Upholstered Armchair",
      price: 251,
      image: "/images/5.png",
      slug: "bolanle-upholstered-armchair",
    },
    

  ];



const cart = [];


function searchProducts() {
    let query = document.getElementById("search").value.toLowerCase();

    let filtered = products.filter((product) => {

       return product.name.toLowerCase().includes(query);
    })
    displayProducts(filtered);
}


  function displayProducts(filtered = products) {
    
    let productDiv = document.getElementById("products");

    productDiv.innerHTML = "";

    filtered.forEach((product) => {

        let productContainer = document.createElement("div");
        productContainer.classList.add("product");
        productContainer.innerHTML = `
            <img class="img1" src="${product.image}" alt="">
            <p class="p1">${product.name}</p>
            <p class="p2">$${product.price}</p>
            <button class="add" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productDiv.appendChild(productContainer);

    })    

  }


  function addToCart(id){

    let selectedProduct = products.find((product) => product.id === id);
    let existingItem = cart.find((item) => item.id === id);


    if(existingItem) {
        existingItem.quantity += 1;
    }
    else { 
        cart.push({...selectedProduct, quantity: 1});
    }




    showToast()
    updateCart()
  }



  function updateCart(){
    let cartDiv = document.getElementById("cart-c");
    cartDiv.innerHTML = "";

    let totalAmount = 0;

    if(cart.length === 0) {
        cartDiv.innerHTML = "<p>Your cart is empty</p>";
        document.getElementById("total").textContent = "Total: $0";
        localStorage.removeItem("cart");
        return;
    }

    cart.forEach((item,index)=>{
        let cartItem = document.createElement("div");
        cartItem.classList.add("cart-p");

        totalAmount += item.price * item.quantity;
        cartItem.innerHTML = `
           <img src="${item.image}" alt="${item.name}">
            <p>${item.name} - ${item.price}</p>
            <input type="number" min="1" value = "${item.quantity}" onchange="quantityUpdate(${index},this.value)"/>
            <button class="remove" onclick="remove(${index})">Remove</button>
        `;
        cartDiv.appendChild(cartItem);
        
    })
    


document.getElementById("total").textContent = `Total: ${totalAmount}`;

localStorage.setItem("cart", JSON.stringify(cart));

  }

  window.addEventListener("DOMContentLoaded", () => {
    let storedCart = localStorage.getItem("cart");
    if(storedCart) {
        cart.push(...JSON.parse(storedCart));
        updateCart();
    }
  });





function remove(index){
    cart.splice(index, 1);
    updateCart();
}


function quantityUpdate(index, quantity){

  cart[index].quantity = Math.max(1, quantity);
  updateCart();


}




  displayProducts();




 function toggleCart(){

  const cart = document.querySelector(".cart");

  const toggleBtn = document.getElementById("cart-toggle-btn");

  cart.classList.toggle("open");

  if(cart.classList.contains("open")) {
    toggleBtn.textContent = "❌";
  }

  else {
    toggleBtn.textContent = "🛒";
  }

 }


 function showToast(){
  const toast = document.getElementById("toast");
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
 }