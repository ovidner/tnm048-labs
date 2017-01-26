var countryColors = JSON.parse("{\"Aruba\":\"#1f77b4\",\"Afghanistan\":\"#1f77b4\",\"Angola\":\"#1f77b4\",\"Anguilla\":\"#1f77b4\",\"Albania\":\"#1f77b4\",\"Åland Islands\":\"#1f77b4\",\"Andorra\":\"#1f77b4\",\"United Arab Emirates\":\"#1f77b4\",\"Argentina\":\"#1f77b4\",\"Armenia\":\"#1f77b4\",\"American Samoa\":\"#1f77b4\",\"Antarctica\":\"#1f77b4\",\"Australia\":\"#1f77b4\",\"French Southern Territories\":\"#1f77b4\",\"Antigua and Barbuda\":\"#1f77b4\",\"Austria\":\"#1f77b4\",\"Azerbaijan\":\"#aec7e8\",\"Burundi\":\"#1f77b4\",\"Belgium\":\"#1f77b4\",\"Benin\":\"#1f77b4\",\"Burkina Faso\":\"#aec7e8\",\"Bangladesh\":\"#1f77b4\",\"Bulgaria\":\"#1f77b4\",\"Bahrain\":\"#1f77b4\",\"Bahamas\":\"#1f77b4\",\"Bosnia and Herzegovina\":\"#1f77b4\",\"Saint Barthélemy\":\"#1f77b4\",\"Belarus\":\"#1f77b4\",\"Belize\":\"#1f77b4\",\"Bermuda\":\"#1f77b4\",\"Bolivia, Plurinational State of\":\"#aec7e8\",\"Brazil\":\"#ff7f0e\",\"Barbados\":\"#1f77b4\",\"Brunei Darussalam\":\"#1f77b4\",\"Bhutan\":\"#1f77b4\",\"Botswana\":\"#1f77b4\",\"Central African Republic\":\"#1f77b4\",\"Canada\":\"#1f77b4\",\"Switzerland\":\"#aec7e8\",\"Chile\":\"#ff7f0e\",\"China\":\"#aec7e8\",\"Côte d'Ivoire\":\"#ff7f0e\",\"Cameroon\":\"#aec7e8\",\"Congo, the Democratic Republic of the\":\"#aec7e8\",\"Congo\":\"#ff7f0e\",\"Cook Islands\":\"#1f77b4\",\"Colombia\":\"#ffbb78\",\"Comoros\":\"#1f77b4\",\"Cape Verde\":\"#1f77b4\",\"Costa Rica\":\"#1f77b4\",\"Cuba\":\"#1f77b4\",\"Curaçao\":\"#1f77b4\",\"Cayman Islands\":\"#1f77b4\",\"undefined\":\"#000000\",\"Cyprus\":\"#aec7e8\",\"Czech Republic\":\"#aec7e8\",\"Germany\":\"#ff7f0e\",\"Djibouti\":\"#1f77b4\",\"Dominica\":\"#1f77b4\",\"Denmark\":\"#ffbb78\",\"Dominican Republic\":\"#1f77b4\",\"Algeria\":\"#1f77b4\",\"Ecuador\":\"#2ca02c\",\"Egypt\":\"#1f77b4\",\"Eritrea\":\"#aec7e8\",\"Spain\":\"#aec7e8\",\"Estonia\":\"#1f77b4\",\"Ethiopia\":\"#ff7f0e\",\"Finland\":\"#1f77b4\",\"Fiji\":\"#1f77b4\",\"Falkland Islands (Malvinas)\":\"#1f77b4\",\"France\":\"#ffbb78\",\"Faroe Islands\":\"#1f77b4\",\"Micronesia, Federated States of\":\"#1f77b4\",\"Gabon\":\"#ffbb78\",\"United Kingdom\":\"#1f77b4\",\"Georgia\":\"#ff7f0e\",\"Guernsey\":\"#1f77b4\",\"Ghana\":\"#ffbb78\",\"Guinea\":\"#ffbb78\",\"Gambia\":\"#1f77b4\",\"Guinea-Bissau\":\"#2ca02c\",\"Equatorial Guinea\":\"#2ca02c\",\"Greece\":\"#aec7e8\",\"Grenada\":\"#1f77b4\",\"Greenland\":\"#1f77b4\",\"Guatemala\":\"#aec7e8\",\"Guam\":\"#1f77b4\",\"Guyana\":\"#ffbb78\",\"Hong Kong\":\"#ff7f0e\",\"Heard Island and McDonald Islands\":\"#1f77b4\",\"Honduras\":\"#ff7f0e\",\"Croatia\":\"#aec7e8\",\"Haiti\":\"#aec7e8\",\"Hungary\":\"#ff7f0e\",\"Indonesia\":\"#1f77b4\",\"Isle of Man\":\"#1f77b4\",\"India\":\"#ff7f0e\",\"British Indian Ocean Territory\":\"#1f77b4\",\"Ireland\":\"#aec7e8\",\"Iran, Islamic Republic of\":\"#ff7f0e\",\"Iraq\":\"#ffbb78\",\"Iceland\":\"#1f77b4\",\"Israel\":\"#aec7e8\",\"Italy\":\"#2ca02c\",\"Jamaica\":\"#1f77b4\",\"Jersey\":\"#1f77b4\",\"Jordan\":\"#2ca02c\",\"Japan\":\"#1f77b4\",\"Kazakhstan\":\"#ff7f0e\",\"Kenya\":\"#ffbb78\",\"Kyrgyzstan\":\"#ffbb78\",\"Cambodia\":\"#1f77b4\",\"Kiribati\":\"#1f77b4\",\"Saint Kitts and Nevis\":\"#1f77b4\",\"Korea, Republic of\":\"#1f77b4\",\"Kuwait\":\"#2ca02c\",\"Lao People's Democratic Republic\":\"#ff7f0e\",\"Lebanon\":\"#ff7f0e\",\"Liberia\":\"#2ca02c\",\"Libya\":\"#aec7e8\",\"Saint Lucia\":\"#1f77b4\",\"Liechtenstein\":\"#ff7f0e\",\"Sri Lanka\":\"#1f77b4\",\"Lesotho\":\"#1f77b4\",\"Lithuania\":\"#aec7e8\",\"Luxembourg\":\"#2ca02c\",\"Latvia\":\"#ff7f0e\",\"Macao\":\"#1f77b4\",\"Saint Martin (French part)\":\"#1f77b4\",\"Morocco\":\"#aec7e8\",\"Monaco\":\"#1f77b4\",\"Moldova, Republic of\":\"#1f77b4\",\"Madagascar\":\"#1f77b4\",\"Maldives\":\"#1f77b4\",\"Mexico\":\"#ff7f0e\",\"Marshall Islands\":\"#1f77b4\",\"Macedonia, the former Yugoslav Republic of\":\"#ff7f0e\",\"Mali\":\"#2ca02c\",\"Malta\":\"#1f77b4\",\"Myanmar\":\"#ffbb78\",\"Montenegro\":\"#ff7f0e\",\"Mongolia\":\"#ff7f0e\",\"Northern Mariana Islands\":\"#1f77b4\",\"Mozambique\":\"#1f77b4\",\"Mauritania\":\"#98df8a\",\"Montserrat\":\"#1f77b4\",\"Mauritius\":\"#1f77b4\",\"Malawi\":\"#aec7e8\",\"Malaysia\":\"#aec7e8\",\"Namibia\":\"#aec7e8\",\"New Caledonia\":\"#1f77b4\",\"Niger\":\"#98df8a\",\"Norfolk Island\":\"#1f77b4\",\"Nigeria\":\"#d62728\",\"Nicaragua\":\"#ffbb78\",\"Niue\":\"#1f77b4\",\"Netherlands\":\"#ffbb78\",\"Norway\":\"#aec7e8\",\"Nepal\":\"#ffbb78\",\"Nauru\":\"#1f77b4\",\"New Zealand\":\"#1f77b4\",\"Oman\":\"#aec7e8\",\"Pakistan\":\"#2ca02c\",\"Panama\":\"#2ca02c\",\"Pitcairn\":\"#1f77b4\",\"Peru\":\"#98df8a\",\"Philippines\":\"#1f77b4\",\"Palau\":\"#1f77b4\",\"Papua New Guinea\":\"#1f77b4\",\"Poland\":\"#ffbb78\",\"Puerto Rico\":\"#1f77b4\",\"Korea, Democratic People's Republic of\":\"#ff7f0e\",\"Portugal\":\"#ff7f0e\",\"Paraguay\":\"#ffbb78\",\"Palestine, State of\":\"#98df8a\",\"French Polynesia\":\"#1f77b4\",\"Qatar\":\"#1f77b4\",\"Romania\":\"#ffbb78\",\"Russian Federation\":\"#2ca02c\",\"Rwanda\":\"#ff7f0e\",\"Western Sahara\":\"#d62728\",\"Saudi Arabia\":\"#98df8a\",\"Sudan\":\"#ffbb78\",\"South Sudan\":\"#2ca02c\",\"Senegal\":\"#d62728\",\"Singapore\":\"#1f77b4\",\"South Georgia and the South Sandwich Islands\":\"#1f77b4\",\"Saint Helena, Ascension and Tristan da Cunha\":\"#1f77b4\",\"Solomon Islands\":\"#1f77b4\",\"Sierra Leone\":\"#98df8a\",\"El Salvador\":\"#ffbb78\",\"San Marino\":\"#1f77b4\",\"Somalia\":\"#2ca02c\",\"Saint Pierre and Miquelon\":\"#1f77b4\",\"Serbia\":\"#2ca02c\",\"Sao Tome and Principe\":\"#1f77b4\",\"Suriname\":\"#2ca02c\",\"Slovakia\":\"#2ca02c\",\"Slovenia\":\"#98df8a\",\"Sweden\":\"#ff7f0e\",\"Swaziland\":\"#aec7e8\",\"Sint Maarten (Dutch part)\":\"#aec7e8\",\"Seychelles\":\"#1f77b4\",\"Syrian Arab Republic\":\"#98df8a\",\"Turks and Caicos Islands\":\"#1f77b4\",\"Chad\":\"#ff9896\",\"Togo\":\"#2ca02c\",\"Thailand\":\"#2ca02c\",\"Tajikistan\":\"#2ca02c\",\"Turkmenistan\":\"#ffbb78\",\"Timor-Leste\":\"#aec7e8\",\"Tonga\":\"#1f77b4\",\"Trinidad and Tobago\":\"#1f77b4\",\"Tunisia\":\"#ff7f0e\",\"Turkey\":\"#d62728\",\"Taiwan, Province of China\":\"#1f77b4\",\"Tanzania, United Republic of\":\"#2ca02c\",\"Uganda\":\"#98df8a\",\"Ukraine\":\"#98df8a\",\"Uruguay\":\"#ffbb78\",\"United States\":\"#ffbb78\",\"Uzbekistan\":\"#98df8a\",\"Saint Vincent and the Grenadines\":\"#1f77b4\",\"Venezuela, Bolivarian Republic of\":\"#2ca02c\",\"Virgin Islands, British\":\"#1f77b4\",\"Virgin Islands, U.S.\":\"#1f77b4\",\"Viet Nam\":\"#ffbb78\",\"Vanuatu\":\"#1f77b4\",\"Wallis and Futuna\":\"#1f77b4\",\"Samoa\":\"#1f77b4\",\"Yemen\":\"#d62728\",\"South Africa\":\"#ff7f0e\",\"Zambia\":\"#98df8a\",\"Zimbabwe\":\"#d62728\"}")

