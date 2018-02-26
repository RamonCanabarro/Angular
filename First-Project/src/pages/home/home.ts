import { Component } from '@angular/core';
import { Platform, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public platform: Platform,
    public ActionSheetController: ActionSheetController
){}
openMenu(openNavDetailsPage ){
    let ActionSheet = this.ActionSheetController.create({
        title:'Menu',
        cssClass:'action-sheets-basic-page',
        buttons:[
            {
                text: 'Artistas',
                role: 'destructive',
                icon: !this.platform.is('ios') ? 'ionitron' : null,
                handler:()=>{
                    return openNavDetailsPage;
                }
            },
            {
                text: 'Músicas',
                icon: !this.platform.is('ios') ? 'musical-note' : null,
                handler: () => {
                  console.log('Músicas');
                }
              },
              {
                text: 'Álbuns',
                icon: !this.platform.is('ios') ? 'albums' : null,
                handler: () => {
                  console.log('Álbuns');
                }
              }
        ]
    });
ActionSheet.present();
}
}