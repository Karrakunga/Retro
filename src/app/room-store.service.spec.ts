/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RoomStoreService } from './room-store.service';

describe('Service: RoomStore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoomStoreService]
    });
  });

  it('should ...', inject([RoomStoreService], (service: RoomStoreService) => {
    expect(service).toBeTruthy();
  }));
});
