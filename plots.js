function start() {
    let sampleid = d3.select('#selDataset')
    d3.json('samples.json').then((data) => { // .then((data)) pointing at every row or object
        let sample = data.names  // pulling names from json
        console.log(sample) // check to see if its working
        sample.forEach((X) => {   // iterate through the names
            sampleid.append('option').text(X).property('value', X)
        })
    let firstid = sample[0]
    createtable(firstid)
    })
}
function createtable(datapull) {
    d3.json('samples.json').then((data) => {
        let chartdata = data.metadata
        let output = chartdata.filter(X => X.id == datapull)
        console.log(output)
        let output1 = output[0]
        console.log(output1)
        let table = d3.select('#sample-metadata')
        table.html('')
        Object.entries(output1).forEach(function([key, value]) {
        let row = table.append("tr");
        row.append("td").html(`<strong><font size = '1'>${key}</font></strong>:`);
        row.append('td').html(`<font size ='1'>${value}</font>`);

    })
  })
}
function buildchart(datapull) {
    d3.json('samples.json').then((data) => {
        let bubbledata = data.samples
        let chart_data = bubbledata.filter(Y => Y.id == datapull)
        let output2 = chart_data[0]


    })
}


function optionChanged(newid) {
    createtable(newid)

}
start();