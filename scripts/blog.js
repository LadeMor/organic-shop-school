const blogList = [
    {
        coverImage: "/assets/images/blog/blog1.png",
        date: "2024-9-8",
        views: 585,
        title: "5 reasons to love organic",
        textContent: "There are many reasons to love organic food and farming. We take a look at why organic is good for you and your family."
    },
    {
        coverImage: "/assets/images/blog/blog2.png",
        date: "2024-6-6",
        views: 820,
        title: "You’re the Apple for My Pie",
        textContent: "This year, we plan to bake a home-made apple pie, but we need the main ingredient: apples, of course!"
    },
    {
        coverImage: "/assets/images/blog/blog3.png",
        date: "2024-9-4",
        views: 923,
        title: "Best Christmas food gifts for 2024",
        textContent: "From quick bites to comforting teas, Christmas is the right time of the year to spoil your loved ones with food gifts."
    }
]

const blogListElement = document.querySelector(".blog-list");

function selectMonthName(monthIndex){
    switch(monthIndex){
        case 0:
            return "JAN";
        case 1:
            return "FEB";
        case 2:
            return "MAR";
        case 3:
            return "APR";
        case 4:
            return "MAY";
        case 5:
            return "JUN";
        case 6:
            return "JUL";
        case 7:
            return "AUG";
        case 8:
            return "SEP";
        case 9:
            return "OCT";
        case 10:
            return "NOV";
        case 11:
            return "DEC";
    }
}

blogList.forEach(product => {
    const newElement = document.createElement("div");

    newElement.classList.add("blog-item");
    newElement.innerHTML = `
                                <div class="blog-image-container">
                                    <img src="${product.coverImage}" alt="Blog thumbnail">
                                    <div class="blog-image-arrow-wrapper">
                                        <img src="/assets/icons/white_arrow_right.png" alt="Arrow">
                                    </div>
                                </div>
                                <div class="blog-item-info">
                                    <p>${new Date(product.date).getDate()}
                                     ${selectMonthName(new Date(product.date).getMonth())} 
                                     ${new Date(product.date).getFullYear()}</p>
                                    <span class="dot"></span>
                                    <img src="/assets/icons/eye.png" alt="Eye">
                                    <p>${product.views}</p>
                                </div>
                                <div class="blog-item-content">
                                    <h2>${product.title}</h2>
                                    <p>
                                       ${product.textContent}
                                    </p>
                                </div>
                            `

    blogListElement.appendChild(newElement);
})