

var productsCount = document.getElementById("product-quantity");

var addToCartButtons = document.querySelectorAll(".add-to-cart");

for(var i = 0; i < addToCartButtons.length; i++) {
	addToCartButtons[i].addEventListener("click", function () {
		var prevProductsCount = +productsCount.textContent;
		productsCount.textContent = prevProductsCount + 1;
		
	})
}


var likeButtons = document.querySelectorAll(".like");
console.log(likeButtons);
for(var i = 0; i < likeButtons.length; i++) {
	likeButtons[i].addEventListener("click", function () {
		this.classList.toggle("like-on");
	})

}




      