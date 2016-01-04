Ext.define('Admin.view.geo.MapGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.geo-mapgrid',

    featureGridSelectionChanged: function (grid, selected) {
        //<debug>
        console.log('featureGridSelectionChanged');
        //</debug>
        var vm = this.getView().up('geo-map').getViewModel();
        var featureStore = vm.getStore('featureStore');
        var selectControl = vm.data.select;

        selectControl.getFeatures().clear();

        Ext.each(selected, function (rec) {
            var exists = 0;
            // the feature was selected on the map or on the grid?
            selectControl.getFeatures().forEach(function (feature, idx, a) {
                if (feature === rec.getFeature()) {
                    //<debug>
                    console.log('Already selected.');
                    //</debug>
                    exists = 1;
                }
            }, this);
            if (!exists) {
                selectControl.getFeatures().push(rec.getFeature());
            }
        });

    }

});
