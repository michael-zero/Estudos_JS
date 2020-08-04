pessoa = {
    nome: 'Michael',
    falar: (nome) => {
        return () => {
            console.log(`oi, eu sou o ${nome}`);
        }
    },
    estudar: () => {
        console.log('estudando JS');
    }
}

const metodo = 'falar';
pessoa[metodo]('Michael')();

 
