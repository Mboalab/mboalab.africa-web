import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
import { BiotechProjectsComponent } from './pages/biotech/biotech-projects/biotech-projects.component';
import { HubsComponent } from './pages/biotech/hubs/hubs.component';
import { BeneficialBioComponent } from './pages/biotech/beneficial-bio/beneficial-bio.component';
import { OpenhealthProjectsComponent } from './pages/open-health/openhealth-projects/openhealth-projects.component';
import { DiagnoseComponent } from './pages/open-health/diagnose/diagnose.component';
import { AIForHealthComponent } from './pages/open-health/aifor-health/aifor-health.component';
import { EduResourcesComponent } from './pages/knowledge-hub/edu-resources/edu-resources.component';
import { TalksAndConfsComponent } from './pages/knowledge-hub/talks-and-confs/talks-and-confs.component';
import { BlogComponent } from './pages/news-and-events/blog/blog.component';
import { OpportunitiesComponent } from './pages/news-and-events/opportunities/opportunities.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'about',
    children: [
      { path: '', component: AboutComponent },
      { path: 'who-we-are', component: WhoWeAreComponent },
      { path: 'team', component: TeamComponent },
      { path: 'partners', component: PartnersComponent }
    ]
  },
  {
    path: 'biotech',
    children: [
      { path: '', component: BiotechComponent },
      { path: 'bio-manufac-and-research', component: BioManufacAndResearchComponent },
      { path: 'biotech-projects', component: BiotechProjectsComponent },
      { path: 'hubs', component: HubsComponent },
      { path: 'beneficial-bio', component: BeneficialBioComponent }
    ]
  },
  {
    path: 'open-health',
    children: [
      { path: '', component: OpenHealthComponent },
      { path: 'openhealth-projects', component: OpenhealthProjectsComponent },
      { path: 'diagnose', component: DiagnoseComponent },
      { path: 'ai-for-health', component: AIForHealthComponent }
    ]
  },
  {
    path: 'knowledge-hub',
    children: [
      { path: '', component: KnowledgeHubComponent },
      { path: 'edu-resources', component: EduResourcesComponent },
      { path: 'talks-and-confs', component: TalksAndConfsComponent },
    ]
  },
  {
    path: 'news-and-events',
    children: [
      { path: '', component: NewsAndEventsComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'opportunities', component: OpportunitiesComponent },
    ]
  },
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
