System.register(['angular2/core', '../table/table.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, table_component_1;
    var SidebarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (table_component_1_1) {
                table_component_1 = table_component_1_1;
            }],
        execute: function() {
            SidebarComponent = (function () {
                function SidebarComponent() {
                }
                SidebarComponent = __decorate([
                    core_1.Component({
                        selector: 'xplore-sidebar',
                        templateUrl: 'dev/sidebar/sidebar.html',
                        directives: [table_component_1.TableComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SidebarComponent);
                return SidebarComponent;
            })();
            exports_1("SidebarComponent", SidebarComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIvc2lkZWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiU2lkZWJhckNvbXBvbmVudCIsIlNpZGViYXJDb21wb25lbnQuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQUFBQTtnQkFNQUMsQ0FBQ0E7Z0JBTkREO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLGdCQUFnQkE7d0JBQzFCQSxXQUFXQSxFQUFFQSwwQkFBMEJBO3dCQUN2Q0EsVUFBVUEsRUFBRUEsQ0FBQ0EsZ0NBQWNBLENBQUNBO3FCQUMvQkEsQ0FBQ0E7O3FDQUVEQTtnQkFBREEsdUJBQUNBO1lBQURBLENBTkEsQUFNQ0EsSUFBQTtZQU5ELCtDQU1DLENBQUEiLCJmaWxlIjoic2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtUYWJsZUNvbXBvbmVudH0gZnJvbSAnLi4vdGFibGUvdGFibGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd4cGxvcmUtc2lkZWJhcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2Rldi9zaWRlYmFyL3NpZGViYXIuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOiBbVGFibGVDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWRlYmFyQ29tcG9uZW50IHtcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
