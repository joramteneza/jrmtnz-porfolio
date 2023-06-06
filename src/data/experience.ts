import React from "react";

export interface Experience {
  period: string;
  company: string;
  position: string;
  responsibilities: string[];
}

const experience: Experience[] = [
  {
    period: "June 2022 - May 2023",
    company: "Ticketnation Philippines",
    position: "Full Stack Developer",
    responsibilities: [
      "Develop designs that are made by the UI/UX.",
      "Building of reusable codes and components for future use and easy updates.",
      "Reshaping of API endpoints depending on the needs.",
      "Development of Admin and Partner Dashboard.",
      "Integration of Backend APIs.",
      "Participating in agile development processes, such as sprint planning, stand-ups and retrospectives.",
      "Documenting code, processes, and best practices for future reference.",
    ],
  },
  {
    period: "September 2021 - June 2022",
    company: "Altev Technologies",
    position: "Mid Front End Developer",
    responsibilities: [
      "Assigned to develop website of different clients.",
      "Investigation, checking logs and fixing bugs for the maintenance of the website.",
      "Consumption of backend APIs and creation of CRUD endpoints.",
      "Collaborating with other developers, designers, and stakeholders to create new features and improve existing ones.",
      "Ensuring code quality and maintaining coding standards, as well as participating in code reviews and sharing knowledge with other team members.",
      "Working with databases, such as PostgreSQL, and integrating them into the front end application.",
      "Staying up-to-date with the latest trends and best practices in React.js and Node.js development and sharing knowledge with the team.",
    ],
  },
  {
    period: "September 2019 - September 2021",
    company: "Pahiram.ph",
    position: "Front End Developer",
    responsibilities: [
      "Handle connection between Backend API and React JS.",
      "Created inventory of items to keep track of all the items rented and availability in admin dashboard.",
      "Created user profile to have their portfolio's information in client side.",
      "Created listing of Clients Item.",
      "Develop the website by implementing user-friendly and resposive web interfaces.",
      "Prioritize and manage bug fixes based on severity, impact, and project timelines.",
    ],
  },
];

export default experience;
