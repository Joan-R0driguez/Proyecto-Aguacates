const baseAPI = "https://platzi-avo.vercel.app"

const appNode = document.querySelector('#app')

const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat("en-EN", {
        style: "currency",
        currency: "USD",
    }).format(price);
    return newPrice
}

window
    .fetch(`${baseAPI}/api/avo`)
    .then(response => response.json())
    .then(responseJson => {
        const itemsCompletos = []

        responseJson.data.forEach(item => {
            const imagen= document.createElement('img');
            imagen.src = `${baseAPI}${item.image}`;
            imagen.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";

            const title = document.createElement('h2');
            title.textContent = item.name;
            title.className = 'text-lg';

            const price = document.createElement('div');
            price.textContent = formatPrice(item.price);
            price.className = 'text-gray-600'

            const priceAndTitle = document.createElement('div')
            priceAndTitle.className = 'text-center md:text-left'
            priceAndTitle.append(title, price)

            const card = document.createElement('div')
            card.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300"
            card.append(imagen, priceAndTitle)
            console.log(card)

            itemsCompletos.push(card)
        });
        appNode.append(...itemsCompletos)
    })