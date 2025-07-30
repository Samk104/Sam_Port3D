import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  aws,
  html,
  css,
  reactjs,
  java,
  tailwind,
  cSharp,
  netcore,
  pgsql,
  spring,
  python,
  safac,
  freelance,
  ncrvoyix,
  trends,
  dll,
  reboundtherapy,
  meal_in_budget,
  ogre,
  cinemalytics,
  newzup,
  nextjs,
  harnoor,
  armin,
  // melissa,
  grant,
  paper,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web Development",
    icon: web,
  },
  {
    title: "Cloud Engineering",
    icon: backend,
  },
  {
    title: "Mobile App Development",
    icon: mobile,
  },
  {
    title: "Machine Learning",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Spring",
    icon: spring,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C#",
    icon: cSharp,
  },
  {
    name: ".NET Core",
    icon: netcore,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "PostgreSQL",
    icon: pgsql,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "South Asian Folk Arts Council",
    icon: safac,
    iconBg: "#E6DEDD",
    date: "Feb. 2025 - Present",
    points: [
    "Created a 𝘄𝗲𝗯 𝗽𝗹𝗮𝘁𝗳𝗼𝗿𝗺 (Angular, Python, PostgreSQL) to automatically collect and evaluate grant opportunities, saving 𝟮𝟬+ 𝗵𝗼𝘂𝗿𝘀/𝘄𝗲𝗲𝗸 in manual research and ∼$𝟯𝟬𝗞/𝘆𝗲𝗮𝗿 in admin cost",
    "Implemented a multithreaded scraper (Selenium, OpenCV, Tesseract) to extract structured data from 𝟭𝟬+ 𝘄𝗲𝗯𝘀𝗶𝘁𝗲𝘀 and image-based flyers, reducing scrape time from 𝟯𝟳 𝘁𝗼 𝟵 𝗺𝗶𝗻𝘂𝘁𝗲𝘀",
    "Integrated a self-hosted Mistral LLM (Ollama + RAG) to verify grant details (e.g., deadline, amount, eligibility) and rank results by relevance - reducing low-fit matches by ∼𝟰𝟬% via feedback-tuned scoring",
    "Orchestrated scraper, DB, and scheduler with Docker Compose supporting local development and automated runs",
    ]
  },
  {
    title: "Co-founder / Software Engineer",
    company_name: "Buzzaro",
    icon: freelance,
    iconBg: "#482e91",
    date: "March 2023 - March 2025",
    points: [
    "Co-developed a 𝗳𝘂𝗹𝗹-𝘀𝘁𝗮𝗰𝗸 𝗦𝗮𝗮𝗦 platform using Next.js, Node.js, Typescript and Tailwind CSS that enabled 𝟵+ 𝘀𝗺𝗮𝗹𝗹 𝗯𝘂𝘀𝗶𝗻𝗲𝘀𝘀𝗲𝘀 to launch online storefronts - driving a 𝟱𝟳% 𝗮𝘃𝗲𝗿𝗮𝗴𝗲 𝗿𝗲𝘃𝗲𝗻𝘂𝗲 𝗶𝗻𝗰𝗿𝗲𝗮𝘀𝗲",
    "Migrated backend from TiDB to AWS RDS (PostgreSQL) and built a role-based auth system (Java, Spring Boot, JWT) to eliminate third-party dependencies and gain control over user access and account data",
    "Developed REST APIs for inventory, order management, and sales analytics improving seller 𝗲𝗳𝗳𝗶𝗰𝗶𝗲𝗻𝗰𝘆 𝗯𝘆 ∼𝟰𝟱%",
    "Engineered a full checkout flow with Razorpay integration including payment forms, success/failure states, and receipts - processing $𝟭𝟮𝟬𝗞+ in transactions across 𝟭,𝟬𝟬𝟬+ 𝘂𝘀𝗲𝗿𝘀",
    ]
  },
  {
    title: "Software Engineer Intern",
    company_name: "NCR Voyix",
    icon: ncrvoyix,
    iconBg: "#482e91",
    date: "May 2024 - Aug 2024",
    points: [
    "Developed a demo 𝘄𝗲𝗯 𝗮𝗽𝗽 (Next.js, Node.js, Typescript, Tailwind CSS) to showcase real-world use cases for enterprise clients integrating with platform APIs - contributing to ∼𝟯𝟯% 𝗮𝗱𝗼𝗽𝘁𝗶𝗼𝗻 𝗴𝗿𝗼𝘄𝘁𝗵",
    "Integrated Apple Pay and Google Wallet into the app to simulate a real POS checkout experience, helping clients visualize how customers store and redeem gift cards",
    "Built a Java, Spring Boot service to modify gift card API responses for mobile wallet support without backend changes",
    "Achieved 𝟵𝟲% 𝘁𝗲𝘀𝘁 𝗰𝗼𝘃𝗲𝗿𝗮𝗴𝗲 through comprehensive integration, unit (Jest), and e2e (Cypress) testing",
    "Deployed the app on AWS by leveraging Docker, Kubernetes (EKS), and GitHub Actions for CI/CD",
    ],
  },
  {
    title: "Machine Learning Research Assistant",
    company_name: "TReNDS Center",
    icon: trends,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - May 2024",
    points: [
      "Applied advanced 𝗺𝗮𝗰𝗵𝗶𝗻𝗲 𝗹𝗲𝗮𝗿𝗻𝗶𝗻𝗴 𝗮𝗹𝗴𝗼𝗿𝗶𝘁𝗵𝗺𝘀 (𝗜𝗖𝗔, 𝗣𝗖𝗔, 𝗚𝗟𝗠) to multi-site resting-state fMRI data using MATLAB and the GIFT toolbox, discovering patterns with potential to identify 𝗻𝗲𝘄 𝘁𝗿𝗲𝗮𝘁𝗺𝗲𝗻𝘁 𝗽𝗮𝘁𝗵𝘄𝗮𝘆𝘀 𝗳𝗼𝗿 𝘀𝗰𝗵𝗶𝘇𝗼𝗽𝗵𝗿𝗲𝗻𝗶𝗮",
      "Authored and presented a 𝗳𝗶𝗿𝘀𝘁-𝗮𝘂𝘁𝗵𝗼𝗿 peer-reviewed paper published at the 𝟮𝟬𝟮𝟰 𝗜𝗘𝗘𝗘 𝗘𝗠𝗕𝗖; presented findings at EMBC and the Undergraduate Research Conference (Undergraduate Research Award)",
    ],
  },

  {
    title: "Technology Intern",
    company_name: "DLL@GSU",
    icon: dll,
    iconBg: "#125eab",
    date: "Oct 2021 - May 2024",
    points: [
      "Led the development and delivery of beginner-friendly programming workshops in 𝗝𝗮𝘃𝗮, 𝗣𝘆𝘁𝗵𝗼𝗻, 𝗮𝗻𝗱 𝘄𝗲𝗯 𝗱𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻𝘁 (𝗛𝗧𝗠𝗟, 𝗖𝗦𝗦, 𝗝𝗦) for over 𝟰𝟬𝟬𝟬 𝘂𝗻𝗶𝘃𝗲𝗿𝘀𝗶𝘁𝘆 𝘀𝘁𝘂𝗱𝗲𝗻𝘁𝘀 𝗮𝗻𝗱 𝘀𝘁𝗮𝗳𝗳, resulting in a 𝟳𝟱% 𝗶𝗻𝗰𝗿𝗲𝗮𝘀𝗲 𝗶𝗻 𝗮𝘁𝘁𝗲𝗻𝗱𝗲𝗲 𝗿𝗲𝘁𝗲𝗻𝘁𝗶𝗼𝗻 and a 𝟲𝟬% 𝗯𝗼𝗼𝘀𝘁 𝗶𝗻 𝗮𝗰𝘁𝗶𝘃𝗲 𝗽𝗮𝗿𝘁𝗶𝗰𝗶𝗽𝗮𝘁𝗶𝗼𝗻, by implementing hands-on coding exercises, live demonstrations, and real-world project simulations",
      "Cultivated a diverse learning environment, attracting participants from 𝟭𝟱 𝗱𝗶𝗳𝗳𝗲𝗿𝗲𝗻𝘁 𝗮𝗰𝗮𝗱𝗲𝗺𝗶𝗰 𝗱𝗲𝗽𝗮𝗿𝘁𝗺𝗲𝗻𝘁𝘀 and achieving a 𝟵𝟯% 𝘀𝗮𝘁𝗶𝘀𝗳𝗮𝗰𝘁𝗶𝗼𝗻 𝗿𝗮𝘁𝗲 among workshop attendees, by developing an inclusive curriculum and conducting post-session surveys for continuous improvement",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Sam was an incredible intern during his time at NCR Voyix. Not only was his past work and schooling impressive, he showed great initiative, eagerness to learn, and ownership of the project he was tasked with completing over the summer. His professional attitude and positive outlook raised my standards for interns and employees alike.",
    name: "Grant Slone",
    designation: "Software Engineer",
    company: "NCR Voyix",
    image: grant,
  },
  {
    testimonial:
      "Sam has exhibited a remarkable ability to learn swiftly and consistently demonstrated exceptional problem-solving skills, making him an invaluable addition to my team.",
    name: "Dr. Armin Iraji",
    designation: "Assistant Professor of CS",
    company: "Georgia State University",
    image: armin,
  },
  // {
  //   testimonial:
  //     "Sam is an outstanding instructor and a valuable team member. His extensive knowledge and approachable demeanor make him an indispensable asset. ",
  //   name: "L.M. Spencer",
  //   designation: "Tech Training Specialist",
  //   company: "Georgia State University",
  //   image: melissa,
  // },
  {
    testimonial:
      "Collaborating with Sam on a mobile app project has been truly inspiring. His unwavering dedication to solving challenges with precision, coupled with his curiosity, consistently leads to exceptional solutions to problems.",
    name: "Harnoor Singh",
    designation: "Content Creator@Youtube Software Engineer",
    company: "Microsoft",
    image: harnoor,
  },
];

