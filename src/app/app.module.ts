import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VenusModule } from '@kauelima21/venus';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, VenusModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
