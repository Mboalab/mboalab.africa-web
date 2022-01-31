import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navItems = [
    { name: 'Home', link: 'home'},
    { name: 'About', link: 'about', children: [{name: 'Who we are', link: 'who-we-are'}, {name: 'Team', link: 'team'}, {name: 'Partners', link:'partners'}]},
    { name: 'Biotech', link: 'biotech', children: [{name: 'Bio manufacturing and Research' ,link: 'bio-manu-and-research'}, {name: 'Research training hub and Exchange hub', link: 'hubs'}, {name: 'Projects',link: 'biotech-projects'}, {name: 'Beneficial Bio',link: 'beneficial-bio'}]},
    { name: 'Open Health', link: 'open-health', children: [{name: 'Projects', link: 'openhealth-projects'}, {name: 'Diagnose',link: 'diagnose'}, {name: 'AI for Health', link: 'ai-for-health'}]},
    { name: 'Knowledge Health', link:'knowledge-health', children: [{name: 'Open Educational Resources', link:'edu-resources'}, {name: 'Talks & Conferences',link: 'talks-and-confs'}]},
    { name: 'News & Events', link: 'news-and-events', children: [{name: 'Blog', link: 'blog'}, {name: 'Opportunities', link: 'opportunities'}]},
    { name: 'Contact', link: 'contact' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
