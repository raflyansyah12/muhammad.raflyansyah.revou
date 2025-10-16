document.addEventListener("DOMContentLoaded", function () {
  // tanggal footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // tombol lihat projek
  const viewBtn = document.getElementById("viewProjects");
  if (viewBtn) {
    viewBtn.addEventListener("click", () => {
      const el = document.getElementById("projects");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  // form kontak (tidak mengirim ke server, hanya demo)
  const form = document.getElementById("contactForm");
  const formMsg = document.getElementById("formMsg");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = form.querySelector('[name="name"]').value.trim();
      const email = form.querySelector('[name="email"]').value.trim();
      const message = form.querySelector('[name="message"]').value.trim();

      if (!name || !email || !message) {
        if (formMsg) formMsg.textContent = "Isi semua kolom terlebih dahulu.";
        return;
      }

      // simulasi sukses
      form.reset();
      if (formMsg) {
        formMsg.textContent = "Terima kasih! Pesanmu sudah terkirim.";
        setTimeout(() => (formMsg.textContent = ""), 5000);
      }
    });
  }

  // toggle nav mobile
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      mainNav.classList.toggle("show");
    });

    // tutup menu setelah klik link (mobile)
    mainNav.addEventListener("click", (ev) => {
      if (ev.target.tagName === "A") mainNav.classList.remove("show");
    });
  }
});
