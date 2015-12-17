Ext.define('Admin.view.geo.MapController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.geo-map',

    init: function() {
        var me = this;
        console.log('Admin.view.geo.MapController init');
        console.log(me);
        me.callParent(arguments);
    }

});
