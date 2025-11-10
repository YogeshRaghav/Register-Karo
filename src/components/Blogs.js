import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import '../Styles/Blog.css'
import BlogsSection from './BlogsSection';

const Blogs = () => {
  const faqs = [
    "Can I recover deleted files from desktop with this software?",
    "What is the company’s mission and core values?",
    "How does the company support employee growth and development?",
    "What is the process for requesting time off or leave?",
    "What should I do if I encounter a technical issue or system error?"
  ];

  return (
    <>
    {
      <BlogsSection/>
    }
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
    </>
  );
}

export default Blogs;
