import React from "react";

export interface Experience {
  period: string;
  company: string;
  position: string;
  responsibilities: string[];
}

const experience: Experience[] = [
  {
    period: "July 2022 - May 2023",
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
      "Develop designs that are made by the UI/UX for the client.",
      "Building of reusable codes and components for future use and easy updates.",
      "Investigation, checking logs and fixing bugs for the maintenance of the website.",
      "Consumption of backend APIs.",
      "Creation of CRUD endpoints.",
      "Ensuring code quality and maintining coding standards, as well as participating in code reviews and sharing knowledge with other team members.",
      "Working with PostgreSQL database, and integrating them into the front end application.",
      "Staying up-to-date with the latest trends and best practices in React.js and Node.js development and sharing knowledge with the team.",
    ],
  },
  {
    period: "September 2019 - September 2021",
    company: "Pahiram.ph",
    position: "Front End Developer",
    responsibilities: [
      "Handle connection between Node API and React JS.",
      "Created inventory of items to keep track of all the items rented and availability admin dashboard.",
      "Created user profile to have their portfolio's information client side.",
      "Created listing of Clients Item.",
    ],
  },
];

export default experience;
