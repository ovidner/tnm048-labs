function sp(bliCountries, countryColor){

    var self = this; // for internal d3 functions

    var spDiv = $("#sp");

    var margin = {top: 20, right: 20, bottom: 30, left: 40},
        width = spDiv.width() - margin.right - margin.left,
        height = spDiv.height() - margin.top - margin.bottom;

    //initialize color scale
    //...
    
    //initialize tooltip
    //...

    var xAttr = "Employment rate"
    var yAttr = "Water quality"
    var rAttr = "Life satisfaction"

    var selectAttr = (attr) => (row) => row[attr]

    var x = d3.scale.linear()
        .range([0, width]);

    var y = d3.scale.linear()
        .range([height, 0]);

    var r = d3.scale.linear()
        .range([1, 12])

    x.domain(d3.extent(bliCountries, selectAttr(xAttr))).nice()
    y.domain(d3.extent(bliCountries, selectAttr(yAttr))).nice()
    r.domain(d3.extent(bliCountries, selectAttr(rAttr))).nice()

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");

    var svg = d3.select("#sp").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    let dots

    this.draw = () => {
        // Add x axis and title.
        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)
            .append("text")
            .attr("class", "label")
            .attr("x", width)
            .attr("y", -6)
            .text(xAttr)
            
        // Add y axis and title.
        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .append("text")
            .attr("class", "label")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .text(yAttr)
            
        // Add the scatter dots.
        dots = svg.selectAll(".dot")
            .data(bliCountries)
            .enter().append("circle")
            .attr("class", "dot")
            .attr("cx", (d) => x(d[xAttr]))
            .attr("cy", (d) => y(d[yAttr]))
            .attr("r", (d) => r(d[rAttr]))
            .style("fill", (d) => countryColor(d["Country"]))

            .on("mousemove", (d) => {
                window.showTooltip(d['Country'])
            })
            .on("mouseout", (d) => {
                window.hideTooltip()
            })
            .on("click", (d) => {
                window.selectCountries([d['Country']])
            });
    }

    //method for selecting the dot from other components
    this.selectCountries = (selectedCountries) => {
        dots.style('opacity', (d) => (
            selectedCountries.find((c) => (
                c === d['Country']
            )) ? 1 : 0.2
        ))
    }
}




