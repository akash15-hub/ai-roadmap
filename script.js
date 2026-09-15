const careerData = {
  ai: {
    title: 'AI Engineer',
    tag: 'Python • ML • AI systems',
    stages: [
      {
        title: 'Foundation',
        time: 'Month 1-2',
        description: 'Build the logic and problem-solving base needed for AI work.',
        skills: ['Python basics', 'Math & logic', 'Data structures']
      },
      {
        title: 'Core AI skills',
        time: 'Month 3-5',
        description: 'Learn data handling, machine learning, and model training processes.',
        skills: ['Pandas', 'NumPy', 'Scikit-learn', 'Statistics']
      },
      {
        title: 'Real projects',
        time: 'Month 6-9',
        description: 'Turn theory into working AI products and complete portfolio projects.',
        skills: ['NLP', 'Computer vision', 'Model deployment', 'MLOps']
      }
    ]
  },
  fullstack: {
    title: 'Full Stack Developer',
    tag: 'Frontend • Backend • APIs',
    stages: [
      {
        title: 'Start coding',
        time: 'Month 1-2',
        description: 'Learn frontend basics and the building blocks of web interfaces.',
        skills: ['HTML', 'CSS', 'JavaScript', 'Responsive design']
      },
      {
        title: 'Build apps',
        time: 'Month 3-5',
        description: 'Add backend development, APIs, databases, and real app logic.',
        skills: ['Node.js', 'Express', 'SQL', 'REST APIs']
      },
      {
        title: 'Launch ready',
        time: 'Month 6-9',
        description: 'Deploy projects, optimize performance, and prepare for professional work.',
        skills: ['Git', 'Deployments', 'Auth', 'Testing']
      }
    ]
  },
  cyber: {
    title: 'Cybersecurity',
    tag: 'Network • Security • Defense',
    stages: [
      {
        title: 'Basics',
        time: 'Month 1-2',
        description: 'Understand networking, operating systems, and common threat concepts.',
        skills: ['Networking', 'Linux', 'Security principles', 'Threats']
      },
      {
        title: 'Practice defense',
        time: 'Month 3-5',
        description: 'Use tools and techniques to monitor, detect, and secure systems.',
        skills: ['Wireshark', 'Nmap', 'Firewalls', 'SIEM basics']
      },
      {
        title: 'Professional level',
        time: 'Month 6-9',
        description: 'Focus on cloud security, incident response, and real-world case handling.',
        skills: ['Cloud security', 'Ethical hacking', 'Reporting', 'SOC workflow']
      }
    ]
  },
  python: {
    title: 'Full Stack Developer in Python',
    tag: 'Python • Django • APIs',
    stages: [
      {
        title: 'Python base',
        time: 'Month 1-2',
        description: 'Master Python syntax, logic, and object-oriented design.',
        skills: ['Python syntax', 'OOP', 'Functions', 'Problem solving']
      },
      {
        title: 'Web backend',
        time: 'Month 3-5',
        description: 'Learn backend architecture and Python web frameworks.',
        skills: ['Django', 'Flask', 'FastAPI', 'PostgreSQL']
      },
      {
        title: 'Production ready',
        time: 'Month 6-9',
        description: 'Prepare full applications for the real world with deployment and testing.',
        skills: ['REST APIs', 'Authentication', 'Docker', 'Deployment']
      }
    ]
  },
  javascript: {
    title: 'Full Stack Developer in JavaScript',
    tag: 'JavaScript • React • Node.js',
    stages: [
      {
        title: 'Frontend basics',
        time: 'Month 1-2',
        description: 'Learn the browser, DOM, and modern front-end fundamentals.',
        skills: ['JavaScript', 'DOM', 'CSS', 'UI design']
      },
      {
        title: 'React & backend',
        time: 'Month 3-5',
        description: 'Build modern interfaces and connect them to server-side logic.',
        skills: ['React', 'Node.js', 'Express', 'MongoDB']
      },
      {
        title: 'Ship projects',
        time: 'Month 6-9',
        description: 'Finish end-to-end apps and create job-ready portfolio work.',
        skills: ['API integration', 'State management', 'Testing', 'Deployment']
      }
    ]
  }
};

const yearNode = document.getElementById('year');
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const heroVisual = document.querySelector('.hero-visual');
const floatCards = document.querySelectorAll('.float-card');

if (heroVisual && floatCards.length) {
  const resetMotion = () => {
    floatCards.forEach((card) => {
      card.style.setProperty('--tx', '0px');
      card.style.setProperty('--ty', '0px');
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--ry', '0deg');
    });
  };

  window.addEventListener('pointermove', (event) => {
    const rect = heroVisual.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;

    floatCards.forEach((card, index) => {
      const depth = (index + 1) * 0.75;
      const tx = px * 22 * depth;
      const ty = py * 18 * depth;
      const rx = `${py * -18 * depth}deg`;
      const ry = `${px * 20 * depth}deg`;

      card.style.setProperty('--tx', `${tx}px`);
      card.style.setProperty('--ty', `${ty}px`);
      card.style.setProperty('--rx', rx);
      card.style.setProperty('--ry', ry);
    });
  });

  heroVisual.addEventListener('pointerleave', resetMotion);
  window.addEventListener('blur', resetMotion);
}

const roadmapGrid = document.getElementById('roadmap-grid');
const careerTitle = document.getElementById('career-title');
const careerTag = document.getElementById('career-tag');
const careerButtons = document.querySelectorAll('.career-pill');

function renderRoadmap(key) {
  const career = careerData[key];
  if (!career || !roadmapGrid || !careerTitle || !careerTag) return;

  careerTitle.textContent = career.title;
  careerTag.textContent = career.tag;

  roadmapGrid.innerHTML = career.stages
    .map(
      (stage, index) => `
        <article class="roadmap-step">
          <span class="step-index">0${index + 1}</span>
          <h4>${stage.title}</h4>
          <p class="step-time">${stage.time}</p>
          <p>${stage.description}</p>
          <ul>
            ${stage.skills.map((skill) => `<li>${skill}</li>`).join('')}
          </ul>
        </article>
      `
    )
    .join('');
}

careerButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selected = button.dataset.career;
    careerButtons.forEach((item) => item.classList.toggle('active', item === button));
    renderRoadmap(selected);
  });
});

renderRoadmap('ai');
