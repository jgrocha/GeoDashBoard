Ext.define('Admin.view.geo.MapGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.geo-mapgrid',

    featureGridSelectionChanged: function(grid, selected) {
        console.log('featureGridSelectionChanged');
        var vm = this.getView().up('geo-map').getViewModel();
        var featureStore = vm.getStore('featureStore');
        var selectControl = vm.data.select;

        // cuidado em este, quando o feature é selecionado no mapa
        selectControl.getFeatures().clear();

        Ext.each(selected, function(rec) {
            var exists = 0;
            selectControl.getFeatures().forEach(function(feature, idx, a) {
                if (feature === rec.getFeature()) {
                    console.log('Already selected.');
                    exists = 1;
                }
            }, this);
            if (!exists) {
                selectControl.getFeatures().push(rec.getFeature());
            }
        });

        /*
        featureStore.each(function(rec) {
            rec.getFeature().setStyle(vm.data.redStyle);
        });
        // highlight grid selection in map
        Ext.each(selected, function(rec) {
            rec.getFeature().setStyle(vm.data.selectStyle);
        });
        */
    }

});
