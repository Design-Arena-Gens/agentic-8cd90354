 "use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

type Service = {
  title: string;
  description: string;
  icon: JSX.Element;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Iceem transformed our production line with bespoke automation that boosted efficiency by 38%. Their team was hands-on, responsive, and delivered exactly what we needed.",
    author: "Sami Khaldi",
    role: "Operations Director, Tunisie Plast"
  },
  {
    quote:
      "Their rapid maintenance response keeps our critical systems online. We trust Iceem to handle complex industrial challenges with precision and care.",
    author: "Amina Bouazizi",
    role: "Facility Manager, PharmaPlus"
  },
  {
    quote:
      "From concept to installation, Iceem guided us with clarity and expertise. The energy management solution they implemented paid for itself within months.",
    author: "Youssef Trabelsi",
    role: "CEO, SmartGrids North Africa"
  }
];

const services: Service[] = [
  {
    title: "Industrial Automation",
    description:
      "Design and integration of automated systems that streamline manufacturing processes and ensure consistent quality.",
    icon: (
      <svg
        aria-hidden="true"
        className="h-12 w-12 text-primary-light"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 48 48"
      >
        <path d="M9 34h30M24 14v20M13 26h22M17 8l-4 6 4 6M31 8l4 6-4 6" />
      </svg>
    )
  },
  {
    title: "Electrical Engineering",
    description:
      "Turnkey electrical installations, audits, and upgrades for commercial, industrial, and public sector projects across Tunisia.",
    icon: (
      <svg
        aria-hidden="true"
        className="h-12 w-12 text-primary-light"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 48 48"
      >
        <path d="M18 4h12l-3 16h11L14 44l5-18H11z" />
      </svg>
    )
  },
  {
    title: "Maintenance & Support",
    description:
      "Preventive and corrective maintenance programs with 24/7 availability to secure uptime and extend asset lifespan.",
    icon: (
      <svg
        aria-hidden="true"
        className="h-12 w-12 text-primary-light"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 48 48"
      >
        <path d="M34 24a10 10 0 10-10 10 7 7 0 017 7h7a17 17 0 00-4-11M20 20l8 8M28 20l-8 8" />
      </svg>
    )
  },
  {
    title: "Energy Management",
    description:
      "Smart monitoring and optimization strategies that reduce energy consumption while meeting sustainability goals.",
    icon: (
      <svg
        aria-hidden="true"
        className="h-12 w-12 text-primary-light"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 48 48"
      >
        <path d="M24 4l-6 12h8l-2 10 10-14h-8zM9 34c2.5 7 8 10 15 10s12.5-3 15-10" />
      </svg>
    )
  }
];

function useAutoplayCarousel(length: number, interval = 8000) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (length <= 1) {
      return;
    }

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % length);
    }, interval);

    return () => clearInterval(id);
  }, [length, interval]);

  return { index, setIndex };
}

