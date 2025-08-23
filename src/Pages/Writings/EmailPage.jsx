import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FiSearch, FiCopy, FiCheck } from "react-icons/fi";

/** ------------------ Sample Email Data ------------------ */
const emailsData = [
  {
    title: "Email to Your Friend About Your Hobby",
    classRange: "Class 6–10",
    category: "Informal",
    content: `Subject: My Favorite Hobby 🎨

Hi Rafi,
Hope you are fine. I wanted to share about my favorite hobby – painting. I spend a lot of my free time with colors and brushes. It helps me relax, improve creativity, and express feelings.

What’s your hobby? Let’s exchange ideas next time we meet.

Take care,
Sakib`,
  },
  {
    title: "Email to the Principal Requesting Leave",
    classRange: "Class 6–12",
    category: "Formal",
    content: `Subject: Prayer for Leave

Respected Sir,
With due respect, I beg to state that I am suffering from fever. The doctor has advised me to take rest for three days. Kindly grant me leave from 10 March to 12 March 2025.

Yours obediently,
Arman Hossain
Class 9, Roll 14`,
  },
  {
    title: "Email to Your Teacher Thanking Them",
    classRange: "Class 6–12",
    category: "Formal",
    content: `Subject: Thank You for Your Guidance

Respected Madam,
I am writing to sincerely thank you for your guidance and support during our final exams. Your teaching style made learning enjoyable, and your encouragement gave me confidence.

I am very grateful for everything.

Sincerely,
Nila`,
  },
  {
    title: "Email to Friend Inviting to Birthday Party",
    classRange: "Class 5–9",
    category: "Informal",
    content: `Subject: Invitation to My Birthday 🎂

Dear Rony,
I am excited to invite you to my birthday party on 20 March at 5:00 pm at our home. There will be games, music, and delicious food. Please come early so we can decorate together.

Waiting to celebrate with you!

Your loving friend,
Mim`,
  },
  {
    title: "Email to the Electricity Board About Power Failure",
    classRange: "Class 7–12",
    category: "Formal",
    content: `Subject: Power Failure Complaint

Dear Sir/Madam,
I want to inform you about the continuous power failure in our area since last night. It has caused great suffering for students and patients.

Please take immediate steps to restore electricity.

Regards,
Tanvir Ahmed
East Raozan, Chattogram`,
  },
];

/** ------------------ Helpers ------------------ */
const getStats = (text) => {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 180));
  return { words, minutes };
};

/** ------------------ Component ------------------ */
export default function EmailPage() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(emailsData[0]);
  const [copied, setCopied] = useState(false);
  const [fontSize, setFontSize] = useState("md");

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return emailsData.filter(
      (e) =>
        e.title.toLowerCase().includes(q) ||
        e.content.toLowerCase().includes(q) ||
        e.classRange.toLowerCase().includes(q) ||
        (e.category || "").toLowerCase().includes(q)
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
          English Emails (Formal & Informal)
        </motion.h1>
        <p className="text-gray-300 mt-3 max-w-3xl mx-auto">
          Browse useful and exam-friendly email samples. Search by topic, class
          range, or type (<i>Formal</i>, <i>Informal</i>).
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
                  onClick={copyText}
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

            {/* Email body */}
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
