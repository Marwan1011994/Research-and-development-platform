
Chart.defaults.color = '#40128B';


// كميات المياه المنتجه من جميع المحطات
const allStations = document.getElementById('myChart1');
new Chart(allStations, {
    type: 'bar',
    data: {
      labels: ['متوسط المحطات المرشحة الكبري','متوسط المحطات المرشحة الصغري والنقالى','متوسط المحطات الارتوازى'],
      datasets: [{
        label: 'متوسط كمية المياه المنتجه م3/يوم',
        data: [442403,64122,148068],
        backgroundColor: [
          'blue'],
        borderWidth: 1
      }]
    },
    options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'متوسط انتاج المحطات' +" "+"الربع الثالث",
          }
        },
        animations: {
          radius: {
            duration: 400,
            easing: 'linear',
            loop: (context) => context.active
          }
        },
        hoverRadius: 12,
        hoverBackgroundColor: '#ff6000',
        interaction: {
          mode: 'nearest',
          intersect: false,
          axis: 'x'
        },
      },
  });


// نسبة المياه المنتجه من جميع المحطات
const allStationsprcent = document.getElementById('myChart2');
new Chart(allStationsprcent, {
    type: 'pie',
    data: {
      labels: ['متوسط المحطات المرشحة الكبري','متوسط المحطات المرشحة الصغري والنقالى','متوسط المحطات الارتوازى'],
      datasets: [{
        label: "المياه المنتجه %",
        data: [67.58,9.80,22.62],
        borderWidth: 3
      }]
    },
    options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
          title: {
            display: true,
            text: 'النسبة المئوية لانتاج المحطات'+" "+"الربع الثالث",
          }
        },
        animations: {
          radius: {
            duration: 400,
            easing: 'linear',
            loop: (context) => context.active
          }
        },
        hoverRadius: 12,
        hoverBackgroundColor: '#fff0f9',
        interaction: {
          mode: 'nearest',
          intersect: false,
          axis: 'x'
        },
      },
  });


//كمية المياه المنتجه من الافرع والمباعه
const branches = document.getElementById('myChart3');
new Chart(branches, {
    type: 'bar',
    data: {
      labels: ['بنها','كفر شكر','طوخ','قها','قليوب','شبين القناطر','القناطر الخيرية','الخانكة'],
      datasets: [{
        label: 'كمية المياه المنتجه م3',
        data: [12020491,3220825,9675103,527541,6608224,8608224,8781248,11113776],
        backgroundColor: ["blue"],
        borderWidth: 1
      },{
        label: 'كمية المياه المباعة م3',
        data: [8847946,2499940,7350848,427134,5888213,6135985,4057176,3977151],
        backgroundColor: ["green"],
        borderWidth: 1,
      }]
    },
    options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'متوسط كمية المياه المنتجه والمباعة' +" "+"الربع الثالث",
          }
        },
        animations: {
          radius: {
            duration: 400,
            easing: 'linear',
            loop: (context) => context.active
          }
        },
        hoverRadius: 12,
        hoverBackgroundColor: '#fff',
        interaction: {
          mode: 'nearest',
          intersect: false,
          axis: 'x'
        },
      },
  });


//الفاقد 
const waterLoss = document.getElementById('myChart4');
new Chart(waterLoss, {
    type: 'bar',
    data: {
      labels: ['بنها','كفر شكر','طوخ','قها','قليوب','شبين القناطر','القناطر الخيرية','الخانكة'],
      datasets: [{
        label: ["الفاقد %"],
        data: [26,22,24,19,12,29,54,64],
        backgroundColor: ["#068DA9"],
        borderWidth: 1
      }]
    },
    options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'متوسط فاقد الفروع' +" "+"الربع الثالث",
          }
        },
        animations: {
          radius: {
            duration: 400,
            easing: 'linear',
            loop: (context) => context.active
          }
        },
        hoverRadius: 12,
        hoverBackgroundColor: '#0000ff',
        interaction: {
          mode: 'nearest',
          intersect: false,
          axis: 'x'
        },
      },
  });

