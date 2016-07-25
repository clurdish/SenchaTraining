Ext.define('Earthquakes.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'main',
    requires: [
        'Earthquakes.view.main.MainModel',
        'Earthquakes.view.Grid',
        'Earthquakes.view.Map',
        'Ext.window.Toast',
        'Ext.plugin.Viewport'
    ],
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
            select: function(map, record) {
                var data = record.data;
                var time = Ext.Date.format(data.timestamp, 'F j, g:i a');
                var s = 'A magnitude ' + data.size + ' earthquake occured ' + data.humanReadableLocation + '.';
                Ext.toast(s, time, 't'); // Message, title, alignment (top)
            }
        },
        bind: {
            store: '{earthquakes}'
        }
    },
    {
        xtype: 'earthquakesgrid',
        region: 'center',
        bind: {
            store: '{earthquakes}'
        }
    }
  ]
});
