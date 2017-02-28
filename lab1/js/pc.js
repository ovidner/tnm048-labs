function pc(bliCountries, countryColor){

    var self = this; // for internal d3 functions

    var pcDiv = $("#pc");

    var margin = [30, 10, 10, 10],
        width = pcDiv.width() - margin[1] - margin[3],
        height = pcDiv.height() - margin[0] - margin[2];

    
    //initialize color scale
    //...
    
    //initialize tooltip
    //...

    var x = d3.scale.ordinal().rangePoints([0, width], 1),
        y = {}

    var dimensions = [
        "Household income",
        "Employment rate",
        "Unemployment rate",
        "Personal earnings",
        "Quality of support network",
        "Student skills",
        "Water quality",
        "Voter turnout",
        "Self-reported health",
        "Life satisfaction"
    ]

    dimensions.forEach((d) => {
        y[d] = d3.scale.linear()
            .domain(d3.extent(bliCountries, (row) => Number(row[d])))
            .range([height, 0])
            .nice()
    })

    x.domain(dimensions);

    var line = d3.svg.line(),
        axis = d3.svg.axis().orient("left"),
        background,
        foreground;

    var svg = d3.select("#pc").append("svg:svg")
        .attr("width", width + margin[1] + margin[3])
        .attr("height", height + margin[0] + margin[2])
        .append("svg:g")
        .attr("transform", "translate(" + margin[3] + "," + margin[0] + ")");

    this.draw = function () {
        // Add grey background lines for context.
        background = svg.append("svg:g")
            .attr("class", "background")
            .selectAll("path")
            .data(bliCountries)
            .enter().append("svg:path")
            .attr("d", path)

        // Add blue foreground lines for focus.
        foreground = svg.append("svg:g")
            .attr("class", "foreground")
            .selectAll("path")
            .data(bliCountries)
            .enter().append("svg:path")
            .attr("d", path)
            .attr('title', (d) => d['Country'])
            .style("stroke", (d) => countryColor(d["Country"]))
            .on("mousemove", (d) => {
                window.showTooltip(d['Country'])
            })
            .on("mouseout", (d) => {
                window.hideTooltip()
            })

        // Add a group element for each dimension.
        var g = svg.selectAll(".dimension")
            .data(dimensions)
            .enter().append("svg:g")
            .attr("class", "dimension")
            .attr("transform", (d) => "translate(" + x(d) + ")");
            
        // Add an axis and title.
        g.append("svg:g")
            .attr("class", "axis")
            .each(function (d) {
                d3.select(this).call(axis.scale(y[d]))
            })
            .append("svg:text")
            .attr("text-anchor", "middle")
            .attr("y", -9)
            .text(String);

        // Add and store a brush for each axis.
        g.append("svg:g")
            .attr("class", "brush")
            .each(function(d) { d3.select(this).call(y[d].brush = d3.svg.brush().y(y[d]).on("brush", brush)); })
            .selectAll("rect")
            .attr("x", -8)
            .attr("width", 16);
    }

    // Returns the path for a given data point.
    function path(d) {
        return line(dimensions.map((p) => [x(p), y[p](d[p])]));
    }

    // Handles a brush event, toggling the display of foreground lines.
    function brush() {
        var actives = dimensions.filter((p) => !y[p].brush.empty()),
            extents = actives.map((p) => y[p].brush.extent());

        window.selectCountries(
            bliCountries
                .filter((d) => (
                    actives.every((p, i) => (
                        extents[i][0] <= d[p] && d[p] <= extents[i][1]
                    ))))
                .map((d) => d['Country'])
        )
    }

    //method for selecting the pololyne from other components
    this.selectCountries = (selectedCountries) => {
        foreground.style('display', (d) => (
            selectedCountries.find((c) => (
                c === d['Country']
            )) ? null : 'none'
        ))
    };
}
