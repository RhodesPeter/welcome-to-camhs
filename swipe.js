function swipe(direction){
    var endpoint = window.location.href;
    var forward, backward;

    // Homepage to choose an avatar page
    if (endpoint === "https://rhodespeter.github.io/welcome-to-camhs/"){
          forward = "https://rhodespeter.github.io/welcome-to-camhs/choose-an-avatar/",
          backward = "https://rhodespeter.github.io/welcome-to-camhs/"
    };

    // Avatar to introduction page
    if (endpoint === 'https://rhodespeter.github.io/welcome-to-camhs/choose-an-avatar/'){
        forward = 'https://rhodespeter.github.io/welcome-to-camhs/introduction/',
        backward = 'https://rhodespeter.github.io/welcome-to-camhs/'
    };

    // Introduction to feelings page
    if (endpoint === 'https://rhodespeter.github.io/welcome-to-camhs/introduction/'){
        forward = 'https://rhodespeter.github.io/welcome-to-camhs/eating/',
        backward = "https://rhodespeter.github.io/welcome-to-camhs/choose-an-avatar/
    };

    // Eating page to finish page
    if (endpoint === 'https://rhodespeter.github.io/welcome-to-camhs/eating/'){
        forward = 'https://rhodespeter.github.io/welcome-to-camhs/feelings/',
        backward = 'https://rhodespeter.github.io/welcome-to-camhs/introduction/'
    };

    // Feelings page to eating page
    if (endpoint === 'https://rhodespeter.github.io/welcome-to-camhs/feelings/'){
        forward = 'https://rhodespeter.github.io/welcome-to-camhs/personality/',
        backward = 'https://rhodespeter.github.io/welcome-to-camhs/eating/'
    };

    // Eating page to finish page
    if (endpoint === 'https://rhodespeter.github.io/welcome-to-camhs/personality/'){
        forward = 'https://rhodespeter.github.io/welcome-to-camhs/finished/',
        backward = 'https://rhodespeter.github.io/welcome-to-camhs/feelings/'
    };

    // Eating page to finish page
    if (endpoint === 'https://rhodespeter.github.io/welcome-to-camhs/finished/'){
        forward = 'https://rhodespeter.github.io/welcome-to-camhs/finished/',
        backward = 'https://rhodespeter.github.io/welcome-to-camhs/personality/'
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
