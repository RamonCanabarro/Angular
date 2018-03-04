import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-artistas',
  templateUrl: 'artistas.html',
})
export class ArtistasPage {
  item;

  constructor(params: NavParams) {
    this.item = params.data.item;
  }
}
export class BasicPage {
  items = [];

  constructor(public nav: NavController){}
  Artistas(item) {
    cssClass:'lista'
    this.items = [
      {
        'text': 'Midiã',
        'icon': 'Contact',
        'description': 'O coração',
        'color': '#E63135'
      },
      {
        'text': 'Orion',
        'icon': 'contact',
        'description': 'O PODEROSO',
        'color': '#0CA9EA'
      },
      {
        'text': 'Jonathan',
        'icon': 'contact',
        'description': 'O Mano',
        'color': '#F46529'
      },
      {
        'text': 'Wilson',
        'icon': 'contact',
        'description': 'Grande Homem',
        'color': '#FFD439'
      },
      {
        'text': 'Italo',
        'icon': 'contact',
        'description': 'Cabuloso',
        'color': '#CE6296'
      },
      {
        'text': 'Silvio',
        'icon': 'contact',
        'description': 'Parceiro',
        'color': '#78BD43'
      },
      {
        'text': 'Alécio',
        'icon': 'python',
        'description': 'Programador',
        'color': '#3575AC'
      },
      {
        'text': 'Diego',
        'icon': 'contact',
        'description': 'Outro programador',
        'color': '#412159'
      },
      {
        'text': 'Tux',
        'icon': 'tux',
        'description': 'The official mascot of the Linux kernel!',
        'color': '#000'
      },
    ]
    this.nav.push(ArtistasPage, { item: item });
  }  

}