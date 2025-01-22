import React from 'react';
import '../Styles/BlogsSection.css';
import startup1 from '../Images/startup1.jpg'
import SU from '../Images/SU.png'
import GB from '../Images/GB.jpg'
import PPT from '../Images/PPT.jpg'
import laptop from '../Images/laptop.jpg'

const blogs = [
  {
    image: startup1,
    title: 'Small business & Startup',
    author: 'Prabhash Mishra',
    date: '1 Jan 2023 - Today',
    description: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
    tags: ['Tax & Audit', 'Management'],
  },
  {
    image: SU,
    title: 'Scale-Up Company Offer',
    author: 'Mahesh Kumar',
    date: '1 Jan 2023',
    description: 'Mental models are simple expressions of complex processes or relationships.',
    tags: ['Tax', 'Research', 'Compliance'],
  },
  {
    image: GB,
    title: 'Growing Business Package',
    author: 'Rakhi Verma',
    date: '1 Jan 2023',
    description: 'Introduction to Wireframing and its Principles. Learn from the best in the industry.',
    tags: ['Audit', 'Management'],
  },
  {
    image: PPT,
    title: 'Scale-Up Company Offer',
    author: 'Karan Kumar',
    date: '1 Jan 2023',
    description: 'Collaboration can make our teams stronger, and our individual designs better.',
    tags: ['Tax & Audit', 'Management'],
  },
  {
    image: SU,
    title: 'Scale-Up Company Offer',
    author: 'Richa Singh',
    date: '1 Jan 2023',
    description: 'JavaScript frameworks make development easy with extensive features and functionalities.',
    tags: ['Tax Return', 'Audit'],
  },
  {
    image: laptop,
    title: 'Scale-Up Company Offer',
    author: 'Miss Nora',
    date: '1 Jan 2023',
    description: 'Starting a company doesn’t need to be complicated, but how do you get started?',
    tags: ['Private Limited Company', 'Customer Success'],
  },
];

const BlogsSection = () => {
  return (
    <div className="blogs-section">
      <h2 className="blogs-title">Explore Our Blogs</h2>
      <h3 className="blogs-subtitle">Accelerate Digital Transformation</h3>
      <div className="blogs-grid">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h4 className="blog-title">{blog.title}</h4>
              <p className="blog-author">{`${blog.author} - ${blog.date}`}</p>
              <p className="blog-description">{blog.description}</p>
              <div className="blog-tags">
                {blog.tags.map((tag, idx) => (
                  <span key={idx} className="blog-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsSection;
