// src/PdfList.js
import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

const PdfList = () => {
  const [pdfs, setPdfs] = useState([]);

  useEffect(() => {
    const fetchPdfs = async () => {
      const { data, error } = await supabase.from('pdfs').select('*');
      if (error) {
        console.error('Error fetching PDFs:', error);
        return;
      }
      setPdfs(data);
    };

    fetchPdfs();
  }, []);

  return (
    <div className="pdf-list">
      {pdfs.map((pdf) => (
        <div key={pdf.id} className="pdf-item">
          <a href={pdf.url} target="_blank" rel="noopener noreferrer">
            {pdf.name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default PdfList;
