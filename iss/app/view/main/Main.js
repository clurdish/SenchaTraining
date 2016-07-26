
Ext.define('ISS.view.main.Main',{
    extend: 'Ext.Container',
    xtype: 'main',

    requires: [
        'ISS.view.main.MainController',
        'ISS.view.main.MainModel'
    ],

    controller: 'main-main',
    viewModel: {
        type: 'main-main'
    },
    tabBarPosition: 'bottom',

    items: [{
        xtype: 'component',
        html: 'Map goes here',

        title: 'Map',
        iconCls: 'x-fa fa-crosshairs'

    }, {
        xtype: 'component',
        html: 'Passes goes here',

        title: 'Passes',
        iconCls: 'x-fa fa-list-ul'

    }, {
        xtype: 'component',
        html: 'Astronauts go here',

        title: 'Astronauts',
        iconCls: 'x-fa fa-users'

    }]
});
