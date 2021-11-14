import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { ListComponent } from './components/list/list.component';
import { CardComponent } from './components/card/card.component';
import { AuthModule } from './modules/auth/auth.module';
import { NewPostComponent } from './components/new-post/new-post.component';
import { AppErrorHandler } from './app-error-handler';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    CardComponent,
    NewPostComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    AppRoutingModule,
    MatCardModule,
    HttpClientModule,
    AuthModule,
    SharedModule,
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
