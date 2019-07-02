
    var side = document.getElementsByClassName('side')[0],
        arrImg = ['./images/01-1.jpg', './images/01-2.jpg', './images/01-3.jpg','./images/01-4.jpg'],
        index = 0;
    window.timer = setInterval(function(){
        index ++;
        index = index > arrImg.length - 1 ? 0 : index;
        side.style.backgroundImage = 'url(' + arrImg[index] + ')'
    }, 3000)

