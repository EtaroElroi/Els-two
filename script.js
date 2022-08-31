


class Cart {

    constructor() {

    }

    addToCart(id, name, price) { }

    getTotalBasketCount() { }

    getTotalBasketPrice() { }

    renderProductInBasket() { }

    renderNewProductInBasket() { }
}


class ProductList {

    constructor(container = '.goods-list') {
        this.container = container;
        this.totalSum = 0;
        this.goods = [];
        this.giveGoods();
        this.render();
        this.totalSumCart();
    }

    giveGoods() {
        this.goods = [
            { title: 'Shirt', price: 150, img: 'img/t-shirt.png' },
            { title: 'Dresses', price: 50, img: 'img/dresses.png' },
            { title: 'Jacket', price: 350, img: 'img/jacket.png' },
            { title: 'Hoody', price: 250, img: 'img/hoody.jpg' },
        ];
    }

    render() {
        const cart = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            cart.insertAdjacentHTML('beforeend', item.render());
        }
        document.querySelector('footer').addEventListener('click', check => {
            if (!check.target.closest('.product__button-catalog-link')) {
                return;
            }
            cart.classList.toggle('visually-hidden');
        });
    }

    totalSumCart() {
        const sumCart = document.querySelector('.shopping-cart__make-order-total--price');
        for (let productPrice of this.goods) {
            this.totalSum += productPrice.price;
        }
        sumCart.append(this.totalSum);
    }


}

class ProductItem {
    constructor(product) {
        this.title = product.title;
        this.price = product.price;
        this.img = product.img;
    }

    render() {
        return `<div class="product__item">
    <div class="product__item-opacity">
        <div class="product__item-img"><img src="${this.img}" alt="dresses"></div>
        <button class="product__item-button-card product__item-button-card--link">Add to
            Cart</button>
    </div>
    <div class="product__item-wrap-text">
        <h3 class="product__item-title">${this.title}</h3>
        <p class="product__item-description">Known for her sculptural takes on traditional
            tailoring,
            Australian
            arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
        <p class="product__item-price">$${this.price}</p>
    </div>
    </div>`;
    }
}
const list = new ProductList();