import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { linksReducer } from './store/links.reducer';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AddLinkComponent } from './components/add-link/add-link.component';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { ResetDataComponent } from './components/reset-data/reset-data.component'; // Angular CLI
import { ReactiveFormsModule } from '@angular/forms';

// mock backend
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/db';

@NgModule({
  declarations: [
    AppComponent,
    AddLinkComponent,
    DataGridComponent,
    ResetDataComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    StoreModule.forRoot({ links: linksReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
