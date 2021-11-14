import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ownerPost'
})
export class OwnerPostPipe implements PipeTransform {

  private login = window.localStorage.getItem('login');

  transform(value: string, color?: string): string {
    if (this.login && this.login === value) {
      return color || 'gray';
    }
    return 'black';
  }

}
