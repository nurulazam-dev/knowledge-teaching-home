import React from "react";

const letters = [
  {
    id: 1,
    title: "Letter to Your Friend about Importance of Reading Books",
    content:
      "Dear [Friend’s Name],\nI hope this letter finds you well. Today I want to share my thoughts on the importance of reading books. Books are our best friends as they expand our knowledge, enrich our minds, and develop our imagination. They also help us to learn moral values and improve our communication skills. I encourage you to make reading a daily habit.\n\nYours ever,\n[Your Name]",
  },
  {
    id: 2,
    title: "Letter to Your Younger Brother Advising Him to Study Hard",
    content:
      "Dear [Brother’s Name],\nI hope you are fine. I came to know from Mother that you are not studying regularly. Remember, student life is the time to study and build a bright future. If you do not study hard now, you may face difficulties later. Please take my advice seriously and concentrate on your studies.\n\nYours lovingly,\n[Your Name]",
  },
  {
    id: 3,
    title: "Letter to the Headmaster for a Seat in the School Hostel",
    content:
      "To,\nThe Headmaster,\n[School Name]\n\nSir,\nI beg most respectfully to state that I am a student of class 8 in your school. My residence is far from the school, and I cannot attend classes regularly due to the long distance. Therefore, I request you to kindly grant me a seat in the school hostel so that I can continue my studies properly.\n\nYours obediently,\n[Your Name]\nClass: 8\nRoll: 12",
  },
  {
    id: 4,
    title: "Letter to Your Friend Inviting Him to Your Birthday Party",
    content:
      "Dear [Friend’s Name],\nI am very glad to inform you that my birthday will be celebrated on 10th March at our home. There will be cake, fun games, and music. I invite you to join the party and make the day more enjoyable. Please don’t forget to come.\n\nYour loving friend,\n[Your Name]",
  },
];

const LetterPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-4">
          English Letters
        </h1>
        <p className="text-gray-600 text-lg">
          Explore different types of letters commonly used in exams and real
          life.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid gap-6 md:grid-cols-2">
        {letters.map((letter) => (
          <div
            key={letter.id}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <h2 className="text-xl font-semibold text-blue-600 mb-3">
              {letter.title}
            </h2>
            <pre className="text-gray-700 whitespace-pre-line text-sm leading-relaxed">
              {letter.content}
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LetterPage;
