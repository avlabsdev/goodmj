import React from "react";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "de89e7a0-4853-4e8d-ab07-65f674ac4b31");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setTimeout(() => {
        setResult("");
      }, 3000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <form
        onSubmit={onSubmit}
        className="flex w-full items-center text-base font-medium rounded-lg h-full relative z-0 flex-col gap-8"
      >
        <input
          type="text"
          name="name"
          className="w-full h-full p-4 px-6 custom-bg-lightblue rounded-lg"
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          className="w-full h-full p-4 px-6 custom-bg-lightblue rounded-lg"
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          className="w-full h-full p-4 px-6 custom-bg-lightblue rounded-lg"
          placeholder="Message"
          required
        ></textarea>

        <button
          type="submit"
          className="py-4 text-center rounded-lg custom-bg-green text-white font-medium w-full shadow"
        >
          Submit Form
        </button>
      </form>
      <span className="custom-text-green text-center text-sm mt-8 flex items-center justify-center">
        {result}
      </span>
    </div>
  );
}
