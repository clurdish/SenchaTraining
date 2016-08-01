Ext.define('Umbrella.view.Location', {
    extend: 'Ext.form.Panel',
    xtype: 'location',
    requires: [
        'Ext.field.Text'
    ],

    config: {
        rainy: null,
        city: null
    },
    publishes: ['rainy', 'city'],
    updateRainy: function(rainy){
        this.down('#rainy').setChecked(rainy);
    },
    updateCity: function(city) {
        this.down('#city').setValue(city);
    },

    layout: {
        type: 'vbox',
        pack: 'center'
    },
    padding:  16,

    items: [
        {
            xtype: 'textfield',
            label: 'City',
            itemId: 'city',
            listeners: {
                change: function(field, value) {
                    this.up('location').setCity(value);
                }
            }
        }, {
            xtype: 'button',
            text: 'Use Current Location',
            handler: function(button) {
                var me = button.up('location');
                me.fireEvent('usecurrentlocation', me);
            }
        }, {
            xtype: 'component',
            height: 24
        }, {
            xtype: 'checkboxfield',
            label: 'Rainy',
            itemId: 'rainy',
            listeners: {
                change: function(field, value) {
                    this.up('location').setRainy(value);
                }
            }
        }
    ]
})
