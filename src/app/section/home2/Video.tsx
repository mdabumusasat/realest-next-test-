"use client";
import React, {useState} from "react";
import ModalVideo from 'react-modal-video';

export default function VideoSection() {
    const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section className="video-section">
        <div className="outer-box">
          <div className="bg-image">
            <img
              src="/assets/images/resource/video1-1.jpg"
              alt="video background"
            />
          </div>
          <div className="video-box wow fadeInUp" data-wow-delay="400ms">
            <a
              className="play-now-one play-now"
              onClick={() => setOpen(true)}
              target="_blank"
              rel="noopener noreferrer">
              <i className="fa-sharp fa-solid fa-play"></i>
            </a>
            <div className="h2 title">
              Global Real Estate <br /> Investment.
            </div>
          </div>
        </div>
      </section>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
    </>
  );
}