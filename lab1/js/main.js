d3.json("data/world-topo.topojson", (error, data) => {
    const countries = topojson.feature(data, data.objects.countries).features

    d3.csv("data/OECD-better-life-index-hi.csv", (error, data) => {
        const bliCountries = data

        const countryColor = (countryName) => d3.scale.category20().domain(countries.map((c) => (c.properties.name)))(countryName)

        const sp1 = new sp(bliCountries, countryColor)
        const pc1 = new pc(bliCountries, countryColor)
        const map1 = new map(countries, countryColor)
        const tooltip = d3
            .select('body')
            .append('div')
            .attr('class', 'tooltip')
            .style('opacity', 0)

        sp1.draw()
        pc1.draw()
        map1.draw()

        window.selectCountries = (countries) => {
            sp1.selectCountries(countries)
            pc1.selectCountries(countries)
            map1.selectCountries(countries)
        }
        window.showTooltip = (text) => {
            tooltip
                .html(`<span>${text}</span>`)
                .style('left', (d3.event.pageX + 12) + 'px')
                .style('top', (d3.event.pageY + 12) + 'px')
                .style('opacity', 0.8)


        }
        window.hideTooltip = () => {
            tooltip
                .style('opacity', 0)
        }
    })
})
