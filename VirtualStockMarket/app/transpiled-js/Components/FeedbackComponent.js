"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
require("rxjs/add/operator/switchMap");
const common_1 = require("@angular/common");
let FeedbackComponent = class FeedbackComponent {
};
FeedbackComponent = __decorate([
    core_1.Component({
        selector: 'Feedback',
        providers: [common_1.Location, { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
        template: '<h2>Your Feedback Here</h2>',
    })
], FeedbackComponent);
exports.FeedbackComponent = FeedbackComponent;
//# sourceMappingURL=FeedbackComponent.js.map