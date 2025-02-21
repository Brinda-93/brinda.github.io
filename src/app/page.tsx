"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-blue-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center p-10">
        <motion.h1
          className="text-6xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Brinda Navakumar
        </motion.h1>
        <motion.p
          className="text-xl mt-4 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Passionate Software Engineer specializing in Full-Stack Development, 
          AI, and Web Technologies. Dedicated to building impactful digital experiences.
        </motion.p>
      </section>

      {/* Sections */}
      <SectionHeader title="Education" />
      <div className="p-10">
        <EducationItem
          degree="Bachelor of Engineering.Tech"
          department="Electronics and Communcation Engineering"
          specialization=""
          institution="PES University"
          country="Bangalore, India"
          link="https://www.pes.edu"
          year="2011 - 2015"
        />
        <EducationItem
          degree="Master of Technology"
          department="Electronics and Communication Engineering"
          specialization="Signal and Image Processing"
          institution="National Institute of Technology Rourkela"
          country="Rourkela, India"
          link="https://nitrkl.ac.in/"
          year="2015 - 2017"
        />
        <EducationItem
          degree="Master of Science"
          department="Electronic Engineering"
          specialization="Computer Vision, Robotics and Machine Learning"
          institution="University of Surrey"
          country="Guildfor, United Kingdom"
          link="https://www.surrey.ac.uk/"
          year="2019 - 2020"
        />
      </div>

      <SectionHeader title="Work Experience" />
      <div className="p-10">
        <ExperienceItem
          role="Technical Project Leadr"
          company="Velankani AI and Cloud Solutions LLP"
          country="Bangalore, India"
          link="https://www.velankanigroup.com"
          duration="2022 - Present"
        />
        <ExperienceItem
          role="Computer Vision Developer"
          company="Velankani AI and Cloud Solutions LLP"
          country="Bangalore, India"
          link="https://www.velankanigroup.com"
          duration="2021 - 2022"
        />
      </div>
      //
      <SectionHeader title="Awards & Recognitions" />
      <div className="p-10">
        <AwardItem title="Best AI Research Paper" organization="ICML 2023" year="2023" />
        <AwardItem title="Top Innovator Award" organization="TechFest 2022" year="2022" />
      </div>
      //
      <SectionHeader title="Publications" />
      <div className="p-10">
        <PublicationItem title="Deep Learning for Medical Imaging" journal="IEEE Transactions on AI" link="https://ieeexplore.ieee.org" year="2023" />
        <PublicationItem title="Generative AI for Art" journal="Nature Machine Intelligence" link="https://nature.com" year="2024" />
      </div>

      <SectionHeader title="Extracurricular Activities" />
      <div className="p-10">
        <ExtraItem activity="Lead Organizer of Hackathon" organization="XYZ Hackathon" year="2023" />
        <ExtraItem activity="Volunteer for CodeForGood" organization="CodeForGood NGO" year="2022" />
      </div>

      <SectionHeader title="Languages Known" />
      <div className="p-10">
        <LanguagesKnown languages={["English", "Tamil", "Kannada", "Hindi", "French", "Telugu"]} />
      </div>
    </main>
  );
}

// Reusable Components
const SectionHeader = ({ title }: { title: string }) => (
  <motion.h2
    className="text-4xl font-semibold text-center mt-16 mb-8"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    {title}
  </motion.h2>
);

const EducationItem = ({ degree, department, specialization, institution, country, link, year }: { degree: string; department: string; specialization: string; institution: string; country: string; link: string; year: string }) => (
  <motion.div className="bg-blue-800 p-6 rounded-lg shadow-lg text-center mb-4">
    <h3 className="text-xl font-bold">{degree} in {department}</h3>
    <p className="text-lg italic">{specialization}</p>
    <a href={link} target="_blank" rel="noopener noreferrer" className="mt-2 text-blue-300 underline hover:text-blue-500">{institution}, {country}</a>
    <p className="mt-1 text-gray-300">{year}</p>
  </motion.div>
);

const ExperienceItem = ({ role, company, country, link, duration }: { role: string; specialization: string; company: string; country: string; link: string; duration: string }) => (
  <motion.div className="bg-blue-800 p-6 rounded-lg shadow-lg text-center mb-4">
    <h3 className="text-xl font-bold">{role}</h3>
    <p className="text-lg italic">{specialization}</p>
    <a href={link} target="_blank" rel="noopener noreferrer" className="mt-2 text-blue-300 underline hover:text-blue-500">{company}, {country}</a>
    <p className="mt-1 text-gray-300">{duration}</p>
  </motion.div>
);

const AwardItem = ({ title, organization, year }: { title: string; organization: string; year: string }) => (
  <motion.div className="bg-blue-800 p-6 rounded-lg shadow-lg text-center mb-4">
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="mt-2 text-gray-300">{organization} ({year})</p>
  </motion.div>
);

const PublicationItem = ({ title, journal, link, year }: { title: string; journal: string; link: string; year: string }) => (
  <motion.div className="bg-blue-800 p-6 rounded-lg shadow-lg text-center mb-4">
    <h3 className="text-xl font-bold">{title}</h3>
    <a href={link} target="_blank" rel="noopener noreferrer" className="mt-2 text-blue-300 underline hover:text-blue-500">{journal}</a>
    <p className="mt-1 text-gray-300">{year}</p>
  </motion.div>
);

const ExtraItem = ({ activity, organization, year }: { activity: string; organization: string; year: string }) => (
  <motion.div className="bg-blue-800 p-6 rounded-lg shadow-lg text-center mb-4">
    <h3 className="text-xl font-bold">{activity}</h3>
    <p className="mt-2 text-gray-300">{organization} ({year})</p>
  </motion.div>
);

const LanguagesKnown = ({ languages }: { languages: string[] }) => (
  <motion.div className="bg-blue-800 p-6 rounded-lg shadow-lg text-center">
    <h3 className="text-xl font-bold">Languages</h3>
    <p className="mt-2 text-gray-300">{languages.join(", ")}</p>
  </motion.div>
);
