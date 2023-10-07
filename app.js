// 1 USD = 36.94 THB Last update 07-10-2023
const exchangeRate = 36.94

function convertTHBtoUSD(amount){
    return amount / exchangeRate
}

function convertUSDtoTHB(amount){
    return amount * exchangeRate
}

/**
 * Convert currency according to user selected.
 */
function convertCurrency(){
    let currencyUnit = document.getElementById("currency_unit").value
    let amount = document.getElementById('amount').value

    // check currency unit in console log
    console.log(currencyUnit)
    if (currencyUnit == "USD"){
        result = convertUSDtoTHB(amount)
        // Log for check result
        console.log(amount + 'USD = ' + result + 'THB')
        return result.toFixed(2) + ' THB'
    }
    else{
        result = convertTHBtoUSD(amount)
        // Log for check result
        console.log(amount + 'THB = ' + result + 'USD')
        return result.toFixed(2) + ' USD'
    }
}

function displayResult() {
    let displayText = 'Converted amount are equal to ' + convertCurrency()
    alert(displayText)
}