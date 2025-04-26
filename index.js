
    const slider = document.getElementById("slider");
    const slideLeft = document.getElementById("slideLeft");
    const slideRight = document.getElementById("slideRight");

    // Scroll by buttons
    slideLeft.addEventListener("click", () => {
      slider.scrollBy({ left: -300, behavior: "smooth" });
    });

    slideRight.addEventListener("click", () => {
      slider.scrollBy({ left: 300, behavior: "smooth" });
    });

    // Function to toggle arrow visibility
    function updateArrows() {
      // Show left arrow only if not at the start
      if (slider.scrollLeft > 0) {
        slideLeft.classList.remove("hidden");
      } else {
        slideLeft.classList.add("hidden");
      }

      // Optionally hide right arrow at the end
      if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth - 5) {
        slideRight.classList.add("hidden");
      } else {
        slideRight.classList.remove("hidden");
      }
    }

    // Listen to scroll and call function
    slider.addEventListener("scroll", updateArrows);

    // Also call on page load
    window.addEventListener("load", updateArrows);

    function currentPage(page){
      let all = document.querySelectorAll(".button")
      all.forEach(btn=>btn.classList.remove('select'))
      page.classList.add('select')
    }

    function selectedBtn(clickedBtn) {
      const allButtons = document.querySelectorAll('.btn');
      allButtons.forEach(btn => btn.classList.remove('selected'));

      clickedBtn.classList.add('selected');
    }

    let container = document.querySelector("#parent")
    let products = [
            {
                path: "https://m.media-amazon.com/images/I/51RLYkZQluL._AC_UY1000_.jpg",
                title: "Mens Cotton Jacket",
                price: "$55.99",
                description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiki",
                category: "Clothing"
            },
            {
                path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUEuIUy9tbXcC5wJQaLTOojfND5HOaF7U3-g&s",
                title: "Mens Casual Premium",
                price: "$22.3",
                description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fa",
                category: "Clothing"
            },
            {
                path: "https://m.media-amazon.com/images/I/81zWnT1GY+L._AC_SL1500_.jpg",
                title: "Fjallraven - Foldsac",
                price: "$109.95",
                description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in t",
                category: "Clothing"
            },
            {
                path: "https://johnhardy.com/cdn/shop/files/BBS651041BSP_Main.jpg?v=1726057015",
                title: "John Hardy Women's L",
                price: "$695",
                description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the oc",
                category: "jewellery"
            },
            {
                path: "https://cdn.shoplightspeed.com/shops/645668/files/54211819/1000x640x2/western-digital-western-digital-2tb-elements-porta.jpg",
                title: "WD 2TB Elements Port",
                price: "$64",
                description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatible",
                category: "electronics"
            },
            {
                path: "https://images.squarespace-cdn.com/content/v1/5b4544e485ede17941bc95fc/88b32e09-f809-4e16-8dc4-9a26a18d142a/arc%E2%80%99teryx-beta-sl.jpg",
                title: "Rain Jacket Women Wi",
                price: "$39.99",
                description: "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist de",
                category: "Clothing"
            },
            {
                path: "https://5.imimg.com/data5/BY/GZ/OO/SELLER-88156244/boy-cotton-jacket-500x500.jpg",
                title: "Mens Cotton Jacket",
                price: "$55.99",
                description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiki",
                category: "Clothing"
            },
            {
                path: "https://www.thoughtco.com/thmb/x1_k2-GNKgiM0GOv_JWus0CQkgU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-173609232-569d7ef73df78cafda9d4f76.jpg",
                title: "White Gold Plated Pr",
                price: "$9.99",
                description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love",
                category: "jewellery"
            },
            {
                path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSUT6cLrk4WHV0uQzyA_ZKCVX7p6_hwbS6-Q&s",
                title: "Samsung 49-Inch CHG9",
                price: "$999.99",
                description: "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT",
                category: "electronics"
            },
            {
                path: "https://m.media-amazon.com/images/I/61mExYRV6mL._AC_SL1500_.jpg",
                title: "SanDisk SSD PLUS 1TB",
                price: "$109",
                description: "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SA",
                category: "electronics"
            }
        ]
        let WishList=[]
        let cart = []
        
        function mappingProducts(array){
          array.map(element=>{
            let div = document.createElement("div")
            let title = document.createElement("h1")
            let price = document.createElement("h3")
            let des = document.createElement("p")
            let img = document.createElement("img")
            let btnDiv = document.createElement("div")
            let WishlistBtn = document.createElement("button")
            let cartBtn = document.createElement("button")
            
            container.appendChild(div)
            div.appendChild(title)
            div.appendChild(img)
            div.appendChild(price)
            div.appendChild(des)
            btnDiv.appendChild(WishlistBtn)
            btnDiv.appendChild(cartBtn)
            div.appendChild(btnDiv)

            title.innerText= element.title
            price.innerText = element.price
            des.innerText= element.description
            img.src = element.path
            WishlistBtn.innerText = "Add to Wishlist"
            cartBtn.innerText = "Add to Cart"
  
            img.style.cssText="border-radius:10px; height:260px; width:260px"
            div.style.cssText= "border:1px solid #DBDBDB; width:320px; padding:10px; display:flex; justify-content:center; align-items: center; flex-direction:column; gap:6px; border-radius:20px; box-shadow: 2px 2px 5px gray;"
            des.style.cssText= "text-align:center; padding-left:8px;  padding-right:8px; color:gray"
            price.style.cssText="color:#3A59D1; font-size:22px"
            title.style.cssText="font-size:24px; font-weight:30px"
            btnDiv.style.cssText="display:flex; gap:10px"
            WishlistBtn.style.cssText="background-color:red; color:white; padding-left:10px; padding-right:10px; padding-top:10px; padding-bottom:10px; border-radius:8px;  font-size:16px; font-weight:600;"
            cartBtn.style.cssText="background-color:gray; color:white; padding-left:22px; padding-right:22px; padding-top:10px; padding-bottom:10px; border-radius:8px; font-size:16px; font-weight:600;"

           

            WishlistBtn.addEventListener("click",function(){
              WishList.push(element)
               localStorage.setItem("wishlist",JSON.stringify(WishList))
            })
             cartBtn.addEventListener("click", function () {
              cart.push(element)
              localStorage.setItem("cart",JSON.stringify(cart))
            })
        })
        }
       
        
        mappingProducts(products)
        // Function that fetch previous data from local storage
        function getWishList(){
            let previousWishlist = JSON.parse(localStorage.getItem("wishlist")) 
        
        previousWishlist.map(e=>{
            WishList.push(e)
        })
        }

        function getCart(){
          let previousCart = JSON.parse(localStorage.getItem("cart"))

          previousCart.map(e=>{
            cart.push(e)
          })
        }

        getWishList()
        getCart()
        //show all  products
        function mapAll(){
          container.innerHTML=""
          mappingProducts(products)
        }

       
        
        // separate electronics products
        function  electronics(){
           let electronics = products.filter(e=>e.category == "electronics")
           container.innerHTML=""
           mappingProducts(electronics)
          
        }


        // separate clothing products
        function  clothing(){
           let clothes = products.filter(e=>e.category == "Clothing")
           container.innerHTML=""
           mappingProducts(clothes)
          
        }
    
        

        // seperate jewellery products
        function  jewellery(){
           let jewellery = products.filter(e=>e.category == "jewellery")
           container.innerHTML=""
           mappingProducts(jewellery)
          
        }
   