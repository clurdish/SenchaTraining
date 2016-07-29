Ext.define('Umbrella.view.main.BaseController', {
    extend: 'Ext.app.ViewController',
    requires: [
        'Umbrella.util.Geocode',
        'Umbrella.util.Forecast'
    ],

    initViewModel: function(vm) {
        var me = this;

        if (!vm.get('city')) {
            me.useCurrentLocation();
        }

        vm.bind('{city}', function(city) {
            Umbrella.util.Geocode.determineLocation(city).then(function(ll) {
                vm.set('location', ll);
            });
        });

        vm.bind('{location}', function(ll) {
            Umbrella.util.Forecast.load(ll).then(function(data) {
                vm.set('rainy', (data.currently.precipIntensity > 0.001));
            });
        });
    },

    useCurrentLocation: function() {
        var vm = this.getViewModel();
        Umbrella.util.Geocode.determineCurrentLocation().then(function(ll) {
            Umbrella.util.Geocode.determineCity(ll).then(function(city) {
                vm.set('city', city);
            });
        });
    }
});
