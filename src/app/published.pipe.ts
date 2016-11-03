import { Pipe, PipeTransform } from '@angular/core';
import { AuthService } from './auth.service';

@Pipe({
  name: 'published'
})
export class PublishedPipe implements PipeTransform {
  constructor(private auth: AuthService) {

  }

  transform(value: any, args?: any): any {

    if (value) {
      return value.filter(message => message.published || message.uid === this.auth.uid);
    }

    return;
  }

}
