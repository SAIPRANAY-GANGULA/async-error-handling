import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { catchError, ignoreElements, of } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private userService = inject(UserService);
  // use different methods of userService to see how error handling works
  user$ = this.userService.getUser();
  // user$ = this.userService.getUserWithError();
  // user$ = this.userService.getTemporalUser();
  userError$ = this.user$.pipe(
    ignoreElements(),
    catchError((err) => of(err))
  );
}
