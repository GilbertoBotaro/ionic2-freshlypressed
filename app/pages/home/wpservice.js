import {Injectable, Inject} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/Rx';

@Injectable()
export class WpService {
    static get parameters() {
        return [Http];
    }
    
    constructor(http) {
        this.http = http;
        this.data = null;
    }
    
    loadData() {
        this.http.get('https://public-api.wordpress.com/rest/v1.1/freshly-pressed/').map(res => res.json()).subscribe(data => {
            this.data = data;
        });
    }
    
    getData(){
        return this.data;
    }
}