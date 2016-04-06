/**
 * Created by FranciscoSantos on 24/02/2016.
 */
import {Component} from 'angular2/core';
import {HTTPTestService} from "./services/http-test.service";

@Component({
    selector: 'http-test',
    template: `
        <button (click)="onTestGet()">Test GET request</button>
        <p>Output: {{getData}}</p>
        <button (click)="onTestPost()">Test POST request</button>
        <p>Output: {{postData}}</p>
        <button (click)="onTestGetCustom()">Test custom request</button>
        <p>Output: {{customData}}</p>
    `,
    providers: [HTTPTestService]
})
export class HTTPComponent {
    getData: string;
    postData: string;
    customData: string;

    constructor (private _httpService: HTTPTestService){

    }

    onTestGet(){
        this._httpService.getCurrentTime()
            .subscribe(
                data => this.getData = JSON.stringify(data),
                error => alert(error),
                () => console.log("finished")
            );
    }

    onTestPost(){
        this._httpService.postJSON()
            .subscribe(
                data => this.postData = JSON.stringify(data),
                error => alert(error),
                () => console.log("finished")
            );
    }

    onTestGetCustom(){
        this._httpService.getCustom()
            .subscribe(
                data => this.customData = JSON.stringify(data),
                error => alert(error),
                () => console.log("finished")
            );
    }
}