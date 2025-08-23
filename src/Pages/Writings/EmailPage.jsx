import React from "react";

const emails = [
  {
    id: 1,
    title: "Email to Your Friend About Your Hobby",
    description:
      "Write an email to your friend describing your favorite hobby and why you enjoy it.",
  },
  {
    id: 2,
    title: "Email to the Principal for Leave",
    description:
      "Write an email to your school principal requesting a leave of absence for two days.",
  },
  {
    id: 3,
    title: "Email to Your Teacher Thanking Them",
    description:
      "Write an email to your teacher expressing gratitude for their guidance and support.",
  },
  {
    id: 4,
    title: "Email to a Bookstore Manager for an Order",
    description:
      "Write an email to a bookstore manager placing an order for English grammar books.",
  },
  {
    id: 5,
    title: "Email to Your Friend Inviting Him to Your Birthday",
    description:
      "Write an email to your best friend inviting him/her to attend your birthday party.",
  },
  {
    id: 6,
    title: "Email to the Electricity Board About Power Failure",
    description:
      "Write an email to the local electricity board reporting a power failure in your area.",
  },
];

const EmailPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            📧 English Emails
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Explore different types of emails with simple explanations and
            practice materials.
          </p>
        </div>

        {/* Email Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {emails.map((email) => (
            <div
              key={email.id}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300"
            >
              <h2 className="text-2xl font-semibold text-blue-700 mb-3">
                {email.title}
              </h2>
              <p className="text-gray-600 text-base mb-4">
                {email.description}
              </p>
              <button className="mt-2 px-5 py-2 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition">
                Read Example
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmailPage;
