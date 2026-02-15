"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import Sidebar from "@/app/dashboard/Sidebar";
import Header from "@/app/dashboard/Header";
import AudioPlayer from "@/components/AudioPlayer";

export default function PlayerPage(){

  const { id } = useParams();
  const [book,setBook] = useState<any>(null);
  const [fontSize,setFontSize] = useState(18);
  const [activeFont,setActiveFont] = useState(0);

  useEffect(()=>{

    async function fetchBook(){
      const res = await fetch(
        `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`
      );
      const data = await res.json();
      setBook(data);
    }

    if(id) fetchBook();

  },[id]);

  if(!book) return <p>Loading...</p>;

  return (

    <div className="dashboard playerPage">

        <Sidebar
            setFontSize={setFontSize}
            activeFont={activeFont}
            setActiveFont={setActiveFont}
        />

      <div className="dashboard__main">

        <Header />

        <div className="player__content">

          <h1 className="player__title">{book.title}</h1>

          <div className="player__divide"></div>

            <p
                className="player__para"
                style={{
                    whiteSpace:"pre-line",
                    fontSize: fontSize
                }}
                >
                {book.summary}
            </p>

        </div>

        <AudioPlayer book={book} />

      </div>

    </div>

  );
}


