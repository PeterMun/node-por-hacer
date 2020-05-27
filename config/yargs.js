// const argv ...

// comando crear 'crear un elemento por hacer'
//     --descripcion -d

// comando actualizar 'actualiza el estado compleato de una tarea'
//     --descripcion -d
//     --completado -c true

//     -help

/* const opts = {
    crear:{
        descripcion: '',
        alias: 'd'


    },

    actualizar:{

    }
}

const argv = require('yargs')
    .command('crear', 'crea una elemento por hacer' ,opts)
    .command('actualiza','actualiza estado de lista por hacer',opts)
    .help()
    .argv;

module.exports = {
    argv
} */


const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'

};





const argv = require('yargs')
    .command('crear', 'crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'borra una tarea', {
        descripcion

    })
    .help()
    .argv;


module.exports = {
    argv
}