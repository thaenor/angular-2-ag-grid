System.register(['angular2/core', './header/header.component', './sidebar/sidebar.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, header_component_1, sidebar_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (sidebar_component_1_1) {
                sidebar_component_1 = sidebar_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <section>\n            <xplore-header></xplore-header>\n        </section>\n        <section>\n            <xplore-sidebar></xplore-sidebar>\n        </section>\n    ",
                        directives: [header_component_1.HeaderComponent, sidebar_component_1.SidebarComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFBQUE7Z0JBY0FDLENBQUNBO2dCQWRERDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxRQUFRQTt3QkFDbEJBLFFBQVFBLEVBQUVBLGtMQU9UQTt3QkFDREEsVUFBVUEsRUFBRUEsQ0FBQ0Esa0NBQWVBLEVBQUVBLG9DQUFnQkEsQ0FBQ0E7cUJBQ2xEQSxDQUFDQTs7aUNBR0RBO2dCQUFEQSxtQkFBQ0E7WUFBREEsQ0FkQSxBQWNDQSxJQUFBO1lBZEQsdUNBY0MsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge0hlYWRlckNvbXBvbmVudH0gZnJvbSAnLi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U2lkZWJhckNvbXBvbmVudH0gZnJvbSAnLi9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50JztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgIDx4cGxvcmUtaGVhZGVyPjwveHBsb3JlLWhlYWRlcj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgIDx4cGxvcmUtc2lkZWJhcj48L3hwbG9yZS1zaWRlYmFyPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOiBbSGVhZGVyQ29tcG9uZW50LCBTaWRlYmFyQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
