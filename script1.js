const list = document.querySelector("ul")
const buttonShowAll = document.querySelector(".show-all")
const buttonMapAll = document.querySelector(".map-all")
const buttonSumAll = document.querySelector(".sum-all")
const buttonFilterVegan = document.querySelector(".filter-items")


function formatCurruncy(value) {
    const formatNewcurrency = value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    return formatNewcurrency
}

function showAll(productArray) {
    let myli = ''
    const showAllItems = productArray.forEach((product) => {
        myli +=
            `
    <li>
    <img src= ${product.src}></img>
    <p>${product.name}</p>
    <p class="price-itens">${formatCurruncy(product.price)}</p>
    
    </li>    `
    })
    list.innerHTML = myli

}

function showAllMap() {
    const newprice = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,


    }))
    showAll(newprice)
    console.log(newprice)

}

function sumShowIntems() {
    const showTotalItems = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    const showTotalItemsdesconts = menuOptions.reduce((acc, curr) => acc + curr.price * 0.9, 0)


    list.innerHTML = `
    <li>
    <p>Valor total:</P>  
    <P class="price-itens-reduce">${formatCurruncy(showTotalItems)}</p>
    <P>Valor com Desconto</P> 
    <p class="price-itens-reduce">${formatCurruncy(showTotalItemsdesconts)}</p>
    </li>
    `
}
function showFilter(){
const filterVegan = menuOptions.filter((product) => product.vegan)

showAll(filterVegan)
}

buttonShowAll.addEventListener("click", () => showAll(menuOptions))
buttonMapAll.addEventListener("click", showAllMap)
buttonSumAll.addEventListener("click", sumShowIntems)
buttonFilterVegan.addEventListener("click", showFilter)