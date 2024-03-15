import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-filter',
  templateUrl: './gallery-filter.component.html',
  styleUrls: ['./gallery-filter.component.scss']
})
export class GalleryFilterComponent implements OnInit {
  filtersSelector = '.cs-button';
  galleriesSelector = '.cs-gallery';
  activeClass = 'cs-active';
  hiddenClass = 'cs-hidden';
  $galleries: any;
  $activeFilter: any;

  constructor() { }

  ngOnInit(): void {
    this.$galleries = document.querySelectorAll(this.galleriesSelector);
    const $filters = document.querySelectorAll(this.filtersSelector);

    this.onClick($filters[0]);

    for (const $filter of Array.from($filters)) {
      $filter.addEventListener('click', () => this.onClick($filter));
    }
  }

  onClick($filter: any) {
    this.filter($filter.dataset.filter);

    const { activeClass } = this;

    if (this.$activeFilter) {
      this.$activeFilter.classList.remove(activeClass);
    }
    $filter.classList.add(activeClass);

    this.$activeFilter = $filter;
  }

  filter(filter: string) {
    const showAll = filter == 'all';
    const { hiddenClass } = this;

    for (const $gallery of Array.from(this.$galleries)) {
      const gallery = $gallery as HTMLElement; // Convertir $gallery a tipo HTMLElement
      const show = showAll || gallery.getAttribute('data-category') == filter;
      gallery.classList.toggle(hiddenClass, !show);
    }
}
}
