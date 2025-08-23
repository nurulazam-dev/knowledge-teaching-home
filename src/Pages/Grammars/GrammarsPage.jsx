import { useState } from "react";
import { motion } from "framer-motion";

const grammarTopics = [
  {
    id: 1,
    title: "Noun (বিশেষ্য)",
    content: `
বিশেষ্য হলো এমন শব্দ যা কোনো ব্যক্তি, স্থান, বস্তু, প্রাণী বা ধারণার নাম প্রকাশ করে।
উদাহরণ: Rahim, বই, ঢাকা, কুকুর, ভালোবাসা。
ধরন:
1. Proper Noun (ব্যক্তিনাম বিশেষ্য) - যেমন Dhaka, Rahim
2. Common Noun (জাতিবাচক বিশেষ্য) - যেমন city, boy
3. Collective Noun (সমষ্টিবাচক বিশেষ্য) - যেমন team, class
4. Abstract Noun (গুণবাচক বিশেষ্য) - যেমন honesty, beauty
5. Material Noun (পদার্থবাচক বিশেষ্য) - যেমন gold, water
`,
    examples: "Example: Rahim is a good boy. (Rahim = Noun)",
  },
  {
    id: 2,
    title: "Pronoun (সর্বনাম)",
    content: `
সর্বনাম হলো যে শব্দ বিশেষ্যের পরিবর্তে ব্যবহৃত হয়।
উদাহরণ: I, he, she, they, it。
ধরন:
1. Personal Pronoun (ব্যক্তিবাচক সর্বনাম) - যেমন I, we, he, she
2. Demonstrative Pronoun (নির্দেশক সর্বনাম) - যেমন this, that, those
3. Interrogative Pronoun (প্রশ্নবাচক সর্বনাম) - যেমন who, what
4. Relative Pronoun (সম্পর্কবাচক সর্বনাম) - যেমন who, which, that
5. Reflexive Pronoun (আত্মপ্রত্যয়ী সর্বনাম) - যেমন myself, himself
`,
    examples:
      "Example: Rahim is a student. He reads in class 5. (He = Pronoun)",
  },
  {
    id: 3,
    title: "Adjective (বিশেষণ)",
    content: `
বিশেষণ হলো যে শব্দ বিশেষ্যের গুণ, পরিমাণ, অবস্থা ইত্যাদি প্রকাশ করে।
উদাহরণ: good boy, five books, beautiful flower。
ধরন:
1. Adjective of Quality (গুণবাচক বিশেষণ)
2. Adjective of Quantity (পরিমাণবাচক বিশেষণ)
3. Adjective of Number (সংখ্যাবাচক বিশেষণ)
4. Demonstrative Adjective (নির্দেশক বিশেষণ)
5. Interrogative Adjective (প্রশ্নবাচক বিশেষণ)
`,
    examples: "Example: He is a tall boy. (tall = Adjective)",
  },
  {
    id: 4,
    title: "Verb (ক্রিয়া)",
    content: `
ক্রিয়া হলো এমন শব্দ যা কাজ বা অবস্থার প্রকাশ করে।
উদাহরণ: eat, play, go, run。
ধরন:
1. Finite Verb (সীমাবদ্ধ ক্রিয়া)
2. Non-Finite Verb (অসীম ক্রিয়া) – Infinitive, Gerund, Participle
3. Auxiliary Verb (সহায়ক ক্রিয়া) – is, am, are, have, will
`,
    examples: "Example: She reads a book. (reads = Verb)",
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
- Simple, Continuous, Perfect, Perfect Continuous。
`,
    examples:
      "Example: I eat rice. (Present), I ate rice. (Past), I will eat rice. (Future)",
  },
  {
    id: 6,
    title: "Article (আর্টিকেল)",
    content: `
Article হলো বিশেষ্য শব্দের আগে বসানো একটি নির্দিষ্ট শব্দ。
দুই ধরনের Article আছে:
1. Definite Article: the (যেমন The sun, The book)
2. Indefinite Article: a, an (যেমন a boy, an apple)
`,
    examples: "Example: The moon is bright. (the = Definite Article)",
  },
  {
    id: 7,
    title: "Preposition (অব্যয়)",
    content: `
Preposition হলো এমন শব্দ যা Noun বা Pronoun এর আগে বসে এবং অন্য শব্দের সাথে সম্পর্ক প্রকাশ করে。
উদাহরণ: in, on, at, by, with, from, to。
Preposition of Time, Place, Direction, Agent, Reason ইত্যাদি。
`,
    examples: "Example: The book is on the table. (on = Preposition)",
  },
  {
    id: 8,
    title: "Conjunction (সমুচ্চয়ী অব্যয়)",
    content: `
Conjunction হলো দুটি শব্দ, বাক্য বা clause কে যুক্ত করে。
উদাহরণ: and, but, or, because, although。
Types:
1. Coordinating Conjunctions (and, but, or)
2. Subordinating Conjunctions (because, although, if)
3. Correlative Conjunctions (either...or, neither...nor)
`,
    examples: "Example: I like tea and coffee. (and = Conjunction)",
  },
  {
    id: 9,
    title: "Voice (বাক্যের রূপান্তর)",
    content: `
Voice হলো বাক্যে Subject এবং Object এর মধ্যে সম্পর্ক প্রকাশের প্রক্রিয়া。
1. Active Voice: যখন Subject কাজটি করে। (Rahim plays football)
2. Passive Voice: যখন Subject কাজটি গ্রহণ করে। (Football is played by Rahim)
`,
    examples: "Example: The letter was written by Mina. (Passive Voice)",
  },
  {
    id: 10,
    title: "Narration (অভিধান/বর্ণনা)",
    content: `
Narration হলো Direct Speech থেকে Indirect Speech এ পরিবর্তনের প্রক্রিয়া。
1. Direct Speech: He said, "I am happy."
2. Indirect Speech: He said that he was happy.
Rules:
- Reporting verb changes
- Tense changes
- Pronoun changes
- Time/place word changes
`,
    examples: 'Example: She said, "I am ready." → She said that she was ready.',
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
    examples:
      "Example: He is honest. → Is he honest? (Assertive to Interrogative)",
  },
  {
    id: 12,
    title: "Modal Verbs (সহায়ক ক্রিয়া)",
    content: `
Modal Verb হলো এমন সহায়ক ক্রিয়া যা ক্ষমতা, প্রয়োজন, সম্ভাবনা, অনুমতি প্রকাশ করে。
উদাহরণ: can, could, may, might, must, shall, should, will, would。
`,
    examples: "Example: You must obey the rules. (must = Modal Verb)",
  },
  {
    id: 13,
    title: "Adverb (ক্রিয়া বিশেষণ)",
    content: `
Adverb হলো এমন শব্দ যা Verb, Adjective, বা অন্য Adverb কে modify করে。
উদাহরণ: quickly, very, well, always, never。
Types:
1. Adverb of Manner (কিভাবে): She sings beautifully.
2. Adverb of Place (কোথায়): He is here.
3. Adverb of Time (কখন): I will go tomorrow.
4. Adverb of Frequency (কতবার): He always comes late.
5. Adverb of Degree (পরিমাণ): She is very smart.
`,
    examples: "Example: He runs fast. (fast = Adverb)",
  },
  {
    id: 14,
    title: "Interjection (আবেগসূচক শব্দ)",
    content: `
Interjection হলো আকস্মিক আবেগ, অনুভূতি, বা প্রতিক্রিয়া প্রকাশের শব্দ。
উদাহরণ: Oh! Alas! Hurrah! Wow! Bravo!
`,
    examples: "Example: Wow! What a beautiful flower.",
  },
  {
    id: 15,
    title: "Subject & Predicate (কর্তা ও বিধেয়)",
    content: `
Subject হলো বাক্যের যে অংশ কাজটি করে বা যার সম্পর্কে বলা হয়。
Predicate হলো বাক্যের যে অংশে Subject সম্পর্কে কিছু বলা হয়。
উদাহরণ: Rahim reads a book。
Subject: Rahim
Predicate: reads a book
`,
    examples:
      "Example: The sun rises in the east. (The sun = Subject, rises in the east = Predicate)",
  },
  {
    id: 16,
    title: "Phrase & Clause (শব্দগুচ্ছ ও উপবাক্য)",
    content: `
Phrase: শব্দের একটি দল, যার Subject-Verb নেই。
Clause: শব্দের একটি দল, যার Subject-Verb থাকে。
উদাহরণ:
Phrase: in the morning, after the rain
Clause: When he comes, If you study
`,
    examples: "Example: I saw a man who was crying. (who was crying = Clause)",
  },
  {
    id: 17,
    title: "Sentence (বাক্য)",
    content: `
Sentence হলো শব্দের একটি গুচ্ছ যা সম্পূর্ণ অর্থ প্রকাশ করে。
Types:
1. Assertive Sentence (বর্ণনামূলক)
2. Interrogative Sentence (প্রশ্নবাচক)
3. Imperative Sentence (আদেশ/অনুরোধ)
4. Exclamatory Sentence (আবেগসূচক)
`,
    examples: "Example: Are you coming? (Interrogative Sentence)",
  },
  {
    id: 18,
    title: "Conditionals (শর্তসূচক বাক্য)",
    content: `
Conditionals হলো এমন বাক্য যা কোনো শর্ত প্রকাশ করে。
Types:
1. Zero Conditional: If + present, present (If you heat ice, it melts.)
2. First Conditional: If + present, will (If it rains, I will stay home.)
3. Second Conditional: If + past, would (If I were rich, I would travel.)
4. Third Conditional: If + past perfect, would have (If you had called, I would have come.)
`,
    examples: "Example: If you study, you will succeed. (First Conditional)",
  },
  {
    id: 19,
    title: "Question Tags (প্রশ্নসূচক সংযোজন)",
    content: `
Question Tag হলো বাক্যের শেষে ছোট প্রশ্ন যোগ করা。
Rules:
- Positive sentence → Negative tag
- Negative sentence → Positive tag
উদাহরণ: He is a teacher, isn't he? You don't like tea, do you?
`,
    examples: "Example: She can swim, can't she?",
  },
  {
    id: 20,
    title: "Determiners (নির্ধারক)",
    content: `
Determiner হলো এমন শব্দ যা Noun এর আগে বসে এবং তার অর্থ নির্ধারণ করে。
Types:
1. Articles (a, an, the)
2. Demonstratives (this, that, these, those)
3. Quantifiers (some, many, few, much)
4. Possessives (my, your, his, her)
5. Numbers (one, two, first, second)
`,
    examples: "Example: Those books are mine. (those = Determiner)",
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
          <ul className="space-y-2 max-h-[70vh] overflow-y-auto pr-2">
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
          <pre className="text-lg mb-3 whitespace-pre-wrap font-sans">
            {selectedTopic.content}
          </pre>
          {selectedTopic.examples && (
            <p className="text-blue-400 font-semibold">
              👉 {selectedTopic.examples}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default GrammarsPage;
