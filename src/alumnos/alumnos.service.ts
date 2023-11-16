import { Body, Injectable, NotFoundException, Param} from '@nestjs/common';
import { Alumnos } from 'src/interface/alumnos-interface';
import { createAlumnoDto } from './dto/create-alumno-dto';

@Injectable()
export class AlumnosService {
    //! Se injecta la interfaz y se exporta
    private alumnos: Alumnos[] = [
        {id: 1, nombre: 'Juan', materia: 'Lengua'},
        {id: 2, nombre: 'Tamara', materia: 'Diseño de modas'},
        {id: 3, nombre: 'dada', materia: 'Marketing'},
        {id: 4, nombre: 'Julio', materia: 'Gastronomia'},
    //! Agregar mas de ser necesario
    ];

    //!Metodo get
    getall(){
        return this.alumnos
    }

    //! Obtenido por id
    getById (id){
        const  res = this.alumnos.find(objeto => objeto.id === id)
        if(!res)
        throw new NotFoundException("No existe")
        return res
    }

    //! Creacion
    createAlumnos(@Body()dato: any){
        return dato
    }

    //! Actualizar
    actualizarAlumnos(@Param() id: number, @Body() data:createAlumnoDto){
        const Index = this.alumnos.findIndex(alumnos => alumnos.id === id);
        const updateAlumno = {...this.alumnos[Index], ...data};
        this.alumnos[Index] = updateAlumno
        return updateAlumno
    }

    //! Eliminar
    delete(id: number){
        const index = this.alumnos.findIndex(alumno => alumno.id === id);
        if (index === -1) {
            throw new NotFoundException('Usuario no encontrado');
        }
        // const deletedAlumno = this.alumnos.splice(index, 1)[0];
        return this.alumnos.splice(index, 1)[0];
        }

    findByLetra(letra: string): Alumnos[] {
        return this.alumnos.filter(tare => tare.nombre.startsWith(letra.toUpperCase()));
    }

    //searchLetter(nombre: string){
    //    return this.alumnos.filter(objeto => objeto.nombre.includes(nombre))
    //}
}