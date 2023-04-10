"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HighlightSchema = exports.Highlight = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Highlight = class Highlight {
    toJSON() {
        return {
            id: this.id,
            url: this.url,
            highlightedText: this.highlightedText,
        };
    }
    constructor(id, url, text) {
        this.id = id;
        this.url = url;
        this.highlightedText = text;
    }
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Highlight.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Highlight.prototype, "url", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Highlight.prototype, "highlightedText", void 0);
Highlight = __decorate([
    (0, mongoose_1.Schema)(),
    __metadata("design:paramtypes", [Number, String, String])
], Highlight);
exports.Highlight = Highlight;
exports.HighlightSchema = mongoose_1.SchemaFactory.createForClass(Highlight);
//# sourceMappingURL=highlight.model.js.map