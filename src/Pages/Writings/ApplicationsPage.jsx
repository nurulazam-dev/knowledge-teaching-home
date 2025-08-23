import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FiSearch, FiCopy, FiCheck } from "react-icons/fi";

/** ------------------ Sample Applications Data ------------------ */
const applicationsData = [
  {
    title: "Application to the Headmaster for Sick Leave",
    classRange: "Class 6–12",
    category: "Leave",
    content: `To
The Headmaster
Knowledge Teaching Home
East Raozan, Chattogram

Subject: Prayer for sick leave

Sir,
With due respect, I beg to state that I have been suffering from fever since yesterday. The doctor advised me to take complete bed rest for three days. Therefore, I am unable to attend classes from 10 March to 12 March 2025.

I would be grateful if you kindly grant me leave for the mentioned period.

Yours obediently,
Arman Hossain
Class: 9, Roll: 14
Date: 10 March 2025`,
  },
  {
    title: "Application for Transfer Certificate (TC)",
    classRange: "Class 6–12",
    category: "Academic",
    content: `To
The Headmaster
Knowledge Teaching Home
East Raozan, Chattogram

Subject: Prayer for a Transfer Certificate

Sir,
I beg to state that my father has been transferred to Dhaka. As a result, our family will shift there next week. Therefore, I require a Transfer Certificate to get admitted to a new institution.

I shall be grateful if you kindly issue my TC at your earliest convenience.

Most obediently,
Tanvir Ahmed
Class: 8, Roll: 07
Date: 16 March 2025`,
  },
  {
    title: "Application for Permission to Arrange a Study Tour",
    classRange: "Class 8–12",
    category: "Permission",
    content: `To
The Principal
Knowledge Teaching Home
East Raozan, Chattogram

Subject: Permission to arrange a study tour

Sir,
We, the students of Class 10, want to arrange a study tour to the Ethnological Museum, Chattogram on 20 March 2025 to enrich our practical knowledge of history and culture. Two teachers have kindly agreed to guide us. We will follow all rules and maintain proper discipline.

We humbly request you to permit us and provide necessary support.

Sincerely yours,
Class Representative
Class: 10, Section: A
Date: 11 March 2025`,
  },
  {
    title: "Application for Full Free Studentship",
    classRange: "Class 6–12",
    category: "Financial",
    content: `To
The Headmaster
Knowledge Teaching Home
East Raozan, Chattogram

Subject: Prayer for full free studentship

Sir,
I am a student of Class 7 in your school. My father is a poor farmer, and it is very difficult for him to bear my educational expenses. I am a regular and meritorious student and stood first in my class last year.

Therefore, I pray and hope that you will kindly grant me full free studentship so I can continue my studies.

Yours obediently,
Samiul Karim
Class: 7, Roll: 05
Date: 12 March 2025`,
  },
  {
    title: "Application for Setting up a Common Room",
    classRange: "Class 8–12",
    category: "Facility",
    content: `To
The Headmaster
Knowledge Teaching Home
East Raozan, Chattogram

Subject: Prayer for setting up a common room

Sir,
We, the students of your school, beg to state that our school has no common room for recreation. As a result, students have no place to spend their leisure time during breaks. A common room with newspapers, magazines, and indoor games will benefit us greatly.

We therefore request you to kindly arrange a common room for the betterment of students.

Yours obediently,
The Students
Date: 15 March 2025`,
  },
];

/** ------------------ Helpers ------------------ */
const getStats = (text) => {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 180)); // ~180 wpm
  return { words, minutes };
};

/** ------------------ Component ------------------ */
export default function ApplicationsPage() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(applicationsData[0]);
  const [copied, setCopied] = useState(false);
  const [fontSize, setFontSize] = useState("md");

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return applicationsData.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.content.toLowerCase().includes(q) ||
        a.classRange.toLowerCase().includes(q) ||
        (a.category || "").toLowerCase().includes(q)
    );
  }, [query]);

  const { words, minutes } = useMemo(
    () => getStats(selected?.content || ""),
    [selected]
  );

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(
        `${selected.title}\n\n${selected.content}`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (e) {
      console.error("Copy failed", e);
    }
  };

  const fontClass =
    fontSize === "sm"
      ? "text-base leading-7"
      : fontSize === "lg"
      ? "text-xl leading-9"
      : "text-lg leading-8";

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#050d1a] to-[#0a1629] text-white py-16 px-6 md:px-10">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-10">
        <motion.h1
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold"
        >
          English Applications
        </motion.h1>
        <p className="text-gray-300 mt-3 max-w-3xl mx-auto">
          Browse important applications for school & college. Search by topic,
          category, or class range.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur">
            {/* Search */}
            <div className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2 mb-4">
              <FiSearch className="text-gray-300" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search titles, class range, type..."
                className="w-full bg-transparent outline-none placeholder-gray-400 text-sm"
              />
            </div>

            {/* List */}
            <ul className="max-h-[520px] overflow-auto pr-1 space-y-2">
              {filtered.map((item) => {
                const active = selected?.title === item.title;
                return (
                  <li key={item.title}>
                    <button
                      onClick={() => setSelected(item)}
                      className={`w-full text-left rounded-xl px-3 py-3 transition
                        ${
                          active
                            ? "bg-orange-500/20 border border-orange-500/40"
                            : "bg-white/0 hover:bg-white/10 border border-white/10"
                        }
                      `}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">{item.title}</span>
                        <div className="flex items-center gap-2 text-xs text-gray-300">
                          <span className="hidden sm:inline">
                            {item.classRange}
                          </span>
                          <span className="px-2 py-0.5 rounded bg-white/10">
                            {item.category}
                          </span>
                        </div>
                      </div>
                    </button>
                  </li>
                );
              })}

              {filtered.length === 0 && (
                <p className="text-gray-400 text-sm px-1 py-2">
                  No results found for “{query}”.
                </p>
              )}
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2">
          <motion.div
            key={selected?.title}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-lg backdrop-blur"
          >
            {/* Header row */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  {selected?.title}
                </h2>
                <div className="mt-1 text-sm text-gray-300">
                  <span className="mr-4">{selected?.classRange}</span>
                  <span className="mr-4">{selected?.category}</span>
                  <span>
                    {words} words • ~{minutes} min read
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <div className="bg-white/10 rounded-xl p-1 flex">
                  {["sm", "md", "lg"].map((s) => (
                    <button
                      key={s}
                      onClick={() => setFontSize(s)}
                      className={`px-3 py-1 rounded-lg text-sm ${
                        fontSize === s
                          ? "bg-orange-600"
                          : "hover:bg-white/10 text-gray-200"
                      }`}
                    >
                      {s.toUpperCase()}
                    </button>
                  ))}
                </div>
                <button
                  onClick={async () => {
                    await copyText();
                  }}
                  className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-lg font-medium transition"
                >
                  {copied ? (
                    <>
                      <FiCheck /> Copied
                    </>
                  ) : (
                    <>
                      <FiCopy /> Copy
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Application body */}
            <div
              className={`mt-5 text-gray-100 ${fontClass} whitespace-pre-line`}
            >
              {selected?.content}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
