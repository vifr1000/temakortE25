ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([1359626.466267, 7473367.314323, 1406331.291398, 7499151.465718]);
var wms_layers = [];


        var lyr_Positronnolabelsretina_0 = new ol.layer.Tile({
            'title': 'Positron [no labels] (retina)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_Hvidovre_Lokalplaner_vedtaget_cahi_1 = new ol.format.GeoJSON();
var features_Hvidovre_Lokalplaner_vedtaget_cahi_1 = format_Hvidovre_Lokalplaner_vedtaget_cahi_1.readFeatures(json_Hvidovre_Lokalplaner_vedtaget_cahi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hvidovre_Lokalplaner_vedtaget_cahi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hvidovre_Lokalplaner_vedtaget_cahi_1.addFeatures(features_Hvidovre_Lokalplaner_vedtaget_cahi_1);
var lyr_Hvidovre_Lokalplaner_vedtaget_cahi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hvidovre_Lokalplaner_vedtaget_cahi_1, 
                style: style_Hvidovre_Lokalplaner_vedtaget_cahi_1,
                popuplayertitle: 'Hvidovre_Lokalplaner_vedtaget_cahi',
                interactive: true,
    title: 'Hvidovre_Lokalplaner_vedtaget_cahi<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_0.png" /> <br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_1.png" /> 001<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_2.png" /> 101-1<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_3.png" /> 102<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_4.png" /> 103<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_5.png" /> 104<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_6.png" /> 105<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_7.png" /> 106<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_8.png" /> 108<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_9.png" /> 109-1<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_10.png" /> 112<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_11.png" /> 115<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_12.png" /> 116<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_13.png" /> 118<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_14.png" /> 119<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_15.png" /> 120<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_16.png" /> 121<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_17.png" /> 122<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_18.png" /> 124<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_19.png" /> 126<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_20.png" /> 127<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_21.png" /> 128<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_22.png" /> 131<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_23.png" /> 132<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_24.png" /> 133<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_25.png" /> 134<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_26.png" /> 135<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_27.png" /> 137<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_28.png" /> 139<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_29.png" /> 140<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_30.png" /> 141<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_31.png" /> 142<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_32.png" /> 143<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_33.png" /> 144<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_34.png" /> 147<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_35.png" /> 148<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_36.png" /> 149<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_37.png" /> 150<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_38.png" /> 151<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_39.png" /> 152<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_40.png" /> 154<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_41.png" /> 202<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_42.png" /> 203<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_43.png" /> 206<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_44.png" /> 207<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_45.png" /> 208<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_46.png" /> 209<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_47.png" /> 210<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_48.png" /> 211<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_49.png" /> 216<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_50.png" /> 220<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_51.png" /> 221<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_52.png" /> 225<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_53.png" /> 226<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_54.png" /> 228<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_55.png" /> 229<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_56.png" /> 230<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_57.png" /> 231<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_58.png" /> 232<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_59.png" /> 233<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_60.png" /> 234<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_61.png" /> 236<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_62.png" /> 237<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_63.png" /> 238<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_64.png" /> 239<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_65.png" /> 240<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_66.png" /> 241<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_67.png" /> 301-1<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_68.png" /> 303<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_69.png" /> 304<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_70.png" /> 305<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_71.png" /> 306<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_72.png" /> 313<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_73.png" /> 314<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_74.png" /> 316<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_75.png" /> 322<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_76.png" /> 323<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_77.png" /> 324<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_78.png" /> 325<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_79.png" /> 326<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_80.png" /> 327<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_81.png" /> 328<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_82.png" /> 329<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_83.png" /> 330<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_84.png" /> 331<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_85.png" /> 332<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_86.png" /> 335<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_87.png" /> 338<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_88.png" /> 339<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_89.png" /> 340<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_90.png" /> 341<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_91.png" /> 342<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_92.png" /> 343<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_93.png" /> 345<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_94.png" /> 403-1<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_95.png" /> 404<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_96.png" /> 405<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_97.png" /> 407<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_98.png" /> 408<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_99.png" /> 409<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_100.png" /> 411<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_101.png" /> 412<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_102.png" /> 418<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_103.png" /> 423<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_104.png" /> 429<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_105.png" /> 432<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_106.png" /> 433<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_107.png" /> 440<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_108.png" /> 441<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_109.png" /> 447<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_110.png" /> 448<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_111.png" /> 452<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_112.png" /> 454<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_113.png" /> 455<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_114.png" /> 456<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_115.png" /> 457<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_116.png" /> 458<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_117.png" /> 459<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_118.png" /> 462<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_119.png" /> 463<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_120.png" /> 464<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_121.png" /> 466<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_122.png" /> 467<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_123.png" /> 468<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_124.png" /> 469<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_125.png" /> 470<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_126.png" /> 471<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_127.png" /> 472<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_128.png" /> 473<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_129.png" /> 475<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_130.png" /> 476<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_131.png" /> 504<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_132.png" /> 507<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_133.png" /> 508<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_134.png" /> 510<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_135.png" /> 511<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_136.png" /> 516<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_137.png" /> 518<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_138.png" /> 519<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_139.png" /> A1<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_140.png" /> A10<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_141.png" /> A11<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_142.png" /> A11 tillæg 1<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_143.png" /> A11 tillæg 2<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_144.png" /> A13<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_145.png" /> A14<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_146.png" /> A15<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_147.png" /> A3<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_148.png" /> A5<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_149.png" /> A7<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_150.png" /> A8<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_151.png" /> A9 med tillæg 1<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_152.png" /> B17<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_153.png" /> B17 tillæg 1<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_154.png" /> H1 med tillæg 1 og 2<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_155.png" /> H1 tillæg 4<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_156.png" /> H10<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_157.png" /> H10 tillæg 1<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_158.png" /> H11<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_159.png" /> H12<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_160.png" /> H13<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_161.png" /> H14<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_162.png" /> H15<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_163.png" /> H16<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_164.png" /> H17<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_165.png" /> H18<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_166.png" /> H20<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_167.png" /> H20 tillæg 1<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_168.png" /> H3<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_169.png" /> H4<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_170.png" /> H5<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_171.png" /> H9<br />\
    <img src="styles/legend/Hvidovre_Lokalplaner_vedtaget_cahi_1_172.png" /> Lokalplan 127 med Tillæg nr. 1<br />' });
var format_Hvidovre_lokalplaner_forslag_cahi_2 = new ol.format.GeoJSON();
var features_Hvidovre_lokalplaner_forslag_cahi_2 = format_Hvidovre_lokalplaner_forslag_cahi_2.readFeatures(json_Hvidovre_lokalplaner_forslag_cahi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hvidovre_lokalplaner_forslag_cahi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hvidovre_lokalplaner_forslag_cahi_2.addFeatures(features_Hvidovre_lokalplaner_forslag_cahi_2);
var lyr_Hvidovre_lokalplaner_forslag_cahi_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hvidovre_lokalplaner_forslag_cahi_2, 
                style: style_Hvidovre_lokalplaner_forslag_cahi_2,
                popuplayertitle: 'Hvidovre_lokalplaner_forslag_cahi',
                interactive: true,
    title: 'Hvidovre_lokalplaner_forslag_cahi<br />\
    <img src="styles/legend/Hvidovre_lokalplaner_forslag_cahi_2_0.png" /> 153<br />\
    <img src="styles/legend/Hvidovre_lokalplaner_forslag_cahi_2_1.png" /> 155<br />\
    <img src="styles/legend/Hvidovre_lokalplaner_forslag_cahi_2_2.png" /> 242<br />\
    <img src="styles/legend/Hvidovre_lokalplaner_forslag_cahi_2_3.png" /> <br />' });
