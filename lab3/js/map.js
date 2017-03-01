function map(data) {

    var zoom = d3.behavior.zoom()
            .scaleExtent([0.5, 8])
            .on("zoom", move);

    var mapDiv = $("#map");

    var margin = {top: 20, right: 20, bottom: 20, left: 20},
    width = mapDiv.width() - margin.right - margin.left,
            height = mapDiv.height() - margin.top - margin.bottom;

    var curr_mag = 4;

    var timeExt = d3.extent(data.map((d) => d.time));

    let filteredData = data;

    //Sets the colormap
    var colors = colorbrewer.Set3[10];

    let clusterColor = d3.scale.category10()

    //Assings the svg canvas to the map div
    var svg = d3.select("#map").append("svg")
            .attr("width", width)
            .attr("height", height)
            .call(zoom);

    var g = svg.append("g");

    //Sets the map projection
    var projection = d3.geo.mercator()
            .center([8.25, 56.8])
            .scale(700);

    //Creates a new geographic path generator and assing the projection        
    var path = d3.geo.path().projection(projection);

    let points

    //Calls the filtering function 
    d3.select("#slider").on("input", function () {
        filterMag(this.value, data);
    });

    //Formats the data in a feature collection
    let geoFormat = (array) => {
        return array.map((d) => ({
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [d.lon, d.lat]
            },
            properties: {
                id: d.id,
                place: d.place,
                mag: d.mag,
                time: d.time,
                _cluster: d._cluster
            }
        }));
    }

    //Formats the data in a feature collection trougth geoFormat()
    var geoData = () => ({type: "FeatureCollection", features: geoFormat(filteredData)})

    //Draws the map and the points
    let drawWorld = (countries) => {
        //draw map
        var country = g.selectAll(".country").data(countries);
        country.enter().insert("path")
                .attr("class", "country")
                .attr("d", path)
                .style('stroke-width', 1)
                .style("fill", "lightgray")
                .style("stroke", "white");
    }

    let drawPoints = () => {
        points = g.selectAll(".point")
            .data(geoData().features)
            .style('display', null)
            .style('fill', (d) => clusterColor(d.properties._cluster))

        points.enter()
            .append("circle")
            .attr("class", "point")
            .attr("cx", (d) => projection(d.geometry.coordinates)[0])
            .attr("cy", (d) => projection(d.geometry.coordinates)[1])
            .attr("r", '3px')
            .style('fill', (d) => clusterColor(d.properties._cluster))

        points.exit()
            .style('display', 'none')
    }

    //Loads geo data
    d3.json("data/world-topo.json", function (error, world) {
        var countries = topojson.feature(world, world.objects.countries).features;
        drawWorld(countries);
        drawPoints()
    });

    //Filters data points according to the specified magnitude
    function filterMag(value) {
        //Complete the code
    }
    
    //Filters data points according to the specified time window
    this.filterTime = (extent) => {
        filteredData = data.filter((point) => (
            extent[0] <= point.time && point.time <= extent[1]
        ))

        drawPoints()
    };

    //Calls k-means function and changes the color of the points  
    this.cluster = () => {
        filteredData = kmeans(
            filteredData,
            ['depth', 'mag'],
            Number(document.getElementById('k').value)
        )
        drawPoints()
    };

    //Zoom and panning method
    function move() {

        var t = d3.event.translate;
        var s = d3.event.scale;

        zoom.translate(t);
        g.style("stroke-width", 1 / s).attr("transform", "translate(" + t + ")scale(" + s + ")");
    }

    //Prints features attributes
    function printInfo(value) {
        var elem = document.getElementById('info');
        elem.innerHTML = "Place: " + value["place"] + " / Depth: " + value["depth"] + " / Magnitude: " + value["mag"] + "&nbsp;";
    }

}
