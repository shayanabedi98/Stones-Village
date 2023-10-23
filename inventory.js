document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        item.addEventListener('click', (e) => {
            const expandedView = document.createElement('div');
            expandedView.classList.add('expanded-view');

            const imgSrc = getComputedStyle(e.target).backgroundImage.match(/url\("([^"]+)"\)/)[1];
            const imgElem = document.createElement('img');
            imgElem.src = imgSrc;
            expandedView.appendChild(imgElem);

            expandedView.addEventListener('click', () => {
                expandedView.remove();
            });

            document.body.appendChild(expandedView);
        });
    });
});