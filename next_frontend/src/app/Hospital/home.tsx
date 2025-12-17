"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HospitalLanding() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = [
    {
      img: "/home1.jpg",
      quote: "Healing with compassion, powered by innovation.",
    },
    {
      img: "/home2.jpg",
      quote: "Your health, our priority — every heartbeat matters.",
    },
    {
      img: "/home3.jpeg",
      quote: "Trusted care for a healthier, happier tomorrow.",
    },
  ];

  const logo = "/logo.png";

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="font-sans text-gray-800">
      {/* ===== HEADER ===== */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="flex justify-between items-center py-4 px-6 md:px-12">
          {/* --- LOGO --- */}
          <div className="flex items-center space-x-2">
            <Image src={logo} alt="Hospital" width={70} height={60} />
            <span className="text-2xl font-bold text-blue-700">MAX</span>
          </div>

          {/* --- NAV MENU --- */}
          <nav className="hidden md:flex space-x-8 font-medium">
            {["Home", "About", "Departments", "Doctors", "Testimonials", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-blue-600 transition-colors"
                >
                  {item}
                </a>
              )
            )}
          </nav>

          {/* --- SEARCH + LOGIN BUTTONS (Desktop) --- */}
          <div className="hidden md:flex items-center space-x-4">
            {/* 🔍 Search Button */}
            <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition">
              🔍 Search
            </button>

            {/* 🔑 Login Button (replaces Appointment) */}
            <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
              Login
            </button>
          </div>

          {/* --- MOBILE MENU TOGGLE --- */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-2xl focus:outline-none"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* --- MOBILE MENU CONTENT --- */}
        {open && (
          <div className="bg-white shadow-md md:hidden flex flex-col items-center space-y-5 py-6">
            {["Home", "About", "Departments", "Doctors", "Testimonials", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  onClick={() => setOpen(false)}
                  className="hover:text-blue-600 transition-colors"
                >
                  {item}
                </a>
              )
            )}
            {/* 🔍 Search + Login in Mobile Menu */}
            <button className="border border-blue-600 text-blue-600 px-5 py-2 rounded-md hover:bg-blue-50 transition">
              🔍 Search
            </button>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
              Login
            </button>
          </div>
        )}
      </header>

      {/* ===== HERO / CAROUSEL ===== */}
      <section className="relative w-full h-screen overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute top-0 left-0 w-full h-full"
          >
            <Image
              src={slides[index].img}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-6">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-5xl md:text-6xl font-bold mb-6"
              >
                {slides[index].quote}
              </motion.h1>
              <p className="max-w-2xl text-lg mb-8">
                Experience world-class healthcare with a personal touch.
              </p>
              <button className="bg-blue-600 px-8 py-3 rounded-md hover:bg-blue-700 text-lg transition">
                Learn More
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20 grid md:grid-cols-2 gap-12 items-center">
        <Image
          src="/about.jpg"
          alt="About"
          width={500}
          height={400}
          className="rounded-xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold text-blue-700 mb-4">About Our Hospital</h2>
          <p className="text-gray-600 mb-4">
            For over 20 years, we’ve been committed to providing exceptional medical
            care through advanced technology, expert doctors, and compassionate
            service.
          </p>
          <p className="text-gray-600 mb-6">
            From emergency care to specialty treatments, we ensure your well-being
            with world-class facilities and a caring approach.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* ===== DEPARTMENTS ===== */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-10">Our Departments</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Cardiology", img: "/dept1.jpg" },
              { title: "Neurology", img: "/dept2.jpg" },
              { title: "Orthopedics", img: "/dept3.jpg" },
            ].map((dept, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <Image
                  src={dept.img}
                  alt={dept.title}
                  width={400}
                  height={250}
                  className="object-cover"
                />
                <h3 className="text-xl font-semibold text-blue-700 py-4">
                  {dept.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DOCTORS ===== */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-10">Our Doctors</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { name: "Dr. Anjali Nair", img: "/doc1.jpg", role: "Cardiologist" },
            { name: "Dr. Rahul Menon", img: "/doc2.jpg", role: "Neurologist" },
            { name: "Dr. Sneha Varma", img: "/doc3.jpg", role: "Orthopedic Surgeon" },
            { name: "Dr. Vivek Pillai", img: "/doc4.jpg", role: "Pediatrician" },
            { name: "Dr. Asha Kurian", img: "/doc5.jpg", role: "Dermatologist" },
            { name: "Dr. Ramesh Krishnan", img: "/doc6.jpg", role: "General Surgeon" },
          ].map((doc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white shadow-md rounded-xl overflow-hidden"
            >
              <Image
                src={doc.img}
                alt={doc.name}
                width={400}
                height={300}
                className="object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-blue-700">{doc.name}</h3>
                <p className="text-gray-600">{doc.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="bg-blue-50 py-20 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-10">Patient Testimonials</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Priya Rajan",
              img: "/patient1.jpg",
              quote:
                "The doctors were extremely professional and caring. The facilities were clean and modern. I’m grateful for the excellent treatment I received.",
            },
            {
              name: "Anoop Varghese",
              img: "/patient2.jpg",
              quote:
                "From the moment I walked in, the staff made me feel safe and cared for. The surgery went smoothly and recovery was quick. Highly recommend!",
            },
            {
              name: "Meera Nandakumar",
              img: "/patient3.jpg",
              quote:
                "Amazing experience! The pediatric department took such good care of my child — truly compassionate and skilled doctors.",
            },
          ].map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <Image
                src={p.img}
                alt={p.name}
                width={100}
                height={100}
                className="rounded-full mx-auto mb-4"
              />
              <p className="text-gray-600 italic mb-4">“{p.quote}”</p>
              <h4 className="text-blue-700 font-semibold">– {p.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-blue-700 text-white py-8 text-center">
        <p>© {new Date().getFullYear()} MAX Hospital | All Rights Reserved</p>
      </footer>
    </div>
  );
}
