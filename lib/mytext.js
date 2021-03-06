var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="../typings/angular2/angular2.d.ts" />
var angular2_1 = require("angular2/angular2");
var Mytext = (function () {
    function Mytext() {
        this.timeoutId = 0;
    }
    Mytext.prototype.searchArtist = function ($event, value) {
        this.timeoutId = 10;
    };
    Mytext = __decorate([
        angular2_1.Component({ selector: 'mytext' }),
        angular2_1.View({
            template: "\n\t\t    <label for=\"search-string\">Search for an artist</label>    \n        <input #searchvalue (keyup)=\"searchArtist($event, searchvalue.value)\"/>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], Mytext);
    return Mytext;
})();
exports.Mytext = Mytext;
