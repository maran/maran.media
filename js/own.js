function calculatePrice(){
    var base_price = 150
    var words_per_price = 250
    var price_per_words = 30
    let words  = document.querySelector("#word_count")
    let word_count = words.value
    let extra_words = (word_count - words_per_price)
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

var wavesurfer = WaveSurfer.create({
    container: '#voice-demo',
    mediaControls: true,
    progressColor: '#f5df4e'
});

wavesurfer.load("../data/Maran_Demo_2022.mp3")

var playButton = document.getElementById("play-button")
var buttonTextSpan = document.getElementById("button-text")
var originalText = buttonTextSpan.innerHTML

playButton.onclick = function(){
    if(playButton.hasAttribute("data-playing")){
        buttonTextSpan.innerHTML = originalText
        playButton.removeAttribute("data-playing")
        wavesurfer.pause()
    }else{
        buttonTextSpan.innerHTML = "Pauzeer demo"
        playButton.setAttribute("data-playing", "true")
        wavesurfer.play()
    }
}
