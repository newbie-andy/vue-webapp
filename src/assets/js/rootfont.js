(function() {
    let _clientWidth =  document.body.clientWidth || window.screen.availWidth;
    let _html = document.getElementsByTagName('html')[0];
    _html.style.fontSize = _clientWidth / 10 + 'px';
    window.addEventListener('resize', function(e) {
        let _clientWidth =  document.body.clientWidth || window.screen.availWidth;
        _html.style.fontSize = _clientWidth / 10 + 'px';
    })
})()