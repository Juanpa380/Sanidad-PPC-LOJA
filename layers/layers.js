ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-8997394.388776, -508577.472147, -8760962.187921, -383771.622879]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Googlemaps_1 = new ol.layer.Tile({
            'title': 'Google maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_PROVINCIA_DE_LOJA_2 = new ol.format.GeoJSON();
var features_PROVINCIA_DE_LOJA_2 = format_PROVINCIA_DE_LOJA_2.readFeatures(json_PROVINCIA_DE_LOJA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PROVINCIA_DE_LOJA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROVINCIA_DE_LOJA_2.addFeatures(features_PROVINCIA_DE_LOJA_2);
var lyr_PROVINCIA_DE_LOJA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROVINCIA_DE_LOJA_2, 
                style: style_PROVINCIA_DE_LOJA_2,
                popuplayertitle: "PROVINCIA_DE_LOJA",
                interactive: false,
                title: '<img src="styles/legend/PROVINCIA_DE_LOJA_2.png" /> PROVINCIA_DE_LOJA'
            });
var format_CANTONES_2020_3 = new ol.format.GeoJSON();
var features_CANTONES_2020_3 = format_CANTONES_2020_3.readFeatures(json_CANTONES_2020_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CANTONES_2020_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CANTONES_2020_3.addFeatures(features_CANTONES_2020_3);
var lyr_CANTONES_2020_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CANTONES_2020_3, 
                style: style_CANTONES_2020_3,
                popuplayertitle: "CANTONES_2020",
                interactive: false,
    title: 'CANTONES_2020<br />\
    <img src="styles/legend/CANTONES_2020_3_0.png" /> LOJA<br />'
        });
var format_ZonaPerifocal3Km_4 = new ol.format.GeoJSON();
var features_ZonaPerifocal3Km_4 = format_ZonaPerifocal3Km_4.readFeatures(json_ZonaPerifocal3Km_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonaPerifocal3Km_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonaPerifocal3Km_4.addFeatures(features_ZonaPerifocal3Km_4);
var lyr_ZonaPerifocal3Km_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonaPerifocal3Km_4, 
                style: style_ZonaPerifocal3Km_4,
                popuplayertitle: "Zona Perifocal 3 Km",
                interactive: false,
                title: '<img src="styles/legend/ZonaPerifocal3Km_4.png" /> Zona Perifocal 3 Km'
            });
var format_VacunacionPerifocoLoja_5 = new ol.format.GeoJSON();
var features_VacunacionPerifocoLoja_5 = format_VacunacionPerifocoLoja_5.readFeatures(json_VacunacionPerifocoLoja_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VacunacionPerifocoLoja_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VacunacionPerifocoLoja_5.addFeatures(features_VacunacionPerifocoLoja_5);
var lyr_VacunacionPerifocoLoja_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VacunacionPerifocoLoja_5, 
                style: style_VacunacionPerifocoLoja_5,
                popuplayertitle: "Vacunacion Perifoco Loja",
                interactive: true,
                title: '<img src="styles/legend/VacunacionPerifocoLoja_5.png" /> Vacunacion Perifoco Loja'
            });
var format_FocoPPCLoja_6 = new ol.format.GeoJSON();
var features_FocoPPCLoja_6 = format_FocoPPCLoja_6.readFeatures(json_FocoPPCLoja_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FocoPPCLoja_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FocoPPCLoja_6.addFeatures(features_FocoPPCLoja_6);
var lyr_FocoPPCLoja_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FocoPPCLoja_6, 
                style: style_FocoPPCLoja_6,
                popuplayertitle: "Foco PPC Loja",
                interactive: true,
                title: '<img src="styles/legend/FocoPPCLoja_6.png" /> Foco PPC Loja'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Googlemaps_1.setVisible(false);lyr_PROVINCIA_DE_LOJA_2.setVisible(true);lyr_CANTONES_2020_3.setVisible(false);lyr_ZonaPerifocal3Km_4.setVisible(true);lyr_VacunacionPerifocoLoja_5.setVisible(false);lyr_FocoPPCLoja_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Googlemaps_1,lyr_PROVINCIA_DE_LOJA_2,lyr_CANTONES_2020_3,lyr_ZonaPerifocal3Km_4,lyr_VacunacionPerifocoLoja_5,lyr_FocoPPCLoja_6];