// المحطات المرشحة الكبري
const bigStations = document.getElementById('myChart5');
new Chart(bigStations, {
    type: 'bar',
    data: {
      labels: ['اتريب المرشحه', 'العبادله المرشحه', 'كوم اشفين المرشحه', 'شبين القناطر المرشحه', 'القناطر الخيرية المرشحه', 'ابو زعبل المرشحه', 'سرياقوس المرشحه'],
      datasets: [{
        label: 'متوسط كمية المياه المنتجه م3/يوم',
        data: [55213, 93110, 79096, 79469, 54199, 42011,48305],
        backgroundColor: [
          'blue'],
        borderWidth: 1
      }]
    },
    options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'المحطات المرشحة الكبري'+" "+"الربع الثالث",
          }
        },
        animations: {
          radius: {
            duration: 400,
            easing: 'linear',
            loop: (context) => context.active
          }
        },
        hoverRadius: 12,
        hoverBackgroundColor: '#9E4784',
        interaction: {
          mode: 'nearest',
          intersect: false,
          axis: 'x'
        },
      },
  });

//كمية المياه المنتجه من الافرع والمباعه
const clPower = document.getElementById('myChart6');
new Chart(clPower, {
    type: 'bar',
    data: {
      labels: ['اتريب المرشحه', 'العبادله المرشحه', 'كوم اشفين المرشحه', 'شبين القناطر المرشحه', 'القناطر الخيرية المرشحه', 'ابو زعبل المرشحه', 'سرياقوس المرشحه'],
      datasets: [{
        label: 'متوسط استهلاك الكلور جم/م3/يوم',
        data: [122491,32025,97513,52441,668224,86224,87148,111776],
        backgroundColor: ["#E14D2A"],
        borderWidth: 1
      },{
        label: 'متوسط استهلاك الشبة جم/م3/يوم',
        data: [8846,2440,7348,4534,5813,6185,4076,3951],
        backgroundColor: ["#CD104D"],
        borderWidth: 1,
      },{
        label: 'متوسط استهلاك الكهرباء ك.و/م3/يوم',
        data: [884946,249940,75048,427134,588823,613585,405776,377151],
        backgroundColor: ["#9C2C77"],
        borderWidth: 1,
      }]
    },
    options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'متوسط استهلاك الشبة والكلور والكهرباء للمحطات المرشحة الكبرى' +" "+"الربع الثالث",
          }
        },
        animations: {
          radius: {
            duration: 400,
            easing: 'linear',
            loop: (context) => context.active
          }
        },
        hoverRadius: 12,
        hoverBackgroundColor: '#fff',
        interaction: {
          mode: 'nearest',
          intersect: false,
          axis: 'x'
        },
      },
  });

//كمية المياه المنتجه من الافرع والمباعه
// المحطات المرشحة الكبري
const bigStations2 = document.getElementById('myChart66');
new Chart(bigStations2, {
    type: 'bar',
    data: {
      labels: ['اتريب المرشحه', 'العبادله المرشحه', 'كوم اشفين المرشحه', 'شبين القناطر المرشحه', 'القناطر الخيرية المرشحه', 'ابو زعبل المرشحه', 'سرياقوس المرشحه'],
      datasets: [{
        label: 'متوسط كمية المياه المنتجه م3/يوم',
        data: [55213, 93110, 79096, 79469, 54199, 42011,48305],
        backgroundColor: [
          'blue'],
        borderWidth: 1
      }]
    },
    options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'المحطات المرشحة الكبري'+" "+"الربع الثالث",
          }
        },
        animations: {
          radius: {
            duration: 400,
            easing: 'linear',
            loop: (context) => context.active
          }
        },
        hoverRadius: 12,
        hoverBackgroundColor: '#9E4784',
        interaction: {
          mode: 'nearest',
          intersect: false,
          axis: 'x'
        },
      },
  });





















