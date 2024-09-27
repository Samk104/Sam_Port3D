import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    kotlin,
    html,
    css,
    reactjs,
    java,
    tailwind,
    android,
    git,
    firebase,
    matlab,
    python,
    ncrvoyix,
    trends,
    dll,
    reboundtherapy,
    memeit,
    newzup,
    threejs,
    harnoor,
    armin,
    melissa,
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
      title: "API Design",
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Kotlin",
      icon: kotlin,
    },
    {
      name: "Android",
      icon: android,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "Matlab",
      icon: matlab,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer Intern",
      company_name: "NCR Voyix",
      icon: ncrvoyix,
      iconBg: "#482e91",
      date: "May 2024 - Aug 2024",
      points: [
        "Developed a comprehensive loyalty demo application integrating NCR's Cloud APIs, utilizing 𝗡𝗲𝘅𝘁.𝗷𝘀, 𝗧𝘆𝗽𝗲𝗦𝗰𝗿𝗶𝗽𝘁, 𝗮𝗻𝗱 𝗧𝗮𝗶𝗹𝘄𝗶𝗻𝗱 𝗖𝗦𝗦.",
        "Successfully implemented Apple Pay and Google Wallet integrations, introducing new capabilities to the team and enhancing the application's functionality.",
        "Implemented rigorous testing strategies including integration, end-to-end and unit tests, significantly improving code coverage and quality.The application was deployed on 𝗚𝗼𝗼𝗴𝗹𝗲 𝗖𝗹𝗼𝘂𝗱 𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 utilizing Docker, Kubernetes (GKE), and GitHub Actions for CI/CD.",
        "This interactive showcase of Voyix’s powerful APIs aims to reduce customer onboarding times (by up to 50%) , streamlining the process for support and onboarding teams and attracting potential clients by visually demonstrating API capabilities."
       
      ],
    },
    {
      title: "Technology Intern",
      company_name: "DLL@GSU",
      icon: dll,
      iconBg: "#125eab",
      date: "Oct 2021 - Present",
      points: [
        "Spearheaded the design and delivery of beginner friendly programming workshops in Java, Python, and web development (HTML, CSS, JS) for university students and staff, showcasing technical expertise and curriculum development skills.",
        "Implemented innovative engagement strategies, resulting in a 𝟲𝟬% 𝗶𝗻𝗰𝗿𝗲𝗮𝘀𝗲 in attendee retention and participation, demonstrating strong leadership and ability to drive measurable results in educational technology initiatives.",
      ],
    },
    {
      title: "Research Assistant",
      company_name: "TReNDS",
      icon: trends,
      iconBg: "#E6DEDD",
      date: "Aug 2022 - Aug 2024",
      points: [
        "Applied advanced 𝗺𝗮𝗰𝗵𝗶𝗻𝗲 𝗹𝗲𝗮𝗿𝗻𝗶𝗻𝗴 algorithms to analyze multi-site brain imaging datasets, revealing that motion-related signals, often discarded in traditional methods, contain important functional networks.",
        "Led research as first author exploring the intricate relationship between brain functional networks and motion-related signals in schizophrenia. Analyzed extensive fMRI datasets to identify potential novel treatment pathways.",
        "These research efforts culminated in a paper presented at the 𝟰𝟲𝘁𝗵 𝗔𝗻𝗻𝘂𝗮𝗹 𝗜𝗻𝘁𝗲𝗿𝗻𝗮𝘁𝗶𝗼𝗻𝗮𝗹 𝗖𝗼𝗻𝗳𝗲𝗿𝗲𝗻𝗰𝗲 𝗼𝗳 𝘁𝗵𝗲 𝗜𝗘𝗘𝗘 𝗘𝗻𝗴𝗶𝗻𝗲𝗲𝗿𝗶𝗻𝗴 𝗶𝗻 𝗠𝗲𝗱𝗶𝗰𝗶𝗻𝗲 𝗮𝗻𝗱 𝗕𝗶𝗼𝗹𝗼𝗴𝘆 𝗦𝗼𝗰𝗶𝗲𝘁𝘆 (𝗘𝗠𝗕𝗖), highlighting the impact, innovation and contribution of our work in the field of neuroimaging.",
      ],
    },
  ];
  
    
  
  const testimonials = [
    {
      testimonial:
        "Sam has exhibited a remarkable ability to learn swiftly and consistently demonstrated exceptional problem-solving skills, making him an invaluable addition to my team.",
      name: "Dr. Armin Iraji",
      designation: "Assistant Professor of CS",
      company: "Georgia State University",
      image: armin,
    },
    {
      testimonial:
        "Sam is an outstanding instructor and a valuable team member. His extensive knowledge and approachable demeanor make him an indispensable asset. ",
      name: "L.M. Spencer",
      designation: "Tech Training Specialist",
      company: "Georgia State University",
      image: melissa,
    },   
    {
      testimonial:
        "Collaborating with Sam on a mobile app project has been truly inspiring. His unwavering dedication to solving intricate challenges with precision, coupled with his insatiable curiosity, consistently leads to exceptional solutions to problems.",
      name: "Harnoor Singh",
      designation: "Content Creator@Youtube Software Engineer",
      company: "Microsoft",
      image: harnoor,
    },
  ];
  
  const projects = [
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
      name: "MemeIt",
      description:
        "Experience endless laughter: A delightful and user-friendly app that delivers a daily dose of humor, displaying memes one by one and making sharing with friends a breeze.",
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
      image: memeit,
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
  
  export { services, technologies, experiences, testimonials, projects };