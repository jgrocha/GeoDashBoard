Ext.define('Admin.view.geo.MapPanelModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.geo-map',
    /*
     The store 'featureStore' will be added added to this viewModel
     The store 'treeStore' will be added added to this viewModel
     */
    /*
     stores: {
     featureStore: {}
     treeStore: {}
     }
     */
    data: {
        blueStyle: new ol.style.Style({
            image: new ol.style.Circle({
                radius: 6,
                fill: new ol.style.Fill({
                    color: '#0099CC'
                }),
                stroke: new ol.style.Stroke({
                    color: '#fff',
                    width: 2
                })
            })
        }),
        redStyle: new ol.style.Style({
            image: new ol.style.Circle({
                radius: 6,
                fill: new ol.style.Fill({
                    color: '#8B0000'
                }),
                stroke: new ol.style.Stroke({
                    color: '#fff',
                    width: 2
                })
            })
        }),
        selectStyle: new ol.style.Style({
            image: new ol.style.Circle({
                radius: 6,
                fill: new ol.style.Fill({
                    color: '#EE0000'
                }),
                stroke: new ol.style.Stroke({
                    color: 'gray',
                    width: 3
                })
            })
        }),
        cities: {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "properties": {
                        "city": "Hamburg",
                        "pop": 1700000
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            10.107421874999998,
                            53.527247970102465
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "city": "Frankfurt / Main",
                        "pop": 700000
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            8.76708984375,
                            50.064191736659104
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "city": "Berlin",
                        "pop": 3500000
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            13.447265624999998,
                            52.53627304145948
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "city": "München",
                        "pop": 1400000
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            11.6455078125,
                            48.1367666796927
                        ]
                    }
                }
            ]
        }
    }

});
