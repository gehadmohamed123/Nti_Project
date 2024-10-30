// our work
// filter images
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const filterItems = document.querySelectorAll('.filter-item');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filterValue = button.getAttribute('data-filter');
  
        filterItems.forEach(item => {
          const itemCategories = item.getAttribute('data-category').split(' ');
          
          if (filterValue === 'all' || itemCategories.includes(filterValue)) {
            item.style.display = 'block'; 
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  });

//hover for images   
  document.addEventListener('DOMContentLoaded', function () {
    const imageContainers = document.querySelectorAll('.filter-item');
  
    imageContainers.forEach(container => {
      const overlay = container.querySelector('.overlay');
      
      container.addEventListener('mouseenter', () => {
        overlay.style.opacity = '1';
      });
  
      container.addEventListener('mouseleave', () => {
        overlay.style.opacity = '0';
      });
    });
  });
  
//   hover to show paragraph
function showAdditionalText(image) {
    const overlay = image.nextElementSibling; // Get the overlay div
    const hr = overlay.querySelector('.additional-hr'); // Get the <hr> element
  
    // Create a new paragraph if it doesn't already exist
    if (!overlay.querySelector('.hover-paragraph')) {
      const paragraph = document.createElement('p');
      paragraph.className = 'hover-paragraph';
      paragraph.textContent = 'Lorem ipsum dolor sit amet consectetur Officiis ullam autem nesciunt reprehenderit fugiat voluptate laboriosam maxime';
      overlay.insertBefore(paragraph, hr); // Insert the new paragraph before the <hr>
      hr.style.display = 'none'; // Hide the <hr> when the paragraph appears
    }
  }
  
  function hideAdditionalText(image) {
    const overlay = image.nextElementSibling; // Get the overlay div
    const paragraph = overlay.querySelector('.hover-paragraph'); // Get the paragraph
  
    if (paragraph) {
      overlay.removeChild(paragraph); // Remove the paragraph
      const hr = overlay.querySelector('.additional-hr'); // Get the <hr> element again
      hr.style.display = 'block'; // Show the <hr> again
    }
  }
//   buttons active
function toggleActive(button) {
    const buttons = document.querySelectorAll('.btn-group .btn'); // Select all buttons in the group
  
    buttons.forEach(btn => {
      if (btn === button) {
        btn.classList.add('active'); // Add active class to the clicked button
        btn.classList.remove('btn-light'); // Remove the light class
        btn.style.backgroundColor = '#0d6efd'; // Change background color to primary
        btn.style.color = 'white'; // Change text color to white
      } else {
        btn.classList.remove('active'); // Remove active class from other buttons
        btn.classList.add('btn-light'); // Add light class back to other buttons
        btn.style.backgroundColor = 'white'; // Change background color to white
        btn.style.color = '#0d6efd'; // Change text color to primary
      }
    });
  }

  
  
  