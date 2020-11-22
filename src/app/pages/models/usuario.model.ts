export class UsuarioModel {
    id: string;
    rut: string;
    nombre: string;
    telefono: number;
    email: string;
    direccion: string;
    region: string;
    pais: string;
    tipoUsuario: string;
    nacionalidad: boolean;

    constructor() {
        this.nacionalidad = true;
    }
}
