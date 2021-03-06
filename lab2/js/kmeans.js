
const randomInt = (max) => Math.floor(Math.random() * max)

// Naive check if two (equally long arrays) are equal
const arrayEquals = (array1, array2) => array1.every((_, index) => (
    array1[index] === array2[index]
))


const kmeans = (data, dimensions, k) =>{

    let centroid = (points) => dimensions.reduce((result, dimension) => (
        Object.assign({}, result, {
            [dimension]: points.reduce((sum, point) => (sum + point[dimension]), 0) / points.length
        })), {})

    let distance = (point1, point2) => Math.sqrt(
        dimensions.reduce((value, dimension) => (
            value + Math.pow(point1[dimension] - point2[dimension], 2)
        ), 0)
    )

    let quality = (points, centroid) => points.reduce((result, point) => (
        result + Math.pow(distance(point, centroid), 2)
    ), 0)

    let clusterQualities = (clusters) => clusters.map((points) => quality(points, centroid(points)))

    let partition = (points, centroids) => {
        // Start with an array of (centroid.length) arrays
        let returnValue = (new Array(centroids.length)).fill().map(() => [])

        points.forEach((point) => {
            let bestCentroid = {
                index: null,
                distance: Infinity
            }
            centroids.forEach((centroid, index) => {
                let distanceToCentroid = distance(point, centroid)

                if (distanceToCentroid < bestCentroid.distance) {
                    bestCentroid.distance = distanceToCentroid
                    bestCentroid.index = index
                }
            })
            point.cluster = bestCentroid.index
            returnValue[bestCentroid.index].push(point)
        })

        return returnValue
    }

    let clusters = partition(data, (new Array(k)).fill()  // Gives us an empty array of length k
        .map(() => (
            // Use three random points as centroids
            data[randomInt(data.length)]
        )))
    let previousQualities = dimensions.map(() => Infinity)
    let currentQualities = clusterQualities(clusters)

    // Iterate until two rounds give the same qualities in all dimensions
    while (!arrayEquals(currentQualities, previousQualities)) {
        previousQualities = currentQualities
        clusters = partition(data, clusters.map((points) => centroid(points)))
        currentQualities = clusterQualities(clusters)
    }

    return clusters
}
