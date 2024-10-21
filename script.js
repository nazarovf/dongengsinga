document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const siteNavigation = document.querySelector('.site-navigation');
    const navItems = document.querySelectorAll('#navigation li');

    menuToggle.addEventListener('click', () => {
        const isActive = siteNavigation.classList.toggle('active');

        if (isActive) {
            showItems(); // Show items when active
        } else {
            hideItems(); // Hide items when not active
        }
    });

    // Function to show items one by one
    const showItems = () => {
        navItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('show'); // Show item
            }, index * 300); // Incremental delay for showing (300ms)
        });
    };

    // Function to hide items one by one
    const hideItems = () => {
        // First, ensure all items are hidden
        navItems.forEach((item) => {
            item.classList.remove('show'); // Immediately remove show class to start fresh
        });

        // Then hide them one by one
        navItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.remove('show'); // Hide item
            }, index * 300); // Incremental delay for hiding (300ms)
        });
    };
});
