var ch = document.getElementById('Chart').getContext('2d');
var Chart = new Chart(ch, {
    type: 'bar',
    data: {
        labels: ["<2 weeks(n=33)", '2-4 weeks(n=36)', '5-8 weeks(n=42)', '9-12 weeks(n=62)', '>12 weeks(n=16)'],

        datasets: [{
            data: [1, 2, 4, 10, 6],
            backgroundColor: [
                'white',
                'white',
                'white',
                'white',
                'white',
            ],
            borderColor: [
                '#23285A',
                '#23285A',
                '#23285A',
                '#23285A',
                '#555658',
            ],
            borderWidth: 15
        }]
    },
    options: {
        scales: {
            xAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 2,
                    suggestedMax: 12
                },
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Odds ratio'
                }
            }]
        },
        responsive: true,
        legend: {
            display: false,
        },
        annotation: {
            annotations: [{
                type: 'line',
                mode: 'horizontal',
                scaleID: 'y-axis-0',
                value: 1,
                borderColor: '#555658',
                borderWidth: 1,
                label: {
                    enabled: false,
                    content: 'Test label'
                }
            }]
        }
    }
});