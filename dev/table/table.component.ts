import {Component} from 'angular2/core';
import {OnInit} from "angular2/core";
import {AgGridNg2} from 'ag-grid-ng2/main';
import {GridOptions} from 'ag-grid/main';
import {TableData} from '../services/tableData.service';
import {HTTPComponent} from "../http.component";
import {HTTPTestService} from "../services/http-test.service";
import {getResponseURL} from "angular2/src/http/http_utils";

@Component({
    selector: 'xplore-table',
    templateUrl: '/dev/table/table.html',
    directives: [AgGridNg2, HTTPComponent],
    //style: ['.toolbar button {margin: 2px; padding: 0px;}'],
    //styleUrls: ['node_modules/ag-grid/dist/styles/ag-grid.css','node_modules/ag-grid/dist/styles/theme-fresh.css'],
    providers: [TableData,HTTPTestService]
})
export class TableComponent implements OnInit{
    myData;

    columnDefs = [
        {headerName: 'ID', field: "id", width: 100 },
        {headerName: 'TMA study', field: "tmaStudy" ,width:100},
        {headerName: 'Scorer', field: "scorer" ,width:100},
        {headerName: 'Stain', field: "stain" ,width:100},
        {headerName: 'Row', field: "row" ,width:100},
        {headerName: 'Column', field: "column" ,width:100},
        {headerName: 'Core Type', field: "coreType" ,width:100},
        {headerName: 'Core Status', field: "coreStatus" ,width:100},
        {headerName: 'Tissue Type', field: "tissueType" ,width:100},
        {headerName: 'Intensity', field: "intensity" ,width:100},
        {headerName: 'Comments', field: "comments" ,width:100}
    ];
    gridOptions: GridOptions;

    constructor(private _tableDataService: TableData, private _httpService: HTTPTestService){
        this.gridOptions = <GridOptions>{};
        this.gridOptions.columnDefs = this.columnDefs;
        this.gridOptions.rowData = this.myData;
        this.gridOptions.enableColResize = true;
        this.gridOptions.enableSorting = true;
        /*this.gridOptions = {
            rowData: this.myData,
            columnDefs: this.columnDefs,
            enableColResize: true,
            enableSorting: true,
            enableFilter: true
        };*/
    }

    ngOnInit(){
        this._httpService.getCustom()
            .subscribe(
                data => ((this.gridOptions.api.setRowData(data)), this.gridOptions.api.refreshView(),this.myData = data),
                error => alert(error),
                () => console.log("ngOnInit finished")
            );
    }

    onLog(message:string){
        this._tableDataService.log(message);
    }

    autoSizeAll(){
        var allColumnIds = [];
        this.columnDefs.forEach( function(columnDef) {
            allColumnIds.push(columnDef.field);
        });
        this.gridOptions.columnApi.autoSizeColumns(allColumnIds);
    }
}

/*
* <br>
 <input type="text" #message>
 <button (click)="onLog(message.value)">send</button>
 <hr>
 <http-test></http-test>
 <hr>
 <h4 class="text-center">This is just to say the json is working</h4>
 <p class="text-muted text-center">This is looping through the myData model and printing out some of its elements, pretty simple.</p>
 <ul>
 <li *ngFor="#item of myData; #i = index">{{item.id}} - {{item.scorer}}</li>
 </ul>
* */

/*myRowData = [
 {"name":"Ronald Bowman","country":"China","city":"Lutou","email":"rbowman0@spotify.com"},
 {"name":"Pamela Hill","country":"Russia","city":"Krylovskaya","email":"phill1@symantec.com"},
 {"name":"Robin Andrews","country":"Ukraine","city":"Korop","email":"randrews2@photobucket.com"},
 {"name":"Peter Kim","country":"Mexico","city":"San Jose","email":"pkim3@theatlantic.com"},
 {"name":"Carol Foster","country":"Mexico","city":"El Aguacate","email":"cfoster8@intel.com"},
 {"name":"Jimmy Burke","country":"Indonesia","city":"Banjarsari","email":"jburke9@over-blog.com"},
 {"name":"Jonathan Crawford","country":"Peru","city":"Alca","email":"jcrawforda@deliciousdays.com"},
 {"name":"Donald Montgomery","country":"Poland","city":"Działoszyce","email":"dmontgomeryb@google.com.br"},
 {"name":"Donna Shaw","country":"Japan","city":"Akune","email":"dshawc@chronoengine.com"},
 {"name":"Helen King","country":"United States","city":"Hollywood","email":"hkingd@devhub.com"},
 {"name":"Walter Myers","country":"China","city":"a ndaowa n", "email":"wmyerse@state.tx.us"},
 {"name":" Alice Collins","country":"Papua Nw  Guine a", "city":"Mendi","email":"acollinsf@npr.org"},
 {"name":"Anne Richards","country":"China","city":"Koramlik","email":"arichardsu@vinaora.com"},
 {"name":"Randy Miller","country":"Indonesia","city":"Trenggulunan","email":"rmillerv@oakley.com"},
 {"name":"Phillip Adams","country":"Bahamas","city":"Duncan Town","email":"padamsw@lycos.com"},
 {"name":"Nicholas Allen","country":"Philippines","city":"Bautista","email":"nallenx@aboutads.info"},
 {"name":"Lisa Willis","country":"Thailand","city":"Lat Yao","email":"lwillisy@istockphoto.com"},
 {"name":"Jeffrey Castillo","country":"Indonesia","city":"Karangsari","email":"jcastilloz@washington.edu"},
 {"name":"Michael Carpenter","country":"Colombia","city":"Cali","email":"mcarpenter13@prlog.org"},
 {"name":"Roger Lee","country":"France","city":"Courtaboeuf","email":"rlee14@earthlink.net"},
 {"name":"Steve Wallace","country":"Russia","city":"Novobeysugskaya","email":"swallace15@cisco.com"},
 {"name":"Shirley Patterson","country":"Peru","city":"La Tinguiña","email":"spatterson16@woothemes.com"},
 {"name":"Nancy Ward","country":"Sweden","city":"Båstad","email":"nward17@mapquest.com"}
 ];*/
/*columnDefs = [
 {headerName: 'Name', field: "name", width: 200 },
 {headerName: 'Country', field: "country" ,width:180},
 {headerName: 'City', field: "city" ,width:160},
 {headerName: 'e-mail', field: "email" ,width:300}
 ];*/