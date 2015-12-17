Ext.define('Admin.view.geo.MapGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.geo-mapgrid',

    featureGridSelectionChanged: function(grid, selected) {
        console.log('featureGridSelectionChanged');

        var vm = this.getView().up('geo-map').getViewModel();

        var featureStore = vm.getStore('featureStore');

        featureStore.each(function(rec) {
            rec.getFeature().setStyle(vm.data.redStyle);
        });
        // highlight grid selection in map
        Ext.each(selected, function(rec) {
            rec.getFeature().setStyle(vm.data.selectStyle);
        });
    }

});