var format_Frededeomrder_3 = new ol.format.GeoJSON();
var features_Frededeomrder_3 = format_Frededeomrder_3.readFeatures(json_Frededeomrder_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Frededeomrder_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Frededeomrder_3.addFeatures(features_Frededeomrder_3);
var lyr_Frededeomrder_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Frededeomrder_3, 
                style: style_Frededeomrder_3,
                popuplayertitle: 'Fredede områder',
                interactive: true,
    title: 'Fredede områder<br />\
    <img src="styles/legend/Frededeomrder_3_0.png" /> Damhuså<br />\
    <img src="styles/legend/Frededeomrder_3_1.png" /> Kalvebod Kile<br />\
    <img src="styles/legend/Frededeomrder_3_2.png" /> Rehbæks Eng<br />\
    <img src="styles/legend/Frededeomrder_3_3.png" /> Vestvolden<br />\
    <img src="styles/legend/Frededeomrder_3_4.png" /> Vigerslevparken, Damhussøen, Damhusengen, Krogebjergparken<br />\
    <img src="styles/legend/Frededeomrder_3_5.png" /> <br />' });
var format_FrededeomrderHvidovre_4 = new ol.format.GeoJSON();
var features_FrededeomrderHvidovre_4 = format_FrededeomrderHvidovre_4.readFeatures(json_FrededeomrderHvidovre_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FrededeomrderHvidovre_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FrededeomrderHvidovre_4.addFeatures(features_FrededeomrderHvidovre_4);
var lyr_FrededeomrderHvidovre_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FrededeomrderHvidovre_4, 
                style: style_FrededeomrderHvidovre_4,
                popuplayertitle: 'Fredede områder, Hvidovre',
                interactive: false,
                title: '<img src="styles/legend/FrededeomrderHvidovre_4.png" /> Fredede områder, Hvidovre'
            });
