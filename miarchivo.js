        //CALCULADOR DE PROMEDIOS, PROMEDIO FINAL Y MEJORES PROMEDIOS DE ALUMNOS
        //DECLARAMOS VARIABLES Y A TRAVES DE PROMPT COLOCAMOS NOMBRE Y APELLIDO DEL ALUMNO

        let bienvenidoAlumno 

        bienvenidoAlumno = prompt("Nombre y Apellido del alumno: ") 
        alert(`Bienvenido ${bienvenidoAlumno}`)
        console.log(`Bienvenido ${bienvenidoAlumno}`)

        //ELEGIMOS LA OPCION DESEADA EN EL PROMPT A TRAVES DE LAS OPCIONES 1, 2 Y 3

        let menu = parseInt(prompt(`Ingrese la opción deseada
        1-calificaciones
        2-promedio final
        3-mejores promedios
        4-cursos disponibles`))



        //EN ESTA OPCION INGRESAMOS EL NOMBRE DE LA MATERIA Y POSTERIORMENTE LAS CALIFICACIONES OBTENIDAS,
        //POSTERIORMENTE VAMOS A RECIBIR EL PRMEDIO FINAL DE LA MATERIA INGRESADA

        switch(menu){

        case 1:

        let materia = (prompt("INGRESE LA MATERIA"))
        console.log(`Evaluaciones y promedio final de ${materia}`)    

        let Primernota = parseInt(prompt("INGRESE EL RESULTADO DE SU PRIMER EVALUACION"))
        console.log(`Primera Evaluacion = ${Primernota}`)

        let Segundanota = parseInt(prompt("INGRESE EL RESULTADO DE SU SEGUNDA EVALUACION"))
        console.log(`Segunda Evaluacion = ${Segundanota}`)

        let Tercernota = parseInt(prompt("INGRESE EL RESULTADO DE SU TERCER EVALUACION"))
        console.log(`Tercer Evaluacion = ${Tercernota}`)

        let Notafinal = Primernota + Segundanota + Tercernota

        let Promedio = (Primernota + Segundanota + Tercernota)/3
        alert(`Tu promedio final es ${Promedio}`)
        console.log(`Tu promedio final es = ${Promedio}`)


        break;
    
        //INGRESAMOS EL PROMEDIO FINAL DE LA MATERIA INGRESADA Y NOS VA A DAR UNA DEVOLUCION 
        //APROBADO, REPROBADO, U OBTUVISTE UNA CALIFICACION PERFECTA
        // EN CASO DE INGRESAR UN VALOR INCORRECTO NOS DARA UN MENSAJE COMO DATO INVALIDO O VALOR FUERA DE RANGO

        case 2:
        
        let calificacion = prompt("Ingrese el promedio final de su materia");
        console.log(`Tu promedio final es = ${calificacion}`)

        if(calificacion >= 1 && calificacion <= 10)

    
        if(calificacion>=7 && calificacion <= 9){
                
        alert("APROBADO");
        console.log("Ustes ha aprobado la materia")

    }   else if(calificacion==10){

        alert("APROBADO,...OBTUVISTE UNA CALIFICACION PERFECTA");
        console.log("sos crack")

    }   else{

        alert("REPROBADO");
        console.log("USTED HA DESAPROBADO LA MATERIA")

    }   else{

        alert("VALOR FUERA DE RANGO, INGRESE UN DATO VALIDO");

                
    }
       
      
       {break}

       default:
       
       alert("opcion invalida");
       
       break;
         
       //EN ESTA OPCION NOS DARA LA INFORMACION DE QUIENES OBTUVIERON LOS MEJORES PROMEDIOS DE UN TOP 6
       //MEDIANTE UN PROMPT Y LA INFORMACION DETALLADA DE SUS CALIFICACIONES
      
       case 3:
    
       
               
        let promediosTop6 = prompt(`presione ENTER para visualizar los mejores promedios`)
        alert(` 
        1-Alejandro Lopez
        2-Luciano Castro
        3-Antonella Rocuzzo
        4-Estefania Sanchez
        5-Lucas Gonzalez
        6-Federico Ruiz`)
        console.log("promedios top 6")
       

        let alumno1 = ("9.81")
        console.log("el promedio final de Alejandro Lopez es de 9.81")
        alert(`el promedio final de Alejandro Lopez es de ${alumno1}`)
         
        let alumno2 = ("9.73")
        console.log("el promedio final de Luciano Castro es de 9.73")
        alert(`el promedio final de Luciano Castro es de ${alumno2}`)
        
        let alumno3 = ("9.01")
        console.log("el promedio final de Antonella Rocuzzo es de 9.01")
        alert(`el promedio de Antonella Rocuzzo es de ${alumno3}`)
        
        let alumno4 = ("8.98")
        console.log("el promedio final de Estefania Sanchez es de 8.98")
        alert(`el promedio de Estefania Sanchez es de ${alumno4}`)
        
        let alumno5 = ("8.72")
        console.log("el promedio final de Lucas Gonzalez es de 8.72")
        alert(`el promedio de Lucas Gonzalez es de  ${alumno5}`)
        
        let alumno6 = ("8.60")
        console.log("el promedio final de Federico Ruiz es de 8.60")
        alert(`el promedio de Federico Ruiz es de ${alumno6}`)


        case 4:
        
        
        let cursadas = parseInt(prompt(`Escriba el curso deseado
        Javascript
        ReactJS
        AngularJS
        Desarrollo web`))
        
        alert(`Bienvenido al curso`)
        console.log(`Bienvenido al curso deseado `)

}
    
        //ARRAYS TIPOS DE DATOS GUARDADOS
        //ACCESO A LOS PROMEDIOS, AULA PERTENECIENTE, TURNO DE CURSADA E INASISTENCIAS

       
        const alumnosMejoresPromedios = ["Alejandro Lopez 9.81", "Luciano Castro 9.73", "Antonella Rocuzzo 9.01", "Estefania Sanchez 8.98", "Lucas Gonzalez 8.72", "Federico Ruiz 8.60"]
        console.log(alumnosMejoresPromedios)
    
        const ArraysAlm1 = ["Nombre: Alejandro Lopez", "Aula: 123", "Turno: mañana", "Inasistencias: 3"]
        console.log(ArraysAlm1)
    
        const ArraysAlm2 = ["Nombre: Luciano Castro", "Aula: 89", "Turno: mañana", "Inasistencias: 5"]
        console.log(ArraysAlm2)

        const ArraysAlm3 = ["Nombre: Antonella Rocuzzo", "Aula: 99", "Turno: tarde", "Inasistencias: 6"]
        console.log(ArraysAlm3)

        const ArraysAlm4 = ["Nombre: Estefania Sanchez",  "Aula: 24", "Turno: tarde", "Inasistencias: 3"]
        console.log(ArraysAlm4)

        const ArraysAlm5 = ["Nombre: Lucas Gonzales",  "Aula: 102", "Turno: mañana", "Inasistencias: 4"]
        console.log(ArraysAlm5)

        const ArraysAlm6 = ["Nombre: Federico Ruiz",  "Aula: 78", "Turno: tarde", "Inasistencias: 3"]
        console.log(ArraysAlm6)


        //RECORRER UN ARRAY
       
        for(let i = 0; i < 4; i++){
            console.log(ArraysAlm1[i])

}
        //ACCESO A UN ARRAY 

        const ArraysinasistenciasLopez = ["viernes 25/04: ausente", "martes 07/06: ausente", "lunes 14/09: ausente"]
        console.log(ArraysinasistenciasLopez[0])
        console.log(ArraysinasistenciasLopez[1])
        console.log(ArraysinasistenciasLopez[2])

        //
        //METODO SHIFT PARA ELIMINAR LA PRIMER POSICION DEL ARRAY Alm1
        //EN ESTE CASO ES EL NONBRE DE ALEJANDRO LOPEZ
    
        ArraysAlm1.shift()
        console.log(ArraysAlm1)
            
        //METODO SPLICE PARA ELIMINAR LA ULTIMA POSICION DEL ARRAY Alm2
        //EN ESTE CASO SON LAS INASISTENCIAS DE LUCIANO CASTRO
        
        ArraysAlm2.splice(3,3)
        console.log(ArraysAlm2)

        //ELEMENTOS DEL ARRAY Alm3 SEPARADOS POR UN GUION

        console.log(ArraysAlm3.join(" - "))

        //UNIR DOS ARRAYS EN UNO SOLO

        const Alumnos = ["Alejandro", "Luciano", "Lucas", "Federico"]
        const Alumnas = ["Estefania", "Antonella"]
        const Estudiantes = Alumnos.concat(Alumnas)
        console.log(Estudiantes)

        //AARAY DE OBJETOS

        const estudiante1 = ["Nombre: Alejandro Lopez", "Aula: 123", "Turno: mañana", "Inasistencias: 3"]
        const estudiante2 = ["Luciano Castro", "Aula: 89", "Turno: mañana", "Inasistencias: 5"]
        const estudiante3 = ["Nombre: Antonella Rocuzzo", "Aula: 99", "Turno: tarde", "Inasistencias: 6"]
        const estudiante4 = ["Nombre: Estefania Sanchez",  "Aula: 24", "Turno: tarde", "Inasistencias: 3"]
        const estudiante5 = ["Nombre: Lucas Gonzales",  "Aula: 102", "Turno: mañana", "Inasistencias: 4"]
        const estudiante6 = ["Nombre: Federico Ruiz",  "Aula: 78", "Turno: tarde", "Inasistencias: 3"]
       
        const expedientes = []
        expedientes.push(estudiante1, estudiante2, estudiante3, estudiante4, estudiante5, estudiante6)
        console.log(expedientes)

        //FOR OF SINTAXIS SIMPLIFICADA PARA RECORRER UN ARRAY

        for(let elemento of expedientes)
            console.log(elemento)
        
        //METODO MAP

        const cursada = [
        {nombre: 'Javascript', precio: 15000},
        {nombre: 'ReactJS', precio: 22000},
        {nombre: 'AngularJS', precio: 22000},
        {nombre: 'Desarrollo Web', precio: 16000},
        
        ]       
        const nombres = cursada.map((el) => el.nombre)
        console.log(nombres)
        
          
        //METODO FIND

        const cursada1 = [
        {nombre: 'Javascript', precio: 15000},
        {nombre: 'ReactJS', precio: 22000},
       ]

        const resultado = cursada1.find((el) => el.nombre === "ReactJS")
        const resultado2 = cursada1.find((el) => el.nombre === "DW")

        console.log(resultado) 
        console.log(resultado2)

        const div = document.querySelector(".info");

        function seleccionar ( cursada ){
        console.log("Seleccionaste" + " " + cursada)
        alert("Seleccionaste" + " " + cursada)}
        

        

        

        
        
     
        
            
        
         
        
        
        
        
        
        

    

         
        











    





       

     
        


        
       
             
    




