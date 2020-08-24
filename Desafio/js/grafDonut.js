var ctx = document.getElementById("donut");
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Eletronics","Furniture","Toys"],
        datasets: [
            {
                data:[6,10,4],
                backgroundColor:["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 205, 86)"]
            }]
    }
});