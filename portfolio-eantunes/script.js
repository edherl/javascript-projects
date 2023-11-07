// Scroll

ScrollReveal({
  reset: true,
  distance: "15px",
  duration: 2000,
});

ScrollReveal().reveal(".header-container", { delay: 100, origin: "top" });
ScrollReveal().reveal(".card, .details, .infos, .i_2, .c_2", {
  delay: 100,
  origin: "left",
});
ScrollReveal().reveal(".i_1, .c_1, .quote", { delay: 100, origin: "right" });
ScrollReveal().reveal(".projects", { delay: 100, origin: "bottom" });

// API Quotes

const text = document.querySelector(".text");
const author = document.querySelector(".author");

window.addEventListener("load", async () => {
  try {
    const response = await fetch("https://type.fit/api/quotes");
    const data = await response.json();

    let { text: quoteText, author: quoteAuthor } =
      data[Math.floor(Math.random() * data.length)];
    text.textContent = `"${quoteText}"`;

    if (quoteAuthor.endsWith(", type.fit")) {
      quoteAuthor = quoteAuthor.replace(", type.fit", "");
    }
    author.textContent = `- ${quoteAuthor}`;
  } catch (error) {
    console.error(error);
  }
});

// Light Mode

const check = document.getElementById("check");

check.addEventListener("change", () => {
  document.body.classList.toggle("light");
});
