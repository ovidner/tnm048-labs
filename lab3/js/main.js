var area1;
var map1;


d3.csv("data/data.csv", (d) => {
    d.time = d3.time.format.utc("%Y-%m-%dT%X.%LZ").parse(d.time)
    d.lat = Number(d.lat)
    d.lon = Number(d.lon)
    d.mag = Number(d.mag)
    return d
}, (data) => {
    area1 = new area(data);
    map1 = new map(data);
});

