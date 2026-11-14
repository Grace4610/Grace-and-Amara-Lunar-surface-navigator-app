//code actual math and logic behind app

//zoomable moon map 
const map = L.map('moon-map', {
crs: L.CRS.EPSG4326,
center: [0, 0],
zoom: 1,
minZoom: 0.5,
maxZoom: 10
});

// NASA moon trek global surface titles
L.titleLayer('https://trek.nasa.gov/tiles/Moon/EQ/LRO_WAC_Mosaic_Global_303ppd_v02/1.0.0/default028mm/{z}/{y}/{x}.jpg', {
    attribution: 'NASA / GSFC / ASU (Moon Trek)',
    noWrap: true
}).addTo(map);