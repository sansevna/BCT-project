//dashboard.js

/* globals Chart:false, feather:false */

(async function () {
    'use strict'
  
    feather.replace()
  
    // Graphs
    var ctx = document.getElementById('myChart')
    // eslint-disable-next-line no-unused-vars
    const blue_api_url = 'https://api.bluecitytechnology.com/s/smp/';
    const blue_api = await fetch(blue_api_url).then(r => r.json());
  
    var ne = []
    var ns = []
    var nw = []
    var nrl = []
    var nlr = []
    var flags = {'ne': false, 'ns': false, 'nw': false, 'nrl': false, 'nlr': false}
    for (var i = 0; i < blue_api.plot.x.length; i++) {
      var key = blue_api.plot.x[i];
      var values = blue_api.data[key];
      flags = {'ne': false, 'ns': false, 'nw': false, 'nrl': false, 'nlr': false};
      //console.log(values);
      for (var j in values) {
        //console.log(j)
        //console.log(blue_api.data[key][j])
        if (j == 'ne') {
          ne.push(blue_api.data[key][j]);
          flags['ne'] = true;
        };
        if (j == 'ns') {
          ns.push(blue_api.data[key][j]);
          flags['ns'] = true;
        };
        if (j == 'nw') {
          nw.push(blue_api.data[key][j]);
          flags['nw'] = true;
        };
        if (j == 'nrl') {
          nrl.push(blue_api.data[key][j]);
          flags['nrl'] = true;
        };
        if (j == 'nlr') {
          nlr.push(blue_api.data[key][j]);
          flags['nlr'] = true;
        };
        //console.log(flags)
        //console.log(Object.keys(values))
      }
      for (var f in flags) {
        //console.log(flags[f])
        //TODO: change this to switch()
        if (flags[f] == false) {
          if (f == 'ne') {ne.push(0)};
          if (f == 'ns') {ns.push(0)};
          if (f == 'nw') {nw.push(0)};
          if (f == 'nrl') {nrl.push(0)};
          if (f == 'nlr') {nlr.push(0)};
        }
      }
    }
    var ds = [{data: ne, label: 'ne', borderColor: "#ee95cd", fill: false},
              {data: ns, label: 'ns', borderColor: "#ddaacd", fill: false},
              {data: nw, label: 'nw', borderColor: "#ccbbcd", fill: false},
              {data: nrl, label: 'nrl', borderColor: "#bbcccd", fill: false},
              {data: nlr, label: 'nlr', borderColor: "#aaddcd", fill: false}
             ]
  
    //console.log(ds)
  
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
        //this looks better on the graph than the full timestamp
        datasets: ds
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        },
        legend: {
          display: true
        }
      }
    })
  }())