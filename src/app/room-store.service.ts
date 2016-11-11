import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Observable, Observer, Subject } from 'rxjs/Rx';

@Injectable()
export class RoomStoreService {
    private roomFilterSubject = new Subject();
    private roomQueryObservable = this.af.database.list('/rooms', {
        query: {
            orderByChild: 'name',
            equalTo: this.roomFilterSubject
        }
    });

    private _discussModeObserver: Observer<boolean>;
    discussMode$: Observable<boolean>;
    constructor(private af: AngularFire) {
        this.discussMode$ = new Observable<boolean>(observer => this._discussModeObserver = observer)
            .startWith(false)
            .share();
            

                    this.roomQueryObservable.subscribe(rooms => {
            console.log(rooms);
            if (rooms.length === 0) {
                this.af.database.list('/rooms/').push({ name: this.roomFilterSubject });
            }
        });
    }

    // rooms [{id: "121", name: "test"}]
    getRooms() {
        return this.af.database.list('/rooms/');
    }

    //  room {id: "121", name: "test"}
    getRoom(room) {
        console.log(this.roomQueryObservable);

                this.roomFilterSubject.next(room);
console.log(this.roomQueryObservable);
        return this.roomQueryObservable;
    }

    // columns/{roomId}/[{id: "121", name:"mad"}]
    getColumns(roomId) {
        return this.af.database.list(`/columns/${roomId}`);
    }

    // messages/{roomId}/{columnId}/[{id: "121", published: true, text: "I am mad", uid: "23232", votes: 2 }]
    getMessages(roomId, columnId) {
        return this.af.database.list(`/messages/${roomId}/${columnId}`);
    }

    deleteColumn(roomId, columnId, key) {
        this.af.database.list(`/columns/${roomId}`).remove(columnId);
        this.af.database.list(`/messages/${roomId}/${columnId}`).remove();
    }

    setDiscussMode() {
        this._discussModeObserver.next(true);
    }

    selectedMessages = [];
    selectMessage(message: string, votes: number) {
        this.selectedMessages.push({ message: message, votes: votes });
        console.log(message, votes);
    }

    getSelectedMessages() {
        return this.selectedMessages;
    }

    setUser(name: string, id: string) {
        this.af.database.object(`/users/${id}`).set({ name: name });
    }


}
