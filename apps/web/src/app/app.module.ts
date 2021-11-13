import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { ListComponent } from './components/list/list.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './modules/auth/auth.module';
import { NewPostComponent } from './components/new-post/new-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppErrorHandler } from './app-error-handler';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    CardComponent,
    NewPostComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
    MatCardModule,
    HttpClientModule,
    AuthModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    {
      provide: 'API_BASE_URL',
      useValue: 'http://localhost:3333/api',
    },
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler,
    },
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {}
