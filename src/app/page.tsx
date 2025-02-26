"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import "./globals.css"; // Import the global styles

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <Image src="./app/background.jpeg" alt="Background" layout="fill" objectFit="cover" className="absolute opacity-30" />
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <Image src="./app/profile.jpeg" width={150} height={150} className="profile-img" alt="Profile Picture" />
          <h1 className="text-4xl font-bold mt-4">Brinda Navakumar</h1>
          <p className="text-lg mt-2">Computer Vision Engineer | Robotics - AI Enthusiast</p>
        </motion.div>
      </section>

      {/* Sections */}
      <div className="section">
        <Section title="Education">
          <EducationEntry degree="Bachelor of Engineering" school="PES University" department="Electronics and Communcation Engineering" country="Bangalore, India" specialization="" link="https://www.pes.edu" />
          <EducationEntry degree="Master of Technology" school="National Institute of Technology Rourkela" department="Electronics and Communcation Engineering" country="Rourkela, India" specialization="Signal and Image Processing" link="https://nitrkl.ac.in/" />
          <EducationEntry degree="Master of Science" school="University of Surrey" department="Electronics Engineering" country="Guildford, United Kingdom" specialization="Computer Vision, Robotics and Machine Learning" link="https://www.surrey.ac.uk/" />
        </Section>

        <Section title="Work Experience">
          <WorkEntry company="Velankani AI and Cloud Solutions LLP" role="Technical Project Lead" country="Bangalore, India" duration="2022 - Present" link="https://www.velankanigroup.com" />
          <WorkEntry company="Velankani AI and Cloud Solutions LLP" role="Computer Vision Developer" country="Bangalore, India" duration="2021 - 2022" link="https://www.velankanigroup.com" />
          <WorkEntry company="Watchers (incubated in Foundation for Technology & Business Incubation (FTBI) NIT Rourkela" role="Technical Head" country="Rourkela, India" duration="2017 - 2018" link="https://www.ftbi-nitrkl.org/" />
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

function EducationEntry({ degree, school, department, country, specialization, link }: { degree : string, school: string; department: string; country: string; specialization: string; link: string }) {
  return (
    <div className="entry">
      <a href={link} target="_blank">{school}</a>
      <p>{degree}</p>
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