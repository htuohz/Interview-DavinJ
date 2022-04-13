const slowMotion = {
    action:'jumping off the building...',
    play: function(){
        setTimeout(function(){
            console.log(`${this.action} after 2 seconds`)
        }, 2000)
    }
}
slowMotion.play();