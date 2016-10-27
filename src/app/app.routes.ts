import { Routes, RouterModule } from '@angular/router';

import { RoomComponent } from './room/room.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CanActivateViaAuthGuard} from './CanActivateViaAuthGuard';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'rooms/:room', component: RoomComponent, canActivate: [CanActivateViaAuthGuard]}
];

export const routing = RouterModule.forRoot(routes);
