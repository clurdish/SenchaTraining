Ext.define('Umbrella.view.Umbrella', {
    extend: 'Ext.Container',
    xtype: 'umbrella',

    requires: [
        'Ext.Img',
        'Ext.LoadMask',
        'Ext.TitleBar'
    ],

    config: {
        rainy: null
    },

    layout: 'card',

    items: [{
        xtype: 'container',
        html: 'load mask',
        masked: {
            xtype: 'loadmask',
            message: 'Checking the weather...'
        }
    }, {
        xtype: 'image',
        src: 'modern/resources/images/OpenUmbrella.jpg',
        itemId: 'open'
    }, {
        xtype: 'image',
        src: 'modern/resources/images/ClosedUmbrella.jpg',
        itemId: 'closed'
    }, {
        xtype: 'titlebar',
        docked: 'top',
        itemId: 'title'
    }],

    updateRainy: function(rainy) {
        if(rainy){
            this.setActiveItem('#open');
            this.down('#title').setTitle('Take Your Umbrella');
        }
        else {
            this.setActiveItem('#closed');
            this.down('#title').setTitle('Leave Your Umbrella');
        }

    }
});
