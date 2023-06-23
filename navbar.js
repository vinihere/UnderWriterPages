
const sidebarLinks = document.querySelectorAll('.app-sidebar a');

sidebarLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();

    // Remove 'selected' class from all links
    sidebarLinks.forEach(link => {
      link.classList.remove('selected');
    });

    // Add 'selected' class to the clicked link
    this.classList.add('selected');
  });
});
