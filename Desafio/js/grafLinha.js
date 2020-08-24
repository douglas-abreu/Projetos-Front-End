      var pontos = ["","","","",""];
      var laptops = [10,15,9,18,3];
      var headsets = [6,11,6,8,3];
      var monitors = [3,7,5,9,3];
      var phones = [1,2,3,2,1];
      var ctx = document.getElementById("area");
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: pontos,
          datasets: [
            {
              label: "Laptops",
              data: laptops,
              backgroundColor: 'rgb(255, 99, 132)',        
              fill: 1                     
            },
            {
              label: "Headsets",
              data: headsets,
              backgroundColor: 'rgb(54, 162, 235)',
              fill:  2
            },
            {
              label: "Monitors",
              data: monitors,
              backgroundColor: 'rgb(255, 205, 86)',
              fill: 3
            },
            {
              label: "Phones",
              data: phones,
              backgroundColor: 'rgb(50, 255, 130)',
            }
          ],
         
        }   
      });