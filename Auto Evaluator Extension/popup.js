const button = document.querySelector('#evaluate'); 

button.addEventListener('click', function() {
    document.querySelectorAll('.form-group').forEach(form => {
        if (form.children.length === 5) {
            const randomChildIndex = Math.floor(Math.random() * 5);
            Array.from(form.children[randomChildIndex].children)[1].click();
        }
    });
});
