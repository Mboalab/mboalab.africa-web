import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BiotechComponent } from './pages/biotech/biotech.component';
import { OpenHealthComponent } from './pages/open-health/open-health.component';
import { KnowledgeHubComponent } from './pages/knowledge-hub/knowledge-hub.component';
import { NewsAndEventsComponent } from './pages/news-and-events/news-and-events.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BiotechComponent,
    OpenHealthComponent,
    KnowledgeHubComponent,
    NewsAndEventsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
