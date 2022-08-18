const goods = [
    { title: 'Shirt', price: 150, img: 'img/t-shirt.png' },
    { title: 'Dresses', price: 50, img: 'img/dresses.png' },
    { title: 'Jacket', price: 350, img: 'img/jacket.png' },
    { title: 'Hoody', price: 250, img: 'img/hoody.jpg' },
]

const cart = document.querySelector('.goods-list');

const renderGoodsItem = (title, price, img) => {
    return `<div class="product__item">
    <div class="product__item-opacity">
        <div class="product__item-img"><img src="${img}" alt="dresses"></div>
        <button class="product__item-button-card product__item-button-card--link">Add to
            Cart</button>
    </div>
    <div class="product__item-wrap-text">
        <h3 class="product__item-title">${title}</h3>
        <p class="product__item-description">Known for her sculptural takes on traditional
            tailoring,
            Australian
            arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
        <p class="product__item-price">${price}</p>
    </div>
    </div>`;
}

const renderGoodList = (list) => {
    let productList = list.map(item => renderGoodsItem(item.title, item.price, item.img)).join('');
    document.querySelector('.goods-list').innerHTML = productList;
}

document.querySelector('footer').addEventListener('click', check => {
    if (!check.target.closest('.product__button-catalog-link')) {
        return;
    }
    cart.classList.toggle('visually-hidden');
});

renderGoodList(goods);
