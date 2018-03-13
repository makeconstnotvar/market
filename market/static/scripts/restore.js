(function() {
    var sneaky = new ScrollSneak(location.hostname),
        links = document.getElementsByClassName('js-restore')       ;

    for (var i = 0; i < links.length; i++) {
        links[i].onclick = sneaky.sneak;
    }

    var cloaks = document.getElementsByClassName('cloak');
    for (var j = 0; j < cloaks.length; j++) {
        cloaks[j].className += " visible";
    }
})();