function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const { index, setIndex } = useAutoplayCarousel(items.length);

  const handlePrev = () =>
    setIndex((current) => (current - 1 + items.length) % items.length);
  const handleNext = () => setIndex((current) => (current + 1) % items.length);

  const currentItem = useMemo(() => items[index], [index, items]);

  return (
    <section className="relative isolate overflow-hidden rounded-3xl bg-white/90 p-8 shadow-glow backdrop-blur transition hover:shadow-xl focus-within:shadow-xl sm:p-12">
      <div
        aria-live="polite"
        className="space-y-6 animate-fadeUp"
        key={currentItem.author}
      >
        <p className="text-lg leading-relaxed text-slate-700 md:text-xl">
          “{currentItem.quote}”
        </p>
        <div>
          <p className="font-semibold text-primary-dark">{currentItem.author}</p>
          <p className="text-sm text-slate-500">{currentItem.role}</p>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between gap-6">
        <div className="flex gap-2" role="tablist" aria-label="Testimonials">
          {items.map((item, itemIndex) => (
            <button
              key={item.author}
              type="button"
              role="tab"
              aria-selected={index === itemIndex}
              aria-controls={`testimonial-${itemIndex}`}
              onClick={() => setIndex(itemIndex)}
              className={`h-2.5 w-8 rounded-full transition ${
                index === itemIndex ? "bg-primary" : "bg-slate-200"
              }`}
            >
              <span className="sr-only">Go to testimonial from {item.author}</span>
            </button>
          ))}
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={handlePrev}
            className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            aria-label="Previous testimonial"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            aria-label="Next testimonial"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-[700px] bg-gradient-to-b from-primary/15 via-slate-50 to-transparent blur-3xl" />
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-glow">
            <svg
              aria-hidden="true"
              className="h-7 w-7 text-primary"
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M24 4l18 10v20L24 44 6 34V14z" />
              <path d="M24 44V24L6 14" />
              <path d="M24 24l18-10" />
            </svg>
          </span>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Iceem.tn
            </p>
            <p className="text-lg font-semibold text-slate-900">
              Engineering Excellence
            </p>
          </div>
        </div>
        <nav className="hidden gap-8 text-sm font-medium text-slate-700 md:flex">
          <Link href="#services" className="transition hover:text-primary">
            Services
          </Link>
          <Link href="#expertise" className="transition hover:text-primary">
            Expertise
          </Link>
          <Link href="#testimonials" className="transition hover:text-primary">
            Testimonials
          </Link>
          <Link href="#contact" className="transition hover:text-primary">
            Contact
          </Link>
        </nav>
        <Link
          href="#contact"
          className="gradient-border inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
        >
          Get a Quote
          <svg
            aria-hidden="true"
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </Link>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24">
        <section className="grid items-center gap-12 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-10">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-primary-dark">
                Smart Industry Partner
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Elevate your operations with tailored engineering and automation.
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-slate-700">
                Iceem combine cutting-edge engineering with on-the-ground
                expertise to design, deploy, and maintain industrial solutions
                that unlock performance, reliability, and sustainability.
              </p>
            </div>
            <div className="grid gap-4 text-sm sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <p className="text-3xl font-semibold text-primary-dark">15+</p>
                <p className="mt-2 text-slate-600">
                  years delivering high-impact engineering projects across MENA.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <p className="text-3xl font-semibold text-primary-dark">98%</p>
                <p className="mt-2 text-slate-600">
                  client satisfaction thanks to measurable results and responsive
                  support.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="gradient-border inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Contact Us
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
              <a
                href="https://iceem.tn"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 font-semibold text-primary transition hover:-translate-y-0.5 hover:border-primary hover:text-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                View Projects
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[40px] bg-gradient-to-tr from-primary/25 via-accent/30 to-transparent blur-2xl" />
            <div className="overflow-hidden rounded-[32px] border border-white/30 bg-slate-900 shadow-glow">
              <Image
                src="https://images.unsplash.com/photo-1581092334554-18d1dee8d76e?auto=format&fit=crop&w=1200&q=80"
                alt="Engineers collaborating on an industrial automation system"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section id="services" className="space-y-12">
          <div className="space-y-3">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Services
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Comprehensive expertise for smart infrastructure.
            </h2>
            <p className="max-w-2xl text-base text-slate-600">
              From concept and engineering to maintenance and optimization, Iceem
              delivers end-to-end support designed around your strategic
              priorities.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus-within:-translate-y-1 focus-within:shadow-lg"
              >
                <div className="absolute inset-0 -z-10 translate-y-full bg-gradient-to-br from-primary/10 via-white to-accent/10 transition group-hover:translate-y-0" />
                <div className="flex items-center gap-6">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    {service.icon}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="expertise"
          className="grid gap-12 rounded-[40px] border border-slate-200 bg-white/80 p-10 lg:grid-cols-2"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">
              A partner across every stage of your industrial transformation.
            </h2>
            <p className="text-base text-slate-600">
              We align multidisciplinary teams—engineers, automation specialists,
              and maintenance experts—to translate your vision into resilient,
              scalable solutions. Our agile methodology keeps projects on time and
              transparent at every milestone.
            </p>
            <ul className="grid gap-4 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                Feasibility studies, detailed engineering, and rapid prototyping.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                PLC programming, SCADA integration, and IIoT deployment.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                Preventive maintenance with predictive analytics and remote
                monitoring.
              </li>
            </ul>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-primary/20 bg-primary/10 p-6 shadow-inner">
              <h3 className="text-4xl font-semibold text-primary-dark">150+</h3>
              <p className="mt-3 text-sm text-primary-dark/80">
                industrial sites modernized with energy-efficient technologies.
              </p>
            </div>
            <div className="rounded-3xl border border-accent/30 bg-accent/10 p-6 shadow-inner">
              <h3 className="text-4xl font-semibold text-primary-dark">24/7</h3>
              <p className="mt-3 text-sm text-primary-dark/80">
                on-call support across Tunisia ensuring your operations stay
                online.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-inner sm:col-span-2">
              <h3 className="text-xl font-semibold text-slate-900">
                Certified & Compliant
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                ISO 9001 certified. Projects delivered in alignment with
                international safety standards, environmental regulations, and WCAG
                recommendations for digital interfaces.
              </p>
            </div>
          </div>
        </section>

        <section id="testimonials" className="space-y-12">
          <div className="space-y-3">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Testimonials
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Trusted by leaders across energy, manufacturing, and pharma.
            </h2>
          </div>
          <TestimonialCarousel items={testimonials} />
        </section>

        <section
          id="contact"
          className="relative overflow-hidden rounded-[40px] bg-primary text-white"
        >
          <div className="absolute inset-y-0 right-0 hidden w-1/2 translate-x-1/3 bg-gradient-to-l from-white/10 via-transparent to-transparent blur-3xl lg:block" />
          <div className="relative grid gap-12 p-10 lg:grid-cols-[1.2fr,0.8fr] lg:p-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Ready to modernize your infrastructure?
              </h2>
              <p className="text-base text-white/80">
                Tell us about your challenge and the outcomes you are targeting.
                Our experts will craft a proposal tailored to your operational and
                sustainability goals.
              </p>
              <a
                href="mailto:contact@iceem.tn"
                className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 font-semibold text-primary transition hover:-translate-y-0.5 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                Get a Quote
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="space-y-5 rounded-3xl border border-white/20 bg-white/5 p-8 backdrop-blur">
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-white/70">
                  Contact
                </p>
                <p className="mt-2 text-lg font-semibold">+216 71 000 000</p>
                <p className="text-white/70">contact@iceem.tn</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-white/70">
                  Address
                </p>
                <p className="mt-2 text-white/80">
                  Technopole El Ghazela, Ariana<br />
                  Tunis, Tunisia
                </p>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/company/iceem"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/20 p-3 text-white transition hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                  aria-label="LinkedIn"
                >
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 5 2.12 5 3.5zm.02 4.5H0v16h5V8zm7 0h-5v16h5v-8.4c0-4.67 6-5.05 6 0V24h5v-9.86C24 7.88 16.53 8.1 12 12.14V8z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/iceem"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/20 p-3 text-white transition hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                  aria-label="Facebook"
                >
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.9.16 1.9.16v2.1h-1.1c-1.1 0-1.4.7-1.4 1.4V12h2.4l-.4 3h-2v7A10 10 0 0 0 22 12" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white/70">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Iceem. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#services"
              className="transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Services
            </Link>
            <Link
              href="#testimonials"
              className="transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
