// JavaScript để hiển thị số lượng sản phẩm trong giỏ hàng và thêm hiệu ứng slider cho sản phẩm
document.addEventListener('DOMContentLoaded', function() {
    // Thêm hiệu ứng slider cho sản phẩm nổi bật
    const productSlider = document.querySelector('.product-slider');
    let isDown = false;
    let startX;
    let scrollLeft;

    productSlider.addEventListener('mousedown', (e) => {
        isDown = true;
        productSlider.classList.add('active');
        startX = e.pageX - productSlider.offsetLeft;
        scrollLeft = productSlider.scrollLeft;
    });

    productSlider.addEventListener('mouseleave', () => {
        isDown = false;
        productSlider.classList.remove('active');
    });

    productSlider.addEventListener('mouseup', () => {
        isDown = false;
        productSlider.classList.remove('active');
    });

    productSlider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - productSlider.offsetLeft;
        const walk = (x - startX) * 2; // Tăng tốc độ kéo
        productSlider.scrollLeft = scrollLeft - walk;
    });

    // Xử lý thêm vào giỏ hàng
    const addToCartButton = document.querySelector('.btn-primary');
    addToCartButton.addEventListener('click', () => {
        alert('Item added to cart!');
        // Cập nhật số lượng giỏ hàng
        const cartIcon = document.querySelector('.cart-icon a');
        const cartCount = parseInt(cartIcon.textContent.match(/\d+/)[0]) + 1;
        cartIcon.innerHTML = `<i class="fas fa-shopping-cart"></i> Cart (${cartCount})`;
    });
});
