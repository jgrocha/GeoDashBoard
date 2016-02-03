Ext.define('Admin.view.geo.MapCanvasController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.geo-mapcanvas',

    beforeMapCanvasRender: function (view) {
        //<debug>
        console.log('beforeMapCanvasRender');
        //</debug>
    },

    afterMapCanvasRender: function (view) {
        //<debug>
        console.log('afterMapCanvasRender');
        //</debug>
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
            name: 'Population',
            legendUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Edit_pie_chart.jpg',
            style: vm.data.redStyle
        });
        olMap.addLayer(vectorLayer);

        var treeStore = Ext.create('GeoExt.data.store.LayersTree', {
            layerGroup: olMap.getLayerGroup()
        });
        vm.setStores({'treeStore': treeStore});
        var tree = view.up('geo-map').down('geo-tree');
        tree.setStore(treeStore);

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

        selectSingleClick.on('select', function (e) {
            var features = e.target.getFeatures();
            var geomapv = view.up('geo-map');
            var grid = geomapv.lookupReference('geo-mapgrid');

            e.selected.forEach(function (feature, idx, a) {
                var store = vm.getStore('featureStore');
                var record = store.getByFeature(feature);
                grid.getSelectionModel().select(record, true, true); // keepExisting = true, suppressEvent = true
            }, view);

            e.deselected.forEach(function (feature, idx, a) {
                var store = vm.getStore('featureStore');
                var record = store.getByFeature(feature);
                grid.getSelectionModel().deselect(record, true); // suppressEvent = true
            }, view);

        });

        me.popupwindow = null;

        olMap.getViewport().addEventListener("dblclick", function (e) {
            var windows = Ext.ComponentQuery.query('popup-window');
            if (windows.length > 0) {
                me.popupwindow = windows[0];
            } else {
                me.popupWindow = Ext.create('Admin.view.geo.PopupWindow');
            }
            var position = olMap.getEventPixel(e);
            var coordinate = olMap.getEventCoordinate(e);
            var hdms = ol.coordinate.toStringHDMS(ol.proj.transform(coordinate, 'EPSG:3857', 'EPSG:4326'));
            me.popupWindow.setPosition(position[0] + me.getView().getX(), position[1] + me.getView().getY(), {});
            //console.log(me.getView().getConstrainRegion());
            //console.log(view.getConstrainRegion());
            me.popupWindow.setTitle(hdms);
            me.popupWindow.show();
            me.popupWindow.doConstrain(me.getView().getConstrainRegion());
            me.popupWindow.constrain = true;
        });

        olMap.on('pointerdrag', function () {
            if (me.popupWindow) {
                me.popupWindow.hide();
            }
        });

        olMap.on('moveend', function () {
            if (me.popupWindow) {
                me.popupWindow.hide();
            }
        });

    }

});
