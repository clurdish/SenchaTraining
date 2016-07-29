Ext.define('Umbrella.Application', {
    extend: 'Ext.app.Application',
    requires: [],
    name: 'Umbrella',
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