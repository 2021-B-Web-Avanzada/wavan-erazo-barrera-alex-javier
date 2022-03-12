import { Module } from "@nestjs/common";
import { EventosGateWay } from './eventos.gateway';

@Module({
    providers: [
        EventosGateWay
    ],
})

export class EventosModule {}