var ws = new WebSocket("ws://35.183.23.210:8000/b")
var request_data_interval
ws.onopen = function()
{
    console.log("websocket opened")
};

ws.onmessage = function (evt)
{
    var received_msg = evt.data;
    var data = JSON.parse(evt.data);
    console.log(data)
    var my_plot = {
         x: data.sensor.motor_rpm,
         y: data.sensor.output,
         type: 'scatter',
     };
    Plotly.newPlot('myChart', [my_plot]);
    return data;
};

ws.onclose = function()
{
  // websocket is closed.
  console.log("websocket closed")
};