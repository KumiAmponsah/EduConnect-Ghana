import React, { useState } from 'react';
import '../styles/EducationalResourcesPage.css';
import usericon from '../components/users.png';
import filterIcon from '../components/filter.png';
import sortIcon from '../components/sort.png';
import likeIcon from '../components/like.png';
import download1Icon from '../components/download1.png';
import downloadIcon from '../components/download.png';
import bookmarkIcon from '../components/bookmark.png';
import openBookIcon from '../components/book.png';
import Footer from './Footer';

const resources = [
  {
    category: 'Mathematics',
    title: 'Calculus I - Lecture Notes',
    description: 'Complete notes covering limits, derivatives, integrals.',
    author: 'Prof. Ama Darko',
    time: '3 days ago',
    downloads: 124,
    likes: 45,
    comments: 12,
  },
  {
    category: 'Psychology',
    title: 'Introduction to Psychology - Study Guide',
    description: 'Comprehensive study guide for midterm exams.',
    author: 'Dr. Emmanuel Owusu',
    time: '1 week ago',
    downloads: 156,
    likes: 67,
    comments: 31,
  },
  {
    category: 'Chemistry',
    title: 'Organic Chemistry Lab Manual',
    description: 'Procedures and safety guidelines for all lab experiments.',
    author: 'Prof. Kwame Asante',
    time: '3 weeks ago',
    downloads: 89,
    likes: 24,
    comments: 8,
  },
  {
    category: 'Economics',
    title: 'Macroeconomics - Past Exam Papers',
    description: 'Last 5 years of exam papers with solutions.',
    author: 'Department of Economics',
    time: '1 month ago',
    downloads: 215,
    likes: 92,
    comments: 29,
  },
  {
    category: 'Literature',
    title: 'Introduction to Literary Theory',
    description: 'Comprehensive notes on major theory and critics.',
    author: 'Dr. Grace Mensah',
    time: '1 month ago',
    downloads: 76,
    likes: 29,
    comments: 15,
  },
  {
    category: 'Computer Science',
    title: 'Software Engineering Principles',
    description: 'Slides, code examples, and project guidelines.',
    author: 'Dr. Abena Osei',
    time: '2 weeks ago',
    downloads: 156,
    likes: 67,
    comments: 31,
  },
  {
    category: 'Physics',
    title: 'Mechanics - Lecture Notes',
    description: 'Notes on classical mechanics and applications.',
    author: 'Dr. John Kofi',
    time: '2 months ago',
    downloads: 98,
    likes: 34,
    comments: 10,
  },
  {
    category: 'History',
    title: 'World History - Study Guide',
    description: 'Guide covering major historical events.',
    author: 'Prof. Esi Mensah',
    time: '1 month ago',
    downloads: 112,
    likes: 45,
    comments: 20,
  },
];

const EducationalResourcesPage = () => {
  const [visibleResources, setVisibleResources] = useState(6); // Initially show 6 resources
  const resourcesPerPage = 6; // Load 6 more each time

  const loadMore = () => {
    setVisibleResources((prev) => prev + resourcesPerPage);
  };

  return (
    <div className="page">
      <h1>Educational Resources</h1>
      <p>Access and share lecture notes, past papers, research materials, and more</p>
      <div className="tabs-container">
        <div className="tabs">
          <button className="tab-active">All</button>
          <button className="tab">Lecture Notes</button>
          <button className="tab">Past Papers</button>
          <button className="tab">Research</button>
          <button className="tab">Textbooks</button>
          <button className="tab">My Uploads</button>
        </div>
        <div className="filter-sort-tabs">
          <div className="filter-tab">
            <img src={filterIcon} alt="Filter" className="tab-icon" />
            <span>Filter</span>
          </div>
          <div className="sort-tab">
            <img src={sortIcon} alt="Sort" className="tab-icon" />
            <span>Sort</span>
          </div>
        </div>
      </div>
      <div className="featured-section">
        <div className="featured-card">
          <div className="featured">Featured</div>
          <h2>Introduction to Microeconomics - Complete Course Materials</h2>
          <p className="firstparagraph">Comprehensive lecture notes, practice problems, and study guides</p>
          <br/>
          <p>
            <img src={usericon} alt="User" className="resourceuser-icon1" />
            <span>Economics • Uploaded by Dr. Kofi Mensah • 2 weeks ago</span>
          </p>
          <div className="download-btn-container">
            <button className="download-btn">
              <img src={downloadIcon} alt="Sort" className="tab-icon" />
              Download
            </button>
          </div>
        </div>
      </div>
      <div className="resources-grid">
        {resources.slice(0, visibleResources).map((resource, index) => (
          <div key={index} className="resource-card">
            <div className="resource-header">
              <h3>{resource.title}</h3>
              <img src={bookmarkIcon} alt="Bookmark" className="bookmark-icon" />
            </div>
            <p>{resource.description}</p>
            <div className="category-tab">
              <p><img src={openBookIcon} alt="Open Book" className="open-book-icon" />{resource.category}</p>
            </div>
            <p className="author-time">By {resource.author} • {resource.time}</p>
            <div className="stats">
              <span>
                <img src={download1Icon} alt="Downloads" className="stat-icon" />
                {resource.downloads}
              </span>
              <span>
                <img src={likeIcon} alt="Likes" className="stat-icon" />
                {resource.likes}
              </span>
              <span className="download-text">Download</span>
            </div>
          </div>
        ))}
      </div>
      {visibleResources < resources.length && (
        <button className="load-more" onClick={loadMore} aria-label="Load more educational resources">
          Load More Resources
        </button>
      )}

<Footer /> {/* Include the Footer component */}
    </div>
  );
};

export default EducationalResourcesPage;