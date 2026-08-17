let btns = Array.from(document.querySelectorAll(".accordion-trigger"))
if (btns.length > 0) {
    let panels = Array.from(document.querySelectorAll(".accordion-panel"))

    btns.forEach((btn) => {
        btn.addEventListener("click", () => {
            if (btn.classList.contains("active")) {
                reset()
                return
            }
            reset()
            open(btn)
        })
    })

    init()

    function init() {
        open(btns[0])
    }

    function open(btn) {
        btn.classList.add("active")
        btn.setAttribute("aria-expanded", "true")

        let panel = document.getElementById(btn.getAttribute("aria-controls"))
        panel.classList.add("expanded")
        panel.removeAttribute("inert")
    }

    function reset() {
        panels.forEach((panel) => {
            panel.classList.remove("expanded")
            panel.setAttribute("inert", "")
        })
        btns.forEach((btn) => {
            btn.classList.remove("active")
            btn.setAttribute("aria-expanded", "false")
        })
    }
}