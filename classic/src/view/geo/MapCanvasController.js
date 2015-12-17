Ext.define('Admin.view.geo.MapCanvasController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.geo-mapcanvas',

    beforeMapCanvasRender: function(view) {
        console.log('beforeMapCanvasRender');
    },

    afterMapCanvasRender: function(view) {
        console.log('afterMapCanvasRender');
        var vm = view.up('geo-map').getViewModel();
        var olMap = view.map;

        var vectorLayer = new ol.layer.Vector({
            source: new ol.source.Vector({
                features: (new ol.format.GeoJSON()).readFeatures(vm.data.cities, {
                    dataProjection: 'EPSG:4326',
                    featureProjection: 'EPSG:3857'
                })
            }),
            style: vm.data.redStyle
        });
        olMap.addLayer(vectorLayer);

        var featureStore = Ext.create('GeoExt.data.store.Features', {
            layer: vectorLayer,
            map: olMap
        });

        vm.setStores({'featureStore': featureStore});

        var grid = view.up('geo-map').down('geo-mapgrid');
        grid.setStore(featureStore);

    }

});
