sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("sapui5.demo.mvcapp.controller.Master", {

        onListPress : function(oEvent) {

            let sPageId = oApp.getPages()[1].getId();
            oApp.to(sPageId);

            let oPage = oApp.getPage(sPageId);
            let oContext = oEvent.getSource().getBindingContext();
            oPage.setBindingContext(oContext);
        }
        
    });
});
