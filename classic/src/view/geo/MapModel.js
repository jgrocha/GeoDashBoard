Ext.define('Admin.view.geo.MapModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.geo-map',
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
                        "city": "Dortmund"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            7.481689453125,
                            51.49506473014368
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "city": "Köln"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            6.976318359375,
                            50.93073802371819
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "city": "Kaiserslautern"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            7.7838134765625,
                            49.44670029695474
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "city": "Bonn"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            7.102661132812499,
                            50.74688365485319
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "city": "Stuttgart"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            9.1461181640625,
                            48.77429274267509
                        ]
                    }
                }
            ]
        }
    }

    /*
    The store 'featureStore' will be added added to this viewModel

    stores: {
        featureStore: {}
    }
    */

});
