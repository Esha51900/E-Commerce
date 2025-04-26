const cartProducts = JSON.parse(localStorage.getItem("cart"))
console.log(cartProducts)

const tableBody = document.querySelector("#tableBody")


function mapCarts(){
   cartProducts.map(e=>{
    const tableRow = document.createElement("tr")
    tableBody.appendChild(tableRow)
    tableRow.innerHTML=`<tr class="border-b">
            <td class="flex items-center gap-8 p-4 border border-gray-200">
              <img src="" id="image" class="w-14 h-14 rounded-lg" alt="Product">
              <span id="name">Wireless Headphones</span>
            </td>
            <td class="p-4 border border-gray-200" id="price">$99.99</td>
            <td class="text-center p-4 border border-gray-200">
              <div class="inline-flex items-center gap-2">
                <button class="px-2 py-1 bg-gray-200 rounded">−</button>
                <span>2</span>
                <button class="px-2 py-1 bg-gray-200 rounded">+</button>
              </div>
            </td>
            <td class="text-right p-4 border border-gray-200">$199.98</td>
            <td class="text-center p-4 border border-gray-200">
              <button class="text-red-500 hover:underline">Remove</button>
            </td>
          </tr>`

          const img = tableRow.querySelector("#image")
          img.src=e.path
          const title= tableRow.querySelector("#name")
          title.innerText = e.title
          const Price = tableRow.querySelector("#price")
          Price.innerText=e.price
   }) 

}

if(cartProducts != null){
  mapCarts()
}
else{
  let empty = document.querySelector("#empty")
  empty.innerHTML=""
  const div = document.createElement("div")
  empty.appendChild(div)
  div.innerText="Your Cart is empty"
  div.style.cssText="text-align:center; font-size:20px; padding:24px;   background-color:white; border-radius:8px; margin-top:2px; shadow:4px 4px 4px black"

}