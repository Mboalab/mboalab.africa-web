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

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    CircleComponent,
    IconFacebookComponent,
    IconTwitterComponent,
    IconYoutubeComponent,
    IconInstagramComponent,
    IconLinkedinComponent
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
    IconLinkedinComponent
  ]
})
export class SharedModule { }
