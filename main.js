// main.js
let lang = new URLSearchParams(window.location.search).get('lang') || 'en';
const data = {
    en: [
        { name: "Student1", question: "How to use GitHub?" },
        { name: "Student2", question: "Best way to learn cloud?" }
    ],
    ta: [
        { name: "மாணவர்1", question: "Github எப்படி பயன்படுத்துவது?" }
    ]
};
document.getElementById('questions').innerHTML =
  data[lang].map(q => `<p><strong>${q.name}</strong>: ${q.question}</p>`).join('');
