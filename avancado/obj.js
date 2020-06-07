const log=console.log;



///1
let obj = {nome:'mike'};
log(obj);


///2
let obj2 = Object();

obj2.nome='mike2';
log(obj2)


///xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx fabrica
///3
function fabrica(nome){
    var obj={};
    obj.nome=nome;
    return obj;
}


///xxxxxxxxxxxxxxxxxxxx construtor
function Automovel(nome){
    //let this={};
    this.nome=nome;
    ///return this;
}

Automovel.prototype.dirigir=function(){log('dirigindo')};




let carro = new Automovel('fusca');

log(carro.dirigir());

log(Automovel.prototype);
log(carro.__proto__);



/////// Trator extends
function Trator(nome,rodas){
    ///let this={}
    Automovel.call(this,nome);
    this.rodas=rodas;

}

Trator.prototype= Object.create(Automovel.prototype);

log(Trator.prototype.constructor);

Trator.prototype.constructor=Trator;

//log(Trator.prototype.constuctor);



let trator = new Trator('largartao',4);































