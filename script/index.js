

  
//  skills bo'limi uchun
window.addEventListener("scroll", () => {
        const skillsSection = document.querySelector(".skills");
        const sectionTop = skillsSection.offsetTop;
        const sectionHeight = skillsSection.offsetHeight;
        const scrollY = window.scrollY + window.innerHeight;

        if (scrollY > sectionTop + sectionHeight / 4) {
            document.querySelectorAll(".progress").forEach(bar => {
                const percent = bar.getAttribute("data-percentage");
                bar.style.width = percent + "%";
                bar.textContent = percent + "%";
            });
        }
    });