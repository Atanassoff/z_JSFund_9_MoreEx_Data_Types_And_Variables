function chessBoard(n) {
    let color = '';
    console.log('<div class="chessboard">');
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (j === 1) {
                console.log('  <div>');
            }
            if (i % 2 != 0 && j % 2 != 0) {
                color = 'black';
            } 
            else if(i % 2 != 0 && j % 2 === 0){
                color = 'white';
            }
            else if(i % 2 === 0 && j % 2 != 0){
                color = 'white';
            }
            else if(i % 2 === 0 && j % 2 === 0){
                color = 'black';
            }
            console.log(`    <span class="${color}"></span>`);
            if (j === n) {
                console.log('  </div>');
            }    
        }
    }
console.log('</div>');
}

chessBoard(3)

/* <div class="chessboard"> 
    <div> 
        <span class="black"></span> 
        <span class="white"></span> 
        <span class="black"></span> 
    </div> 
    <div> 
        <span class="white"></span> 
        <span class="black"></span> 
        <span class="white"></span> 
    </div>     
    <div> 
        <span class="black"></span> 
        <span class="white"></span> 
        <span class="black"></span> 
    </div> 
</div> */