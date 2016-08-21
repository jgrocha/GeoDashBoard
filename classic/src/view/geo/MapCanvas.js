Ext.define("Admin.view.geo.MapCanvas", {
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
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([7, 51]),
            zoom: 5
        }),
        interactions: ol.interaction.defaults({doubleClickZoom: false})
    })

});
