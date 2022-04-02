import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CircleComponent } from './components/circle/circle.component';
import { IconFacebookComponent } from './components/icon-facebook/icon-facebook.component';
import { IconTwitterComponent } from './components/icon-twitter/icon-twitter.component';
import { IconYoutubeComponent } from './components/icon-youtube/icon-youtube.component';
import { IconInstagramComponent } from './components/icon-instagram/icon-instagram.component';
import { IconLinkedinComponent } from './components/icon-linkedin/icon-linkedin.component';
import { LogoShutterworthComponent } from './components/logo-shutterworth/logo-shutterworth.component';
import { LogoLightbackComponent } from './components/logo-lightback/logo-lightback.component';
import { LogoBeneficialBioComponent } from './components/logo-beneficial-bio/logo-beneficial-bio.component';
import { LogoOpenSocietyComponent } from './components/logo-open-society/logo-open-society.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    CircleComponent,
    IconFacebookComponent,
    IconTwitterComponent,
    IconYoutubeComponent,
    IconInstagramComponent,
    IconLinkedinComponent,
    LogoShutterworthComponent,
    LogoLightbackComponent,
    LogoBeneficialBioComponent,
    LogoOpenSocietyComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    CircleComponent,
    IconFacebookComponent,
    IconTwitterComponent,
    IconYoutubeComponent,
    IconInstagramComponent,
    IconLinkedinComponent,
    LogoShutterworthComponent,
    LogoLightbackComponent,
    LogoBeneficialBioComponent,
    LogoOpenSocietyComponent
  ]
})
export class SharedModule { }
