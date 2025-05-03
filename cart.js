let cartProducts = JSON.parse(localStorage.getItem("cart"));
console.log(cartProducts);

const tableBody = document.querySelector("#tableBody");

function mapCarts() {
  cartProducts.map((e) => {
    const tableRow = document.createElement("tr");
    tableBody.appendChild(tableRow);
    tableRow.innerHTML = `<tr class="border-b">
            <td class="flex items-center gap-8 p-4 border border-gray-200">
              <img src="${e.path}" id="image" class="w-14 h-14 rounded-lg" alt="Product">
              <span id="name">${e.title}</span>
            </td>
            <td class="p-4 border border-gray-200" id="price">${e.price}</td>
            <td class="text-center p-4 border border-gray-200">
              <div class="inline-flex items-center gap-2">
                <button class="px-2 py-1 bg-gray-200 rounded">−</button>
                <span>2</span>
                <button class="px-2 py-1 bg-gray-200 rounded">+</button>
              </div>
            </td>
            <td class="text-right p-4 border border-gray-200">$199.98</td>
            <td class="text-center p-4 border border-gray-200">
              <button class="text-red-500 hover:underline" id="remove">Remove</button>
            </td>
          </tr>`;

          const remove = tableRow.querySelector("#remove")
          remove.addEventListener("click",function(){
            tableRow.innerHTML=""
            localStorage.removeItem("cart")
            cartProducts = cartProducts.filter(element=>element.title != e.title)
            localStorage.setItem("cart",JSON.stringify(cartProducts))


            if (cartProducts.length == 0) {
              localStorage.removeItem("cart")
              let empty = document.querySelector("#empty");
              empty.innerHTML = "";
              const div = document.createElement("div");
              empty.appendChild(div);
              div.innerText = "Your Cart is empty";
              div.style.cssText =
                "text-align:center; font-size:20px; padding:24px;   background-color:white; border-radius:8px; margin-top:2px; shadow:4px 4px 4px black";
            }
          })
  });
}

if (cartProducts != null && cartProducts.length > 0) {
  mapCarts();
} else {
  let empty = document.querySelector("#empty");
  empty.innerHTML = "";
  localStorage.removeItem("cart")
  const div = document.createElement("div");
  empty.appendChild(div);
  div.innerText = "Your Cart is empty";
  div.style.cssText =
    "text-align:center; font-size:20px; padding:24px;   background-color:white; border-radius:8px; margin-top:2px; shadow:4px 4px 4px black";
}
