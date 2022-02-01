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
import { WhoWeAreComponent } from './pages/about/who-we-are/who-we-are.component';
import { TeamComponent } from './pages/about/team/team.component';
import { PartnersComponent } from './pages/about/partners/partners.component';
import { BioManufacAndResearchComponent } from './pages/biotech/bio-manufac-and-research/bio-manufac-and-research.component';
import { HubsComponent } from './pages/biotech/hubs/hubs.component';
import { BiotechProjectsComponent } from './pages/biotech/biotech-projects/biotech-projects.component';
import { BeneficialBioComponent } from './pages/biotech/beneficial-bio/beneficial-bio.component';
import { OpenhealthProjectsComponent } from './pages/open-health/openhealth-projects/openhealth-projects.component';
import { DiagnoseComponent } from './pages/open-health/diagnose/diagnose.component';
import { AIForHealthComponent } from './pages/open-health/aifor-health/aifor-health.component';
import { EduResourcesComponent } from './pages/knowledge-hub/edu-resources/edu-resources.component';
import { TalksAndConfsComponent } from './pages/knowledge-hub/talks-and-confs/talks-and-confs.component';
import { BlogComponent } from './pages/news-and-events/blog/blog.component';
import { OpportunitiesComponent } from './pages/news-and-events/opportunities/opportunities.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BiotechComponent,
    OpenHealthComponent,
    KnowledgeHubComponent,
    NewsAndEventsComponent,
    ContactComponent,
    WhoWeAreComponent,
    TeamComponent,
    PartnersComponent,
    BioManufacAndResearchComponent,
    HubsComponent,
    BiotechProjectsComponent,
    BeneficialBioComponent,
    OpenhealthProjectsComponent,
    DiagnoseComponent,
    AIForHealthComponent,
    EduResourcesComponent,
    TalksAndConfsComponent,
    BlogComponent,
    OpportunitiesComponent
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
