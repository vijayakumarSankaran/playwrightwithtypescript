var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ReserveBank = /** @class */ (function () {
    function ReserveBank() {
    }
    ReserveBank.prototype.roi = function () {
        console.log('ROI comes from Reserve bank with 6%');
    };
    ReserveBank.prototype.loan = function () {
        console.log('loan comes from Reserve bank');
    };
    return ReserveBank;
}());
var ICICI = /** @class */ (function (_super) {
    __extends(ICICI, _super);
    function ICICI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ICICI.prototype.claim = function () {
        console.log('claim comes from ICICI');
    };
    ICICI.prototype.roi = function () {
        console.log('ROI comes from Reserve bank but icici rate of interset is 7%');
    };
    return ICICI;
}(ReserveBank));
var obj1 = new ICICI();
obj1.roi();
obj1.claim();
obj1.loan();
