System.register(['angular2/core', "./services/http-test.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_test_service_1;
    var HTTPComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_test_service_1_1) {
                http_test_service_1 = http_test_service_1_1;
            }],
        execute: function() {
            HTTPComponent = (function () {
                function HTTPComponent(_httpService) {
                    this._httpService = _httpService;
                }
                HTTPComponent.prototype.onTestGet = function () {
                    var _this = this;
                    this._httpService.getCurrentTime()
                        .subscribe(function (data) { return _this.getData = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log("finished"); });
                };
                HTTPComponent.prototype.onTestPost = function () {
                    var _this = this;
                    this._httpService.postJSON()
                        .subscribe(function (data) { return _this.postData = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log("finished"); });
                };
                HTTPComponent.prototype.onTestGetCustom = function () {
                    var _this = this;
                    this._httpService.getCustom()
                        .subscribe(function (data) { return _this.customData = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log("finished"); });
                };
                HTTPComponent = __decorate([
                    core_1.Component({
                        selector: 'http-test',
                        template: "\n        <button (click)=\"onTestGet()\">Test GET request</button>\n        <p>Output: {{getData}}</p>\n        <button (click)=\"onTestPost()\">Test POST request</button>\n        <p>Output: {{postData}}</p>\n        <button (click)=\"onTestGetCustom()\">Test custom request</button>\n        <p>Output: {{customData}}</p>\n    ",
                        providers: [http_test_service_1.HTTPTestService]
                    }), 
                    __metadata('design:paramtypes', [http_test_service_1.HTTPTestService])
                ], HTTPComponent);
                return HTTPComponent;
            })();
            exports_1("HTTPComponent", HTTPComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkhUVFBDb21wb25lbnQiLCJIVFRQQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiSFRUUENvbXBvbmVudC5vblRlc3RHZXQiLCJIVFRQQ29tcG9uZW50Lm9uVGVzdFBvc3QiLCJIVFRQQ29tcG9uZW50Lm9uVGVzdEdldEN1c3RvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBaUJJQSx1QkFBcUJBLFlBQTZCQTtvQkFBN0JDLGlCQUFZQSxHQUFaQSxZQUFZQSxDQUFpQkE7Z0JBRWxEQSxDQUFDQTtnQkFFREQsaUNBQVNBLEdBQVRBO29CQUFBRSxpQkFPQ0E7b0JBTkdBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLGNBQWNBLEVBQUVBO3lCQUM3QkEsU0FBU0EsQ0FDTkEsVUFBQUEsSUFBSUEsSUFBSUEsT0FBQUEsS0FBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBbkNBLENBQW1DQSxFQUMzQ0EsVUFBQUEsS0FBS0EsSUFBSUEsT0FBQUEsS0FBS0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsRUFBWkEsQ0FBWUEsRUFDckJBLGNBQU1BLE9BQUFBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLFVBQVVBLENBQUNBLEVBQXZCQSxDQUF1QkEsQ0FDaENBLENBQUNBO2dCQUNWQSxDQUFDQTtnQkFFREYsa0NBQVVBLEdBQVZBO29CQUFBRyxpQkFPQ0E7b0JBTkdBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLFFBQVFBLEVBQUVBO3lCQUN2QkEsU0FBU0EsQ0FDTkEsVUFBQUEsSUFBSUEsSUFBSUEsT0FBQUEsS0FBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBcENBLENBQW9DQSxFQUM1Q0EsVUFBQUEsS0FBS0EsSUFBSUEsT0FBQUEsS0FBS0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsRUFBWkEsQ0FBWUEsRUFDckJBLGNBQU1BLE9BQUFBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLFVBQVVBLENBQUNBLEVBQXZCQSxDQUF1QkEsQ0FDaENBLENBQUNBO2dCQUNWQSxDQUFDQTtnQkFFREgsdUNBQWVBLEdBQWZBO29CQUFBSSxpQkFPQ0E7b0JBTkdBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLFNBQVNBLEVBQUVBO3lCQUN4QkEsU0FBU0EsQ0FDTkEsVUFBQUEsSUFBSUEsSUFBSUEsT0FBQUEsS0FBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBdENBLENBQXNDQSxFQUM5Q0EsVUFBQUEsS0FBS0EsSUFBSUEsT0FBQUEsS0FBS0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsRUFBWkEsQ0FBWUEsRUFDckJBLGNBQU1BLE9BQUFBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLFVBQVVBLENBQUNBLEVBQXZCQSxDQUF1QkEsQ0FDaENBLENBQUNBO2dCQUNWQSxDQUFDQTtnQkE5Q0xKO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLFdBQVdBO3dCQUNyQkEsUUFBUUEsRUFBRUEsNFVBT1RBO3dCQUNEQSxTQUFTQSxFQUFFQSxDQUFDQSxtQ0FBZUEsQ0FBQ0E7cUJBQy9CQSxDQUFDQTs7a0NBb0NEQTtnQkFBREEsb0JBQUNBO1lBQURBLENBL0NBLEFBK0NDQSxJQUFBO1lBL0NELHlDQStDQyxDQUFBIiwiZmlsZSI6Imh0dHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgRnJhbmNpc2NvU2FudG9zIG9uIDI0LzAyLzIwMTYuXHJcbiAqL1xyXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7SFRUUFRlc3RTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9odHRwLXRlc3Quc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2h0dHAtdGVzdCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uVGVzdEdldCgpXCI+VGVzdCBHRVQgcmVxdWVzdDwvYnV0dG9uPlxyXG4gICAgICAgIDxwPk91dHB1dDoge3tnZXREYXRhfX08L3A+XHJcbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25UZXN0UG9zdCgpXCI+VGVzdCBQT1NUIHJlcXVlc3Q8L2J1dHRvbj5cclxuICAgICAgICA8cD5PdXRwdXQ6IHt7cG9zdERhdGF9fTwvcD5cclxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJvblRlc3RHZXRDdXN0b20oKVwiPlRlc3QgY3VzdG9tIHJlcXVlc3Q8L2J1dHRvbj5cclxuICAgICAgICA8cD5PdXRwdXQ6IHt7Y3VzdG9tRGF0YX19PC9wPlxyXG4gICAgYCxcclxuICAgIHByb3ZpZGVyczogW0hUVFBUZXN0U2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhUVFBDb21wb25lbnQge1xyXG4gICAgZ2V0RGF0YTogc3RyaW5nO1xyXG4gICAgcG9zdERhdGE6IHN0cmluZztcclxuICAgIGN1c3RvbURhdGE6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfaHR0cFNlcnZpY2U6IEhUVFBUZXN0U2VydmljZSl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uVGVzdEdldCgpe1xyXG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlLmdldEN1cnJlbnRUaW1lKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4gdGhpcy5nZXREYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBhbGVydChlcnJvciksXHJcbiAgICAgICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImZpbmlzaGVkXCIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgb25UZXN0UG9zdCgpe1xyXG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3RKU09OKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4gdGhpcy5wb3N0RGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gYWxlcnQoZXJyb3IpLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJmaW5pc2hlZFwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVGVzdEdldEN1c3RvbSgpe1xyXG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlLmdldEN1c3RvbSgpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHRoaXMuY3VzdG9tRGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gYWxlcnQoZXJyb3IpLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJmaW5pc2hlZFwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
