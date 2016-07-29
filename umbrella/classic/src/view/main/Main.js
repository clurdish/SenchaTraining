Ext.define("Umbrella.view.main.Main", {
    extend: "Ext.panel.Panel",
    xtype: 'main',
    requires: [
        "Umbrella.view.main.MainController",
        "Umbrella.view.main.MainModel",
        'Ext.window.MessageBox'
    ],

    controller: "main-main",
    viewModel: {
        type: "main-main"
    },

    html: "Hello, World!! Classic."
});