lyr_PROVINCIA_DE_LOJA_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DPA_PROVIN': 'DPA_PROVIN', 'DPA_DESPRO': 'DPA_DESPRO', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_CANTONES_2020_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DPA_CANTON': 'DPA_CANTON', 'DPA_DESCAN': 'DPA_DESCAN', 'DPA_PROVIN': 'DPA_PROVIN', 'DPA_DESPRO': 'DPA_DESPRO', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_ZonaPerifocal3Km_4.set('fieldAliases', {'ID': 'ID', 'Propietari': 'Propietari', 'Parroquia': 'Parroquia', 'Explotacio': 'Explotacio', 'Estatus': 'Estatus', 'Evento_san': 'Evento_san', 'X': 'X', 'Y': 'Y', 'mrb_dist': 'mrb_dist', });
lyr_VacunacionPerifocoLoja_5.set('fieldAliases', {'Certificad': 'Certificad', 'Canton': 'Canton', 'Parroquia': 'Parroquia', 'Sitio': 'Sitio', 'CI': 'CI', 'Propietari': 'Propietari', 'Porcinos_v': 'Porcinos_v', 'Fecha_Vacu': 'Fecha_Vacu', 'Zona': 'Zona', 'UTM (X)': 'UTM (X)', 'UTM (Y)': 'UTM (Y)', 'Estatus': 'Estatus', 'Lechones_s': 'Lechones_s', 'Edad': 'Edad', 'Observacio': 'Observacio', });
lyr_FocoPPCLoja_6.set('fieldAliases', {'Certificad': 'Certificad', 'Canton': 'Canton', 'Parroquia': 'Parroquia', 'Sitio': 'Sitio', 'CI': 'CI', 'Propietari': 'Propietari', 'Porcinos_v': 'Porcinos_v', 'Fecha_Vacu': 'Fecha_Vacu', 'Zona': 'Zona', 'UTM (X)': 'UTM (X)', 'UTM (Y)': 'UTM (Y)', 'Estatus': 'Estatus', 'Lechones_s': 'Lechones_s', 'Edad': 'Edad', 'Observacio': 'Observacio', });
lyr_PROVINCIA_DE_LOJA_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'DPA_PROVIN': 'TextEdit', 'DPA_DESPRO': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_CANTONES_2020_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'DPA_CANTON': 'TextEdit', 'DPA_DESCAN': 'TextEdit', 'DPA_PROVIN': 'TextEdit', 'DPA_DESPRO': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ZonaPerifocal3Km_4.set('fieldImages', {'ID': 'TextEdit', 'Propietari': 'TextEdit', 'Parroquia': 'TextEdit', 'Explotacio': 'TextEdit', 'Estatus': 'TextEdit', 'Evento_san': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'mrb_dist': 'TextEdit', });
lyr_VacunacionPerifocoLoja_5.set('fieldImages', {'Certificad': 'TextEdit', 'Canton': 'TextEdit', 'Parroquia': 'TextEdit', 'Sitio': 'TextEdit', 'CI': 'TextEdit', 'Propietari': 'TextEdit', 'Porcinos_v': 'TextEdit', 'Fecha_Vacu': 'TextEdit', 'Zona': 'TextEdit', 'UTM (X)': 'TextEdit', 'UTM (Y)': 'TextEdit', 'Estatus': 'TextEdit', 'Lechones_s': 'TextEdit', 'Edad': 'TextEdit', 'Observacio': 'TextEdit', });
lyr_FocoPPCLoja_6.set('fieldImages', {'Certificad': 'TextEdit', 'Canton': 'TextEdit', 'Parroquia': 'TextEdit', 'Sitio': 'TextEdit', 'CI': 'TextEdit', 'Propietari': 'TextEdit', 'Porcinos_v': 'TextEdit', 'Fecha_Vacu': 'TextEdit', 'Zona': 'TextEdit', 'UTM (X)': 'TextEdit', 'UTM (Y)': 'TextEdit', 'Estatus': 'TextEdit', 'Lechones_s': 'TextEdit', 'Edad': 'TextEdit', 'Observacio': 'TextEdit', });
lyr_PROVINCIA_DE_LOJA_2.set('fieldLabels', {'OBJECTID': 'no label', 'DPA_PROVIN': 'no label', 'DPA_DESPRO': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_CANTONES_2020_3.set('fieldLabels', {'OBJECTID': 'no label', 'DPA_CANTON': 'no label', 'DPA_DESCAN': 'no label', 'DPA_PROVIN': 'no label', 'DPA_DESPRO': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_ZonaPerifocal3Km_4.set('fieldLabels', {'ID': 'no label', 'Propietari': 'no label', 'Parroquia': 'no label', 'Explotacio': 'no label', 'Estatus': 'no label', 'Evento_san': 'no label', 'X': 'no label', 'Y': 'no label', 'mrb_dist': 'no label', });
lyr_VacunacionPerifocoLoja_5.set('fieldLabels', {'Certificad': 'inline label - always visible', 'Canton': 'inline label - always visible', 'Parroquia': 'inline label - always visible', 'Sitio': 'inline label - always visible', 'CI': 'no label', 'Propietari': 'inline label - always visible', 'Porcinos_v': 'inline label - always visible', 'Fecha_Vacu': 'no label', 'Zona': 'inline label - always visible', 'UTM (X)': 'inline label - always visible', 'UTM (Y)': 'inline label - always visible', 'Estatus': 'inline label - always visible', 'Lechones_s': 'inline label - always visible', 'Edad': 'inline label - always visible', 'Observacio': 'no label', });
lyr_FocoPPCLoja_6.set('fieldLabels', {'Certificad': 'inline label - always visible', 'Canton': 'inline label - always visible', 'Parroquia': 'inline label - always visible', 'Sitio': 'inline label - always visible', 'CI': 'no label', 'Propietari': 'inline label - always visible', 'Porcinos_v': 'inline label - always visible', 'Fecha_Vacu': 'no label', 'Zona': 'inline label - always visible', 'UTM (X)': 'inline label - always visible', 'UTM (Y)': 'inline label - always visible', 'Estatus': 'inline label - always visible', 'Lechones_s': 'no label', 'Edad': 'no label', 'Observacio': 'no label', });
lyr_FocoPPCLoja_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});