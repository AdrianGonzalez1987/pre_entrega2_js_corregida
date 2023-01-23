


class Pacientes{

    constructor(dni,nombre,apellido,edad)

    {

        this.dni = Number(dni);

        this.nombre = String(nombre);

        this.apellido = String(apellido);

        this.edad = Number(edad);

    }

}



const pacientes = []



pacientes.push(new Pacientes(20639028,"Pedro","Arteaga",32))

pacientes.push(new Pacientes(20639028,"Juan","Izaguirre",82))

pacientes.push(new Pacientes(20639028,"Teodoro","Melussi",52))

pacientes.push(new Pacientes(20639028,"Juan","Oliveira",25))

function queHacer() //correccion de la entrega

{

    let queTegustaria = prompt("Elija una opcion \n 1 Agregar Pacientes \n 2 Ver lista de pacientes \n 3 Buscar paciente por Nombre  \n 4 Buscar pacientes por Edad ") //esto estaba a lo ultimo fuera de la funcion



    switch (queTegustaria) 

    {

        case "1":

        

        let nuevoPaciente = 0

        

        while (nuevoPaciente < 1) 

        {

            let pregunta = new Pacientes(prompt("ingrese su DNI"),

                                        prompt("Ingrese su Nombre"),

                                        prompt("Ingrese su Apellido"),

                                        prompt("Ingrese su Edad"))

        pacientes.push(pregunta)

        nuevoPaciente++

        }

        console.log(pacientes)

        return;

        case "2":

        pacientes.forEach(element => console.log(element));

        return;



        case "3":

        pregunta2 = prompt("indique el nombre del paciente que decea buscar")

        const info = pacientes.filter((element) => element.nombre.includes(pregunta2))


        console.log(info);

        return

        

        case "4":



        pregunta3 = prompt("indique rango de edad del paciente que decea buscar")

        const info2 = pacientes.filter((element) => element.edad >= (pregunta3))



        console.log(info2);

        return

    

        default:

            break;

    }

}

queHacer()