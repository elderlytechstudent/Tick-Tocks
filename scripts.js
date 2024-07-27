document.addEventListener("DOMContentLoaded", () => {
    const menuItems = [
        { id: 1, category: "starters", name: "Garlic Bread", description: "Crispy garlic bread with butter", price: "$5" },
        { id: 2, category: "mains", name: "Grilled Chicken", description: "Juicy grilled chicken with herbs", price: "$15" },
        { id: 3, category: "desserts", name: "Chocolate Cake", description: "Rich chocolate cake with cream", price: "$7" },
        { id: 4, category: "drinks", name: "Lemonade", description: "Fresh lemonade with mint", price: "$3" },
        // More items...
    ];

    const menuContainer = document.getElementById('menuItems');

    function displayMenuItems(category) {
        menuContainer.innerHTML = '';
        const filteredItems = category === 'all' ? menuItems : menuItems.filter(item => item.category === category);
        filteredItems.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');
            menuItem.innerHTML = `
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p>${item.price}</p>
            `;
            menuContainer.appendChild(menuItem);
        });
    }

    window.filterMenu = (category) => {
        displayMenuItems(category);
    };

    // Initial display of all menu items
    displayMenuItems('all');

    document.getElementById('loyaltyForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for signing up for our loyalty program!');
        e.target.reset();
    });

    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Your message has been sent!');
        e.target.reset();
    });
});
