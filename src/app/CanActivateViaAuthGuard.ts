import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AngularFire } from 'angularfire2';
import { Subject } from 'rxjs/Rx';
import {AuthService} from './auth.service';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {
    _canNavigate$: Subject<boolean>;
    
    constructor(private af: AngularFire, private router: Router, private authService: AuthService) {

        this._canNavigate$ = <Subject<boolean>>new Subject();

        this.af.auth.subscribe(user => {
            if (user) {
                this._canNavigate$.next(true);
                this._canNavigate$.complete();
            } else {
                this.router.navigate(['login']);
                this._canNavigate$.next(false);
                this._canNavigate$.complete();
            }
        });
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.authService.redirectUrl = state.url;
        return this._canNavigate$.asObservable();
    }
}