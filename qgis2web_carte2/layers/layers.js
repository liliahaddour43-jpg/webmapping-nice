var wms_layers = [];


        var lyr_OpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ContourIRIS_3 = new ol.format.GeoJSON();
var features_ContourIRIS_3 = format_ContourIRIS_3.readFeatures(json_ContourIRIS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ContourIRIS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContourIRIS_3.addFeatures(features_ContourIRIS_3);
var lyr_ContourIRIS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ContourIRIS_3, 
                style: style_ContourIRIS_3,
                popuplayertitle: 'Contour-IRIS',
                interactive: true,
                title: '<img src="styles/legend/ContourIRIS_3.png" /> Contour-IRIS'
            });
var format_Isochrones15minfortpublique_4 = new ol.format.GeoJSON();
var features_Isochrones15minfortpublique_4 = format_Isochrones15minfortpublique_4.readFeatures(json_Isochrones15minfortpublique_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Isochrones15minfortpublique_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isochrones15minfortpublique_4.addFeatures(features_Isochrones15minfortpublique_4);
var lyr_Isochrones15minfortpublique_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Isochrones15minfortpublique_4, 
                style: style_Isochrones15minfortpublique_4,
                popuplayertitle: 'Isochrones-15min-forêt-publique',
                interactive: true,
                title: '<img src="styles/legend/Isochrones15minfortpublique_4.png" /> Isochrones-15min-forêt-publique'
            });
var format_Isochrones10minfortpublique_5 = new ol.format.GeoJSON();
var features_Isochrones10minfortpublique_5 = format_Isochrones10minfortpublique_5.readFeatures(json_Isochrones10minfortpublique_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Isochrones10minfortpublique_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isochrones10minfortpublique_5.addFeatures(features_Isochrones10minfortpublique_5);
var lyr_Isochrones10minfortpublique_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Isochrones10minfortpublique_5, 
                style: style_Isochrones10minfortpublique_5,
                popuplayertitle: 'Isochrones-10min-forêt-publique',
                interactive: true,
                title: '<img src="styles/legend/Isochrones10minfortpublique_5.png" /> Isochrones-10min-forêt-publique'
            });
var format_Isochrones5minfortpublique_6 = new ol.format.GeoJSON();
var features_Isochrones5minfortpublique_6 = format_Isochrones5minfortpublique_6.readFeatures(json_Isochrones5minfortpublique_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Isochrones5minfortpublique_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isochrones5minfortpublique_6.addFeatures(features_Isochrones5minfortpublique_6);
var lyr_Isochrones5minfortpublique_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Isochrones5minfortpublique_6, 
                style: style_Isochrones5minfortpublique_6,
                popuplayertitle: 'Isochrones-5min-forêt-publique',
                interactive: true,
                title: '<img src="styles/legend/Isochrones5minfortpublique_6.png" /> Isochrones-5min-forêt-publique'
            });
var format_Lesfortspubliques_7 = new ol.format.GeoJSON();
var features_Lesfortspubliques_7 = format_Lesfortspubliques_7.readFeatures(json_Lesfortspubliques_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lesfortspubliques_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lesfortspubliques_7.addFeatures(features_Lesfortspubliques_7);
var lyr_Lesfortspubliques_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lesfortspubliques_7, 
                style: style_Lesfortspubliques_7,
                popuplayertitle: 'Les forêts publiques',
                interactive: true,
                title: '<img src="styles/legend/Lesfortspubliques_7.png" /> Les forêts publiques'
            });

