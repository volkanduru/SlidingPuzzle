/*
    Sliding Puzzle by Volkan Duru, 2014.
    
    Apache 2.0 License
*/

var rw = 4;
var cl = 4;

function resize() {
    var html = '',
        i,j,top,left,
        gamebox = document.getElementById("gamebox");
    
    top = 0, left = 0;
    for (i=0; i<rw; i++) {
        for (j=0; j<cl; j++) {
            html+='<div id="p'+rw+'" style="top:'+top+'px; left:'+left+'px;">'+i+'</div>';
            left += 50;
        }
        left = 0;
        top += 50;
    }
    
    gamebox.innerHTML = html;
}

function init() {
    resize();
}