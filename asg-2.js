window.onload=function(){
    document.body.ondblclick = null;
    
    /*1. Start with an empty HTML document. When the body is double-clicked, use JavaScript to create five
images inside a div (a-e), one button (f) after the div, and two images inside of paragraphs (g,h)
below the button.*/
//cria div
    var div = document.createElement('div');
    document.body.appendChild(div);
    div.id = 'div0';
//cria button   
    var button = document.createElement('input');
    button.type = 'button';
    document.body.appendChild(button);
//cria paragrafos
    for(let i=0; i < 2; i++){
        var p = document.createElement('p');
        p.style.position = 'relative';
        document.body.appendChild(p);
        p.id = 'p' + i;
        }
// cria imagens
    var p0 = document.getElementById('p0');
    var p1 = document.getElementById('p1');    


    for (let i = 0; i < 7; i++) {
        var img = document.createElement('img');
        img.src = i + '.jpg';
        img.id = 'img' + i;// id da img
        img.style.height = '200px';
        img.style.width = '200px';
        img.style.border = '2px solid pink';
        if(i <5){
        div.appendChild(img);}
        else if(i <= 5 && i < 6){
            p0.appendChild(img);}
            else{p1.appendChild(img);}
        }

function swap(){//função pra trocar posição de img
    var parent = this.parentNode;
    div.insertBefore(this, div.firstElementChild);//comando pra colocar a img no início
}
    var images = document.getElementById('div0').getElementsByTagName('img');
for (let i = 0; i < images.length; i++) {
    images[i].onclick = function() {
      if (this.className == '') {
        this.className = 'clicked';
        for (let i = 0; i < images.length; i++) {
            images[i].onclick = swap;
            }
      }
    }
  }


/*3 When either of the bottom images (g or h) is clicked, that image begins moving across the screen until it is
clicked again, at which time it stops moving. Each time it is clicked, it toggles moving (if it is moving and it
is clicked, it stops; if it is stopped and it is clicked, it moves). The very bottom image (h) moves twice as fast
as the one above it (g). Use two different timers; one for image g and one for image h. */
  
  var timer1 = null;
  var timer2 = null;
  var position1 = 0;
  var position2 = 0;

  var img1 = document.getElementById('img5');
  img1.style.position = 'absolute';
  img1.style.top = '0px';
  img1.style.left = '0px';

  var img2 = document.getElementById('img6');
  img2.style.position = 'absolute';
  img2.style.top = '0px';
  img2.style.left = '0px';

    function move1(){
        position1++;
        img1.style.left = position1 + 'px';
  }

  function move2(){
    img2.style.left = parseInt(img2.style.left) + 1 + 'px';
  }

  function animate1() {
    if (timer1 == null) {
      setInterval(move1, 40);  
    }
  }

  function animate2() {
    if (timer2 == null) {
      setInterval(move2, 20);  
    }
  }
  img1.onclick = animate1();
  img2.onclick = animate2();
}   
/*
        Section Two: Use jQuery
4. When the button (f) is clicked, use jQuery to change every image’s (a, b, c, d, e, g, h) css properties so that
each one gets a 1px red solid border around it.*/

$(document).ready(function(){ 
$('img').click(function() {
  $('img').css('border', 'solid 1px red');
    });
});
    