sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
], function (Controller, History) {
    "use strict";

    return Controller.extend("sapui5.demo.mvcapp.controller.Detail", {

        onInit : function () {
            this._oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            this._oRouter.getRoute("detail").attachPatternMatched(this._onDetailMatched, this);
        },
        _onDetailMatched : function (oEvent) {
            let sObjectPath = "/Suppliers/" + oEvent.getParameter("arguments").ID;
            let oView = this.getView();
            oView.bindElement(sObjectPath);
        },
        onNavPress : function(){
            let oHistory = History.getInstance();
            let sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                // The history contains a previous entry
                window.history.go(-1);
            } else {
                this._oRouter.navTo("master");
            }
        }
    });
});