import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AlumnosService } from './alumnos.service';
import { createAlumnoDto } from './dto/create-alumno-dto';



@Controller('alumnos')
export class AlumnosController {

    //! Inicializar el objeto y establecer propiedades
    constructor(public alumnosService: AlumnosService){

    }
    //! Se obtienen todos los datos
    @Get()
    getAlu(){
        return this.alumnosService.getall()
    }

    //! Se obtienen por id
    @Get(':id')
    getById(@Param('id')id){
        return this.alumnosService.getById(+id)
    }

    //! Se añade un nuevo estudiante
    @Post()
    newStudent(@Body() datos: createAlumnoDto){
        return datos
    }

    @Patch(':id')
    updateStudent(@Param('id')id, @Body()data: createAlumnoDto ){
        return this.alumnosService.actualizarAlumnos(id, data)
    }

    @Delete(':id')
    delete(@Param('id')id){
        return this.alumnosService.delete(+id)
    }

    @Get('/letra/:letra')
    getAlumnoByLetter(@Param('letra') letra: string){
        const alumno = this.alumnosService.findByLetra(letra)
        return { alumno }
    }
    // @Get('search')
    // search(@Query('nombre')nombre: string){
    //     return this.alumnosService.searchLetter(nombre)
    // }

}
