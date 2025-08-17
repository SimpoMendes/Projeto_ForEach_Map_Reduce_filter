const list = document.querySelector("ul")
const buttonShowAll = document.querySelector(".show-all")
const buttonMapAll = document.querySelector(".map-all")
const buttonSumItens = document.querySelector(".sum-all")
const filterAll = document.querySelector(".filter-items")


function convertCurrcy(value) {
    const newVaueConverted = value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })

    return newVaueConverted
}


function showAll(productsArray) {
    let myli = ''
    productsArray.forEach(product => {
        myli +=
            `
   
         <li>
            <img src= ${product.src}></img>
            <p>${product.name}</p>
            <p class="price-itens">R$${convertCurrcy(product.price)}</p>
        </li>
    `
    })

    list.innerHTML = myli 
}

function mapAllItems() {

    const newPrice = menuOptions.map((product) => ({

        ...product,
        price: product.price * 0.9,

    }))

    showAll(newPrice)


}

function sumValueFinal() {

    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `  <li>
            <p>O valor Total dos intes é: R$${convertCurrcy(totalValue)}</p>
           </li>
    `
}

function allItems() {
    const filteIntems = menuOptions.filter((product) => product.vegan)
    showAll(filteIntems)
}

function itemsvalue(){
    const itemsToVlaue = menuOptions.filter ((product) => product.price < 50  )
    showAll(itemsToVlaue)
}
buttonShowAll.addEventListener("click", () => showAll(menuOptions))
buttonMapAll.addEventListener("click", mapAllItems)
buttonSumItens.addEventListener("click", sumValueFinal)
filterAll.addEventListener("click", allItems)
