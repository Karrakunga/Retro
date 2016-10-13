import { Routes, RouterModule } from '@angular/router';

import { RoomComponent } from './room/room.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {path: '', component: LoginComponent},
  {path: 'rooms/:room', component: RoomComponent}
];

// - Updated Export
export const routing = RouterModule.forRoot(routes);