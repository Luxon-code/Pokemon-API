class Pokemon{
    constructor(nombre,cantidad,precio,imagen){
        this._nombre = nombre;
        this._cantidad = cantidad;
        this._imagen = imagen;
        this._precio = precio;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get cantidad(){
        return this._cantidad;
    }
    set cantidad(cantidad){
        this._cantidad = cantidad;
    }
    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio = precio;
    }
    get imagen(){
        return this._imagen;
    }
    set imagen(imagen){
        this._imagen = imagen
    }
}
export default Pokemon;