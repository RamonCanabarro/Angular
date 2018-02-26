import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  templateUrl: 'artistas.html',
})
export class NavigationDetailsPage {
  item;

  constructor(params: NavParams) {
    this.item = params.data.item;
  }
}

@Component({
  template: `
<ion-header>
  <ion-navbar>
    <ion-title>Navigation</ion-title>
  </ion-navbar>
</ion-header>
<ion-content>
  <ion-list>
    <button ion-item *ngFor="let item of items" (click)="openNavDetailsPage(item)" icon-start>
      <ion-icon [name]="'logo-' + item.icon" [ngStyle]="{'color': item.color}" item-start></ion-icon>
      {{ item.title }}
    </button>
  </ion-list>
</ion-content>
`
})
export class BasicPage {
  items = [];

  constructor(public nav: NavController) {
    this.items = [
      {
        'title': 'Midiã',
        'icon': 'Contact',
        'description': 'O coração',
        'color': '#E63135'
      },
      {
        'title': 'Orion',
        'icon': 'contact',
        'description': 'O PODEROSO',
        'color': '#0CA9EA'
      },
      {
        'title': 'Jonathan',
        'icon': 'contact',
        'description': 'O Mano',
        'color': '#F46529'
      },
      {
        'title': 'Wilson',
        'icon': 'contact',
        'description': 'Grande Homem',
        'color': '#FFD439'
      },
      {
        'title': 'Italo',
        'icon': 'contact',
        'description': 'Cabuloso',
        'color': '#CE6296'
      },
      {
        'title': 'Silvio',
        'icon': 'contact',
        'description': 'Parceiro',
        'color': '#78BD43'
      },
      {
        'title': 'Alécio',
        'icon': 'python',
        'description': 'Programador',
        'color': '#3575AC'
      },
      {
        'title': 'Diego',
        'icon': 'contact',
        'description': 'Outro programador',
        'color': '#412159'
      },
      {
        'title': 'Tux',
        'icon': 'tux',
        'description': 'The official mascot of the Linux kernel!',
        'color': '#000'
      },
    ]
  }

  openNavDetailsPage(item) {
    this.nav.push(NavigationDetailsPage, { item: item });
  }

}