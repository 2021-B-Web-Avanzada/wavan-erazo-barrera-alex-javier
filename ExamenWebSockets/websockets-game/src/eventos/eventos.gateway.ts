import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";
import {Socket, Server} from 'socket.io' //Manualmente
@WebSocketGateway(
    8080, //El puerto donde corre el servidor de websockets
    {
    cors:{
        origin: '*'
    }
})

export class EventosGateWay{

    //Crear un mensaje de suscripcion 
    @SubscribeMessage('hola')
    devolverHola(
        @MessageBody()
        message: {nombre: string},
        @ConnectedSocket()
        socket: Socket
    ){
        //Emitir el mensaje a todos
        //EL NOMBRE ES IMPORTANTE
        socket.broadcast.emit('escucharEventoHola', {mensaje: 'Bienvenido' + message.nombre})
        return 'ok'
    }

    //Permite unirse a una sala 
    @SubscribeMessage('unirseSala')
    unirseSala(
        @MessageBody()
        message: {salaId: string, nombre: string},
        @ConnectedSocket()
        socket: Socket
    ){
        socket.join(message.salaId);
        const mensajeAEnviar: any ={
            mensaje: 'Bienvenido ' + message.nombre
        };

        socket.broadcast
            .to(message.salaId)
            .emit(
                'escucharEventoUnirseSala',
                mensajeAEnviar
            );
        return 'ok';
    }

    //Permite enviar un mensaje a una sala una
    @SubscribeMessage('enviarMensaje')
    enviarMensaje(
        @MessageBody()
        message: {salaId: string, nombre: string, mensaje: string},
        @ConnectedSocket()
        socket: Socket
    ){
        
        const nuevoMensaje ={
            nombre: message.nombre,
            mensaje: message.mensaje,
            salaId: message.salaId
        };

        socket.broadcast
            .to(message.salaId)
            .emit(
                'escucharEventoMensajeSala',
                nuevoMensaje
            );
        return 'ok';
    }

}