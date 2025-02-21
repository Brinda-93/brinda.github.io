"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import "./globals.css"; // Import the global styles

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <Image src="/background.jpeg" alt="Background" layout="fill" objectFit="cover" className="absolute opacity-30" />
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <Image src="/profile.jpg" width={150} height={150} className="profile-img" alt="Profile Picture" />
          <h1 className="text-4xl font-bold mt-4">Brinda Navakumar</h1>
          <p className="text-lg mt-2">Computer Vision Engineer | Robotics - AI Enthusiast</p>
        </motion.div>
      </section>

      {/* Sections */}
      <div className="section">
        <Section title="Education">
          <EducationEntry degree="Bachelor of Engineering" school="PES University" department="Electronics and Communcation Engineering" country="Bangalore, India" specialization="" link="https://www.pes.edu" />
          <EducationEntry degree="Bachelor of Engineering" school="PES University" department="Electronics and Communcation Engineering" country="Bangalore, India" specialization="" link="https://www.pes.edu" />
        </Section>

        <Section title="Work Experience">
          <WorkEntry company="Google" role="Software Engineer" country="USA" duration="2020 - Present" link="https://www.google.com" />
          <WorkEntry company="Microsoft" role="AI Researcher" country="USA" duration="2018 - 2020" link="https://www.microsoft.com" />
        </Section>

        <Section title="Projects">
          <Project title="AI Chatbot" description="Developed an AI-powered chatbot for customer support." />
          <Project title="Portfolio Website" description="Built a responsive personal portfolio using Next.js." />
        </Section>

        <Section title="Awards & Recognitions">
          <ListEntry text="Best AI Research Paper - 2022" />
          <ListEntry text="Top 10 Innovators in Tech - Forbes 2021" />
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="fade-in">
      <h2>{title}</h2>
      <div>{children}</div>
    </motion.div>
  );
}

function EducationEntry({ school, department, country, specialization, link }: { school: string; department: string; country: string; specialization: string; link: string }) {
  return (
    <div className="entry">
      <a href={link} target="_blank">{school}</a>
      <p>{department} - {specialization}</p>
      <p className="text-sm">{country}</p>
    </div>
  );
}

function WorkEntry({ company, role, country, duration, link }: { company: string; role: string; country: string; duration: string; link: string }) {
  return (
    <div className="entry">
      <a href={link} target="_blank">{company}</a>
      <p>{role}</p>
      <p className="text-sm">{country} | {duration}</p>
    </div>
  );
}

function Project({ title, description }: { title: string; description: string }) {
  return (
    <div className="entry">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function ListEntry({ text }: { text: string }) {
  return <p className="list-entry">{text}</p>;
}


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
          role="Technical Project Lead"
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
      <SectionHeader title="Awards & Recognitions" />
      <div className="p-10">
        <AwardItem title="Best AI Research Paper" organization="ICML 2023" year="2023" />
        <AwardItem title="Top Innovator Award" organization="TechFest 2022" year="2022" />
      </div>
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

const ExperienceItem = ({ role, company, country, link, duration }: { role: string; company: string; country: string; link: string; duration: string }) => (
  <motion.div className="bg-blue-800 p-6 rounded-lg shadow-lg text-center mb-4">
    <h3 className="text-xl font-bold">{role}</h3>
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
