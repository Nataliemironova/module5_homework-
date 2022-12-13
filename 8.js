var map = new Map();
map.set( 1, "white");  
map.set( 2, "red"); 
map.set( 3, "orange");
for (let [key,value] of map) {
    console.log ('Ключ - ' + key + ',' + 'Значение - ' + value);
}