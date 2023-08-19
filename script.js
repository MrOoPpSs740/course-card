const courseData = [
  {
      title: "Web Development",
      description: "Learn the basics of web development using HTML, CSS, and JavaScript.",
      price: "$49.99",
      image: "https://picsum.photos/200/300",
  },
  {
      title: "Design Analysys Algo",
      description: "Master the fundamentals of JavaScript programming.",
      price: "$39.99",
      image: "https://picsum.photos/200/300",
  },
  {
      title: "Java",
      description: "Master the fundamentals of Multimedia.",
      price: "$39.99",
      image: "https://picsum.photos/200/300",
  },
  {
      title: "Multimedia",
      description: "Master the fundamentals of Multimedia.",
      price: "Rs 39.99",
      image: "https://picsum.photos/200/300",
  },
];

const courseContainer = document.querySelector('.course-container');

courseData.forEach(course => {
  const courseCard = document.createElement('div');
  courseCard.classList.add('course-card');

  courseCard.innerHTML = `
    <img class="course-image" src="${course.image}" alt="Course Image">
    <div class="course-details">
      <h2 class="course-title">${course.title}</h2>
      <p class="course-description">${course.description}</p>
      <p class="course-price">Price: ${course.price}</p>
      <div class="course-actions">
          <button class="add-to-cart">Add to Cart</button>
          <button class="buy-now">Buy Now</button>
      </div>
    </div>
  `;

  courseContainer.appendChild(courseCard);
});