function map(){

    var zoom = d3.behavior.zoom()
        .scaleExtent([1, 8])
        .on("zoom", move);

    var mapDiv = $("#map");

    var margin = {top: 20, right: 20, bottom: 20, left: 20},
        width = mapDiv.width() - margin.right - margin.left,
        height = mapDiv.height() - margin.top - margin.bottom;

    //initialize color scale
    //...
    
    //initialize tooltip
    //...

    var projection = d3.geo.mercator()
        .center([50, 60 ])
        .scale(250);

    var svg = d3.select("#map").append("svg")
        .attr("width", width)
        .attr("height", height)
        .call(zoom);

    var path = d3.geo.path()
        .projection(projection);

    g = svg.append("g");

    // load data and draw the map
    d3.json("data/world-topo.topojson", function(error, world) {
        
        var countries = topojson.feature(world, world.objects.countries).features;
        
        d3.csv("data/OECD-better-life-index-hi.csv", function (error, data) {
            // countries.forEach(function (c) {
            //     countryColors[c.properties.name] = c.properties.color
            // })
            draw(countries, data);
        })
    });

    function draw(countries, data)
    {
        var country = g.selectAll(".country").data(countries);

        country.enter().insert("path")
            .attr("class", "country")
            .attr("d", path)
            .attr("id", function(d) { return d.id; })
            .attr("title", function(d) { return d.properties.name; })
            .style("fill", function (d) {
                return countryColors[d.properties.name]
            })
            //...
            //tooltip
            .on("mousemove", function(d) {
                //...
            })
            .on("mouseout",  function(d) {
                //...
            })
            //selection
            .on("click",  function(d) {
                //...
            });

    }
    
    //zoom and panning method
    function move() {

        var t = d3.event.translate;
        var s = d3.event.scale;
        

        zoom.translate(t);
        g.style("stroke-width", 1 / s).attr("transform", "translate(" + t + ")scale(" + s + ")");

    }
    
    //method for selecting features of other components
    function selFeature(value){
        //...
    }
}

