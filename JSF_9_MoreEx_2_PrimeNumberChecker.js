function primeNumberChecker(num){
    prime = true;
    for(let i = 2; i < num; i++){
        if(num % i === 0){prime = false; break;}
    }
    console.log(prime);
}

primeNumberChecker(7) 
//true
primeNumberChecker(8) 
//false
primeNumberChecker(81) 
//false