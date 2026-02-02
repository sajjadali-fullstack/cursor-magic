let main = document.querySelector('.container');
let cursor = document.querySelector('.cursor');

let cursorInner = document.querySelector('.cursor-inner');


// Left & Top tabhi kam karega Jab cursor ko position: absolute di ho gi
main.addEventListener('mousemove', function(details) {
    cursor.style.left = details.x +'px'
    cursor.style.top = details.y +'px'
    console.log('X:',  details.x);
    console.log('Y:', details.y);



})

/*
let x = 0;
let y = 0;

cursor.addEventListener('mousemove', function(e){
    x = e.clientX;
    y = e.clientY;
    
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
    
    cursorInner.style.left = x + 'px';
    cursorInner.style.top = y + 'px';
});     

*/
