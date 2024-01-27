document.querySelectorAll('.form-group').forEach((form) => {
    if (form.children.length === 5) {
        const randomChildIndex = Math.floor(Math.random() * 5)
        Array.from(form.children[0].children)[randomChildIndex].click()
    }
})
