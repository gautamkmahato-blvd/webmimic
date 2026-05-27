"use client";

import { useRef, useState } from "react";
import { Heart, Eye, Video } from "lucide-react";
import {
  getVideoSrc,
  getPosterSrc,
} from "@/lib/motion/components";
import { Component } from "@/data/motion/options";

type Props = {
  component: Component;
  onClick?: () => void;
};

export function ComponentTile({ component, onClick }: Props) {
  const [hovered, setHovered] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnter = () => {
    setHovered(true);
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      // Browsers may reject autoplay if conditions aren't met — swallow it
      video.play().catch(() => {});
    }
  };

  const handleLeave = () => {
    setHovered(false);
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  const videoSrc = getVideoSrc(component);
  const posterSrc = getPosterSrc(component);

  return (
    <article
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={onClick}
      className="group cursor-pointer"
    >
      {/* Preview tile */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-100">
        {/* Idle layer — poster image (if available) or gradient + title (visible until hover) */}
        <div
          className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${component.posterBg} p-4 transition-opacity duration-300 ${
            hovered && videoReady ? "opacity-0" : "opacity-100"
          }`}
        >
          {posterSrc && (
            <img
              src={posterSrc}
              alt={component.title}
              className="max-h-full max-w-full rounded-xl object-contain"
            />
          )}
          {/* <div className="relative px-6 text-center">
            <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white/90 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
              Hover to play
            </div>
            <p className="font-serif text-2xl text-white drop-shadow-sm">
              {component.title}
            </p>
          </div> */}
        </div>

        {/* Video layer — fades in on hover, with a dark backdrop so any
            letterboxing from object-contain looks intentional */}
        <div
          className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${component.posterBg} p-4 transition-opacity duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <video
            ref={videoRef}
            src={videoSrc}
            poster={posterSrc}
            muted
            loop
            playsInline
            preload="metadata"
            onCanPlay={() => setVideoReady(true)}
            className="max-h-full max-w-full rounded-lg object-contain"
          />
        </div>

        {/* Animation indicator */}
        <div className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-md bg-black/40 backdrop-blur-md">
          <Video className="h-3.5 w-3.5 text-white" />
        </div>

        {/* PRO badge — top-left when applicable */}
        {component.isPro && (
          <span className="absolute left-3 top-3 rounded-md bg-neutral-900/80 px-1.5 py-0.5 text-[9px] font-bold tracking-wider text-white backdrop-blur-md">
            PRO
          </span>
        )}
      </div>

      {/* Meta row */}
      <div className="mt-3 flex items-center justify-between px-1">
        <div className="flex min-w-0 items-center gap-2">
          <div
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-medium text-white"
            style={{ backgroundColor: component.avatarBg }}
          >
            {component.avatar}
          </div>
          <span className="truncate text-sm text-neutral-900 hover:underline">
            {component.author}
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-3 text-xs text-neutral-500">
          <span className="flex items-center gap-1">
            <Heart className="h-3.5 w-3.5" />
            {component.likes}
          </span>
          <span className="flex items-center gap-1">
            <Eye className="h-3.5 w-3.5" />
            {component.views}
          </span>
        </div>
      </div>
    </article>
  );
}