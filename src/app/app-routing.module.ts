import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BiotechComponent } from './pages/biotech/biotech.component';
import { OpenHealthComponent } from './pages/open-health/open-health.component';
import { KnowledgeHubComponent } from './pages/knowledge-hub/knowledge-hub.component';
import { NewsAndEventsComponent } from './pages/news-and-events/news-and-events.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'biotech', component: BiotechComponent },
  { path: 'open-health', component: OpenHealthComponent },
  { path: 'knowledge-hub', component: KnowledgeHubComponent },
  { path: 'news-and-events', component: NewsAndEventsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
