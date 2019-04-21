
//add to cart
var productsCount = document.getElementById("product-quantity");

var addToCartButtons = document.querySelectorAll(".add-to-cart");

for(var i = 0; i < addToCartButtons.length; i++) {
	addToCartButtons[i].addEventListener("click", function () {
		var prevProductsCount = +productsCount.textContent;
		productsCount.textContent = prevProductsCount + 1;
		
	})
}

//change like state
var likeButtons = document.querySelectorAll(".like");
console.log(likeButtons);
/*for(var i = 0; i < likeButtons.length; i++) {
	likeButtons[i].addEventListener("click", function () {
		this.classList.toggle("like-on");
	})

}*/

for(var i = 0; i < likeButtons.length; i++) {
	likeButtons[i].addEventListener("click", function () {
		if(this.classList.contains("liked")) {
			this.classList.remove("liked");
		} else {
			this.classList.add("liked");
		}
	})
}

/*var decrementProductButton = document.querySelectorAll(".decrement-button")[0];

var incrementProductButton = document.querySelectorAll(".increment-button")[0];

var quantityInput = document.querySelectorAll(".quantity-input input")[0];

decrementProductButton.disabled = true;
decrementProductButton.addEventListener("click", function() {
	var currentCount = +quantityInput.value;
	if(currentCount < 3) {
		decrementProductButton.disabled = true;
	}
	quantityInput.value = currentCount - 1;
	incrementProductButton.disabled = false;
})

incrementProductButton.addEventListener("click", function() {
	var currentCount = +quantityInput.value;
	if(currentCount > 9) {
		incrementProductButton.disabled = true;
	} else {
		quantityInput.value = currentCount + 1;
		decrementProductButton.disabled = false;

	}
	
})*/

var decrementProductButtons = document.querySelectorAll(".decrement-button");

var incrementProductButtons = document.querySelectorAll(".increment-button");

var quantityInputs = document.querySelectorAll(".quantity-input input");

	
	
      for(var i = 0; i < decrementProductButtons.length; i++) {
       	decrementProductButtons[i].addEventListener("click", function() {
      		var currentCount = +this.nextElementSibling.value;
      		if(currentCount < 2) {
				this.disabled = true;
			}else {
				this.nextElementSibling.value = currentCount - 1;
      			this.nextElementSibling.nextElementSibling.disabled = false;
			}
      		
      	})
      }

      for(var i = 0; i < incrementProductButtons.length; i++) {
      	incrementProductButtons[i].addEventListener("click", function() {
      		var currentCount = +this.previousElementSibling.value;
      		if(currentCount > 9) {
			this.disabled = true;
			} else {
				this.previousElementSibling.value = currentCount + 1;
				this.previousElementSibling.previousElementSibling.disabled = false;
			}
      	})
      }