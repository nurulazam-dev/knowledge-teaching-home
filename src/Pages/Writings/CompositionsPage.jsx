import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FiSearch, FiCopy, FiCheck } from "react-icons/fi";

/** ------------------ Sample Composition Data ------------------ */
const compositionsData = [
  {
    title: "The Season I Like Most",
    classRange: "Class 6–10",
    content: `Of all the seasons in Bangladesh, winter is the one I like most. The sky remains clear, and the weather is cool and comfortable. We enjoy fresh vegetables, pithas, and date juice. Winter mornings are foggy, and the golden rays of the sun bring a calm beauty. Though the days are short, winter gives me joy and refreshment.`,
  },
  {
    title: "A Village Fair",
    classRange: "Class 6–10",
    content: `A village fair is a traditional festival in rural Bangladesh. It is usually held on the occasion of Pahela Baishakh, religious festivals, or after harvest. People of all ages gather at the fair. Various stalls sell toys, sweets, pottery, and household items. Circus shows, puppet plays, and magic shows add joy. It reflects our culture and gives rural people entertainment.`,
  },
  {
    title: "A Journey by Boat",
    classRange: "Class 6–12",
    content: `Bangladesh is a land of rivers, so a boat journey is very common. Last year, I had a journey by boat from Raozan to Sandwip. The river was calm, and the boat sailed smoothly. On both sides, I saw green fields, villages, and trees. Fishermen were catching fish, and children were swimming. It was a beautiful and peaceful experience that I will never forget.`,
  },
  {
    title: "A Journey by Train",
    classRange: "Class 7–12",
    content: `A train journey is enjoyable and comfortable. During the last vacation, I traveled from Chattogram to Dhaka by train. The train passed through villages, fields, and rivers. I saw farmers working, children playing, and birds flying in the sky. Vendors sold snacks and tea at every station. The natural beauty and thrilling sound of the train made the journey memorable.`,
  },
  {
    title: "My Favourite Hobby",
    classRange: "Class 6–8",
    content: `Everyone should have a hobby to use free time properly. My favourite hobby is gardening. I grow flowers, vegetables, and fruits in our small garden. I water them daily and take care of them. It keeps me healthy, teaches patience, and gives me joy. Gardening also makes our house beautiful and provides fresh vegetables for my family.`,
  },
  {
    title: "Science in Everyday Life",
    classRange: "Class 8–12",
    content: `We cannot imagine life without science. It has brought great changes in communication, medicine, transport, and education. Mobile phones, the internet, and computers help us connect with the world. Electricity gives us light and power. Medicines cure diseases, and vehicles save time. But science also has dangers like misuse of technology and environmental pollution. We must use science properly for the welfare of mankind.`,
  },
];

/** ------------------ Utility ------------------ */
const getStats = (text) => {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 180)); // ~180 words/min
  return { words, minutes };
};

/** ------------------ Component ------------------ */
export default function CompositionsPage() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(compositionsData[0]);
  const [copied, setCopied] = useState(false);
  const [fontSize, setFontSize] = useState("md");

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return compositionsData.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.content.toLowerCase().includes(q) ||
        c.classRange.toLowerCase().includes(q)
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
          English Compositions (Class 6–12)
        </motion.h1>
        <p className="text-gray-300 mt-3 max-w-3xl mx-auto">
          Browse and practice exam-friendly English compositions. Use search to
          quickly find your topic.
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

            {/* Composition body */}
            <div className={`mt-5 text-gray-100 ${fontClass} text-justify`}>
              {selected?.content}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
