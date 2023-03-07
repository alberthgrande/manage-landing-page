const radio = document.querySelectorAll(`input[type="radio"]`);
const profile = document.querySelector(".profile");
const name = document.querySelector(".name");
const comment = document.querySelector(".comment");
const src = document.createAttribute("src");
const testimonials = [
  {
    profile: "./images/avatar-anisha.png",
    name: "Anisha Li",
    comment: `“Manage has supercharged our team’s workflow. The ability to maintain
        visibility on larger milestones at all times keeps everyone motivated.”`,
  },
  {
    profile: "./images/avatar-ali.png",
    name: "Ali Bravo",
    comment: `“We have been able to cancel so many other subscriptions since using
        Manage. There is no more cross-channel confusion and everyone is much
        more focused.”`,
  },
  {
    profile: "./images/avatar-richard.png",
    name: "Richard Watts",
    comment: `“Manage allows us to provide structure and process. It keeps us
        organized and focused. I can’t stop recommending them to everyone I talk
        to!”`,
  },
  {
    profile: "./images/avatar-shanai.png",
    name: "Shanai Gough",
    comment: `“Their software allows us to track, manage and collaborate on our
        projects from anywhere. It keeps the whole team in-sync without being
        intrusive.”`,
  },
];

radio.forEach((items) => {
  items.addEventListener("click", (e) => {
    let testimony = e.target;
    if (testimony.id === "Anisha") {
      src.value = testimonials[0].profile;
      profile.setAttributeNode(src);
      name.innerHTML = testimonials[0].name;
      comment.innerHTML = testimonials[0].comment;
    } else if (testimony.id === "Ali") {
      src.value = testimonials[1].profile;
      profile.setAttributeNode(src);
      name.innerHTML = testimonials[1].name;
      comment.innerHTML = testimonials[1].comment;
    } else if (testimony.id === "Richard") {
      src.value = testimonials[2].profile;
      profile.setAttributeNode(src);
      name.innerHTML = testimonials[2].name;
      comment.innerHTML = testimonials[2].comment;
    } else if (testimony.id === "Shanai") {
      src.value = testimonials[3].profile;
      profile.setAttributeNode(src);
      name.innerHTML = testimonials[3].name;
      comment.innerHTML = testimonials[3].comment;
    }
  });
});
