import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  name = environment.application.name;
  language = ''

  constructor(public translateService: TranslocoService) {}

  public onSetLanguage(lang: string) {
    this.translateService.setActiveLang(lang);
    this.language = lang;
    console.log('lang:', this.language)
  }

  
  ngOnInit(): void {
    this.initializeNavigation();
    this.handleScroll();
  }

  initializeNavigation(): void {
    const body:any = document.querySelector('body');
    const navbarMenu:any = document.querySelector('#cs-navigation');
    const hamburgerMenu:any = document.querySelector('#cs-navigation .cs-toggle');

    hamburgerMenu.addEventListener('click', () => {
      hamburgerMenu.classList.toggle('cs-active');
      navbarMenu.classList.toggle('cs-active');
      body.classList.toggle('cs-open');
      this.toggleAriaExpanded();
    });

    const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
    for (const item of dropDowns) {
      const onClick = () => {
        item.classList.toggle('cs-active');
      }
      item.addEventListener('click', onClick);
    }
  }

  toggleAriaExpanded(): void {
    const csUL:any = document.querySelector('#cs-expanded');
    const csExpanded = csUL.getAttribute('aria-expanded');

    if (csExpanded === 'false') {
      csUL.setAttribute('aria-expanded', 'true');
    } else {
      csUL.setAttribute('aria-expanded', 'false');
    }
  }
  handleScroll(): void {
    if (document && document.querySelector('body')) {
      document.addEventListener('scroll', () => { 
        const scroll = document.documentElement.scrollTop;
        if (scroll >= 100) {
          document.querySelector('body')!.classList.add('scroll');
        } else {
          document.querySelector('body')!.classList.remove('scroll');
        }
      });
    }
  }
}
