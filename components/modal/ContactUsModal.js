import React, { useEffect, useRef, useState } from 'react';

const ContactUsModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const modalRef = useRef();

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    formData.append('access_key', '2fa23bd6-f283-4ca4-8c0e-b9ac57b9d063'); // Replace with your Web3Forms API key

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      }).then((res) => res.json());

      if (response.success) {
        setSuccessMessage(`${name}, thank you! We will contact you soon.`);
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => {
          setSuccessMessage('');
          onClose();
        }, 3000);
      } else {
        console.error('Form submission failed:', response.message);
        // Handle form submission failure
      }
    } catch (error) {
      console.error('Form submission error:', error);
      // Handle form submission error
    }
  };

  useEffect(() => {
    if (successMessage) {
      setTimeout(() => {
        setSuccessMessage('');
        onClose();
      }, 3000);
    }
  }, [successMessage, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div
        ref={modalRef}
        className="bg-white w-96 mx-auto rounded-lg shadow-lg relative"
        onClick={handleClickOutside}
      >
        <div className="p-6">
          <div className="flex pb-4 flex-row justify-between items-center">
            <h2 className="text-xl font-semibold ">Contact Us</h2>
            <button
              type="button"
              className="text-gray-600 hover:text-gray-800"
              onClick={() => {
                setSuccessMessage('');
                onClose();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M14.348 5.652a.5.5 0 010 .707L10.707 10l3.641 3.641a.5.5 0 01-.707.707L10 10.707l-3.641 3.641a.5.5 0 01-.707-.707L9.293 10 5.652 6.359a.5.5 0 01.707-.707L10 9.293l3.641-3.641a.5.5 0 01.707 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          {successMessage ? (
            <div className="bg-green-100 text-green-700 px-4 py-2 rounded-md mb-4 flex items-center justify-between">
              <div>{successMessage}</div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block mb-2 font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#FDC435]"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block mb-2 font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#FDC435]"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block mb-2 font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 pb-5 border border-gray-300 rounded-md focus:outline-none focus:border-[#FDC435]"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-12 py-3 mx-auto flex justify-center rounded-md bg-[#FDC435]  focus:outline-none "
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUsModal;