const projects = [
  {
    name: "Meal In Budget",
    description:
      "A web application that streamlines meal planning by automating recipe ingredient price comparisons across local supermarkets. Saves up to 30% on groceries and reduces planning time by up to 60%.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "selenium & beautiful soup",
        color: "pink-text-gradient",
      },
    ],
    image: meal_in_budget,
    source_code_link: "https://github.com/Samk104/Meal-In-Budget",
  },
  {
    name: "OGRE",
    description:
      "An iOS app for GRE preparation, featuring adaptive learning algorithms, personalized study plans, gamification elements like leaderboards and streaks that boosted daily test user engagement by 85% and more ...",
    tags: [
      {
        name: "swift",
        color: "blue-text-gradient",
      },
      {
        name: "swiftui",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: ogre,
    source_code_link: "https://github.com/Rijulmehta531/OGRE",
  },
  {
    name: "Cinemalytics",
    description:
      "A machine learning-driven solution that predicts movie success with 80% accuracy, leveraging a dataset of over 1 million films. Implemented a variety of models.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "numpy",
        color: "green-text-gradient",
      },
      {
        name: "scikit",
        color: "pink-text-gradient",
      },
    ],
    image: cinemalytics,
    source_code_link: "https://github.com/Samk104/Cinemalytics",
  },
  {
    name: "NewzUp",
    description:
      "Catch up on tech news effortlessly: A news app that presents tech updates with thumbnail previews and headlines, making reading articles a breeze.",
    tags: [
      {
        name: "kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "android",
        color: "pink-text-gradient",
      },
    ],
    image: newzup,
    source_code_link: "https://github.com/Samk104?tab=repositories",
  },
  {
    name: "Rebound Therapy",
    description:
      "Empower individuals with disabilities: A personalized workout and progress tracking app tailored to individual needs, making fitness accessible to all.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "hackathon-winner",
        color: "pink-text-gradient",
      },
    ],
    image: reboundtherapy,
    source_code_link: "https://github.com/Samk104?tab=repositories",
  },
];



const research = [
  {
    name: "Beyond Artifacts: Rethinking Motion-Related Signals in Resting-State fMRI Analysis",
    description:
      "In this research, I explored how even the smallest head movements, often considered “noise” in brain scans might actually hold valuable information. Using brain imaging data from over 500 people, including both healthy individuals and those with schizophrenia, we found that patterns in these movements can reveal meaningful differences in brain connectivity. Our work challenges the common view that motion in brain scans should always be removed, and instead shows it could help us better understand brain function and mental health conditions. This work was published as a first-author paper at the 2024 IEEE EMBC, presented at multiple conferences, and recognized with an Undergraduate Research Award. These findings may help inform future approaches to diagnosing and treating schizophrenia.",
    tags: [
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
      {
        name: "MATLAB",
        color: "pink-text-gradient",
      },
      {
        name: "Neuroimaging",
        color: "blue-text-gradient",
      },
    ],
    image: paper,
    source_code_link1: "https://ieeexplore.ieee.org/document/10782518",
    source_code_link2: "https://csds.gsu.edu/2024/03/19/department-announces-student-award-winners/",
  },
]

export { services, technologies, experiences, testimonials, projects, research };
