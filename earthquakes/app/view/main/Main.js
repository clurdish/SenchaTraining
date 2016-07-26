Ext.define('Earthquakes.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'main',
    requires: [
        'Earthquakes.view.Grid',
        'Earthquakes.view.Map',
        'Earthquakes.view.main.MainController',
        'Earthquakes.view.main.MainModel',
        'Ext.plugin.Viewport'
    ],
    controller: 'main',
    viewModel: {
        type: 'main'
    },
    layout: 'border',
    title: 'Earthquakes in Iceland',
    items: [{
        xtype: 'earthquakesmap',
        region: 'north',
        flex: 1,
        location: {
            latitude: 64.9312762,
            longitude: -19.021169
        },
        split: true,
        listeners: {
            select: 'onSelect'
        },
        bind: {
            store: '{earthquakes}',
            selection: '{earthquake}'
        }
    },
    {
        xtype: 'earthquakesgrid',
        region: 'center',
        bind: {
            store: '{earthquakes}',
            selection: '{earthquake}'
        }
    }
  ]
});
