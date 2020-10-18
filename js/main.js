const jobsListJSON = [
  {
    id: 1,
    company: "Photosnap",
    logo: "./images/photosnap.svg",
    new: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 2,
    company: "Manage",
    logo: "./images/manage.svg",
    new: true,
    featured: true,
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Python"],
    tools: ["React"],
  },
  {
    id: 3,
    company: "Account",
    logo: "./images/account.svg",
    new: true,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
  {
    id: 4,
    company: "MyHome",
    logo: "./images/myhome.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "5d ago",
    contract: "Contract",
    location: "USA Only",
    languages: ["CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 5,
    company: "Loop Studios",
    logo: "./images/loop-studios.svg",
    new: false,
    featured: false,
    position: "Software Engineer",
    role: "FullStack",
    level: "Midweight",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["Ruby", "Sass"],
  },
  {
    id: 6,
    company: "FaceIt",
    logo: "./images/faceit.svg",
    new: false,
    featured: false,
    position: "Junior Backend Developer",
    role: "Backend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "UK Only",
    languages: ["Ruby"],
    tools: ["RoR"],
  },
  {
    id: 7,
    company: "Shortly",
    logo: "./images/shortly.svg",
    new: false,
    featured: false,
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["HTML", "JavaScript"],
    tools: ["Sass"],
  },
  {
    id: 8,
    company: "Insure",
    logo: "./images/insure.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["Vue", "Sass"],
  },
  {
    id: 9,
    company: "Eyecam Co.",
    logo: "./images/eyecam-co.svg",
    new: false,
    featured: false,
    position: "Full Stack Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "3w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Python"],
    tools: ["Django"],
  },
  {
    id: 10,
    company: "The Air Filter Company",
    logo: "./images/the-air-filter-company.svg",
    new: false,
    featured: false,
    position: "Front-end Dev",
    role: "Frontend",
    level: "Junior",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
];

const tagsFilterSearch = `
<!-- FilterTablet-item -->
<div class="search__filterTablets-item">
<span>Frontend</span>
<button class="search__filterTablets-clear">
  <img src="images/icon-remove.svg" alt="remove icon" />
</button>
</div>
<!-- FilterTablet-item END -->
`;

// Sustituye en el tag ###JOB_TAGS###
function getTagHTML(tag) {
  return `<span class="card__skills-item"> 
            ${tag}
        </span>`;
}

// Sustituye en el tag ###JOB_BADGES###
function getBadgesHTML(jobData) {
  if (jobData.new && jobData.featured) {
    return `<span class="badges badges--new">NEW!</span>
            <span class="badges badges--featured">FEATURED</span>
        `;
  } else {
    if (jobData.new) {
      return `<span class="badges badges--new">NEW!</span>
               `;
    } else if (jobData.featured) {
      return `<span class="badges badges--featured">FEATURED</span>
        `;
    }

    return "";
  }
  // switch (jobData) {
  //   case jobData.new && jobData.featured:
  //     return `<span class="badges badges--new">NEW!</span>
  //         <span class="badges badges--featured">FEATURED</span>
  //         `;
  //   case jobData.new:
  //     return `<span class="badges badges--new">NEW!</span>
  //         `;
  //   case jobData.featured:
  //     return `
  //         <span class="badges badges--featured">FEATURED</span>
  //         `;
  //   default:
  //     return "";
  // }
}

function getJobsListHTML(jobData) {
  const JOB_TAGS_PLACEHOLDER = "###JOB_TAGS";
  const JOB_BADGES_PLACEHOLDER = "###JOB_BADGES";

  let layoutItemHTML = `
    <!-- Item Start -->
    <article class="card border">
        <div class="card__column card__column--left">
            <img
            src="${jobData.logo}"
            alt="${jobData.company} Logo"
            class="card__logo"
            />
            <div class="card__info">
                <span class="card__company"
                >${jobData.company}
                    ${JOB_BADGES_PLACEHOLDER}
                </span>
                <span class="card__position">${jobData.position}</span>
                <ul class="card__details">
                <li class="card__details-item">${jobData.postedAt}</li>
                <li class="card__details-item">${jobData.contract}</li>
                <li class="card__details-item">${jobData.location}</li>
                </ul>
                <hr class="card__separator" />
            </div>
        </div>
        <div class="card__column card__column--right">
            <div class="card__skills">
            ${JOB_TAGS_PLACEHOLDER}
            </div>
        </div>
    </article>
    <!-- Item End -->
    `;

  const tagsArray = [
    jobData.role,
    jobData.level,
    ...(jobData.languages || []),
    ...(jobData.tools || []),
  ];

  //   Renderizado de todos los tags en una string
  const tagsString = tagsArray.reduce((acc, currentTag) => {
    return acc + getTagHTML(currentTag);
  }, "");

  return layoutItemHTML
    .replace(JOB_BADGES_PLACEHOLDER, getBadgesHTML(jobData))
    .replace(JOB_TAGS_PLACEHOLDER, tagsString);
}

console.log(getJobsListHTML(jobsListJSON[1]));
