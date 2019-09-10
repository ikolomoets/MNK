window.chartColors = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)'
};

var inputDots = [];
inputDots.X = [-1, 0, 1];
inputDots.Y = [0, 1, 1];

console.log(inputDots);

var randomScalingFactor = function() {
    return Math.round(Math.random() * 100);
};
var datapoints = [-20, 0, 20, 20, 60, 60, 120, 160, 180, 120, 125, 105, 110, 170];
var config = {
    type: 'line',
    data: {
        labels: ['-1', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        datasets: [{
            label: 'Cubic interpolation (monotone)',
            data: datapoints,
            borderColor: window.chartColors.red,
            backgroundColor: 'rgba(0, 0, 0, 0)',
            fill: false,
            cubicInterpolationMode: 'monotone'
        }, {
            label: 'Cubic interpolation (default)',
            data: datapoints,
            borderColor: window.chartColors.blue,
            backgroundColor: 'rgba(0, 0, 0, 0)',
            fill: false,
        }, {
            label: 'Linear interpolation',
            data: datapoints,
            borderColor: window.chartColors.green,
            backgroundColor: 'rgba(0, 0, 0, 0)',
            fill: false,
            lineTension: 0
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Interpolation mode'
        },
        tooltips: {
            mode: 'index'
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Value'
                },
                ticks: {
                    suggestedMin: -10,
                    suggestedMax: 200,
                }
            }]
        }
    }
};
window.onload = function() {
    var ctx = document.getElementById('canvas').getContext('2d');
    window.myLine = new Chart(ctx, config);
};
document.getElementById('randomizeData').addEventListener('click', function() {
    for (var i = 0, len = datapoints.length; i < len; ++i) {
        datapoints[i] = Math.random() < 0.05 ? NaN : randomScalingFactor();
    }
    window.myLine.update();
});