lyr_OpenTopoMap_0.setVisible(false);lyr_OpenStreetMap_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_ContourIRIS_3.setVisible(true);lyr_Isochrones15minfortpublique_4.setVisible(true);lyr_Isochrones10minfortpublique_5.setVisible(true);lyr_Isochrones5minfortpublique_6.setVisible(true);lyr_Lesfortspubliques_7.setVisible(true);
var layersList = [lyr_OpenTopoMap_0,lyr_OpenStreetMap_1,lyr_OpenStreetMap_2,lyr_ContourIRIS_3,lyr_Isochrones15minfortpublique_4,lyr_Isochrones10minfortpublique_5,lyr_Isochrones5minfortpublique_6,lyr_Lesfortspubliques_7];
lyr_ContourIRIS_3.set('fieldAliases', {'fid': 'fid', 'cleabs': 'cleabs', 'code_insee': 'code_insee', 'nom_commune': 'nom_commune', 'iris': 'iris', 'code_iris': 'code_iris', 'nom_iris': 'nom_iris', 'type_iris': 'type_iris', 'CODE_TXT': 'CODE_TXT', 'surf_tot': 'surf_tot', 'pop nice — Feuil2_Population en 2021 (princ)': 'pop nice — Feuil2_Population en 2021 (princ)', 'surf_km2': 'surf_km2', 'densité': 'densité', });
lyr_Isochrones15minfortpublique_4.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'NATURE': 'NATURE', 'TOPONYME': 'TOPONYME', 'STATUT_TOP': 'STATUT_TOP', 'IMPORTANCE': 'IMPORTANCE', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'CostValue': 'CostValue', 'X': 'X', 'Y': 'Y', });
lyr_Isochrones10minfortpublique_5.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'NATURE': 'NATURE', 'TOPONYME': 'TOPONYME', 'STATUT_TOP': 'STATUT_TOP', 'IMPORTANCE': 'IMPORTANCE', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'CostValue': 'CostValue', 'X': 'X', 'Y': 'Y', });
lyr_Isochrones5minfortpublique_6.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'NATURE': 'NATURE', 'TOPONYME': 'TOPONYME', 'STATUT_TOP': 'STATUT_TOP', 'IMPORTANCE': 'IMPORTANCE', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'CostValue': 'CostValue', 'X': 'X', 'Y': 'Y', });
lyr_Lesfortspubliques_7.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'NATURE': 'NATURE', 'TOPONYME': 'TOPONYME', 'STATUT_TOP': 'STATUT_TOP', 'IMPORTANCE': 'IMPORTANCE', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', });
lyr_ContourIRIS_3.set('fieldImages', {'fid': 'TextEdit', 'cleabs': 'TextEdit', 'code_insee': 'TextEdit', 'nom_commune': 'TextEdit', 'iris': 'TextEdit', 'code_iris': 'TextEdit', 'nom_iris': 'TextEdit', 'type_iris': 'TextEdit', 'CODE_TXT': 'TextEdit', 'surf_tot': 'TextEdit', 'pop nice — Feuil2_Population en 2021 (princ)': 'TextEdit', 'surf_km2': 'TextEdit', 'densité': 'TextEdit', });
lyr_Isochrones15minfortpublique_4.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'NATURE': 'TextEdit', 'TOPONYME': 'TextEdit', 'STATUT_TOP': 'TextEdit', 'IMPORTANCE': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'CostValue': 'Range', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Isochrones10minfortpublique_5.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'NATURE': 'TextEdit', 'TOPONYME': 'TextEdit', 'STATUT_TOP': 'TextEdit', 'IMPORTANCE': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'CostValue': 'Range', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Isochrones5minfortpublique_6.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'NATURE': 'TextEdit', 'TOPONYME': 'TextEdit', 'STATUT_TOP': 'TextEdit', 'IMPORTANCE': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'CostValue': 'Range', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Lesfortspubliques_7.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'NATURE': 'TextEdit', 'TOPONYME': 'TextEdit', 'STATUT_TOP': 'TextEdit', 'IMPORTANCE': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'PREC_PLANI': 'TextEdit', });
lyr_ContourIRIS_3.set('fieldLabels', {'fid': 'hidden field', 'cleabs': 'hidden field', 'code_insee': 'hidden field', 'nom_commune': 'hidden field', 'iris': 'header label - always visible', 'code_iris': 'hidden field', 'nom_iris': 'inline label - visible with data', 'type_iris': 'hidden field', 'CODE_TXT': 'hidden field', 'surf_tot': 'hidden field', 'pop nice — Feuil2_Population en 2021 (princ)': 'inline label - visible with data', 'surf_km2': 'hidden field', 'densité': 'hidden field', });
lyr_Isochrones15minfortpublique_4.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'NATURE': 'inline label - always visible', 'TOPONYME': 'hidden field', 'STATUT_TOP': 'hidden field', 'IMPORTANCE': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'PREC_PLANI': 'hidden field', 'CostValue': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', });
lyr_Isochrones10minfortpublique_5.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'NATURE': 'inline label - always visible', 'TOPONYME': 'hidden field', 'STATUT_TOP': 'hidden field', 'IMPORTANCE': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'PREC_PLANI': 'hidden field', 'CostValue': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', });
lyr_Isochrones5minfortpublique_6.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'NATURE': 'header label - always visible', 'TOPONYME': 'hidden field', 'STATUT_TOP': 'hidden field', 'IMPORTANCE': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'PREC_PLANI': 'hidden field', 'CostValue': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', });
lyr_Lesfortspubliques_7.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'NATURE': 'header label - always visible', 'TOPONYME': 'hidden field', 'STATUT_TOP': 'hidden field', 'IMPORTANCE': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'PREC_PLANI': 'hidden field', });
lyr_Lesfortspubliques_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});