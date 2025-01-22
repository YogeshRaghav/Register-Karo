import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import '../Styles/Blog.css'

const Blogs = () => {
  const faqs = [
    "Can I recover deleted files from desktop with this software?",
    "Can I recover deleted files from desktop with this software?",
    "Can I recover deleted files from desktop with this software?",
    "Can I recover deleted files from desktop with this software?",
    "Can I recover deleted files from desktop with this software?"
  ];

  return (
    <div className='faq'>
      <h4>Frequently Asked Questions</h4>
      <div>
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <p>{faq}</p>
            <MdKeyboardArrowRight />
          </div>
        ))}
      </div>
      <button>Show more</button>
    </div>
  );
}

export default Blogs;
