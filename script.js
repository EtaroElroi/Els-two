
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductList {

    constructor(container = '.goods-list') {
        this.container = container;
        this.totalSum = 0;
        this.goods = [];
        this.getImage = [];
        this._getProducts()
            .then(data => {
                this.goods = data;
                this._getImg()
                this.render()
                this.totalSumCart()
            });
    }

    _getImg() {

        this.getImage = [
            { img: 'img/notebook.jpg' },
            { img: 'img/mouse.jpg' }
        ];

        const dataWithImg = this.goods.map((item, idx) => {
            return {
                ...item,
                ...this.getImage[idx]
            }
        });

        this.goods = dataWithImg;
    }

    _getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(claim => claim.json())
            .catch(console.error())
    }


    render() {
        const cart = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            cart.insertAdjacentHTML('beforeend', item.render());
        }
        document.querySelector('.main-wrap').addEventListener('click', check => {
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
        this.product_name = product.product_name;
        this.price = product.price;
        this.img = product.img
    }

    render() {
        return `<div class="product__item">
    <div class="product__item-opacity">
        <div class="product__item-img"><img src="${this.img}" alt="dresses"></div>
        <button class="product__item-button-card product__item-button-card--link">Add to
            Cart</button>
    </div>
    <div class="product__item-wrap-text">
        <h3 class="product__item-title">${this.product_name}</h3>
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

class Cart {

    constructor(container = '.cart-block') {
        this.container = container;
        this.goods = [];
        this._getCartItem()
            .then(data => {
                this.goods = data.contents;
                this._getImg()
                this.render()
            });
    }

    _getImg() {

        this.getImage = [
            { img: 'img/notebook.jpg' },
            { img: 'img/mouse.jpg' }
        ];

        const dataWithImg = this.goods.map((item, idx) => {
            return {
                ...item,
                ...this.getImage[idx]
            }
        });

        this.goods = dataWithImg;
    }

    _getCartItem() {
        return fetch(`${API}/getBasket.json`)
            .then(claim => claim.json())
            .catch(console.error())
    }


    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new CartItem();
            block.insertAdjacentHTML('beforeend', productObj.render(product));
        }

        document.querySelector('footer').addEventListener('click', check => {
            if (!check.target.closest('.shopping-cart__button-link')) {
                return;
            }
            block.classList.toggle('visually-hidden');
        });
    }
}

class CartItem {

    render(product) {
        return `<div class="product__item">
    <div class="product__item-opacity">
        <div class="product__item-img"><img src="${product.img}" alt="dresses"></div>
        <button class="product__item-button-card product__item-button-card--link">Add to
            Cart</button>
    </div>
    <div class="product__item-wrap-text">
        <h3 class="product__item-title">${product.product_name}</h3>
        <p class="product__item-description">Known for her sculptural takes on traditional
            tailoring,
            Australian
            arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
        <p class="product__item-price">$${product.price}</p> <br>
        <p class="shopping-cart__make-order-total--quantity">Quantity: ${product.quantity}</p>
    </div>
    </div>`;
    }
}

let cardList = new Cart();