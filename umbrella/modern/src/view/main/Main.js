Ext.define("Umbrella.view.main.Main", {
    extend: "Ext.carousel.Carousel",
    xtype: 'main',
    requires: [
        "Umbrella.view.main.MainController",
        "Umbrella.view.main.MainModel",
        'Ext.MessageBox',
        'Umbrella.view.Umbrella',
        'Umbrella.view.Location'
    ],

    controller: "main-main",
    viewModel: {
        type: "main-main"
    },

    items: [{
        xtype: 'umbrella',
        bind: {
            rainy: '{rainy}'
        }
    }, {
        xtype: 'location',
        bind: {
            rainy: '{rainy}',
            city: '{displayCity}'
        },
        listeners: {
            usecurrentlocation: 'onUseCurrentLocation'
        }
    }]

});
