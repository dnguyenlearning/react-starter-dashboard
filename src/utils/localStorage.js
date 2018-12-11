const setItem = (itemName, value)=>{
    value = JSON.stringify(value);
    localStorage.setItem(itemName, value)
}

const getItem = (itemName)=>{
    let value = JSON.parse(localStorage.getItem(itemName))
    return value;
}

const clearItem = (itemName)=>{
    localStorage.removeItem(itemName)
}


export {setItem, clearItem, getItem}