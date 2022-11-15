function calculatePrice(){
    var base_price = 250
    var words_per_price = 250
    var price_per_words = 50
    let words  = document.querySelector("#word_count")
    let word_count = words.value
    let extra_words = (word_count - 250)
    let words_left = extra_words
    let total = base_price

    while(words_left > 0){
      words_left -= words_per_price
      total += price_per_words
    }
    if(extra_words > 1500){
        document.getElementById("calculation-result").style.display = 'none'
        document.getElementById("too-many-words").style.display = 'block'
    }else{
        document.getElementById("calculation-result").style.display = 'block'
        document.getElementById("too-many-words").style.display = 'none'
        
        let result = document.querySelector("#word_count_result");
        result.innerHTML =word_count 

        let price_total = document.querySelector("#price_total")
        price_total.innerHTML = total
    }
}