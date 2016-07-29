Ext.define('Umbrella.util.Forecast', {
    extend: 'Ext.Base',
    requires: ['Ext.data.JsonP', 'Ext.Deferred'],
    singleton: true,
    urlPattern: 'https://api.forecast.io/forecast/4fb859f323060c5afdea5573f7c99d33/{0},{1}',
    load: function(ll) {
        var deferred = Ext.create('Ext.Deferred');
        if (!ll) {
            deferred.reject('Umbrella.util.Forecast#load() requires a latitude and longitude');
        }
        var me = this;
        var url = Ext.String.format(this.urlPattern, ll.latitude, ll.longitude);
        Ext.data.JsonP.request({
            url: url,
            success: function(data) {
                deferred.resolve(data);
            },
            failure: function(response) {
                deferred.reject('Umbrella.util.Forecast#load() failure');
            }
        });
        return deferred.promise;
    }
});
