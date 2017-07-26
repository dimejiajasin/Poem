sap.ui.jsview("sapui5.demo.mvcapp.view.Master", {

    getControllerName: function() {

        return "sapui5.demo.mvcapp.controller.Master";
    },

    createContent: function(oController) {

        let aColumns = [
            new sap.m.Column({
                header : new sap.m.Text({
                    text : "ID"
                })
            }),
            new sap.m.Column({
                header : new sap.m.Text({
                    text : "Name"
                })
            })
        ];

        let oTemplate = new sap.m.ColumnListItem({
            type: "Navigation",
            press: [oController.onListPress, oController],
            cells : [
                new sap.m.ObjectIdentifier({
                    text : "{ID}"
                }),
                new sap.m.ObjectIdentifier({
                    text : "{Name}"
                })
            ]
        });

        let oTableHeader = new sap.m.Toolbar({
            content : [
                new sap.m.Title({
                    text : "Number of Suppliers: {/CountSuppliers}"
                })
            ]
        });

        let oTable = new sap.m.Table({
            columns : aColumns,
            headerToolbar : oTableHeader
        });

        oTable.bindItems("/Suppliers", oTemplate);
        oTable.addStyleClass("sapUiResponsiveMargin");

        let oPageMaster = new sap.m.Page({
            title : "Supplier Overview",
            content : [oTable]
        });
        return oPageMaster;
    }
});