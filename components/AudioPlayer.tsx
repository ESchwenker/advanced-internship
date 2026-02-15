"use client";

import { useEffect, useRef, useState } from "react";
import { RotateCcw, RotateCw } from "lucide-react";

export default function AudioPlayer({ book }: any){

  const audioRef = useRef<HTMLAudioElement>(null);

  const [playing,setPlaying] = useState(false);
  const [time,setTime] = useState(0);
  const [duration,setDuration] = useState(0);

  const storageKey = `book-progress-${book.id}`;

  // ---------- FORMAT TIME ----------

  function format(sec:number){
    if(!sec) return "00:00";
    const m = Math.floor(sec/60).toString().padStart(2,"0");
    const s = Math.floor(sec%60).toString().padStart(2,"0");
    return `${m}:${s}`;
  }

  // ---------- RESTORE SAVED POSITION ----------

  useEffect(()=>{
    const saved = localStorage.getItem(storageKey);
    if(saved && audioRef.current){
      audioRef.current.currentTime = Number(saved);
    }
  },[book.id]);

  // ---------- SAVE PROGRESS ----------

  useEffect(()=>{
    localStorage.setItem(storageKey,time.toString());
  },[time]);

  // ---------- SPACEBAR SUPPORT ----------

  useEffect(()=>{
    function handle(e:KeyboardEvent){
      if(e.code==="Space"){
        e.preventDefault();
        toggle();
      }
    }
    window.addEventListener("keydown",handle);
    return ()=>window.removeEventListener("keydown",handle);
  },[playing]);

  // ---------- PLAY / PAUSE ----------

  function toggle(){
    if(!audioRef.current) return;

    if(playing){
      audioRef.current.pause();
      setPlaying(false);
    }else{
      audioRef.current.play();
      setPlaying(true);
    }
  }

  // ---------- SKIP ----------

  function skip(sec:number){
    if(audioRef.current){
      audioRef.current.currentTime += sec;
    }
  }

  // ---------- PROGRESS % ----------

  const percent = duration ? (time / duration) * 100 : 0;

  // ---------- RENDER ----------

  return(
    <div className="audioPlayer">

      <audio
        ref={audioRef}
        src={book.audioLink}
        onLoadedMetadata={()=>setDuration(audioRef.current?.duration || 0)}
        onTimeUpdate={()=>setTime(audioRef.current?.currentTime || 0)}
      />

      {/* LEFT */}

      <div className="audioPlayer__left">

        <img src={book.imageLink} width={48}/>

        <div>
          <div className="audioBook-title">{book.title}</div>
          <div style={{opacity:.7,fontSize:14}}>{book.author}</div>
        </div>

      </div>

        {/* CENTER */}

        <div className="audioPlayer__center">

        {/* BACK 10 */}

            <button className="skipBtn" onClick={()=>skip(-10)}>

            <span className="skipIconWrap">

                <RotateCcw size={38} strokeWidth={1.4}/>

                <span className="skipNumber">10</span>

            </span>

            </button>

        {/* PLAY */}

            <button className="playBtn" onClick={toggle}>
                {playing ? (
                <svg viewBox="0 0 24 24">
                    <rect x="6" y="4" width="4" height="16"/>
                    <rect x="14" y="4" width="4" height="16"/>
                </svg>
                ) : (
                <svg viewBox="0 0 24 24">
                    <polygon points="5,3 19,12 5,21"/>
                </svg>
                )}
            </button>

        {/* FORWARD 10 */}

            <button className="skipBtn" onClick={()=>skip(10)}>

            <span className="skipIconWrap">

                <RotateCw size={38} strokeWidth={1.4}/>

                <span className="skipNumber">10</span>

            </span>

            </button>

        </div>


      {/* RIGHT */}

      <div className="audioPlayer__right">

        <span>{format(time)}</span>

        <input
          type="range"
          min={0}
          max={duration}
          value={time}

          style={{
            background:`linear-gradient(
              to right,
              #22c55e 0%,
              #22c55e ${percent}%,
              #8fa3aa ${percent}%,
              #8fa3aa 100%
            )`
          }}

          onChange={(e)=>{
            if(audioRef.current)
              audioRef.current.currentTime = Number(e.target.value);
          }}
        />

        <span>{format(duration)}</span>

      </div>

    </div>
  );
}

