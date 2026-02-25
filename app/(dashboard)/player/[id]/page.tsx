"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import AudioPlayer from "@/components/AudioPlayer";

export default function PlayerPage(){
  console.log("THIS IS THE DASHBOARD PLAYER PAGE")

  const { id } = useParams();

  const [book,setBook] = useState<any>(null);

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

    <>
      <div className="player__content">

        <h1 className="player__title">{book.title}</h1>

        <div className="player__divide"></div>

        <p className="player__para" style={{whiteSpace:"pre-line"}}>
          {book.summary}
        </p>

      </div>

      <AudioPlayer book={book} />
    </>

  );
}
