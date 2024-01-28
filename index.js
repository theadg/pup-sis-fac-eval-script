// Select and loop through each .form-groups
document.querySelectorAll('.form-group').forEach((form) => {
    // Select only the only forms with the 5 choices
    if (form.children.length === 5) {
        // Generate random Index or set it to a number from 0-4
        const randomChildIndex = Math.floor(Math.random() * 5)
        // Click the label or input button
        Array.from(form.children[randomChildIndex].children)[1].click()
    }
})
