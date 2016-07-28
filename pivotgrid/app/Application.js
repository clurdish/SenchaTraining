Ext.define('PivotGrid.Application', {
    extend: 'Ext.app.Application',
    requires: ['PivotGrid.store.SalespersonSalesStore'],
    stores: ['PivotGrid.store.SalespersonSalesStore'],
    name: 'PivotGrid',

    onAppUpdate: function() {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function(choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
