import { Injectable } from '@angular/core';
import { concatMap, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getUser() {
    return of('Josh').pipe(delay(2000));
  }

  getUserWithError() {
    return of('Josh').pipe(
      delay(2000),
      tap(() => {
        throw new Error('Could not fetch user');
      })
    );
  }

  getTemporalUser() {
    return of('Josh', 'Greg', 'oops', 'Josh').pipe(
      concatMap((user) => of(user).pipe(delay(2000))),
      tap((user) => {
        if (user === 'oops') {
          throw new Error('Could not fetch user');
        }
      })
    );
  }
}