var format_Strandbeskyttelse_5 = new ol.format.GeoJSON();
var features_Strandbeskyttelse_5 = format_Strandbeskyttelse_5.readFeatures(json_Strandbeskyttelse_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Strandbeskyttelse_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Strandbeskyttelse_5.addFeatures(features_Strandbeskyttelse_5);
var lyr_Strandbeskyttelse_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Strandbeskyttelse_5, 
                style: style_Strandbeskyttelse_5,
                popuplayertitle: 'Strandbeskyttelse',
                interactive: true,
                title: '<img src="styles/legend/Strandbeskyttelse_5.png" /> Strandbeskyttelse'
            });
var format_kommuneplan_6 = new ol.format.GeoJSON();
var features_kommuneplan_6 = format_kommuneplan_6.readFeatures(json_kommuneplan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kommuneplan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kommuneplan_6.addFeatures(features_kommuneplan_6);
var lyr_kommuneplan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kommuneplan_6, 
                style: style_kommuneplan_6,
                popuplayertitle: 'kommuneplan',
                interactive: true,
                title: '<img src="styles/legend/kommuneplan_6.png" /> kommuneplan'
            });
var format_Togstationer_7 = new ol.format.GeoJSON();
var features_Togstationer_7 = format_Togstationer_7.readFeatures(json_Togstationer_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Togstationer_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Togstationer_7.addFeatures(features_Togstationer_7);
var lyr_Togstationer_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Togstationer_7, 
                style: style_Togstationer_7,
                popuplayertitle: 'Togstationer',
                interactive: true,
                title: '<img src="styles/legend/Togstationer_7.png" /> Togstationer'
            });
var format_Sejlklubber_8 = new ol.format.GeoJSON();
var features_Sejlklubber_8 = format_Sejlklubber_8.readFeatures(json_Sejlklubber_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sejlklubber_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sejlklubber_8.addFeatures(features_Sejlklubber_8);
var lyr_Sejlklubber_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sejlklubber_8, 
                style: style_Sejlklubber_8,
                popuplayertitle: 'Sejlklubber',
                interactive: true,
                title: '<img src="styles/legend/Sejlklubber_8.png" /> Sejlklubber'
            });
var format_Rideklubber_9 = new ol.format.GeoJSON();
var features_Rideklubber_9 = format_Rideklubber_9.readFeatures(json_Rideklubber_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rideklubber_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rideklubber_9.addFeatures(features_Rideklubber_9);
var lyr_Rideklubber_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rideklubber_9, 
                style: style_Rideklubber_9,
                popuplayertitle: 'Rideklubber',
                interactive: true,
                title: '<img src="styles/legend/Rideklubber_9.png" /> Rideklubber'
            });
var format_Religion_10 = new ol.format.GeoJSON();
var features_Religion_10 = format_Religion_10.readFeatures(json_Religion_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Religion_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Religion_10.addFeatures(features_Religion_10);
var lyr_Religion_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Religion_10, 
                style: style_Religion_10,
                popuplayertitle: 'Religion',
                interactive: true,
                title: '<img src="styles/legend/Religion_10.png" /> Religion'
            });
var format_Brnehaver_11 = new ol.format.GeoJSON();
var features_Brnehaver_11 = format_Brnehaver_11.readFeatures(json_Brnehaver_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Brnehaver_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Brnehaver_11.addFeatures(features_Brnehaver_11);
var lyr_Brnehaver_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Brnehaver_11, 
                style: style_Brnehaver_11,
                popuplayertitle: 'Børnehaver',
                interactive: true,
                title: '<img src="styles/legend/Brnehaver_11.png" /> Børnehaver'
            });
