Ext.define('Admin.view.geo.MapCanvasController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.geo-mapcanvas',

    beforeMapCanvasRender: function (view) {
        console.log('beforeMapCanvasRender');
    },

    afterMapCanvasRender: function (view) {
        console.log('afterMapCanvasRender');
        var me = this;
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

        // enable select elements
        var selectSingleClick = new ol.interaction.Select({
            layers: [vectorLayer]
        });
        olMap.addInteraction(selectSingleClick);
        vm.data.select = selectSingleClick;

        selectSingleClick.on('select', function(e) {
            console.log('# of selected features: ' + e.selected.length);
            console.log('# of unselected features: ' + e.deselected.length);
            console.log('features: ');
            var features = e.target.getFeatures();
            //console.log(features);

            features.forEach(function(feature, idx, a) {
                console.log(feature);
                var store = vm.getStore('featureStore');
                var record = store.getByFeature(feature);
                console.log(record);
                var geomapv = this.up('geo-map');
                var grid = geomapv.lookupReference('geo-mapgrid');
                console.log(grid);
                grid.getSelectionModel().select(record);

            }, view);



        });
    }

});
