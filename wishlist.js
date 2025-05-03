
      let wishListProducts = JSON.parse(localStorage.getItem("wishlist"));
      console.log(wishListProducts);
      const div = document.querySelector("#maindiv");

      const tableBody = document.querySelector("#table");

      function mapInTable() {
        wishListProducts.map((e) => {
          const tableRow = document.createElement("tr");
          tableBody.appendChild(tableRow);
          tableRow.innerHTML = `                        
                    <td class="px-6 py-4" >
                        <img src="${e.path}" alt="" class="img" width="64px" height="64px"
                            class="w-16 h-16 object-cover rounded" />
                    </td>
                    <td class="px-6 py-4 font-medium text-gray-900 name" id="name"> ${e.title}</td>
                    <td class="px-6 py-4 price" id="price">${e.price}</td>
                    <td class="px-6 py-4 text-green-600 font-semibold">In Stock</td>
                    <td class="px-6 py-4 flex space-x-2">
                     <button class="bg-blue-500 hover:bg-blue-600 text-white text-xs px-7 py-4 rounded text-nowrap" id="cartBtn">Add to
                            Cart</button>
                        <button
                            class="bg-red-500 text-nowrap hover:bg-red-600 text-white text-xs px-7 py-4 rounded" id="remove">Remove</button>
                    </td>
                `;

          const remove = tableRow.querySelector("#remove");
          remove.addEventListener("click", function () {
            localStorage.removeItem("wishlist");
            wishListProducts = wishListProducts.filter(
              (element) => element.title != e.title
            );
            localStorage.setItem("wishlist", JSON.stringify(wishListProducts));
            tableRow.remove();
            if (wishListProducts.length == 0) {
              localStorage.removeItem("wishlist");
              div.innerHTML = "";
              div.innerText = "Your wish list is empty";
              div.style.cssText = "text-align:center; font-size:20px";
            }
          });
        });
      }

      if (wishListProducts != null && wishListProducts.length > 0) {
        mapInTable();
      } else {
        localStorage.removeItem("wishlist");
        div.innerHTML = "";
        div.innerText = "Your wish list is empty";
        div.style.cssText = "text-align:center; font-size:20px";
      }