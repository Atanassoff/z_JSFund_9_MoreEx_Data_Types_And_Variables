function cone(r, h){
    let vol = Math.PI * r * r * h / 3;
    let surf = Math.PI * r * r + Math.PI * r * Math.sqrt(r * r + h * h);
    console.log(`volume = ${vol.toFixed(4)} \narea = ${surf.toFixed(4)}`);
}

cone(3, 5) 
//volume = 47.1239 
//area = 83.2298
cone(3.3, 7.8) 
//volume = 88.9511 
//area = 122.0159