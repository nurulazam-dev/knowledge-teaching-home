import { useState } from "react";
import { motion } from "framer-motion";

/* const grammarTopics = [
  {
    id: 1,
    title: "Noun (বিশেষ্য)",
    description:
      "Noun হলো এমন একটি শব্দ যা কোন ব্যক্তি, স্থান, বস্তু বা ভাব প্রকাশ করে। যেমন: Book, Dhaka, Student, Honesty ইত্যাদি।",
    examples: "Example: Rahim is a good boy. (Rahim = Noun)",
  },
  {
    id: 2,
    title: "Pronoun (সর্বনাম)",
    description:
      "Pronoun হলো Noun এর পরিবর্তে ব্যবহৃত শব্দ। এটি পুনরাবৃত্তি এড়ায়। যেমন: He, She, It, They ইত্যাদি।",
    examples: "Example: Rahim is a student. He reads in class 5.",
  },
  {
    id: 3,
    title: "Verb (ক্রিয়া)",
    description:
      "Verb হলো কাজ বোঝায়। এটি বাক্যে কর্তার কাজ নির্দেশ করে। যেমন: Run, Eat, Read, Write ইত্যাদি।",
    examples: "Example: She reads a book. (reads = Verb)",
  },
  {
    id: 4,
    title: "Adjective (বিশেষণ)",
    description:
      "Adjective হলো এমন শব্দ যা Noun বা Pronoun এর গুণাগুণ প্রকাশ করে। যেমন: Good, Tall, Beautiful ইত্যাদি।",
    examples: "Example: He is a tall boy. (tall = Adjective)",
  },
  {
    id: 5,
    title: "Tense (কাল)",
    description:
      "Tense হলো ক্রিয়ার সময় নির্দেশ করে। তিন প্রকার: Present, Past, Future.",
    examples:
      "Example: I eat rice. (Present), I ate rice. (Past), I will eat rice. (Future)",
  },
]; */
const grammarTopics = [
  {
    id: 1,
    title: "Noun (বিশেষ্য)",
    content: `
বিশেষ্য হলো এমন শব্দ যা কোনো ব্যক্তি, স্থান, বস্তু, প্রাণী বা ধারণার নাম প্রকাশ করে।
উদাহরণ: Rahim, বই, ঢাকা, কুকুর, ভালোবাসা।
ধরন:
1. Proper Noun (ব্যক্তিনাম বিশেষ্য) - যেমন Dhaka, Rahim
2. Common Noun (জাতিবাচক বিশেষ্য) - যেমন city, boy
3. Collective Noun (সমষ্টিবাচক বিশেষ্য) - যেমন team, class
4. Abstract Noun (গুণবাচক বিশেষ্য) - যেমন honesty, beauty
5. Material Noun (পদার্থবাচক বিশেষ্য) - যেমন gold, water
    `,
  },
  {
    id: 2,
    title: "Pronoun (সর্বনাম)",
    content: `
সর্বনাম হলো যে শব্দ বিশেষ্যের পরিবর্তে ব্যবহৃত হয়।
উদাহরণ: I, he, she, they, it।
ধরন:
1. Personal Pronoun (ব্যক্তিবাচক সর্বনাম) - যেমন I, we, he, she
2. Demonstrative Pronoun (নির্দেশক সর্বনাম) - যেমন this, that, those
3. Interrogative Pronoun (প্রশ্নবাচক সর্বনাম) - যেমন who, what
4. Relative Pronoun (সম্পর্কবাচক সর্বনাম) - যেমন who, which, that
5. Reflexive Pronoun (আত্মপ্রত্যয়ী সর্বনাম) - যেমন myself, himself
    `,
  },
  {
    id: 3,
    title: "Adjective (বিশেষণ)",
    content: `
বিশেষণ হলো যে শব্দ বিশেষ্যের গুণ, পরিমাণ, অবস্থা ইত্যাদি প্রকাশ করে।
উদাহরণ: good boy, five books, beautiful flower।
ধরন:
1. Adjective of Quality (গুণবাচক বিশেষণ)
2. Adjective of Quantity (পরিমাণবাচক বিশেষণ)
3. Adjective of Number (সংখ্যাবাচক বিশেষণ)
4. Demonstrative Adjective (নির্দেশক বিশেষণ)
5. Interrogative Adjective (প্রশ্নবাচক বিশেষণ)
    `,
  },
  {
    id: 4,
    title: "Verb (ক্রিয়া)",
    content: `
ক্রিয়া হলো এমন শব্দ যা কাজ বা অবস্থার প্রকাশ করে।
উদাহরণ: eat, play, go, run।
ধরন:
1. Finite Verb (সীমাবদ্ধ ক্রিয়া)
2. Non-Finite Verb (অসীম ক্রিয়া) – Infinitive, Gerund, Participle
3. Auxiliary Verb (সহায়ক ক্রিয়া) – is, am, are, have, will
    `,
  },
  {
    id: 5,
    title: "Tense (কাল)",
    content: `
কাল হলো কাজের সময় প্রকাশ করার পদ্ধতি। ইংরেজিতে তিনটি প্রধান কাল আছে:
1. Present Tense (বর্তমান কাল) – যেমন I play, He goes
2. Past Tense (অতীত কাল) – যেমন I played, He went
3. Future Tense (ভবিষ্যৎ কাল) – যেমন I will play, He will go

প্রতিটি কালের আবার চারটি ধরন আছে: 
- Simple, Continuous, Perfect, Perfect Continuous।
    `,
  },
  {
    id: 6,
    title: "Article (আর্টিকেল)",
    content: `
Article হলো বিশেষ্য শব্দের আগে বসানো একটি নির্দিষ্ট শব্দ।
দুই ধরনের Article আছে:
1. Definite Article: the (যেমন The sun, The book)
2. Indefinite Article: a, an (যেমন a boy, an apple)
    `,
  },
  {
    id: 7,
    title: "Preposition (অব্যয়)",
    content: `
Preposition হলো এমন শব্দ যা Noun বা Pronoun এর আগে বসে এবং অন্য শব্দের সাথে সম্পর্ক প্রকাশ করে।
উদাহরণ: in, on, at, by, with, from, to।
    `,
  },
  {
    id: 8,
    title: "Conjunction (সমুচ্চয়ী অব্যয়)",
    content: `
Conjunction হলো দুটি শব্দ, বাক্য বা clause কে যুক্ত করে।
উদাহরণ: and, but, or, because, although।
    `,
  },
  {
    id: 9,
    title: "Voice (বাক্যের রূপান্তর)",
    content: `
Voice হলো বাক্যে Subject এবং Object এর মধ্যে সম্পর্ক প্রকাশের প্রক্রিয়া।
1. Active Voice: যখন Subject কাজটি করে। (Rahim plays football)
2. Passive Voice: যখন Subject কাজটি গ্রহণ করে। (Football is played by Rahim)
    `,
  },
  {
    id: 10,
    title: "Narration (অভিধান/বর্ণনা)",
    content: `
Narration হলো Direct Speech থেকে Indirect Speech এ পরিবর্তনের প্রক্রিয়া।
1. Direct Speech: He said, "I am happy."
2. Indirect Speech: He said that he was happy.
    `,
  },
  {
    id: 11,
    title: "Transformation of Sentences",
    content: `
Sentence পরিবর্তন করার বিভিন্ন ধরণ:
1. Assertive to Interrogative
2. Assertive to Exclamatory
3. Active to Passive
4. Simple to Complex to Compound
    `,
  },
  {
    id: 12,
    title: "Modal Verbs (সহায়ক ক্রিয়া)",
    content: `
Modal Verb হলো এমন সহায়ক ক্রিয়া যা ক্ষমতা, প্রয়োজন, সম্ভাবনা, অনুমতি প্রকাশ করে।
উদাহরণ: can, could, may, might, must, shall, should, will, would।
    `,
  },
];

const GrammarsPage = () => {
  const [selectedTopic, setSelectedTopic] = useState(grammarTopics[0]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050d1a] to-[#0a1629] text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        English Grammar (ইংরেজি ব্যাকরণ)
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="bg-[#0f1f3a] rounded-2xl p-4 shadow-lg md:col-span-1">
          <h2 className="text-xl font-semibold mb-4">Topics</h2>
          <ul className="space-y-2">
            {grammarTopics.map((topic) => (
              <li key={topic.id}>
                <button
                  onClick={() => setSelectedTopic(topic)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-all ${
                    selectedTopic.id === topic.id
                      ? "bg-blue-600 text-white"
                      : "bg-[#13294b] hover:bg-blue-500"
                  }`}
                >
                  {topic.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <motion.div
          key={selectedTopic.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#0f1f3a] rounded-2xl p-6 shadow-lg md:col-span-3"
        >
          <h2 className="text-2xl font-bold mb-4">{selectedTopic.title}</h2>
          <p className="text-lg mb-3">{selectedTopic.content}</p>
          <p className="text-blue-400 font-semibold">
            👉 {selectedTopic?.examples}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default GrammarsPage;
