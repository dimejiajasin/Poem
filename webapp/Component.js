sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
    "use strict";

    return UIComponent.extend("sapui5.demo.mvcapp.Component", {

        metadata: {
            "rootView": "sapui5.demo.mvcapp.view.App",
            "config": {
                "serviceUrl": "webapp/service/data.json"
            }
        },

        createContent: function () {

            // call the base component's createContent function
            let oRootView = UIComponent.prototype.createContent.apply(this, arguments);


            let oModel = new JSONModel(this.getMetadata().getConfig().serviceUrl);
            // oModel.setData(oData);

            // important to set the model on the component
            // and not on the sapui5 core!!!!
            this.setModel(oModel);



            oApp = oRootView.byId("app");
            return oRootView;
        }
    });
});