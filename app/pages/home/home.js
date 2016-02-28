import {Inject} from 'angular2/core';
import {Page} from 'ionic-framework/ionic';
import {WpService} from './wpservice';


@Page({
  templateUrl: 'build/pages/home/home.html',
    providers: [WpService]
})

export class HomePage {
    static get parameters(){
        return [WpService];
    }
    
    constructor(wpservice){
        this.service = wpservice;
        this.data = null;
        this.flag = true;
    }
    
    retrieve(refresher){
        this.service.loadData();
        
        setTimeout(() => {
            this.data = this.service.getData().posts;
            this.flag = false;
            refresher.complete();
        }, 5000);
    }
}

