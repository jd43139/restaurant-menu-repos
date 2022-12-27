let n=0
function createNewItem(){
    
    n++
    console.log(n)

    let price=document.getElementById("price")
    let item=document.getElementById("item")
    let buttonPrice=document.getElementById("button-price")
    let priceContainer=document.getElementById("price-container")

    
    

    let newPrice=price.cloneNode(true)
    let newItem=item.cloneNode(true)
    let newButtonPrice=buttonPrice.cloneNode(true)
    let newPriceContainer=priceContainer.cloneNode(true)
    


    newPrice.id=`${price.id}${n}`
    newItem.id=`${item.id}${n}`
    newButtonPrice.id=`${newButtonPrice.id}${n}`
    newPriceContainer.id=`${priceContainer.id}${n}`

    console.log(newPrice)
    console.log(newPrice.id)
    console.log(newItem.id)

    document.getElementById("parent").appendChild(newItem)
    document.getElementById(newItem.id).appendChild(newButtonPrice)
    document.getElementById(newButtonPrice.id).appendChild(newPriceContainer)
    document.getElementById(newPriceContainer.id).appendChild(newPrice)
    let priceInput=document.getElementById("price-input").value

    document.getElementById(newPrice.id).innerHTML=`$${priceInput}`
   

    
    
    
}