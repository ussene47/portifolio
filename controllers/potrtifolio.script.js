// Menu no telemóvel
const botao = document.querySelector(".menu-btn");
const nav = document.getElementById("nav");

if (botao && nav) {
  botao.addEventListener("click", () => {
    const aberto = nav.classList.toggle("aberto");
    botao.setAttribute("aria-expanded", String(aberto));
    botao.textContent = aberto ? "Fechar" : "Menu";
  });

  nav.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      nav.classList.remove("aberto");
      botao.setAttribute("aria-expanded", "false");
      botao.textContent = "Menu";
    })
  );
}

// Os vídeos dos projectos só tocam quando estão visíveis
const reduzir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const videos = document.querySelectorAll(".demo video");

if (!reduzir && "IntersectionObserver" in window) {
  const obs = new IntersectionObserver((entradas) => {
    entradas.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) target.play().catch(() => {});
      else target.pause();
    });
  }, { threshold: 0.5 });
  videos.forEach((v) => obs.observe(v));
} else {
  videos.forEach((v) => v.setAttribute("controls", ""));
}

// Ano no rodapé
const ano = document.getElementById("ano");
if (ano) ano.textContent = new Date().getFullYear();
