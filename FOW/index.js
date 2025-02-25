document.addEventListener('DOMContentLoaded', () => {
    const dishes = [
        { name: 'Margherita Pizza', price: 8.99, image: 'https://media.istockphoto.com/id/1280329631/photo/italian-pizza-margherita-with-tomatoes-and-mozzarella-cheese-on-wooden-cutting-board-close-up.jpg?s=612x612&w=0&k=20&c=CFDDjavIC5l8Zska16UZRZDXDwd47fwmRsUNzY0Ym6o=' },
        { name: 'Pepperoni Pizza', price: 9.99, image: 'https://media.istockphoto.com/id/521403691/photo/hot-homemade-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=PaISuuHcJWTEVoDKNnxaHy7L2BTUkyYZ06hYgzXmTbo=' },
        { name: 'BBQ Chicken Pizza', price: 10.99, image: 'https://sallysbakingaddiction.com/wp-content/uploads/2014/03/barbecue-bbq-chicken-pizza-3.jpg' },
        { name: 'Veggie Pizza', price: 9.49, image: 'https://www.allrecipes.com/thmb/jy6BvN7uphHoqMTbQw-UJO-hc3k=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/AR-15022-veggie-pizza-DDMFS-4x3-hero-3dabf0783ef544eeaa23bdf28b48b178.jpg' },
        { name: 'Hawaiian Pizza', price: 10.49, image: 'https://sallysbakingaddiction.com/wp-content/uploads/2014/08/It-doesnt-get-much-better-than-Homemade-Hawaiian-Pizza.-Tropical-paradise-for-dinner-2.jpg' },
        { name: 'Cheeseburger', price: 7.99, image: 'https://www.recipetineats.com/tachyon/2022/08/Stack-of-cheeseburgers.jpg?resize=900%2C1125&zoom=0.72' },
        { name: 'Bacon Burger', price: 8.99, image: 'https://www.simplyrecipes.com/thmb/e9M3MopgDXNXPc4i8SBLIh8cXoE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Bacon-Cheeseburger-LEAD-6-120669f7fea44ae4a6a8128bd308d724.jpg' },
        { name: 'Chicken Sandwich', price: 7.49, image: 'https://thefamilydinnerproject.org/wp-content/uploads/2014/07/Easy-grilled-chicken-sandwich-633x326.jpg' },
        { name: 'Grilled Cheese', price: 5.99, image: 'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_487/k%2FPhoto%2FRecipes%2F03-2024-grilled-cheese-sandwich%2FGrilled-Cheese-Sandwich-34.jpg' },
        { name: 'Caesar Salad', price: 6.99, image: 'https://natashaskitchen.com/wp-content/uploads/2019/01/Caesar-Salad-Recipe-3-600x900.jpg' },
        { name: 'Greek Salad', price: 7.49, image: 'https://cdn.loveandlemons.com/wp-content/uploads/2019/07/greek-salad-2-786x1024.jpg' },
        { name: 'Garden Salad', price: 6.49, image: 'https://www.recipetineats.com/tachyon/2021/08/Garden-Salad_48.jpg?resize=900%2C1260&zoom=0.72' },
        { name: 'Spaghetti Bolognese', price: 11.99, image: 'https://www.recipetineats.com/tachyon/2018/07/Spaghetti-Bolognese.jpg?resize=900%2C1260&zoom=0.72' },
        { name: 'Fettuccine Alfredo', price: 12.49, image: 'https://www.allrecipes.com/thmb/uhyjbhMrDwnrSC24augjHmfu-Sg=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/AR-23431-to-die-for-fettuccine-alfredo-DDMFS-beauty-3x4-b64d36c7ff314cb39774e261c5b18352.jpg' },
        { name: 'Chicken Parmesan', price: 13.99, image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F03%2F19%2F223042-Chicken-Parmesan-mfs_003.jpg&q=60&c=sc&poi=auto&orient=true&h=512' },
        { name: 'Fish and Chips', price: 10.99, image: 'https://www.allrecipes.com/thmb/t6pfxifuRU5r38-ExsN9GJUe8QU=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/AR-16580-Classic-Fish-and-chips-Beauty-4x3-9ca78f2929a64d48ae052008d02358e2.jpg' },
        { name: 'Shrimp Tacos', price: 9.99, image: 'https://www.allrecipes.com/thmb/xsfIZihe7u1o8Lg7iA3T6sbeKec=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/531004-041dd37dc9d644ffb795c418342545bc.jpg' },
        { name: 'Beef Tacos', price: 8.99, image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2023%2F01%2F12%2F65338-Birria-de-Res-Tacos-ddmfs-4x3-2563.jpg&q=60&c=sc&poi=auto&orient=true&h=512.jpg' },
        { name: 'Chicken Tacos', price: 8.49, image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2023%2F02%2F20%2F242342-fiesta-slow-cooker-shredded-chicken-tacos-ddmfs-3X2-0902.jpg&q=60&c=sc&poi=auto&orient=true&h=512.jpg' },
        { name: 'Veggie Tacos', price: 7.99, image: 'https://www.allrecipes.com/thmb/FE4dF3kQ1nQDjtWEru8S3omy9JI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/5270522-c287a83263624ebb9995184c8b20564d.jpg' },
        { name: 'Chocolate Cake', price: 5.49, image: 'https://www.allrecipes.com/thmb/q-TXkyHEAm5zdBWizBKdiq3y2JU=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/708879-One-Bowl-Chocolate-Cake-III-Dianne-4x3-0b686cb5d1d647cabefd86545b1bccdf.jpg' },
        { name: 'Cheesecake', price: 5.99, image: 'https://www.allrecipes.com/thmb/KRpnD9KRKWPM2QExazBlOu9TEeE=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ALR-13477-double-layer-pumpkin-cheesecake-VAT-4x3-904eb668e0c3482bb15d79730307cde3.jpg' },
        { name: 'Apple Pie', price: 4.99, image: 'https://www.allrecipes.com/thmb/RtfdgcA_JvQFEFUXaUYWk-pc9Io=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/965259OldFashionedApplePie4x3-683dca9c4e2843beb91dc5463c784cbf.jpg' },
        { name: 'Ice Cream Sundae', price: 4.49, image: 'https://www.allrecipes.com/thmb/mmhERy4X33bGNohyLBfmD_rNnvs=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/spaghetti-ice-cream-sundae-7506833fabeveryday4x3-e1a3de53846d40a4ae93d31252c73dae.jpg' },
        { name: 'Brownie', price: 3.99, image: 'https://www.allrecipes.com/thmb/GkhpRQvgC7nmTQzjwS5-6N5fn_A=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/77084-d1da576670d14b77839abe0b53917e95.jpg' }
    ];

    const menuSection = document.getElementById('menu');

    dishes.forEach(dish => {
        const dishElement = document.createElement('div');
        dishElement.classList.add('bg-white', 'p-4', 'rounded-lg', 'shadow-md', 'hover:shadow-lg', 'transition', 'duration-200');
        dishElement.innerHTML = `
            <img src="${dish.image}" alt="${dish.name}" class="w-full h-32 object-cover rounded-t-lg">
            <div class="p-4">
                <h3 class="text-xl font-semibold">${dish.name}</h3>
                <p class="mt-2 text-gray-600">$${dish.price.toFixed(2)}</p>
                <button class="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-200">Add to Cart</button>
            </div>
        `;
        menuSection.appendChild(dishElement);
    });
});
