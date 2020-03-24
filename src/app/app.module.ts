import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { linksReducer } from './store/links.reducer';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AddLinkComponent } from './components/add-link/add-link.component';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { ResetDataComponent } from './components/reset-data/reset-data.component'; // Angular CLI

@NgModule({
  declarations: [
    AppComponent,
    AddLinkComponent,
    DataGridComponent,
    ResetDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ links: linksReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
