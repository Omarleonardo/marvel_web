const productSection = document.getElementById("product_section");

productSection.innerHTML = `
<div class="product_header">
    <a href="/views/marvel_store.html" class="back_link">← back</a>
</div>
<div class="product_container">
    <div class="product_info">
        <h1 class="product_title">Thanos Infinity Gauntlet Action Figure</h1>
        <p class="product_brand">Marvel Merchandise</p>
        <div class="product_rating">
            <div class="rating_stars">
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star'></i>
            </div>
            <span class="rating_reviews">157 Reviews</span>
        </div>
        <div class="product_tabs">
            <button class="tab_button">About</button>
            <button class="tab_button">Specifications</button>
            <button class="tab_button">Reviews</button>
        </div>
        <div class="product_description">
            <p>Bring one of the most powerful weapons in the Marvel Universe to life! With this premium Infinit Gauntlet Articulated Electronic Fist from the Marvel Legends Series, lift up the power of the Infinity Stones and imagine taking control of the galaxy with the notorious gauntlet worn by the supreme being, Thanos.</p>
        </div>
        <div class="product_price">
            <p class="price">$149.98</p>
        </div>
        <div class="product_quantity">
            <label for="quantity">Qty</label>
            <input type="number" id="quantity" value="1" min="1" step="1">
        </div>
        <div class="product_subtotal">
            <p>Subtotal - $149.98</p>
        </div>
        <div class="product_add_to_cart">
            <button class="add_to_cart_button">Add to Cart</button>
        </div>
    </div>
    <div class="product_image">
        <img src="/public/images/guantlet_store.png" alt="Thanos Infinity Gauntlet">
    </div>
</div>`;
