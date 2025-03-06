var config = {
    style: 'mapbox://styles/fett123456/cm6xf3f7z00kp01s1dcmt12o0',
    accessToken: 'pk.eyJ1IjoiZmV0dDEyMzQ1NiIsImEiOiJja3QwNnZzMWMwMXgwMnZwaHV6ZGlrbWl1In0.7OYJ6YLCbhL4_B5D8sujNw',
    showMarkers: false,
    markerColor: '#3FB1DE',
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'The Interwoven Story of Seoul’s Landscape, Culture, and History',
    subtitle: ' Seoul, a city surrounded by mountains and rivers, has been shaped by its terrain, boundaries, and culture since ancient times. From Beiyue Mountain and Nanshan Mountain to the Han River, these natural elements not only shape the texture of the city, but also profoundly influence life.',
    byline: 'By A0297264R CHEN WEIHAN',
    footer: 'Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-container',
            alignment: 'left',
            hidden: false,
            title: 'Seoul: A Historical and Cultural City Shaped by Mountains and Rivers',
            description: 'The urban development of Seoul cannot be separated from its unique landscape pattern. From Beiyue Mountain and Nanshan Mountain to the Han River, mountain ranges provide natural barriers, while rivers shape urban spaces. These natural elements not only determine the location of historical cities, but also affect the distribution pattern of cultural facilities. <a href="https://data.si.re.kr/sites/default/files/2013-BR-06_%EA%B7%B8%EB%A6%BC%2010-12%20%EA%B3%B5%EC%9B%90%20%ED%98%84%ED%99%A9%202012.jpg"> <strong>Nature Categorize</strong></a> <br><br> <img src="asset/legend11.png" style="height:100%;width:150px;"></img>',
            location: {
                center: [126.98367, 37.57628],
                zoom: 10.4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'heatmap',
                    opacity: 0
                },
                {
                    layer: 'museum-8emsxo',
                    opacity: 1            
                },
                {
                    layer: 'contour',
                    opacity: 0               
                },
                {
                    layer: 'contour copy',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'heatmap',
                    opacity: 0.5
                },
                {
                    layer: 'museum-8emsxo',
                    opacity: 1               
                },
                {
                    layer: 'contour',
                    opacity: 0.5                
                },
                {
                    layer: 'contour copy',
                    opacity: 0
                }
            ]
        },
        {
            id: 'second-container',
            alignment: 'left',
            hidden: false,
            title: 'Does Geography Shape Culture? The Spatial Logic of Seoul’s Museums',
            description: 'Museums and historical sites in Seoul are not randomly located, but are deeply influenced by the natural environment. From the foothills to the riverbanks, cultural facilities are often established based on natural landscapes or historical sites.<br><br><img src="asset/legend22.png" style="height:100%; width:150px;"></img>',
        
            location: {
                center: [126.98367, 37.58002],
                zoom: 11.7,
                pitch: 0,
                bearing: 0
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan. 
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'heatmap',
                    opacity: 0.5
                },
                {
                    layer: 'museum-8emsxo',
                    opacity: 1               
                },
                {
                    layer: 'contour',
                    opacity: 0.3                
                },
                {
                    layer: 'contour copy',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'heatmap',
                    opacity: 1
                },
                {
                    layer: 'museum-8emsxo',
                    opacity: 0               
                },
                {
                    layer: 'contour',
                    opacity: 0.3                
                },
                {
                    layer: 'contour copy',
                    opacity: 0.3
                }
            ],
        },
        {
            id: 'third-container',
            alignment: 'right',
            hidden: false,
            title: 'Historical sites surrounded by nature',
            description: 'As a historical and cultural site, Hyeonchungwon not only carries a profound historical significance, but is also closely connected to the surrounding natural landscape, such as the mountains and the Han River. This relationship embodies how the natural environment shapes the function and meaning of historical buildings, while also highlighting the potential for modern culture to coexist harmoniously with nature.<br><br> Geographical mapping of areas where vulnerable households reside can aid in identifying food-insecure neighbourhoods and informing food aid organisations.<br><br><img src="asset/legend33.png" style="height:100%; width:150px;"></img>',
            location: {
                center: [126.97606, 37.50030],
                zoom: 15.15,
                pitch: 51.02,
                bearing: -165.37,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 1, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            rotatespe: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'heatmap',
                    opacity: 0.5
                },
                {
                    layer: 'museum-8emsxo',
                    opacity: 1              
                },
                {
                    layer: 'contour',
                    opacity: 0                
                },
                {
                    layer: 'contour copy',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'heatmap',
                    opacity: 0.5
                },
                {
                    layer: 'museum-8emsxo',
                    opacity: 0.3              
                },
                {
                    layer: 'contour',
                    opacity: 0.5              
                },
                {
                    layer: 'contour copy',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Fourth-container',
            alignment: 'middle',
            hidden: false,
            title: 'Conclusion',
            description: 'The location selection of urban museums is often not only about the inheritance of history and culture, but also a reflection of the natural environment shaping the urban pattern. In Seoul, the geographical pattern of mountains surrounding and rivers flowing not only affects the direction of urban development, but also determines the spatial distribution of cultural facilities. Museums, historical sites, and natural landscapes are intertwined, and many cultural landmarks are built on mountains, waterfront areas, or important historical nodes, making urban cultural experiences closely integrated with the natural environment. This layout not only enhances the spatial narrative of the city, but also endows museums with richer environmental significance, making them a bridge connecting the past and present, nature and culture.<br> <a href="crowdsourcing.html" target="_blank">Help Us find More !</a>'
            ,
            location: {
                center: [126.98367, 37.58002],
                zoom: 11.5,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 1, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'heatmap',
                    opacity: 0
                },
                {
                    layer: 'museum-8emsxo',
                    opacity: 0.3               
                },
                {
                    layer: 'contour',
                    opacity: 0.5                
                },
                {
                    layer: 'contour copy',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'heatmap',
                    opacity: 0
                },
                {
                    layer: 'museum-8emsxo',
                    opacity: 1               
                },
                {
                    layer: 'contour',
                    opacity: 0.5                
                },
                {
                    layer: 'contour copy',
                    opacity: 0
                }
            ]
        }
    ]
};