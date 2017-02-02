function swipe(direction){
    var endpoint = window.location.href.split('/')[3];
    var forward, backward;
console.log(window.location.href)
    // Homepage to choose an avatar page
    if (endpoint === ''){
          forward = 'choose-an-avatar/',
          backward = ''
    };

    // Avatar to introduction page
    if (endpoint === 'choose-an-avatar.html'){
        forward = 'introduction.html',
        backward = 'index.html'
    };

    // Introduction to feelings page
    if (endpoint === 'introduction.html'){
        forward = 'eating.html',
        backward = 'choose-an-avatar.html'
    };

    // Eating page to finish page
    if (endpoint === 'eating.html'){
        forward = 'feelings.html',
        backward = 'introduction.html'
    };

    // Feelings page to eating page
    if (endpoint === 'feelings.html'){
        forward = 'personality.html',
        backward = 'eating.html'
    };

    // Eating page to finish page
    if (endpoint === 'personality.html'){
        forward = 'finished.html',
        backward = 'feelings.html'
    };

    // Eating page to finish page
    if (endpoint === 'finished.html'){
        forward = '',
        backward = 'personality.html'
    };

    if(direction === "swipeleft" && event.target.tagName !== 'IMG'){
      window.location.href = forward;
    }

    if(direction === "swiperight" && event.target.tagName !== 'IMG'){
      window.location.href = backward;
    }
}

// The if statement stops the carousel from triggering the page swipe
Hammer(document.body).on("swipeleft", function(){ swipe("swipeleft") });
Hammer(document.body).on("swiperight", function(){ swipe("swiperight") });
