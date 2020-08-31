import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DraftComponent } from './draft/draft.component';
import { DraftService } from './draft.service';
import { HttpClientModule } from '@angular/common/http';
import { PlayerListComponent } from './player-list/player-list.component';
import { CurrentPickComponent } from './current-pick/current-pick.component';

@NgModule({
  declarations: [
    AppComponent,
    DraftComponent,
    PlayerListComponent,
    CurrentPickComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DraftService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
