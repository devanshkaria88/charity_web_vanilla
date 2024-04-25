// hehe josu kaik karsu anu pn..

const charity_campaigns = [
  {
    name: "Adopt, Don't Shop",
    img: "../img/c1.png",
    description:
      "Promote the adoption of dogs from shelters and rescue organizations rather than purchasing from breeders or pet stores. Highlight the benefits of adopting a dog, such as saving a life, reducing overpopulation, and finding a loving companion.",
  },
  {
    name: "Senior Dog Adoption Drive",
    img: "../img/c2.png",
    description:
      "Focus on finding homes for senior dogs who often have a harder time getting adopted. Highlight the joys of adopting an older dog, such as their calm demeanor, already established habits, and the satisfaction of giving them a loving home in their twilight years.",
  },
  {
    name: "Foster Program Awareness",
    img: "../img/c3.png",
    description:
      "Encourage people to become foster caregivers for dogs in need. Highlight the flexibility and rewards of fostering, such as providing temporary care for dogs awaiting adoption, helping them transition to a home environment, and saving lives without a long-term commitment.",
  },
  {
    name: "Educational Outreach",
    img: "../img/c4.png",
    description:
      "Develop educational campaigns to raise awareness about responsible dog ownership, including topics such as proper nutrition, training, exercise, and healthcare. Provide resources and tips for both current and prospective dog owners to ensure the well-being of their pets.",
  },
  {
    name: "Spay and Neuter Initiative",
    img: "../img/c5.png",
    description:
      "Launch a campaign to promote spaying and neutering of dogs to help control the pet population and reduce the number of homeless animals. Offer low-cost or subsidized spay/neuter services for pet owners who may not be able to afford it otherwise.",
  },
  {
    name: "Emergency Relief Fund",
    img: "../img/c6.png",
    description:
      "Establish a fund to provide financial assistance to dog owners facing unexpected emergencies, such as medical emergencies or natural disasters. Encourage donations to support this fund and provide aid to dogs and their families during times of crisis.",
  },
  {
    name: "Community Events and Fundraisers",
    img: "../img/c7.png",
    description:
      "Organize community events such as dog walks, adoption fairs, or fundraising galas to engage with supporters, raise funds, and increase awareness about the organization's mission and programs.",
  },
  {
    name: "Therapy Dog Program",
    img: "../img/c8.png",
    description:
      "Create a program to train and certify dogs as therapy animals to provide comfort and companionship to people in hospitals, nursing homes, schools, and other settings. Highlight the positive impact that therapy dogs can have on the well-being of individuals in need.",
  },
  {
    name: "Dog Health and Wellness Campaign",
    img: "../img/c9.png",
    description:
      "Partner with veterinarians and pet experts to provide educational resources and promote the importance of preventive care, vaccinations, regular check-ups, and overall wellness for dogs of all ages.",
  },
  {
    name: "Celebrity and Influencer Partnerships",
    img: "../img/c10.png",
    description:
      "Collaborate with celebrities, influencers, and public figures who are passionate about animal welfare to amplify your message, reach a broader audience, and inspire action and support for the cause.",
  },
];

function generateCampaigns() {
  charity_campaigns.forEach((element) => {
    document.write(`<div class="campaign-tile">
    <div class="campagin-tile-img">
      <img src="${element.img}" alt="" class="campagin-img">
    </div>
    <div class="campaign-tile-details-container">
      <h5>
      ${element.name}
      </h5>
      <p class="campagin-details">
      ${element.description}
      </p>
      <a href="../pages/login.html">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <p class="text-button">
          Learn more
        </p>
        <div class="outline-cta">
          Donate Now
        </div>
      </div></a>
    </div>
  </div>`);
  });
}

generateCampaigns();
