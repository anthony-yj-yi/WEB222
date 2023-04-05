const { reviewData } = window;
console.log(reviewData);

function sortReviews() {
    reviewData.sort((a, b) => (a.date < b.date) ? 1 : -1);
}

// Create a single card (div) based on given review.
function createReviewCard(review) {
    const card = document.createElement('div');
    card.classList.add("card");
    card.onclick = function () {
        console.log(review);
    }

    const cardImg = document.createElement('img');
    cardImg.src = review.imageURL;
    cardImg.classList.add("card-image");
    cardImg.alt = "Image Not Found";
    card.appendChild(cardImg);
    
    const container = document.createElement('div');
    container.classList.add("container");
    let name = document.createElement('h6');
    name.innerHTML = review.name;
    let date = document.createElement('date');
    date.innerHTML = review.date;
    let rating = document.createElement('div');
    for (let i = 0; i < 5; i++) {
        let star = document.createElement('span');
        console.log("i is " + i + " review.rating is " + review.rating);
        if (i < review.rating) {
            star.classList.add('fa');
            star.classList.add('fa-star');
            star.classList.add('checked');
        }
        else {
            star.classList.add('fa');
            star.classList.add('fa-star');
        }
        rating.appendChild(star);
    }
    let comment = document.createElement('p');
    comment.innerHTML = review.comment;

    container.appendChild(name);
    container.appendChild(rating);
    container.appendChild(date);
    container.appendChild(comment);
    card.appendChild(container);

    return card;
}

function createReviewTable() {
    let reviewTable = document.getElementById("reviewTable");
    reviewTable.innerHTML="";
    reviewTable.classList.add('grid-table');
    for (let i = 0; i < reviewData.length; i++) {
        let card = createReviewCard(reviewData[i]);
        reviewTable.appendChild(card);
    }
}

function updateTable() {
    let newName = document.getElementById("newFirstName").value + ' ' + document.getElementById("newLastName").value;
    let newDate = new Date();
    let newRating = document.getElementById("newRating").value;
    let newComment = document.getElementById("newComment").value;
    let newPicture = document.getElementById("newPicture").value;
    if (newPicture == 0) {
        newPicture = defaultPicURL;
    }
    else if (newPicture == 1) {
        newPicture = profilePicURL1;
    }
    else if (newPicture == 2) {
        newPicture = profilePicURL2;
    }
    else if (newPicture == 3) {
        newPicture = profilePicURL3;
    }
    let newReview = {
        name: newName,
        date: newDate,
        rating: newRating,
        comment: newComment,
        imageURL: newPicture
    };
    reviewData.push(newReview);
    sortReviews();
    createReviewTable();
}

window.onload = function() {
    sortReviews();
    createReviewTable();
}