
Ext.define("Admin.view.geo.MapCanvas",{
    //extend: "Ext.panel.Panel",
    extend: "GeoExt.component.Map",
    alias: 'widget.geo-mapcanvas',

    requires: [
        "Admin.view.geo.MapCanvasController",
        "Admin.view.geo.MapCanvasModel"
    ],

    controller: "geo-mapcanvas",
    viewModel: {
        type: "geo-mapcanvas"
    },

    listeners: {
        beforerender: 'beforeMapCanvasRender',
        afterrender: 'afterMapCanvasRender'
    },

    map: new ol.Map({
        layers: [
            new ol.layer.Tile({
                legendUrl: 'http://wiki.openstreetmap.org/w/images/thumb/7/79/Public-images-osm_logo.svg/256px-Public-images-osm_logo.svg.png',
                name: 'Stamen watercolor',
                source: new ol.source.Stamen({
                    layer: 'watercolor'
                })
            }),
            new ol.layer.Tile({
                legendUrl: 'https://otile4-s.mqcdn.com/tiles/1.0.0/sat/4/4/7.jpg',
                source: new ol.source.MapQuest({layer: 'sat'}),
                name: 'MapQuest Satellite',
                visible: false
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat( [ 7, 51 ] ),
            zoom: 5
        }),
        interactions : ol.interaction.defaults({doubleClickZoom :false})
    })

});
