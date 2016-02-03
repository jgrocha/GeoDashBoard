Ext.define('Admin.view.geo.MapGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.geo-mapgrid',

    featureGridSelectionChanged: function (grid, selected) {
        var vm = this.getView().up('geo-map').getViewModel();
        var featureStore = vm.getStore('featureStore');
        var selectControl = vm.data.select;
        var map = selectControl.getMap();
        var view = map.getView();
        var mapExtent = view.calculateExtent(map.getSize());
        selectControl.getFeatures().clear();
        Ext.each(selected, function (rec) {
            var gridSelectedFeature = rec.getFeature();
            selectControl.getFeatures().push(gridSelectedFeature);
            if (!ol.extent.containsCoordinate(mapExtent, gridSelectedFeature.getGeometry().getCoordinates())) {
                view.setCenter(ol.extent.getCenter(gridSelectedFeature.getGeometry().getExtent()));
            }
        });
    }

});
