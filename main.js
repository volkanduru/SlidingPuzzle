/*
    Sliding Puzzle by Volkan Duru, 2014.
    
    Apache 2.0 License
*/

var rw = 4;
var cl = 4;
var box = 50;

function resize() {
    var html = '',
        i,j,top,left,temp=0, square=[],
        gamebox = document.getElementById("gamebox");

    top = 0, left = 0;

    for(i = 0; i < rw*cl; i++) { square.push(i); }
    
    square = shuffle(square);
    
    for (i=0; i<rw; i++) {
        for (j=0; j<cl; j++) {
            temp++; 
            if((i+1)*(j+1) != (rw*cl)) { // blank box
                html+='<div id="p'+(square[temp-1])+'" style="top:'+top+'px; left:'+left+'px;">'+(square[temp-1])+'</div>';
            }
            left += box;
        }
        left = 0;
        top += box;
    }
    
    gamebox.style.width=cl*box+"px";
    gamebox.style.height=rw*box+"px";
    gamebox.innerHTML = html;
}

function init() {
    resize();
}

function shuffle(array) {
  var copy = [], n = array.length, i;
  
  while (n) {
    i = Math.floor(Math.random() * array.length);

    if (i in array) {
      copy.push(array[i]);
      delete array[i];
      n--;
    }
  }
  return copy;
}


