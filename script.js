function assignVariant() {
    var randomNumber = Math.random();
    var variant = randomNumber < 0.5 ? "Variant A" : "Variant B";
    return variant;
}

function trackInteraction(interaction) {
    console.log("User interaction: " + interaction);
}

function setButtonColor(variant) {
    var button = document.getElementById('testButton');
    button.className = variant.toLowerCase().replace(/\s+/g, '-');
}

window.onload = function() {
    var variant = assignVariant();
    var button = document.getElementById('testButton');
    button.textContent = "Click Me!";
    
    setButtonColor(variant);

  
    trackInteraction("Visited website - " + variant);

    button.addEventListener('click', function() {
        trackInteraction("Clicked button - " + variant);
    });
};

