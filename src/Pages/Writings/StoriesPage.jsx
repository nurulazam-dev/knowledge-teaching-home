import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FiSearch, FiCopy, FiCheck } from "react-icons/fi";

// ---- Sample data (extend freely) ----
const storiesData = [
  {
    title: "The Honest Woodcutter",
    classRange: "Class 3–8",
    content: `Once upon a time, a poor woodcutter lived in a village. One day, while cutting a tree beside a river, his axe fell into the water. He was very sad and started crying. Suddenly, a water goddess appeared and asked why he was crying. 
The woodcutter explained everything. The goddess brought a golden axe, but the woodcutter said it was not his. Then she brought a silver axe, but again he refused. Finally, she gave him his own iron axe. 
The goddess was pleased with his honesty and gave him all three axes. 
Moral: Honesty is the best policy.`,
  },
  {
    title: "The Lion and the Mouse",
    classRange: "Class 3–7",
    content: `A lion was sleeping in the forest. A mouse ran over his body. The lion woke up and caught the mouse in anger. The mouse begged for mercy and promised to help him one day. The lion laughed and let him go. 
After a few days, the lion was caught in a hunter’s net. The mouse came and cut the net with its sharp teeth. The lion became free and thanked the mouse. 
Moral: Even small friends can be great helpers.`,
  },
  {
    title: "Slow and Steady Wins the Race",
    classRange: "Class 4–10",
    content: `Once, a hare and a tortoise argued about who could run faster. The hare laughed at the tortoise’s slowness. They decided to have a race. The race began. The hare ran very fast and soon became far ahead. He thought he could rest for a while, so he slept under a tree. 
The tortoise moved slowly but steadily and passed the sleeping hare. Finally, the tortoise reached the goal first. When the hare woke up, it was too late. 
Moral: Slow and steady wins the race.`,
  },
  {
    title: "Unity is Strength",
    classRange: "Class 5–10",
    content: `There was a farmer who had four sons. They always quarreled with one another. The farmer was very unhappy. One day, he called his sons and gave them a bundle of sticks to break. Each tried, but none could break it. Then the farmer untied the bundle and gave them sticks one by one. This time, they broke the sticks easily. 
The farmer said, “If you stay united, nobody can harm you. But if you quarrel, you will be weak.” 
Moral: Unity is strength.`,
  },
  {
    title: "The Fox and the Grapes",
    classRange: "Class 3–6",
    content: `One hot day, a hungry fox was looking for food. He saw a vine full of ripe grapes. The grapes were high, and he could not reach them. He jumped and jumped but failed again and again. Finally, he gave up and walked away saying, “The grapes are sour.” 
Moral: It is easy to dislike what you cannot get.`,
  },
];

// ---- Utility: word count & reading time ----
const getStats = (text) => {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 180)); // ~180 wpm
  return { words, minutes };
};

export default function StoriesPage() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(storiesData[0]);
  const [copied, setCopied] = useState(false);
  const [fontSize, setFontSize] = useState("md"); // sm | md | lg

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return storiesData.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.content.toLowerCase().includes(q) ||
        s.classRange.toLowerCase().includes(q)
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
    <section className="min-h-screen bg-gradient-to-b from-[#050d1a] to-[#0a1629] text-white py-6 px-6 md:px-10">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-10">
        <motion.h1
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold"
        >
          English Stories (Class 3–12)
        </motion.h1>
        <p className="text-gray-300 mt-3 max-w-3xl mx-auto">
          Read and practice moral stories in simple English. Use search to find
          a story quickly.
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
                placeholder="Search stories, class range..."
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

            {/* Story body */}
            <div
              className={`mt-5 text-gray-100 ${fontClass} text-justify whitespace-pre-line`}
            >
              {selected?.content}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
