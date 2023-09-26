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
    procoder,
    trends,
    dll,
    reboundtherapy,
    memeit,
    newzup,
    threejs,
    harnoor,
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
      title: "Mobile App Developer",
      icon: mobile,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      title: "Founder",
      company_name: "Procoder",
      icon: procoder,
      iconBg: "#383E56",
      date: "Mar 2020 - July 2022",
      points: [
        "Authored a platform to help students learn programming concepts with the aim of providing globally accessible education.",
        "Launched free courses to help underprivileged students learn to program for free, with a focus on high-schoolers.",
        "Helped more than 1500 students from over eight countries and received recognition for the free nature of the platform.",
      ],
    },
    {
      title: "Tech Intern",
      company_name: "DLL@GSU",
      icon: dll,
      iconBg: "#383E56",
      date: "Oct 2021 - Present",
      points: [
        "Empowered students, staff and faculty by designing and delivering skill-building workshops spanning web development, object-oriented programming, problem-solving, and graphic design.",
        "Contributed to increased interest and participation of students in workshops- 35% more attendees in workshops.",
        
      ],
    },
    {
      title: "Research Assistant",
      company_name: "TReNDS",
      icon: trends,
      iconBg: "#E6DEDD",
      date: "Aug 2022 - Present",
      points: [
        "Utilized advanced ICA technique to analyze a multi-site dataset, demonstrating that motion-related signals, often discarded during pre-processing, contain important brain functional networks such as the default mode network.",
        "Currently Investigating the interplay of brain functional networks and motion-related signals in schizophrenia for novel treatment avenues. Both projects involve millions of megabytes of fMRI data.",
       
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
      image: "https://cas.gsu.edu/files/2022/08/Armin_Iraji_300x300.jpg",
    },
    {
      testimonial:
        "Sam is an outstanding instructor and a valuable team member. His extensive knowledge and approachable demeanor make him an indispensable asset. ",
      name: "L.M. Spencer",
      designation: "Tech Training Specialist",
      company: "Georgia State University",
      image: "https://cetl.gsu.edu/files/2016/07/20160906SS_Laura_Spencer_009PSFC-300x420.jpg",
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