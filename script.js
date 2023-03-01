// Navigation Bar
const menuIcon = document.querySelector(".menu-icon");
const navList = document.querySelector("nav ul");

menuIcon.addEventListener("click", () => {
  navList.classList.toggle("show");
});

// Recent Video
const videoPlayer = document.querySelector("#video-player");
const video = videoPlayer.querySelector("iframe");

const recentVideo = {
  title: "New Movie Release",
  description: "Check out our latest movie release!",
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
};

function displayRecentVideo() {
  const title = document.createElement("h2");
  title.textContent = recentVideo.title;

  const description = document.createElement("p");
  description.textContent = recentVideo.description;

  video.setAttribute("src", recentVideo.videoUrl);

  videoPlayer.appendChild(title);
  videoPlayer.appendChild(video);
  videoPlayer.appendChild(description);
}

displayRecentVideo();

// Footer
const footerSections = document.querySelectorAll(".footer-section");

const aboutLinks = [
  { text: "Our Story", href: "#" },
  { text: "Team", href: "#" },
  { text: "Careers", href: "#" }
];

const eventsLinks = [
  { text: "Upcoming Events", href: "#" },
  { text: "Past Events", href: "#" },
  { text: "Submit an Event", href: "#" }
];

const blogLinks = [
  { text: "Latest Posts", href: "#" },
  { text: "Categories", href: "#" },
  { text: "Write for Us", href: "#" }
];

const footerData = [
  { title: "About Us", links: aboutLinks },
  { title: "Events", links: eventsLinks },
  { title: "Blog", links: blogLinks }
];

function displayFooter() {
  footerSections.forEach((section, index) => {
    const title = document.createElement("h3");
    title.textContent = footerData[index].title;
    section.appendChild(title);

    const list = document.createElement("ul");
    footerData[index].links.forEach(link => {
      const listItem = document.createElement("li");
      const linkTag = document.createElement("a");
      linkTag.textContent = link.text;
      linkTag.setAttribute("href", link.href);
      listItem.appendChild(linkTag);
      list.appendChild(listItem);
    });
    section.appendChild(list);
  });
}

displayFooter();



/* FIREBASE */

