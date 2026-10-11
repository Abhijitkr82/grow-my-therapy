const services = [
  {
    number: "01",
    title: "Anxiety & Panic",
    description:
      "Understand patterns of worry, manage overwhelming feelings, and develop practical tools for navigating anxiety with greater confidence.",
  },
  {
    number: "02",
    title: "Trauma Therapy",
    description:
      "Explore the impact of past experiences at a careful pace, with an emphasis on safety, stabilization, and feeling more grounded.",
  },
  {
    number: "03",
    title: "Burnout & Perfectionism",
    description:
      "Step back from constant pressure, reconnect with yourself, and explore more sustainable ways of living and working.",
  },
];

const faqs = [
  {
    question: "What concerns do you work with?",
    answer:
      "Dr. Maya Reynolds works with adults experiencing anxiety, panic, trauma-related concerns, professional burnout, perfectionism, and the effects of earlier life experiences.",
  },
  {
    question: "What therapy approaches do you use?",
    answer:
      "Her approach integrates cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques tailored to each client's needs.",
  },
  {
    question: "Do you offer online therapy?",
    answer:
      "Yes. Dr. Reynolds offers secure telehealth sessions for clients located in California, as well as in-person sessions in Santa Monica.",
  },
  {
    question: "What is your approach to trauma therapy?",
    answer:
      "Trauma work is paced carefully, with an emphasis on safety, stabilization, and helping clients feel more regulated in daily life.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f5ef] text-[#292c29]">
      <header className="border-b border-[#e8e3d9]">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-4 px-5 py-5 sm:px-8 md:px-10 lg:px-16"
        >
          <a href="#home" className="shrink-0">
            <span className="block font-serif text-xl tracking-tight sm:text-3xl">
              Dr. Maya Reynolds
            </span>
            <span className="mt-1 block text-[9px] tracking-[0.2em] text-[#719f9c] sm:text-xs sm:tracking-[0.3em]">
              CLINICAL PSYCHOLOGY
            </span>
          </a>

          <div className="order-3 flex w-full gap-5 overflow-x-auto whitespace-nowrap pb-1 text-[10px] tracking-[0.1em] sm:text-xs lg:order-none lg:w-auto lg:gap-6 lg:overflow-visible">
            <a href="#about" className="hover:text-[#719f9c]">ABOUT</a>
            <a href="#services" className="hover:text-[#719f9c]">SPECIALTIES</a>
            <a href="#approach" className="hover:text-[#719f9c]">APPROACH</a>
            <a href="#office" className="hover:text-[#719f9c]">OFFICE</a>
            <a href="#faqs" className="hover:text-[#719f9c]">FAQS</a>
          </div>

          <a
            href="#contact"
            className="shrink-0 rounded-full border border-[#454b46] px-4 py-3 text-[10px] tracking-wider transition hover:bg-[#454b46] hover:text-white sm:px-6 sm:text-xs"
          >
            CONTACT
          </a>
        </nav>
      </header>

      <section
        id="home"
        className="mx-auto grid max-w-[1440px] items-center md:min-h-[620px] md:grid-cols-[0.9fr_1.1fr]"
      >
        <div className="order-2 px-6 py-12 sm:px-10 md:order-1 md:px-10 md:py-12 lg:px-16">
          <p className="text-xs leading-6 tracking-[0.13em] text-[#526e6a] sm:text-sm sm:tracking-[0.15em]">
            THERAPY FOR ADULTS IN SANTA MONICA &amp; ACROSS CALIFORNIA
          </p>
          <h1 className="mt-6 max-w-xl font-serif text-4xl leading-[1.12] tracking-tight sm:text-5xl lg:text-[58px]">
            You don&apos;t have to keep holding it all together.
            <span className="mt-3 block italic text-[#719f9c]">
              There is room to feel better.
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#666b65] sm:text-lg sm:leading-8">
            Thoughtful, grounded therapy for adults navigating anxiety,
            trauma, and burnout. Find space to slow down, reconnect with
            yourself, and move forward at your own pace.
          </p>
          <a
            href="#contact"
            className="mt-7 inline-flex rounded-full bg-[#405b55] px-6 py-4 text-sm text-white transition hover:bg-[#304640] sm:px-7"
          >
            Explore Working Together
          </a>
          <p className="mt-4 text-xs leading-6 text-[#777a73]">
            In-person sessions in Santa Monica · Telehealth across California
          </p>
        </div>

        <div className="order-1 h-[360px] overflow-hidden bg-[#e8eeea] sm:h-[460px] md:order-2 md:h-[620px]">
          <img
            src="/dr-maya-reynolds.png"
            alt="Dr. Maya Reynolds, licensed clinical psychologist"
            className="h-full w-full object-cover object-[center_30%]"
            fetchPriority="high"
          />
        </div>
      </section>

      <section id="about" className="bg-[#e8eeea] px-6 py-20 sm:px-10 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-9 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <div>
            <p className="text-xs tracking-[0.2em] text-[#527b76]">GET TO KNOW YOUR THERAPIST</p>
            <h2 className="mt-5 font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
              You can look like you&apos;re doing fine and still feel overwhelmed inside.
            </h2>
          </div>
          <div className="self-center">
            <p className="text-base leading-8 text-[#59655d]">
              I&apos;m Dr. Maya Reynolds, PsyD, a licensed clinical psychologist based in Santa Monica, California. I work with thoughtful, high-achieving adults who may feel exhausted by constant worry, tension, overthinking, or the pressure to keep pushing forward.
            </p>
            <p className="mt-5 text-base leading-8 text-[#59655d]">
              My goal is to create a warm, collaborative space where you can understand what you&apos;re experiencing, work through what has been weighing on you, and develop a stronger relationship with yourself over time.
            </p>
            <a href="#approach" className="mt-7 inline-block text-sm underline decoration-[#719f9c] underline-offset-8">
              Learn about my approach
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="px-6 py-20 sm:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs tracking-[0.2em] text-[#527b76]">AREAS OF SUPPORT</p>
          <h2 className="mt-5 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
            Support for what you&apos;re carrying.
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-[#666b65]">
            Therapy offers an opportunity to understand your experiences with care, curiosity, and practical support.
          </p>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="border border-[#e3dfd6] bg-[#fbfaf6] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-9"
              >
                <span className="text-sm text-[#719f9c]">{service.number}</span>
                <h3 className="mt-8 font-serif text-2xl">{service.title}</h3>
                <p className="mt-5 text-sm leading-7 text-[#666b65]">{service.description}</p>
                <a href="#contact" className="mt-7 inline-block text-sm underline underline-offset-4">
                  Get in touch
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="bg-[#405b55] px-6 py-20 text-white sm:px-10 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs tracking-[0.2em] text-[#c1ded6]">A COLLABORATIVE APPROACH</p>
            <h2 className="mt-5 font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Practical tools, with room for deeper understanding.
            </h2>
          </div>
          <div>
            <p className="leading-8 text-[#e0e8e3]">
              My work integrates evidence-based approaches, including cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques.
            </p>
            <p className="mt-5 leading-8 text-[#e0e8e3]">
              We can work at a pace that feels supportive, with attention to safety, reflection, and the emotional and physical sides of what you are experiencing.
            </p>
          </div>
        </div>
      </section>

      <section id="office" className="px-6 py-20 sm:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs tracking-[0.2em] text-[#527b76]">THE SPACE</p>
          <div className="mt-5 grid gap-8 md:grid-cols-2 md:items-end">
            <h2 className="font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
              A quiet place to pause, reflect, and reconnect.
            </h2>
            <p className="leading-8 text-[#666b65]">
              The office is designed to feel calm, private, and grounding, with natural light and a comfortable, uncluttered environment. Secure telehealth sessions are also offered for clients located in California.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <img src="/office-1.jpeg" alt="A calm and welcoming therapy office" className="h-72 w-full rounded-xl object-cover" loading="lazy" />
            <img src="/office-2.jpeg" alt="Comfortable counseling room with natural light" className="h-72 w-full rounded-xl object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      <section id="faqs" className="bg-[#e8eeea] px-6 py-20 sm:px-10 md:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs tracking-[0.2em] text-[#527b76]">COMMON QUESTIONS</p>
          <h2 className="mt-5 font-serif text-3xl sm:text-4xl">A few things you may be wondering.</h2>
          <div className="mt-10 divide-y divide-[#cfd9d1]">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-medium">
                  {faq.question}
                  <span aria-hidden="true" className="text-xl text-[#527b76] transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-[#59655d]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-20 text-center sm:px-10 md:py-28">
        <p className="text-xs tracking-[0.2em] text-[#527b76]">WHEN YOU FEEL READY</p>
        <h2 className="mx-auto mt-5 max-w-3xl font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
          You don&apos;t have to figure everything out on your own.
        </h2>
        <p className="mx-auto mt-5 max-w-xl leading-8 text-[#666b65]">
          If you&apos;re considering therapy, the next step can begin with a conversation about what you need and whether we may be a good fit.
        </p>
        <p className="mt-6 text-sm text-[#666b65]">Santa Monica, California</p>
        <p className="mt-2 text-sm text-[#666b65]">In-person sessions and secure California telehealth</p>
        <p className="mx-auto mt-6 max-w-lg text-xs leading-6 text-[#777a73]">
          Concept website for a fictional therapist profile. Confirm contact details, address, and professional credentials before using this site publicly.
        </p>
        <a href="#home" className="mt-7 inline-flex rounded-full bg-[#405b55] px-7 py-4 text-sm text-white transition hover:bg-[#304640]">
          Back to top
        </a>
      </section>

      <footer className="border-t border-[#e3dfd6] px-6 py-7 text-center text-xs leading-6 text-[#777a73]">
        <p>Dr. Maya Reynolds, PsyD · Licensed Clinical Psychologist</p>
        <p>Santa Monica, California</p>
        <p className="mt-2">© 2026 Dr. Maya Reynolds. Website concept.</p>
      </footer>
    </main>
  );
}



