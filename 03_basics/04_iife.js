//Imediately Invoked Function Expression (IIFE)

(function chai(name){
    //named iife
    console.log(`DB CONNECTED ${name}`);
    
})('Samad');

((name) =>{
    console.log(`DB CONNECTED TWO ${name}`);
    
}
)('Aman')