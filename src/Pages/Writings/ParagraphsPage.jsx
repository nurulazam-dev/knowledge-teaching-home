import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FiSearch, FiCopy, FiCheck } from "react-icons/fi";

// ---- Sample data (add as many as you want) ----
const paragraphsData = [
  {
    title: "My Family",
    classRange: "Class 3–6",
    content:
      "My family is very important to me. There are four members in my family: my father, mother, sister, and me. We love and support each other. My father works hard to provide for us, while my mother takes care of our home. In the evenings, we sit together and talk about our day. I feel very happy and safe with my family.",
  },
  {
    title: "My School",
    classRange: "Class 3–8",
    content:
      "The name of my school is Knowledge Teaching Home. It is one of the best institutions in our area. There are many students and good teachers. The classrooms are neat and clean and we have a big playground. I love my school very much because I learn discipline, honesty, and respect here.",
  },
  {
    title: "A Winter Morning",
    classRange: "Class 6–10",
    content:
      "A winter morning is cold and misty. Dew drops make the grass sparkle like pearls. People wear warm clothes and enjoy fresh date-juice and pithas. Though it is hard to get up early, the calm beauty and golden sunlight make the morning charming.",
  },
  {
    title: "A Rainy Day",
    classRange: "Class 6–10",
    content:
      "On a rainy day the sky remains cloudy and heavy showers fall at times. Streets become muddy and movement is difficult. Yet the rain washes the dust from trees and fields, and the fresh smell of wet soil brings peace to mind.",
  },
  {
    title: "Traffic Jam",
    classRange: "Class 7–12",
    content:
      "Traffic jam is a common problem in big cities. It wastes time, creates stress, and harms the economy. Causes include narrow roads, illegal parking, unplanned growth, and lack of traffic rules. Proper traffic management, public awareness, and improved public transport can reduce the problem.",
  },
  {
    title: "Tree Plantation",
    classRange: "Class 6–12",
    content:
      "Tree plantation means planting trees in a planned way. Trees give us oxygen, fruits, wood, shade, and protect soil from erosion. We should plant trees on roadsides, embankments, schools, and open spaces, and take care of them regularly to build a greener future.",
  },
  {
    title: "Load Shedding",
    classRange: "Class 7–12",
    content:
      "Load shedding is the temporary suspension of electricity. It disrupts study, business, treatment, and daily life. Major reasons are insufficient power generation and misuse of electricity. We should save energy, stop illegal connections, and use renewable sources to solve the problem.",
  },
  {
    title: "A School Library",
    classRange: "Class 5–10",
    content:
      "A school library is a treasure house of knowledge. It contains textbooks, story books, reference books, and magazines. Students borrow books and develop reading habits. A quiet and clean library enriches knowledge and builds character.",
  },
  {
    title: "Your Aim in Life",
    classRange: "Class 8–12",
    content:
      "Everyone should have a definite aim in life. My aim is to become a teacher to serve the nation by educating students. I study regularly, practice communication skills, and try to build honesty and patience to achieve my goal.",
  },
  {
    title: "Environmental Pollution",
    classRange: "Class 8–12",
    content:
      "Environmental pollution is a serious global issue. Air, water, and soil are polluted by smoke, waste, chemicals, and plastic. It harms plants, animals, and human health. Plantation, waste management, eco-friendly transport, and strict laws are essential to control pollution.",
  },
];

// ---- Utility: word count & reading time ----
const getStats = (text) => {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 180)); // ~180 wpm
  return { words, minutes };
};

export default function ParagraphsPage() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(paragraphsData[0]);
  const [copied, setCopied] = useState(false);
  const [fontSize, setFontSize] = useState("md"); // sm | md | lg

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return paragraphsData.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.content.toLowerCase().includes(q) ||
        p.classRange.toLowerCase().includes(q)
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
          English Paragraphs (Class 3–12)
        </motion.h1>
        <p className="text-gray-300 mt-3 max-w-3xl mx-auto">
          Browse and practice easy, exam-friendly paragraphs. Use search to find
          a topic quickly.
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
                placeholder="Search topics, class range..."
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
                        <span className="text-xs text-gray-300">
                          {item.classRange}
                        </span>
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

            {/* Paragraph body */}
            <div className={`mt-5 text-gray-100 ${fontClass} text-justify`}>
              {selected?.content}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
