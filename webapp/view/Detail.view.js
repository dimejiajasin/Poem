sap.ui.jsview("sapui5.demo.mvcapp.view.Detail", {

    getControllerName: function() {

        return "sapui5.demo.mvcapp.controller.Detail";
    },

    createContent: function(oController) {

        let oObjectHeader = new sap.m.ObjectHeader({
            title: "{Name}",
            number: "ID: {ID}",
            attributes: [
                new sap.m.ObjectAttribute({
                    text: "{Address/Country}"
                })
            ]
        });

        let oPageDetail = new sap.m.Page({
            title : "Supplier Detail",
            showNavButton: true,
            navButtonPress: [oController.onNavPress, oController],
            content : [oObjectHeader]
        });

        return oPageDetail;
    }
});