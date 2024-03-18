import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pool',
  templateUrl: './pool.component.html',
  styleUrls: ['./pool.component.scss']
})
export class poolComponent {
  cities:any = [
    {pathName: "malaga", cityName: "Málaga", coords: '36.7167456;-4.4259962'},
    {pathName: "velez", cityName: "Vélez-Málaga", coords: ''},
    {pathName: "torrox", cityName: "Torrox", coords: '36.731459, -3.968177'},
    {pathName: "nerja", cityName: "Nerja", coords: '36.745400, -3.878223'},
    {pathName: "torre", cityName: "Torre del Mar", coords: '36.73959040558633, -4.096894860244808'},    
  ];

  citySEO:any;

  constructor(
    private meta: Meta,
    private route: ActivatedRoute) {

      this.route.params.subscribe(params => {
        const urlCity = params['city'];
        this.citySEO = this.cities.filter((city:any) => city.pathName === urlCity)[0];
        this.meta.updateTag({ name: 'description', content: `Mantenimiento de Piscinas en ${this.citySEO ? this.citySEO.cityName : "Málaga"} ` });
        this.meta.updateTag({ name: 'keywords', content: `Jardinería, Piscinas, paisajismo, ${this.citySEO ? this.citySEO.cityName : "Málaga"}` });
        this.meta.updateTag({ name: 'geo.placename', content: `${this.citySEO ? this.citySEO.cityName : "Málaga"}` });
        this.meta.updateTag({ name: 'geo.position', content: `${this.citySEO ? this.citySEO.coords : '36.7167456;-4.4259962'}` });
        this.meta.updateTag({ name: 'og:title', content: `Mantenimiento de Piscinas en ${this.citySEO ? this.citySEO.cityName : "Málaga"} ` });
        this.meta.updateTag({ name: 'og:description', content: `Mantenimiento de Piscinas en ${this.citySEO ? this.citySEO.cityName : "Málaga"} ` });

        // Imagen RRSS 
        // this.meta.updateTag({ name: 'og:image', content: `` });

      });

  }
}
