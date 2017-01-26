function sp(){

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

    var x = d3.scale.linear()
        .range([0, width]);

    var y = d3.scale.linear()
        .range([height, 0]);

    var r = d3.scale.linear()
        .range([1, 10])

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

    //Load data
    d3.csv("data/OECD-better-life-index-hi.csv", function(error, data) {
        self.data = data;

        var selectAttr = function (attr) {
            return function (row) {
                return row[attr]
            }
        }

        x.domain(d3.extent(data, selectAttr(xAttr))).nice()
        y.domain(d3.extent(data, selectAttr(yAttr))).nice()
        r.domain(d3.extent(data, selectAttr(rAttr))).nice()
        
        draw();

    });

    function draw()
    {
        
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
        svg.selectAll(".dot")
            .data(self.data)
            .enter().append("circle")
            .attr("class", "dot")
            .attr("cx", function (data) {
                return x(data[xAttr])
            })
            .attr("cy", function (data) {
                return y(data[yAttr])
            })
            .attr("r", function (data) {
                return r(data[rAttr])
            })
            .style("fill", function (data) {
                return countryColors[data["Country"]]
            })
            //Define the x and y coordinate data values for the dots
            //...
            //tooltip
            .on("mousemove", function(d) {
                //...    
            })
            .on("mouseout", function(d) {
                //...   
            })
            .on("click",  function(d) {
                //...    
            });
    }

    //method for selecting the dot from other components
    this.selectDot = function(value){
        //...
    };
    
    //method for selecting features of other components
    function selFeature(value){
        //...
    }

}




