import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Injectable()
export class RoomStoreService {

    constructor(private af: AngularFire) {

    }

    // columns[]
    getRoom(room) {
        return this.af.database.list('/rooms/' + room);
    }

    // messages[]
    getMessages(room, title) {
        return this.af.database.list(`/${room}'/messages/'${title}`);
    }

    deleteMessages(room, title) {
        this.af.database.list(`/${room}'/messages/'${title}`).remove();
    }

}
