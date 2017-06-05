var arrProduct = [
    {
        title: '1 Baseball Cap In Distressed Denim',
        description: '1Sed venenatis, libero sit amet faucib pulvinar, purus magna feugiat nunc, et mentum urna libero id urna.',
        price: '189',
        pictureUrl: 'images/product-1.jpg',
    },
    {
        title: '2 Oversized Rugby Polo Shirt With Contrast Panel In Black',
        description: '2 Sed venenatis, libero sit amet faucib pulvinar, purus magna feugiat nunc, et mentum urna libero id urna.',
        price: '189',
        pictureUrl: 'images/product-2.jpg',
    },
    {
        title: '3 Pack Jersey Polo Shirt In Gray',
        description: '3 Sed venenatis, libero sit amet faucib pulvinar, purus magna feugiat nunc, et mentum urna libero id urna.',
        price: '189',
        pictureUrl: 'images/product-3.jpg',
    },
    {
        title: '4 PLUS Pique Long Sleeve Muscle Polo In Black',
        description: '4 Sed venenatis, libero sit amet faucib pulvinar, purus magna feugiat nunc, et mentum urna libero id urna.',
        price: '189',
        pictureUrl: 'images/product-4.jpg',
    },
    {
        title: '5 Longline Polo With Rose Chest Print',
        description: '5 Sed venenatis, libero sit amet faucib pulvinar, purus magna feugiat nunc, et mentum urna libero id urna.',
        price: '189',
        pictureUrl: 'images/product-5.jpg',
    },
    {
        title: '6 Polo With Polka Dot Print',
        description: '6 Sed venenatis, libero sit amet faucib pulvinar, purus magna feugiat nunc, et mentum urna libero id urna.',
        price: '189',
        pictureUrl: 'images/product-6.jpg',
    },
    {
        title: '7 Replay Logo Polo Shirt Short Sleeve',
        description: '7 Sed venenatis, libero sit amet faucib pulvinar, purus magna feugiat nunc, et mentum urna libero id urna.',
        price: '189',
        pictureUrl: 'images/product-7.jpg',
    },
    {
        title: '8 Only & Sons Polo Shirt In Textured Jacquard Detail',
        description: '8 Sed venenatis, libero sit amet faucib pulvinar, purus magna feugiat nunc, et mentum urna libero id urna.',
        price: '189',
        pictureUrl: 'images/product-8.jpg',
    }
];

var wrapElement = arrProduct.reduce(function (productsWrapElement, item, i) {
    var productColumn;
    var productItem = createProductItem(item);
    if( i % 2 === 0 ) {
        productColumn = createElement('div', 'product-column', productItem);
        productsWrapElement.appendChild(productColumn);
    } else {
        productsWrapElement.lastElementChild.appendChild(productItem);
    }

    return productsWrapElement;
}, createElement('div', 'product__wrapper'));

var productContentElement = document.querySelector('.product__content');
productContentElement.appendChild(wrapElement);

function createElement (nodeName, classNames, content, attr) {
    attr = attr || {};
    var element = document.createElement(nodeName);
    element.classList = classNames;

    Object.keys(attr).forEach(function (key) {
        element[key] = attr[key];
    });

    if( typeof content === 'string') {
        element.innerText = content;
    } else if ( content instanceof Array ) {
      content.forEach(function (currentElement) {
          element.appendChild(currentElement);
      });
    } else if( typeof content === 'object' && content) {
        element.appendChild(content);
    }

    return element;
}

function createProductItem (item) {
    var arrowElement = createElement('span', 'product-column-item-info__arrow circle__arrow');
    var buttonElement = createElement('div', 'product-column-item-info__button circle', arrowElement);
    var priceElement = createElement('p', 'product-column-item-info__price', item.price);
    var titleElement = createElement('p', 'product-column-item-info__title', item.title);
    var figcaptionElement = createElement('figcaption', 'product-column-item-info', [titleElement, priceElement, buttonElement]);
    var imgElement = createElement('img', 'product-column-item__img', null, { src: item.pictureUrl });
    var figureElement = createElement('figure', 'product-column-item wow bounceIn', [imgElement, figcaptionElement]);

    buttonElement.addEventListener('click', function () {
        var infoTitle = document.querySelector('.information-specification__title');
        var infoPrice = document.querySelector('.information-specification__price');
        var infoDescription = document.querySelector('.information-specification__description');
        var infoPicture = document.querySelector('.information-picture__img');

        infoTitle.innerText = titleElement.innerText;
        infoPrice.innerText = priceElement.innerText;
        infoDescription.innerText = item.description;
        infoPicture.src = item.pictureUrl;
    });
    return figureElement;
}

