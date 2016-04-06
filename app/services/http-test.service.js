System.register(["angular2/core", "angular2/http", 'rxjs/add/operator/map'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, http_2;
    var HTTPTestService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            HTTPTestService = (function () {
                function HTTPTestService(_http) {
                    this._http = _http;
                }
                HTTPTestService.prototype.getCurrentTime = function () {
                    return this._http.get('http://date.jsontest.com')
                        .map(function (res) { return res.json(); });
                };
                HTTPTestService.prototype.postJSON = function () {
                    var json = JSON.stringify({ var1: 'test', var2: 3 });
                    var params = 'json=' + json;
                    var headers = new http_2.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    return this._http.post('http://validate.jsontest.com', params, {
                        headers: headers
                    })
                        .map(function (res) { return res.json(); });
                };
                HTTPTestService.prototype.getCustom = function () {
                    return this._http.get('/angular_task_data.json')
                        .map(function (res) { return res.json(); });
                };
                HTTPTestService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HTTPTestService);
                return HTTPTestService;
            })();
            exports_1("HTTPTestService", HTTPTestService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2h0dHAtdGVzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIkhUVFBUZXN0U2VydmljZSIsIkhUVFBUZXN0U2VydmljZS5jb25zdHJ1Y3RvciIsIkhUVFBUZXN0U2VydmljZS5nZXRDdXJyZW50VGltZSIsIkhUVFBUZXN0U2VydmljZS5wb3N0SlNPTiIsIkhUVFBUZXN0U2VydmljZS5nZXRDdXN0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBRUlBLHlCQUFvQkEsS0FBV0E7b0JBQVhDLFVBQUtBLEdBQUxBLEtBQUtBLENBQU1BO2dCQUFFQSxDQUFDQTtnQkFFbENELHdDQUFjQSxHQUFkQTtvQkFDSUUsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsMEJBQTBCQSxDQUFDQTt5QkFDNUNBLEdBQUdBLENBQUNBLFVBQUFBLEdBQUdBLElBQUlBLE9BQUFBLEdBQUdBLENBQUNBLElBQUlBLEVBQUVBLEVBQVZBLENBQVVBLENBQUNBLENBQUNBO2dCQUNoQ0EsQ0FBQ0E7Z0JBRURGLGtDQUFRQSxHQUFSQTtvQkFDSUcsSUFBSUEsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsRUFBQ0EsSUFBSUEsRUFBRUEsTUFBTUEsRUFBRUEsSUFBSUEsRUFBRUEsQ0FBQ0EsRUFBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ25EQSxJQUFJQSxNQUFNQSxHQUFHQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQTtvQkFDNUJBLElBQUlBLE9BQU9BLEdBQUdBLElBQUlBLGNBQU9BLEVBQUVBLENBQUNBO29CQUM1QkEsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsY0FBY0EsRUFBRUEsbUNBQW1DQSxDQUFDQSxDQUFDQTtvQkFFcEVBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLDhCQUE4QkEsRUFBQ0EsTUFBTUEsRUFBQ0E7d0JBQ3pEQSxPQUFPQSxFQUFFQSxPQUFPQTtxQkFDbkJBLENBQUNBO3lCQUNEQSxHQUFHQSxDQUFDQSxVQUFBQSxHQUFHQSxJQUFJQSxPQUFBQSxHQUFHQSxDQUFDQSxJQUFJQSxFQUFFQSxFQUFWQSxDQUFVQSxDQUFDQSxDQUFDQTtnQkFDNUJBLENBQUNBO2dCQUVESCxtQ0FBU0EsR0FBVEE7b0JBQ0lJLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLHlCQUF5QkEsQ0FBQ0E7eUJBQzNDQSxHQUFHQSxDQUFDQSxVQUFBQSxHQUFHQSxJQUFJQSxPQUFBQSxHQUFHQSxDQUFDQSxJQUFJQSxFQUFFQSxFQUFWQSxDQUFVQSxDQUFDQSxDQUFDQTtnQkFDaENBLENBQUNBO2dCQXhCTEo7b0JBQUNBLGlCQUFVQSxFQUFFQTs7b0NBeUJaQTtnQkFBREEsc0JBQUNBO1lBQURBLENBekJBLEFBeUJDQSxJQUFBO1lBekJELDZDQXlCQyxDQUFBIiwiZmlsZSI6InNlcnZpY2VzL2h0dHAtdGVzdC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgRnJhbmNpc2NvU2FudG9zIG9uIDI0LzAyLzIwMTYuXHJcbiAqL1xyXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7SHR0cH0gZnJvbSBcImFuZ3VsYXIyL2h0dHBcIjtcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQge0hlYWRlcnN9IGZyb20gXCJhbmd1bGFyMi9odHRwXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBIVFRQVGVzdFNlcnZpY2V7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKXt9XHJcblxyXG4gICAgZ2V0Q3VycmVudFRpbWUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoJ2h0dHA6Ly9kYXRlLmpzb250ZXN0LmNvbScpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHBvc3RKU09OKCl7XHJcbiAgICAgICAgdmFyIGpzb24gPSBKU09OLnN0cmluZ2lmeSh7dmFyMTogJ3Rlc3QnLCB2YXIyOiAzfSk7XHJcbiAgICAgICAgdmFyIHBhcmFtcyA9ICdqc29uPScgKyBqc29uO1xyXG4gICAgICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KCdodHRwOi8vdmFsaWRhdGUuanNvbnRlc3QuY29tJyxwYXJhbXMse1xyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXHJcbiAgICAgICAgfSlcclxuICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDdXN0b20oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoJy9hbmd1bGFyX3Rhc2tfZGF0YS5qc29uJylcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
