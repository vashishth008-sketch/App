const astrologySample = `
Sun in Taurus in the 10th house channels steady leadership energy into your professional life.
Moon in Libra in the 3rd encourages compassionate communication and balanced relationships with siblings and peers.
Rahu in Pisces invites intuitive creativity—schedule deep work on Thursdays for maximum flow.
`;

document.getElementById("astrology-sample").textContent = astrologySample.trim();

document.getElementById("year").textContent = new Date().getFullYear();

const astrologyInterpretations = [
  {
    theme: "Career & Purpose",
    message:
      "Your chart emphasizes dharma-driven leadership. Focus on collaborative roles where you mentor others and build long-term value."
  },
  {
    theme: "Relationships",
    message:
      "Venus influences your 7th house, indicating harmony through shared rituals. Create weekly gratitude practices with loved ones."
  },
  {
    theme: "Wellness",
    message:
      "Planetary alignments suggest grounding routines. Begin mornings with pranayama and avoid major decisions during waning moons."
  },
  {
    theme: "Spiritual Growth",
    message:
      "Jupiter's transit activates transformative experiences. Schedule satsang or guided meditation on Thursdays to deepen wisdom."
  }
];

const astrologyForm = document.getElementById("astrology-demo-form");
const astrologyOutput = document.getElementById("astrology-demo-output");

astrologyForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(astrologyForm);
  const name = formData.get("name");
  const dob = formData.get("dob");
  const tob = formData.get("tob");
  const pob = formData.get("pob");

  const randomInsight =
    astrologyInterpretations[Math.floor(Math.random() * astrologyInterpretations.length)];

  astrologyOutput.innerHTML = `
    <strong>${name}</strong>, your birth details (${dob}, ${tob}, ${pob}) reveal:<br /><br />
    <strong>${randomInsight.theme}</strong><br />
    ${randomInsight.message}
  `;
});

const palmReadingForm = document.getElementById("palm-reading-form");
const palmReadingOutput = document.getElementById("palm-reading-output");

const palmFocusInsights = {
  career:
    "Your head line shows a strong analytical bend. Upcoming quarters favor upskilling and mentorship roles.",
  relationships:
    "Heart line markings highlight emotional clarity. Invest in heartfelt conversations and shared artistic pursuits.",
  health: "Vitality mounts suggest balanced energy. Align routines with sunrise meditations and herbal support.",
  destiny:
    "Fate line intersections reveal transformative journeys. Document your dreams—meaningful collaborations are emerging."
};

palmReadingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const focus = new FormData(palmReadingForm).get("focus");
  const fileInput = palmReadingForm.querySelector('input[type="file"]');
  const fileName = fileInput?.files?.[0]?.name;

  palmReadingOutput.innerHTML = `
    ${fileName ? `<strong>Image:</strong> ${fileName}<br />` : ""}
    <strong>Insight:</strong> ${palmFocusInsights[focus]}
    <br /><br />
    Our AI will generate overlays to highlight major lines and suggest rituals to align with this focus area.
  `;
});

const poojaForm = document.getElementById("pooja-form");
const poojaOutput = document.getElementById("pooja-output");

const ceremonyRecommendations = {
  "griha-pravesh": "Align with a Shubh muhurat on a Wednesday or Thursday. We recommend Pandit Ravi (4.9★) and our vastu cleanse kit.",
  satyanarayan: "Plan during the waxing moon. VedIQ concierge can handle prasadam distribution for up to 50 guests.",
  rudrabhishek:
    "Ideal on Mondays or Pradosh vrat days. Pair with livestream services for family abroad and sacred rudraksha offerings.",
  "naming-ceremony": "Schedule within 11 days of birth. Customize mantras and invite elders via VedIQ family calendar."
};

poojaForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(poojaForm);
  const ceremony = formData.get("ceremony");
  const date = formData.get("date") || "your preferred date";
  const time = formData.get("time") || "a suitable time";
  const city = formData.get("city") || "your location";

  poojaOutput.innerHTML = `
    We found auspicious slots around <strong>${date}</strong> at <strong>${time}</strong> for
    <strong>${city}</strong>.<br /><br />
    ${ceremonyRecommendations[ceremony]}<br /><br />
    A VedIQ coordinator will reach out within 2 hours to confirm priest availability and logistics.
  `;
});

const assistantMessages = document.getElementById("assistant-messages");
const assistantForm = document.getElementById("assistant-form");

const aiResponses = [
  "According to your current dashas, Friday evenings are auspicious for initiating creative ventures.",
  "For your Satyanarayan pooja, prepare five varieties of fruit and arrange a diya in the northeast corner.",
  "I recommend booking a palmist review session after your AI reading for deeper validation.",
  "Consider meditating during Brahma Muhurat this week to amplify Jupiter's supportive transit."
];

const addMessage = (text, type) => {
  const div = document.createElement("div");
  div.className = `message message--${type}`;
  div.textContent = text;
  assistantMessages.appendChild(div);
  assistantMessages.scrollTop = assistantMessages.scrollHeight;
};

assistantForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = assistantForm.elements.namedItem("message");
  const userMessage = input.value.trim();
  if (!userMessage) return;

  addMessage(userMessage, "user");
  input.value = "";

  setTimeout(() => {
    const aiMessage = aiResponses[Math.floor(Math.random() * aiResponses.length)];
    addMessage(aiMessage, "ai");
  }, 450);
});

const waitlistForm = document.getElementById("waitlist-form");
waitlistForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = new FormData(waitlistForm).get("email");
  waitlistForm.reset();
  alert(`Thank you, ${email}! We'll reach out with early access details soon.`);
});
