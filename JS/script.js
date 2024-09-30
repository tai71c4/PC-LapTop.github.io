// Function to filter products by category
document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab');
    const products = document.querySelectorAll('.product-item');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const category = this.getAttribute('data-category');

            // Update active tab
            tabs.forEach(tab => tab.classList.remove('active'));
            this.classList.add('active');

            // Show/Hide products
            products.forEach(product => {
                if (category === 'all' || product.classList.contains(category)) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    });

    // Show 'All' category by default
    document.querySelector('.tab[data-category="all"]').click();
});

// Function to open product details modal
function openDetailsModal(title, year, cpu, ram, price, description, imgSrc) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-year').textContent = year;
    document.getElementById('modal-cpu').textContent = cpu;
    document.getElementById('modal-ram').textContent = ram;
    document.getElementById('modal-price').textContent = price;
    document.getElementById('modal-description').textContent = description;
    document.getElementById('modal-image').src = imgSrc;

    document.getElementById('product-modal').style.display = 'block';
}

// Function to close the modal
function closeDetailsModal() {
    document.getElementById('product-modal').style.display = 'none';
}

// Close modal when clicking outside the modal content
window.onclick = function (event) {
    const modal = document.getElementById('product-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
