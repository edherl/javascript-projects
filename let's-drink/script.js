let interval = null;

function birthday() {
  clearInterval(interval);

  let date = document.getElementById("date").value;

  if (new Date(date) < new Date()) {
    alert("Ops, selecione uma data válida.");
    return;
  }

  interval = setInterval(() => {
    let deadline = new Date(date).getTime();
    let now = new Date().getTime();
    let formated = (unit) => (unit < 10 ? "0" + unit : unit);

    let difference = deadline - now;

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    if (difference < 0) {
      clearInterval(interval);
      document.getElementById("content").innerHTML = "🍺 🎉 👯‍♂️";
    }

    document.getElementById("days").innerHTML = formated(days);
    document.getElementById("hours").innerHTML = formated(hours);
    document.getElementById("minutes").innerHTML = formated(minutes);
    document.getElementById("seconds").innerHTML = formated(seconds);
  }, 1000);
}
