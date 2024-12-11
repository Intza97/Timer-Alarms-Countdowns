jQuery(function ($) {
    const months = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    const wewkdays = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ];
  
    const countdownBox = document.querySelector(".countdown");
    const dateItems = document.querySelectorAll(".box .num");
    let futureDate = new Date(2025, 6, 23, 23, 12); // Cambié 25h a 23h (máximo válido)
  
    const year = futureDate.getFullYear();
    const hours = futureDate.getHours();
    const date = futureDate.getDate();
    let month = futureDate.getMonth();
    month = months[month];
    const weekday = wewkdays[futureDate.getDay()]; // Cambié getDate() a getDay()
  
    const futureTime = futureDate.getTime();
  
    function timeRemaining() {
      const today = new Date().getTime();
      const t = futureTime - today;
  
      const oneDay = 24 * 60 * 60 * 1000; // Corregido
      const oneHour = 60 * 60 * 1000; // Corregido
      const oneMinute = 60 * 1000; // Corregido
  
      let days = Math.floor(t / oneDay);
      let hours = Math.floor((t % oneDay) / oneHour);
      let minutes = Math.floor((t % oneHour) / oneMinute);
      let seconds = Math.floor((t % oneMinute) / 1000);
  
      const values = [days, hours, minutes, seconds];
      function addZero(item) {
        if (item < 10) {
          return (item = `0${item}`);
        }
        return item;
      }
      dateItems.forEach(function (item, index) {
        item.innerHTML = addZero(values[index]);
      });
  
      if (t < 0) {
        clearInterval(countdown);
      }
    }
  
    let countdown = setInterval(timeRemaining, 1000);
    timeRemaining();
  });
  