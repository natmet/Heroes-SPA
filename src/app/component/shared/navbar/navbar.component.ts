import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  constructor(private heroeService: HeroesService, private router: Router) {}

  ngOnInit(): void {}

  buscarHeroes(termino: string) {
    this.router.navigate(['/buscar', termino]);
  }
}
