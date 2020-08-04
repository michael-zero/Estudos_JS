pessoa = {
    nome: 'Michael',
    falar: (nome) => {
        return () => {
            console.log(`oi, eu sou o ${nome}`);
        }
    }
}

const metodo = 'falar';
pessoa[metodo]('Michael')();

 