var format_folkeskoler_12 = new ol.format.GeoJSON();
var features_folkeskoler_12 = format_folkeskoler_12.readFeatures(json_folkeskoler_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_folkeskoler_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_folkeskoler_12.addFeatures(features_folkeskoler_12);
var lyr_folkeskoler_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_folkeskoler_12, 
                style: style_folkeskoler_12,
                popuplayertitle: 'folkeskoler',
                interactive: true,
                title: '<img src="styles/legend/folkeskoler_12.png" /> folkeskoler'
            });
var format_idrtsforeninger_13 = new ol.format.GeoJSON();
var features_idrtsforeninger_13 = format_idrtsforeninger_13.readFeatures(json_idrtsforeninger_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_idrtsforeninger_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_idrtsforeninger_13.addFeatures(features_idrtsforeninger_13);
var lyr_idrtsforeninger_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_idrtsforeninger_13, 
                style: style_idrtsforeninger_13,
                popuplayertitle: 'idrætsforeninger',
                interactive: true,
                title: '<img src="styles/legend/idrtsforeninger_13.png" /> idrætsforeninger'
            });
var format_indkb_14 = new ol.format.GeoJSON();
var features_indkb_14 = format_indkb_14.readFeatures(json_indkb_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_indkb_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_indkb_14.addFeatures(features_indkb_14);
var lyr_indkb_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_indkb_14, 
                style: style_indkb_14,
                popuplayertitle: 'indkøb',
                interactive: true,
                title: '<img src="styles/legend/indkb_14.png" /> indkøb'
            });

