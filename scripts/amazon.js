let productsHTML = '';

products.forEach((product) => {
  // 1. use JS to create all the html, so we don't need to copy and paste all HTML code for each product
  // 2. combine all the html together
  productsHTML += `
    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image"
          src="${product.image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>

      <div class="product-rating-container">
        <img class="product-rating-stars"
          src="images/ratings/rating-${product.rating.stars * 10}.png">
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>

      <div class="product-price">
        $${(product.priceCents / 100).toFixed(2)}
      </div>

      <div class="product-quantity-container">
        <select>
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div class="product-spacer"></div>

      <div class="added-to-cart">
        <img src="images/icons/checkmark.png">
        Added
      </div>

      <button class="add-to-cart-button button-primary js-add-to-cart"
      data-product-id="${product.id}">
        Add to Cart
      </button>
    </div>
  `;
});

// 3. put it on the Web page (using DOM)
document.querySelector('.js-products-grid')
  .innerHTML = productsHTML;

// Add interactive to 'Add to Cart' button
document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;

      let matchingItem;
      // Whether it's in the cart
      cart.forEach((Item) => {
        if (productId === Item.productId) {
          matchingItem = Item; // Array is a reference!
        }
      });
      // Add quantity or new product
      if (matchingItem) {
        matchingItem.quantity++;
      }
      else {
        cart.push({
          productId,
          quantity: 1
        });
      }

      console.log(cart);
    });
  });