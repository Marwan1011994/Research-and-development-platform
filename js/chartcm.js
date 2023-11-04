const ctx1 = document.getElementById('myChart1');
new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: ["المحطات المرشحة الكبري والصغرى","المحطات النقالى","المحطات الارتوازى"],
      datasets: [{
        label: 'ربع يونيو',
        data: [48779494,49721,15741105],
        backgroundColor: ["blue"],
        borderWidth: 1,
      },{
        label: 'ربع مارس',
        data: [45468073,159317,13444957],
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
            text: 'كميات المياه المنتجه من المحطات' + ` ` + `م3`,
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
  
  const ctx2 = document.getElementById('myChart2');
  new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: ["الشبه السائلة","الشبه الصلبه","الكلور الغاز","الكلور البودره"],
      datasets: [{
        label: 'ربع يونيو',
        data: [48779494,49721,15741105],
        backgroundColor: ["blue"],
        borderWidth: 1,
      },{
        label: 'ربع مارس',
        data: [45468073,159317,13444957],
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
            text: "استهلاك الشبه والكلور بالمحطات" + ` ` + `طن`,
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