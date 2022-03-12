import { Socket } from 'socket.io';
export declare class EventosGateWay {
    devolverHola(message: {
        nombre: string;
    }, socket: Socket): string;
    unirseSala(message: {
        salaId: string;
        nombre: string;
    }, socket: Socket): string;
    enviarMensaje(message: {
        salaId: string;
        nombre: string;
        mensaje: string;
    }, socket: Socket): string;
}