lyr_Positronnolabelsretina_0.setVisible(true);lyr_Hvidovre_Lokalplaner_vedtaget_cahi_1.setVisible(true);lyr_Hvidovre_lokalplaner_forslag_cahi_2.setVisible(true);lyr_Frededeomrder_3.setVisible(true);lyr_FrededeomrderHvidovre_4.setVisible(true);lyr_Strandbeskyttelse_5.setVisible(true);lyr_kommuneplan_6.setVisible(true);lyr_Togstationer_7.setVisible(true);lyr_Sejlklubber_8.setVisible(true);lyr_Rideklubber_9.setVisible(true);lyr_Religion_10.setVisible(true);lyr_Brnehaver_11.setVisible(true);lyr_folkeskoler_12.setVisible(true);lyr_idrtsforeninger_13.setVisible(true);lyr_indkb_14.setVisible(true);
var layersList = [lyr_Positronnolabelsretina_0,lyr_Hvidovre_Lokalplaner_vedtaget_cahi_1,lyr_Hvidovre_lokalplaner_forslag_cahi_2,lyr_Frededeomrder_3,lyr_FrededeomrderHvidovre_4,lyr_Strandbeskyttelse_5,lyr_kommuneplan_6,lyr_Togstationer_7,lyr_Sejlklubber_8,lyr_Rideklubber_9,lyr_Religion_10,lyr_Brnehaver_11,lyr_folkeskoler_12,lyr_idrtsforeninger_13,lyr_indkb_14];
lyr_Hvidovre_Lokalplaner_vedtaget_cahi_1.set('fieldAliases', {'fid': 'fid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'datovedt': 'datovedt', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_Hvidovre_lokalplaner_forslag_cahi_2.set('fieldAliases', {'fid': 'fid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'datovedt': 'datovedt', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_Frededeomrder_3.set('fieldAliases', {'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_leng': 'Shape_leng', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_FrededeomrderHvidovre_4.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_leng': 'Shape_leng', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_Strandbeskyttelse_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'metadataproperty': 'metadataproperty', 'description_href': 'description_href', 'description_title': 'description_title', 'description_nilreason': 'description_nilreason', 'description': 'description', 'descriptionreference_href': 'descriptionreference_href', 'descriptionreference_title': 'descriptionreference_title', 'descriptionreference_nilreason': 'descriptionreference_nilreason', 'identifier_codespace': 'identifier_codespace', 'identifier': 'identifier', 'name': 'name', 'location_location': 'location_location', 'forretningshaendelse': 'forretningshaendelse', 'senestesaglokalid': 'senestesaglokalid', 'forretningsproces': 'forretningsproces', 'id.namespace': 'id.namespace', 'id.lokalid': 'id.lokalid', 'paataenkthandling': 'paataenkthandling', 'registreringfra': 'registreringfra', 'virkningfra': 'virkningfra', 'virkningsaktoer': 'virkningsaktoer', 'temafladeid': 'temafladeid', 'tematype': 'tematype', 'jordstykkelokalid': 'jordstykkelokalid', });
lyr_kommuneplan_6.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'objektkode': 'objektkode', 'komnr': 'komnr', 'plannavn': 'plannavn', 'doklink': 'doklink', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datoslut': 'datoslut', 'aktuel': 'aktuel', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'status': 'status', 'datostart': 'datostart', 'glkomnr': 'glkomnr', 'kommunenavn': 'kommunenavn', 'glkomnavn': 'glkomnavn', 'glkomnavn_besk': 'glkomnavn_besk', });
lyr_Togstationer_7.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Sejlklubber_8.set('fieldAliases', {'Sejlklub': 'Sejlklub', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Rideklubber_9.set('fieldAliases', {'Rideklub': 'Rideklub', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Religion_10.set('fieldAliases', {'Kirke': 'Kirke', 'Adresse': 'Adresse', 'By': 'By', 'Telefon': 'Telefon', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Brnehaver_11.set('fieldAliases', {'fid': 'fid', 'Børnepasn': 'Børnepasn', 'Adresse': 'Adresse', 'By': 'By', 'telefonnum': 'telefonnum', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_folkeskoler_12.set('fieldAliases', {'fid': 'fid', 'skolenavn': 'skolenavn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_idrtsforeninger_13.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_indkb_14.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Hvidovre_Lokalplaner_vedtaget_cahi_1.set('fieldImages', {'fid': '', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_Hvidovre_lokalplaner_forslag_cahi_2.set('fieldImages', {'fid': '', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_Frededeomrder_3.set('fieldImages', {'Temakode': 'TextEdit', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'TextEdit', 'Systid_til': 'TextEdit', 'Oprettet': 'TextEdit', 'Oprindkode': 'TextEdit', 'Oprindelse': 'TextEdit', 'Statuskode': 'TextEdit', 'Status': 'TextEdit', 'Off_kode': 'TextEdit', 'Offentlig': 'TextEdit', 'CVR_kode': 'TextEdit', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_leng': 'TextEdit', 'Fred_tkode': 'TextEdit', 'Fred_tnavn': 'TextEdit', 'Reg_nr': 'TextEdit', 'Fred_navn': 'TextEdit', 'Aendr_kode': 'TextEdit', 'Aendrbegr': 'TextEdit', 'Aar_fredn': 'TextEdit', 'Gyldig_fra': 'TextEdit', 'Gyldig_til': 'TextEdit', });
lyr_FrededeomrderHvidovre_4.set('fieldImages', {'fid': '', 'Temakode': '', 'Temanavn': '', 'Objekt_id': '', 'Version_id': '', 'Systid_fra': '', 'Systid_til': '', 'Oprettet': '', 'Oprindkode': '', 'Oprindelse': '', 'Statuskode': '', 'Status': '', 'Off_kode': '', 'Offentlig': '', 'CVR_kode': '', 'CVR_navn': '', 'Bruger_id': '', 'Link': '', 'Shape_area': '', 'Shape_leng': '', 'Fred_tkode': '', 'Fred_tnavn': '', 'Reg_nr': '', 'Fred_navn': '', 'Aendr_kode': '', 'Aendrbegr': '', 'Aar_fredn': '', 'Gyldig_fra': '', 'Gyldig_til': '', });
lyr_Strandbeskyttelse_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'metadataproperty': 'TextEdit', 'description_href': 'TextEdit', 'description_title': 'TextEdit', 'description_nilreason': 'TextEdit', 'description': 'TextEdit', 'descriptionreference_href': 'TextEdit', 'descriptionreference_title': 'TextEdit', 'descriptionreference_nilreason': 'TextEdit', 'identifier_codespace': 'TextEdit', 'identifier': 'TextEdit', 'name': 'TextEdit', 'location_location': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'senestesaglokalid': 'TextEdit', 'forretningsproces': 'TextEdit', 'id.namespace': 'TextEdit', 'id.lokalid': 'TextEdit', 'paataenkthandling': 'TextEdit', 'registreringfra': 'DateTime', 'virkningfra': 'DateTime', 'virkningsaktoer': 'TextEdit', 'temafladeid': 'TextEdit', 'tematype': 'TextEdit', 'jordstykkelokalid': 'TextEdit', });
lyr_kommuneplan_6.set('fieldImages', {'fid': 'TextEdit', 'oid': 'TextEdit', 'id': 'Range', 'planid': 'Range', 'objektkode': 'Range', 'komnr': 'Range', 'plannavn': 'TextEdit', 'doklink': 'TextEdit', 'datoforsl': 'Range', 'datovedt': 'Range', 'datoaflyst': 'Range', 'datoikraft': 'Range', 'datoslut': 'Range', 'aktuel': 'TextEdit', 'datooprt': 'DateTime', 'datoopdt': 'DateTime', 'status': 'TextEdit', 'datostart': 'Range', 'glkomnr': 'Range', 'kommunenavn': 'TextEdit', 'glkomnavn': 'TextEdit', 'glkomnavn_besk': 'TextEdit', });
lyr_Togstationer_7.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Sejlklubber_8.set('fieldImages', {'Sejlklub': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_Rideklubber_9.set('fieldImages', {'Rideklub': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_Religion_10.set('fieldImages', {'Kirke': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Telefon': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_Brnehaver_11.set('fieldImages', {'fid': 'TextEdit', 'Børnepasn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'telefonnum': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_folkeskoler_12.set('fieldImages', {'fid': 'TextEdit', 'skolenavn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_idrtsforeninger_13.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_indkb_14.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Hvidovre_Lokalplaner_vedtaget_cahi_1.set('fieldLabels', {'fid': 'no label', 'plannr': 'inline label - always visible', 'plannavn': 'inline label - always visible', 'datovedt': 'inline label - always visible', 'doklink': 'inline label - always visible', 'anvendelse': 'inline label - always visible', });
lyr_Hvidovre_lokalplaner_forslag_cahi_2.set('fieldLabels', {'fid': 'no label', 'plannr': 'no label', 'plannavn': 'no label', 'datovedt': 'no label', 'doklink': 'no label', 'anvendelse': 'no label', });
lyr_Frededeomrder_3.set('fieldLabels', {'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_leng': 'no label', 'Fred_tkode': 'no label', 'Fred_tnavn': 'no label', 'Reg_nr': 'no label', 'Fred_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Aar_fredn': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', });
lyr_FrededeomrderHvidovre_4.set('fieldLabels', {'fid': 'no label', 'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_leng': 'no label', 'Fred_tkode': 'no label', 'Fred_tnavn': 'no label', 'Reg_nr': 'no label', 'Fred_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Aar_fredn': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', });
lyr_Strandbeskyttelse_5.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'metadataproperty': 'no label', 'description_href': 'no label', 'description_title': 'no label', 'description_nilreason': 'no label', 'description': 'no label', 'descriptionreference_href': 'no label', 'descriptionreference_title': 'no label', 'descriptionreference_nilreason': 'no label', 'identifier_codespace': 'no label', 'identifier': 'no label', 'name': 'no label', 'location_location': 'no label', 'forretningshaendelse': 'no label', 'senestesaglokalid': 'no label', 'forretningsproces': 'no label', 'id.namespace': 'no label', 'id.lokalid': 'no label', 'paataenkthandling': 'no label', 'registreringfra': 'no label', 'virkningfra': 'no label', 'virkningsaktoer': 'no label', 'temafladeid': 'no label', 'tematype': 'no label', 'jordstykkelokalid': 'no label', });
lyr_kommuneplan_6.set('fieldLabels', {'fid': 'no label', 'oid': 'no label', 'id': 'no label', 'planid': 'no label', 'objektkode': 'no label', 'komnr': 'no label', 'plannavn': 'no label', 'doklink': 'no label', 'datoforsl': 'no label', 'datovedt': 'no label', 'datoaflyst': 'no label', 'datoikraft': 'no label', 'datoslut': 'no label', 'aktuel': 'no label', 'datooprt': 'no label', 'datoopdt': 'no label', 'status': 'no label', 'datostart': 'no label', 'glkomnr': 'no label', 'kommunenavn': 'no label', 'glkomnavn': 'no label', 'glkomnavn_besk': 'no label', });
lyr_Togstationer_7.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', });
lyr_Sejlklubber_8.set('fieldLabels', {'Sejlklub': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_Rideklubber_9.set('fieldLabels', {'Rideklub': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_Religion_10.set('fieldLabels', {'Kirke': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Telefon': 'no label', 'Hjemmeside': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_Brnehaver_11.set('fieldLabels', {'fid': 'no label', 'Børnepasn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'telefonnum': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_folkeskoler_12.set('fieldLabels', {'fid': 'no label', 'skolenavn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', });
lyr_idrtsforeninger_13.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_indkb_14.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_indkb_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});