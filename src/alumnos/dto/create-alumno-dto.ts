import { IsString, MinLength} from "class-validator";
export class createAlumnoDto{
    // id: number
    @IsString()
    @MinLength(4)
    readonly nombre: string
    @IsString()
    readonly materia: string
}