System.register(['angular2/core', 'ag-grid-ng2/main', '../services/tableData.service', "../http.component", "../services/http-test.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, main_1, tableData_service_1, http_component_1, http_test_service_1;
    var TableComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (main_1_1) {
                main_1 = main_1_1;
            },
            function (tableData_service_1_1) {
                tableData_service_1 = tableData_service_1_1;
            },
            function (http_component_1_1) {
                http_component_1 = http_component_1_1;
            },
            function (http_test_service_1_1) {
                http_test_service_1 = http_test_service_1_1;
            }],
        execute: function() {
            TableComponent = (function () {
                function TableComponent(_tableDataService, _httpService) {
                    this._tableDataService = _tableDataService;
                    this._httpService = _httpService;
                    this.columnDefs = [
                        { headerName: 'ID', field: "id", width: 100 },
                        { headerName: 'TMA study', field: "tmaStudy", width: 100 },
                        { headerName: 'Scorer', field: "scorer", width: 100 },
                        { headerName: 'Stain', field: "stain", width: 100 },
                        { headerName: 'Row', field: "row", width: 100 },
                        { headerName: 'Column', field: "column", width: 100 },
                        { headerName: 'Core Type', field: "coreType", width: 100 },
                        { headerName: 'Core Status', field: "coreStatus", width: 100 },
                        { headerName: 'Tissue Type', field: "tissueType", width: 100 },
                        { headerName: 'Intensity', field: "intensity", width: 100 },
                        { headerName: 'Comments', field: "comments", width: 100 }
                    ];
                    this.gridOptions = {};
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
                TableComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._httpService.getCustom()
                        .subscribe(function (data) { return ((_this.gridOptions.api.setRowData(data)), _this.gridOptions.api.refreshView(), _this.myData = data); }, function (error) { return alert(error); }, function () { return console.log("ngOnInit finished"); });
                };
                TableComponent.prototype.onLog = function (message) {
                    this._tableDataService.log(message);
                };
                TableComponent.prototype.autoSizeAll = function () {
                    var allColumnIds = [];
                    this.columnDefs.forEach(function (columnDef) {
                        allColumnIds.push(columnDef.field);
                    });
                    this.gridOptions.columnApi.autoSizeColumns(allColumnIds);
                };
                TableComponent = __decorate([
                    core_1.Component({
                        selector: 'xplore-table',
                        templateUrl: '/dev/table/table.html',
                        directives: [main_1.AgGridNg2, http_component_1.HTTPComponent],
                        //style: ['.toolbar button {margin: 2px; padding: 0px;}'],
                        //styleUrls: ['node_modules/ag-grid/dist/styles/ag-grid.css','node_modules/ag-grid/dist/styles/theme-fresh.css'],
                        providers: [tableData_service_1.TableData, http_test_service_1.HTTPTestService]
                    }), 
                    __metadata('design:paramtypes', [tableData_service_1.TableData, http_test_service_1.HTTPTestService])
                ], TableComponent);
                return TableComponent;
            })();
            exports_1("TableComponent", TableComponent);
        }
    }
});
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlL3RhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJUYWJsZUNvbXBvbmVudCIsIlRhYmxlQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiVGFibGVDb21wb25lbnQubmdPbkluaXQiLCJUYWJsZUNvbXBvbmVudC5vbkxvZyIsIlRhYmxlQ29tcG9uZW50LmF1dG9TaXplQWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQTtnQkEwQklBLHdCQUFvQkEsaUJBQTRCQSxFQUFVQSxZQUE2QkE7b0JBQW5FQyxzQkFBaUJBLEdBQWpCQSxpQkFBaUJBLENBQVdBO29CQUFVQSxpQkFBWUEsR0FBWkEsWUFBWUEsQ0FBaUJBO29CQWZ2RkEsZUFBVUEsR0FBR0E7d0JBQ1RBLEVBQUNBLFVBQVVBLEVBQUVBLElBQUlBLEVBQUVBLEtBQUtBLEVBQUVBLElBQUlBLEVBQUVBLEtBQUtBLEVBQUVBLEdBQUdBLEVBQUVBO3dCQUM1Q0EsRUFBQ0EsVUFBVUEsRUFBRUEsV0FBV0EsRUFBRUEsS0FBS0EsRUFBRUEsVUFBVUEsRUFBRUEsS0FBS0EsRUFBQ0EsR0FBR0EsRUFBQ0E7d0JBQ3ZEQSxFQUFDQSxVQUFVQSxFQUFFQSxRQUFRQSxFQUFFQSxLQUFLQSxFQUFFQSxRQUFRQSxFQUFFQSxLQUFLQSxFQUFDQSxHQUFHQSxFQUFDQTt3QkFDbERBLEVBQUNBLFVBQVVBLEVBQUVBLE9BQU9BLEVBQUVBLEtBQUtBLEVBQUVBLE9BQU9BLEVBQUVBLEtBQUtBLEVBQUNBLEdBQUdBLEVBQUNBO3dCQUNoREEsRUFBQ0EsVUFBVUEsRUFBRUEsS0FBS0EsRUFBRUEsS0FBS0EsRUFBRUEsS0FBS0EsRUFBRUEsS0FBS0EsRUFBQ0EsR0FBR0EsRUFBQ0E7d0JBQzVDQSxFQUFDQSxVQUFVQSxFQUFFQSxRQUFRQSxFQUFFQSxLQUFLQSxFQUFFQSxRQUFRQSxFQUFFQSxLQUFLQSxFQUFDQSxHQUFHQSxFQUFDQTt3QkFDbERBLEVBQUNBLFVBQVVBLEVBQUVB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LEVBQUNBLG1DQUFlQSxDQUFDQTtxQkFDekNBLENBQUNBOzttQ0FzRERBO2dCQUFEQSxxQkFBQ0E7WUFBREEsQ0E3REEsQUE2RENBLElBQUE7WUE3REQsMkNBNkRDLENBQUE7Ozs7QUFFRDs7Ozs7Ozs7Ozs7O0lBWUk7QUFFSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBd0JLO0FBQ0w7Ozs7O0tBS0siLCJmaWxlIjoidGFibGUvdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge09uSW5pdH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuaW1wb3J0IHtBZ0dyaWROZzJ9IGZyb20gJ2FnLWdyaWQtbmcyL21haW4nO1xyXG5pbXBvcnQge0dyaWRPcHRpb25zfSBmcm9tICdhZy1ncmlkL21haW4nO1xyXG5pbXBvcnQge1RhYmxlRGF0YX0gZnJvbSAnLi4vc2VydmljZXMvdGFibGVEYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQge0hUVFBDb21wb25lbnR9IGZyb20gXCIuLi9odHRwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0hUVFBUZXN0U2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAtdGVzdC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Z2V0UmVzcG9uc2VVUkx9IGZyb20gXCJhbmd1bGFyMi9zcmMvaHR0cC9odHRwX3V0aWxzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAneHBsb3JlLXRhYmxlJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnL2Rldi90YWJsZS90YWJsZS5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtBZ0dyaWROZzIsIEhUVFBDb21wb25lbnRdLFxyXG4gICAgLy9zdHlsZTogWycudG9vbGJhciBidXR0b24ge21hcmdpbjogMnB4OyBwYWRkaW5nOiAwcHg7fSddLFxyXG4gICAgLy9zdHlsZVVybHM6IFsnbm9kZV9tb2R1bGVzL2FnLWdyaWQvZGlzdC9zdHlsZXMvYWctZ3JpZC5jc3MnLCdub2RlX21vZHVsZXMvYWctZ3JpZC9kaXN0L3N0eWxlcy90aGVtZS1mcmVzaC5jc3MnXSxcclxuICAgIHByb3ZpZGVyczogW1RhYmxlRGF0YSxIVFRQVGVzdFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICAgIG15RGF0YTtcclxuXHJcbiAgICBjb2x1bW5EZWZzID0gW1xyXG4gICAgICAgIHtoZWFkZXJOYW1lOiAnSUQnLCBmaWVsZDogXCJpZFwiLCB3aWR0aDogMTAwIH0sXHJcbiAgICAgICAge2hlYWRlck5hbWU6ICdUTUEgc3R1ZHknLCBmaWVsZDogXCJ0bWFTdHVkeVwiICx3aWR0aDoxMDB9LFxyXG4gICAgICAgIHtoZWFkZXJOYW1lOiAnU2NvcmVyJywgZmllbGQ6IFwic2NvcmVyXCIgLHdpZHRoOjEwMH0sXHJcbiAgICAgICAge2hlYWRlck5hbWU6ICdTdGFpbicsIGZpZWxkOiBcInN0YWluXCIgLHdpZHRoOjEwMH0sXHJcbiAgICAgICAge2hlYWRlck5hbWU6ICdSb3cnLCBmaWVsZDogXCJyb3dcIiAsd2lkdGg6MTAwfSxcclxuICAgICAgICB7aGVhZGVyTmFtZTogJ0NvbHVtbicsIGZpZWxkOiBcImNvbHVtblwiICx3aWR0aDoxMDB9LFxyXG4gICAgICAgIHtoZWFkZXJOYW1lOiAnQ29yZSBUeXBlJywgZmllbGQ6IFwiY29yZVR5cGVcIiAsd2lkdGg6MTAwfSxcclxuICAgICAgICB7aGVhZGVyTmFtZTogJ0NvcmUgU3RhdHVzJywgZmllbGQ6IFwiY29yZVN0YXR1c1wiICx3aWR0aDoxMDB9LFxyXG4gICAgICAgIHtoZWFkZXJOYW1lOiAnVGlzc3VlIFR5cGUnLCBmaWVsZDogXCJ0aXNzdWVUeXBlXCIgLHdpZHRoOjEwMH0sXHJcbiAgICAgICAge2hlYWRlck5hbWU6ICdJbnRlbnNpdHknLCBmaWVsZDogXCJpbnRlbnNpdHlcIiAsd2lkdGg6MTAwfSxcclxuICAgICAgICB7aGVhZGVyTmFtZTogJ0NvbW1lbnRzJywgZmllbGQ6IFwiY29tbWVudHNcIiAsd2lkdGg6MTAwfVxyXG4gICAgXTtcclxuICAgIGdyaWRPcHRpb25zOiBHcmlkT3B0aW9ucztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF90YWJsZURhdGFTZXJ2aWNlOiBUYWJsZURhdGEsIHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIVFRQVGVzdFNlcnZpY2Upe1xyXG4gICAgICAgIHRoaXMuZ3JpZE9wdGlvbnMgPSA8R3JpZE9wdGlvbnM+e307XHJcbiAgICAgICAgdGhpcy5ncmlkT3B0aW9ucy5jb2x1bW5EZWZzID0gdGhpcy5jb2x1bW5EZWZzO1xyXG4gICAgICAgIHRoaXMuZ3JpZE9wdGlvbnMucm93RGF0YSA9IHRoaXMubXlEYXRhO1xyXG4gICAgICAgIHRoaXMuZ3JpZE9wdGlvbnMuZW5hYmxlQ29sUmVzaXplID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmdyaWRPcHRpb25zLmVuYWJsZVNvcnRpbmcgPSB0cnVlO1xyXG4gICAgICAgIC8qdGhpcy5ncmlkT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgcm93RGF0YTogdGhpcy5teURhdGEsXHJcbiAgICAgICAgICAgIGNvbHVtbkRlZnM6IHRoaXMuY29sdW1uRGVmcyxcclxuICAgICAgICAgICAgZW5hYmxlQ29sUmVzaXplOiB0cnVlLFxyXG4gICAgICAgICAgICBlbmFibGVTb3J0aW5nOiB0cnVlLFxyXG4gICAgICAgICAgICBlbmFibGVGaWx0ZXI6IHRydWVcclxuICAgICAgICB9OyovXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICB0aGlzLl9odHRwU2VydmljZS5nZXRDdXN0b20oKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiAoKHRoaXMuZ3JpZE9wdGlvbnMuYXBpLnNldFJvd0RhdGEoZGF0YSkpLCB0aGlzLmdyaWRPcHRpb25zLmFwaS5yZWZyZXNoVmlldygpLHRoaXMubXlEYXRhID0gZGF0YSksXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBhbGVydChlcnJvciksXHJcbiAgICAgICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcIm5nT25Jbml0IGZpbmlzaGVkXCIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2cobWVzc2FnZTpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuX3RhYmxlRGF0YVNlcnZpY2UubG9nKG1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGF1dG9TaXplQWxsKCl7XHJcbiAgICAgICAgdmFyIGFsbENvbHVtbklkcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY29sdW1uRGVmcy5mb3JFYWNoKCBmdW5jdGlvbihjb2x1bW5EZWYpIHtcclxuICAgICAgICAgICAgYWxsQ29sdW1uSWRzLnB1c2goY29sdW1uRGVmLmZpZWxkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmdyaWRPcHRpb25zLmNvbHVtbkFwaS5hdXRvU2l6ZUNvbHVtbnMoYWxsQ29sdW1uSWRzKTtcclxuICAgIH1cclxufVxyXG5cclxuLypcclxuKiA8YnI+XHJcbiA8aW5wdXQgdHlwZT1cInRleHRcIiAjbWVzc2FnZT5cclxuIDxidXR0b24gKGNsaWNrKT1cIm9uTG9nKG1lc3NhZ2UudmFsdWUpXCI+c2VuZDwvYnV0dG9uPlxyXG4gPGhyPlxyXG4gPGh0dHAtdGVzdD48L2h0dHAtdGVzdD5cclxuIDxocj5cclxuIDxoNCBjbGFzcz1cInRleHQtY2VudGVyXCI+VGhpcyBpcyBqdXN0IHRvIHNheSB0aGUganNvbiBpcyB3b3JraW5nPC9oND5cclxuIDxwIGNsYXNzPVwidGV4dC1tdXRlZCB0ZXh0LWNlbnRlclwiPlRoaXMgaXMgbG9vcGluZyB0aHJvdWdoIHRoZSBteURhdGEgbW9kZWwgYW5kIHByaW50aW5nIG91dCBzb21lIG9mIGl0cyBlbGVtZW50cywgcHJldHR5IHNpbXBsZS48L3A+XHJcbiA8dWw+XHJcbiA8bGkgKm5nRm9yPVwiI2l0ZW0gb2YgbXlEYXRhOyAjaSA9IGluZGV4XCI+e3tpdGVtLmlkfX0gLSB7e2l0ZW0uc2NvcmVyfX08L2xpPlxyXG4gPC91bD5cclxuKiAqL1xyXG5cclxuLypteVJvd0RhdGEgPSBbXHJcbiB7XCJuYW1lXCI6XCJSb25hbGQgQm93bWFuXCIsXCJjb3VudHJ5XCI6XCJDaGluYVwiLFwiY2l0eVwiOlwiTHV0b3VcIixcImVtYWlsXCI6XCJyYm93bWFuMEBzcG90aWZ5LmNvbVwifSxcclxuIHtcIm5hbWVcIjpcIlBhbWVsYSBIaWxsXCIsXCJjb3VudHJ5XCI6XCJSdXNzaWFcIixcImNpdHlcIjpcIktyeWxvdnNrYXlhXCIsXCJlbWFpbFwiOlwicGhpbGwxQHN5bWFudGVjLmNvbVwifSxcclxuIHtcIm5hbWVcIjpcIlJvYmluIEFuZHJld3NcIixcImNvdW50cnlcIjpcIlVrcmFpbmVcIixcImNpdHlcIjpcIktvcm9wXCIsXCJlbWFpbFwiOlwicmFuZHJld3MyQHBob3RvYnVja2V0LmNvbVwifSxcclxuIHtcIm5hbWVcIjpcIlBldGVyIEtpbVwiLFwiY291bnRyeVwiOlwiTWV4aWNvXCIsXCJjaXR5XCI6XCJTYW4gSm9zZVwiLFwiZW1haWxcIjpcInBraW0zQHRoZWF0bGFudGljLmNvbVwifSxcclxuIHtcIm5hbWVcIjpcIkNhcm9sIEZvc3RlclwiLFwiY291bnRyeVwiOlwiTWV4aWNvXCIsXCJjaXR5XCI6XCJFbCBBZ3VhY2F0ZVwiLFwiZW1haWxcIjpcImNmb3N0ZXI4QGludGVsLmNvbVwifSxcclxuIHtcIm5hbWVcIjpcIkppbW15IEJ1cmtlXCIsXCJjb3VudHJ5XCI6XCJJbmRvbmVzaWFcIixcImNpdHlcIjpcIkJhbmphcnNhcmlcIixcImVtYWlsXCI6XCJqYnVya2U5QG92ZXItYmxvZy5jb21cIn0sXHJcbiB7XCJuYW1lXCI6XCJKb25hdGhhbiBDcmF3Zm9yZFwiLFwiY291bnRyeVwiOlwiUGVydVwiLFwiY2l0eVwiOlwiQWxjYVwiLFwiZW1haWxcIjpcImpjcmF3Zm9yZGFAZGVsaWNpb3VzZGF5cy5jb21cIn0sXHJcbiB7XCJuYW1lXCI6XCJEb25hbGQgTW9udGdvbWVyeVwiLFwiY291bnRyeVwiOlwiUG9sYW5kXCIsXCJjaXR5XCI6XCJEemlhxYJvc3p5Y2VcIixcImVtYWlsXCI6XCJkbW9udGdvbWVyeWJAZ29vZ2xlLmNvbS5iclwifSxcclxuIHtcIm5hbWVcIjpcIkRvbm5hIFNoYXdcIixcImNvdW50cnlcIjpcIkphcGFuXCIsXCJjaXR5XCI6XCJBa3VuZVwiLFwiZW1haWxcIjpcImRzaGF3Y0BjaHJvbm9lbmdpbmUuY29tXCJ9LFxyXG4ge1wibmFtZVwiOlwiSGVsZW4gS2luZ1wiLFwiY291bnRyeVwiOlwiVW5pdGVkIFN0YXRlc1wiLFwiY2l0eVwiOlwiSG9sbHl3b29kXCIsXCJlbWFpbFwiOlwiaGtpbmdkQGRldmh1Yi5jb21cIn0sXHJcbiB7XCJuYW1lXCI6XCJXYWx0ZXIgTXllcnNcIixcImNvdW50cnlcIjpcIkNoaW5hXCIsXCJjaXR5XCI6XCJhIG5kYW93YSBuXCIsIFwiZW1haWxcIjpcIndteWVyc2VAc3RhdGUudHgudXNcIn0sXHJcbiB7XCJuYW1lXCI6XCIgQWxpY2UgQ29sbGluc1wiLFwiY291bnRyeVwiOlwiUGFwdWEgTncgIEd1aW5lIGFcIiwgXCJjaXR5XCI6XCJNZW5kaVwiLFwiZW1haWxcIjpcImFjb2xsaW5zZkBucHIub3JnXCJ9LFxyXG4ge1wibmFtZVwiOlwiQW5uZSBSaWNoYXJkc1wiLFwiY291bnRyeVwiOlwiQ2hpbmFcIixcImNpdHlcIjpcIktvcmFtbGlrXCIsXCJlbWFpbFwiOlwiYXJpY2hhcmRzdUB2aW5hb3JhLmNvbVwifSxcclxuIHtcIm5hbWVcIjpcIlJhbmR5IE1pbGxlclwiLFwiY291bnRyeVwiOlwiSW5kb25lc2lhXCIsXCJjaXR5XCI6XCJUcmVuZ2d1bHVuYW5cIixcImVtYWlsXCI6XCJybWlsbGVydkBvYWtsZXkuY29tXCJ9LFxyXG4ge1wibmFtZVwiOlwiUGhpbGxpcCBBZGFtc1wiLFwiY291bnRyeVwiOlwiQmFoYW1hc1wiLFwiY2l0eVwiOlwiRHVuY2FuIFRvd25cIixcImVtYWlsXCI6XCJwYWRhbXN3QGx5Y29zLmNvbVwifSxcclxuIHtcIm5hbWVcIjpcIk5pY2hvbGFzIEFsbGVuXCIsXCJjb3VudHJ5XCI6XCJQaGlsaXBwaW5lc1wiLFwiY2l0eVwiOlwiQmF1dGlzdGFcIixcImVtYWlsXCI6XCJuYWxsZW54QGFib3V0YWRzLmluZm9cIn0sXHJcbiB7XCJuYW1lXCI6XCJMaXNhIFdpbGxpc1wiLFwiY291bnRyeVwiOlwiVGhhaWxhbmRcIixcImNpdHlcIjpcIkxhdCBZYW9cIixcImVtYWlsXCI6XCJsd2lsbGlzeUBpc3RvY2twaG90by5jb21cIn0sXHJcbiB7XCJuYW1lXCI6XCJKZWZmcmV5IENhc3RpbGxvXCIsXCJjb3VudHJ5XCI6XCJJbmRvbmVzaWFcIixcImNpdHlcIjpcIkthcmFuZ3NhcmlcIixcImVtYWlsXCI6XCJqY2FzdGlsbG96QHdhc2hpbmd0b24uZWR1XCJ9LFxyXG4ge1wibmFtZVwiOlwiTWljaGFlbCBDYXJwZW50ZXJcIixcImNvdW50cnlcIjpcIkNvbG9tYmlhXCIsXCJjaXR5XCI6XCJDYWxpXCIsXCJlbWFpbFwiOlwibWNhcnBlbnRlcjEzQHBybG9nLm9yZ1wifSxcclxuIHtcIm5hbWVcIjpcIlJvZ2VyIExlZVwiLFwiY291bnRyeVwiOlwiRnJhbmNlXCIsXCJjaXR5XCI6XCJDb3VydGFib2V1ZlwiLFwiZW1haWxcIjpcInJsZWUxNEBlYXJ0aGxpbmsubmV0XCJ9LFxyXG4ge1wibmFtZVwiOlwiU3RldmUgV2FsbGFjZVwiLFwiY291bnRyeVwiOlwiUnVzc2lhXCIsXCJjaXR5XCI6XCJOb3ZvYmV5c3Vnc2theWFcIixcImVtYWlsXCI6XCJzd2FsbGFjZTE1QGNpc2NvLmNvbVwifSxcclxuIHtcIm5hbWVcIjpcIlNoaXJsZXkgUGF0dGVyc29uXCIsXCJjb3VudHJ5XCI6XCJQZXJ1XCIsXCJjaXR5XCI6XCJMYSBUaW5ndWnDsWFcIixcImVtYWlsXCI6XCJzcGF0dGVyc29uMTZAd29vdGhlbWVzLmNvbVwifSxcclxuIHtcIm5hbWVcIjpcIk5hbmN5IFdhcmRcIixcImNvdW50cnlcIjpcIlN3ZWRlblwiLFwiY2l0eVwiOlwiQsOlc3RhZFwiLFwiZW1haWxcIjpcIm53YXJkMTdAbWFwcXVlc3QuY29tXCJ9XHJcbiBdOyovXHJcbi8qY29sdW1uRGVmcyA9IFtcclxuIHtoZWFkZXJOYW1lOiAnTmFtZScsIGZpZWxkOiBcIm5hbWVcIiwgd2lkdGg6IDIwMCB9LFxyXG4ge2hlYWRlck5hbWU6ICdDb3VudHJ5JywgZmllbGQ6IFwiY291bnRyeVwiICx3aWR0aDoxODB9LFxyXG4ge2hlYWRlck5hbWU6ICdDaXR5JywgZmllbGQ6IFwiY2l0eVwiICx3aWR0aDoxNjB9LFxyXG4ge2hlYWRlck5hbWU6ICdlLW1haWwnLCBmaWVsZDogXCJlbWFpbFwiICx3aWR0aDozMDB9XHJcbiBdOyovIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
