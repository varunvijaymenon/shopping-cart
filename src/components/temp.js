let cart = [{id: 1, name: 'Macbook', price: 1400, image: 'https://picsum.photos/id/180/2400/1600', qty: 1}]


const exist = cart.find(x=> x.id === 2);

if (!exist) {
    console.log('enable button now')
}
else{
    console.log('item in cart')
}