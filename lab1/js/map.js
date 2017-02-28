function map(countries, countryColor){

    var zoom = d3.behavior.zoom()
        .scaleExtent([1, 8])
        .on("zoom", move);

    var mapDiv = $("#map");

    var margin = {top: 20, right: 20, bottom: 20, left: 20},
        width = mapDiv.width() - margin.right - margin.left,
        height = mapDiv.height() - margin.top - margin.bottom;

    var projection = d3.geo.mercator()
        .center([50, 60 ])
        .scale(250);

    var svg = d3.select("#map").append("svg")
        .attr("width", width)
        .attr("height", height)
        .call(zoom);

    var path = d3.geo.path()
        .projection(projection);

    let g = svg.append("g");

    let countryPaths

    this.draw = () => {
        countryPaths = g.selectAll(".country").data(countries);

        countryPaths.enter().insert("path")
            .attr("class", "country")
            .attr("d", path)
            .attr("id", (d) => d.id)
            .attr("title", (d) => d.properties.name)
            .style("fill", (d) => countryColor(d.properties.name))
            //...
            //tooltip
            .on("mousemove", (d) => {
                window.showTooltip(d.properties.name)
            })
            .on("mouseout", (d) => {
                window.hideTooltip()
            })
            //selection
            .on("click", (d) => {
                window.selectCountries([d.properties.name])
            });
    }

    //zoom and panning method
    function move() {

        var t = d3.event.translate;
        var s = d3.event.scale;
        

        zoom.translate(t);
        g.style("stroke-width", 1 / s).attr("transform", "translate(" + t + ")scale(" + s + ")");

    }

    this.selectCountries = (selectedCountries) => {
        countryPaths.style('opacity', (d) => (
            selectedCountries.find((c) => (
                c === d.properties.name
            )) ? 1 : 0.2
        ))
    }
}

