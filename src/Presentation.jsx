"use client";

import { useEffect, useState } from "react";
const imageBase = import.meta.env.BASE_URL + "images/";

const fiveCampaigns = [
  { image: `${imageBase}campaign/01-hero.jpg`, number: "01", title: "The invitation", reason: "Open with warmth, people and one clear seasonal idea." },
  { image: `${imageBase}campaign/02-reset.jpg`, number: "02", title: "The reset", reason: "Make the room feel like part of the holiday—not just somewhere to sleep." },
  { image: `${imageBase}campaign/03-night.jpg`, number: "03", title: "The evening", reason: "One darker frame gives the series rhythm without making it feel heavy." },
  { image: `${imageBase}campaign/04-connect.jpg`, number: "04", title: "The connection", reason: "Natural human energy makes the hotel feel inhabited and desirable." },
  { image: `${imageBase}campaign/05-book.jpg`, number: "05", title: "The conversion", reason: "Finish with real location proof and an easy next action." },
];

const roomStories = [
  ["Superior Double", "Morning, on your terms."], ["Deluxe", "Before the night begins."],
  ["Junior Family", "Rain outside. Ritual inside."], ["2 Bedroom", "The group chat, in real life."],
  ["Thai Heritage", "Old soul. New plans."], ["2 Bedroom Family", "Still talking about today."],
  ["2 Bedroom Grand", "Stay in for one more."], ["Grand Tropical", "Summer is a state of mind."],
  ["Grand Executive", "The night can wait."], ["Topstar Residence", "Make an entrance. Eventually."],
];

export default function PresentationPage() {
  const [notes, setNotes] = useState(false);
  const [active, setActive] = useState("direction");

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("[data-chapter]"));
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a,b) => b.intersectionRatio-a.intersectionRatio)[0];
      if (visible) setActive(visible.target.dataset.chapter || "direction");
    }, { threshold:[.2,.5], rootMargin:"-15% 0px -55%" });
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return <main className={`presentationMain ${notes ? "notesOn" : ""}`}>
    <header className="deckNav">
      <a href="#direction" className="deckBrand">HT9 <span>CREATIVE DIRECTION · FIRST DRAFT</span></a>
      <nav aria-label="Presentation chapters">
        <a className={active==="direction"?"active":""} href="#direction">Direction</a>
        <a className={active==="campaign"?"active":""} href="#campaign">Campaign</a>
        <a className={active==="rooms"?"active":""} href="#rooms">Rooms</a>
        <a className={active==="product"?"active":""} href="#product">Product</a>
      </nav>
      <div className="deckActions"><button onClick={() => setNotes(!notes)}>{notes ? "Hide" : "Presenter"} notes</button><a href="?view=guest" target="_blank">Guest preview ↗</a></div>
    </header>

    <section id="direction" data-chapter="direction" className="deckHero">
      <div className="deckHeroImage" />
      <div className="deckHeroWash" />
      <div className="deckHeroCopy">
        <div className="deckEyebrow">HT9 HOTEL PATTAYA · NEW DIRECTION</div>
        <h1>Premium,<br/><em>made easy.</em></h1>
        <p>A warm, modern hotel world—designed to move naturally from inspiration to booking to personal care.</p>
        <div className="deckMeta"><span>01</span><b>THE STRATEGIC IDEA</b><i/></div>
      </div>
      <PresenterNote>Start here: HT9 does not need to pretend to be a five-star resort. The opportunity is to make a real, comfortable Jomtien stay feel more considered, more emotional and much easier to choose.</PresenterNote>
    </section>

    <section data-chapter="direction" className="diagnosisDeck deckSection">
      <div className="deckSectionHead"><div><div className="deckEyebrow teal">THE DIAGNOSIS</div><h2>A decent hotel.<br/><em>An invisible story.</em></h2></div><p>The product already has useful proof. The brand needs one idea that connects rooms, people, Pattaya and service.</p></div>
      <div className="diagnosisGrid">
        <article><span>01 · STRENGTH</span><h3>Real practical value</h3><p>Ten published room types, a rooftop pool, dining, café service, travel help and a location 200 metres from Jomtien Beach.</p></article>
        <article><span>02 · GAP</span><h3>No single emotional memory</h3><p>Property-led communication explains what exists, but not how an HT9 stay should feel or why guests should talk about it.</p></article>
        <article><span>03 · OPPORTUNITY</span><h3>Premium + innovative</h3><p>Turn “easy” into a premium promise: easier discovery, easier booking and a calm concierge available inside LINE.</p></article>
      </div>
      <div className="positioningLine"><span>POSITIONING</span><p>A clean, modern and thoughtfully connected Jomtien stay—premium in feeling, intelligent in service and easy to book.</p></div>
      <PresenterNote>Explain the bridge: we are not adding imaginary facilities. We are creating premium perception through selection, pacing, typography, service and a clearer guest journey.</PresenterNote>
    </section>

    <section data-chapter="direction" className="visualCode deckSection">
      <div className="visualStatement"><span>THE VISUAL CODE</span><h2>Sunlight.<br/>Skin tones.<br/><em>Tropical clarity.</em></h2></div>
      <div className="paletteStory">
        <div className="paletteBlocks"><i/><i/><i/><i/></div>
        <p>Deep tropical teal creates confidence. Tropical blue connects the hotel to the coast. Coral introduces human warmth. Cream gives the work air.</p>
        <div className="typeSpec"><b>Summer in the Rain</b><em>The sun between showers.</em><span>Simple sans for confidence. Modern serif for emotion.</span></div>
      </div>
      <PresenterNote>This is why the new landing image needs a consistent warm grade. Every photograph can be different, but the colour treatment makes the brand feel like one world.</PresenterNote>
    </section>

    <section id="campaign" data-chapter="campaign" className="campaignIntro deckSection">
      <div className="rainLines" aria-hidden="true"/><div className="campaignIntroCopy"><div className="deckEyebrow light">THE SEASONAL PLATFORM</div><h2>Summer<br/><em>in the Rain.</em></h2><p>The campaign does not deny rainy season. It reframes it: Pattaya still moves, people still connect, and HT9 becomes the comfortable place to return to.</p></div>
      <div className="campaignPromise"><span>CAMPAIGN PROMISE</span><p>Even the rain feels like summer here.</p></div>
      <PresenterNote>This is the main campaign thought. Rain is a texture, not the whole mood. The dominant feeling stays warm, bright and alive.</PresenterNote>
    </section>

    <section data-chapter="campaign" className="fiveSeries deckSection">
      <div className="deckSectionHead"><div><div className="deckEyebrow teal">FIVE-POST CAMPAIGN SYSTEM</div><h2>Five moments.<br/><em>One warm story.</em></h2></div><p>The sequence moves from emotion to proof. Each post has one job, but together they build a complete journey.</p></div>
      <div className="fivePosterRail">{fiveCampaigns.map(item => <article key={item.number}><img src={item.image} alt={`${item.title} campaign artwork`}/><div><span>{item.number}</span><h3>{item.title}</h3><p>{item.reason}</p></div></article>)}</div>
      <PresenterNote>Walk left to right. One: invite. Two: reset in the room. Three: a single night beat. Four: connection. Five: conversion. This makes the social feed feel planned, not like five unrelated posters.</PresenterNote>
    </section>

    <section id="rooms" data-chapter="rooms" className="roomPunchline deckSection">
      <div className="roomPunchHead"><div><div className="deckEyebrow coralText">THE CAMPAIGN PUNCHLINE</div><h2>One room.<br/><em>One story.</em></h2></div><p>Ten real room types become ten distinct human situations. The room is still the product—but emotion becomes the reason to stop, remember and ask.</p></div>
      <div className="tenPosterGrid">{roomStories.map((room,index) => <article key={room[0]}><img src={`${imageBase}stories/poster-${String(index+1).padStart(2,"0")}.jpg`} alt={`${room[0]} story poster`}/><div><span>{String(index+1).padStart(2,"0")}</span><b>{room[0]}</b><em>{room[1]}</em></div></article>)}</div>
      <PresenterNote>This is where the campaign becomes ownable. Competitors can show a clean room. HT9 can give every room its own scene, headline and reason to imagine yourself there.</PresenterNote>
    </section>

    <section data-chapter="rooms" className="roomMethod deckSection">
      <div><span>NOT MODELS IN ROOMS</span><h2>Editorial stories<br/><em>inside real spaces.</em></h2></div>
      <div className="methodList"><article><b>01</b><p>Start with a recognisable guest moment.</p></article><article><b>02</b><p>Vary wide, half-body, close, mirror and detail framing.</p></article><article><b>03</b><p>Match light, shadow and perspective to the real room.</p></article><article><b>04</b><p>Let the short headline punch the situation.</p></article></div>
      <PresenterNote>Point out that these are art-direction composites for approval. Before paid release, selected concepts should be recreated or retouched to final campaign standard.</PresenterNote>
    </section>

    <section id="product" data-chapter="product" className="productDeck deckSection">
      <div className="productCopy"><div className="deckEyebrow light">FROM CAMPAIGN TO PRODUCT</div><h2>The hotel world,<br/><em>inside LINE.</em></h2><p>The campaign creates desire. The mini app removes friction—search, understand the rooms, explore Pattaya, ask for help and move to the official booking engine.</p>
        <div className="productFlow"><span>Discover</span><i>→</i><span>Choose</span><i>→</i><span>Ask</span><i>→</i><span>Book</span></div>
        <a className="deckPrimary" href="?view=guest" target="_blank">Launch the guest experience <b>↗</b></a>
      </div>
      <div className="phoneStage"><div className="phoneFrame"><div className="phoneBar"><i/><span>HT9 · LIVE PROTOTYPE</span></div><iframe title="Live HT9 guest mini app prototype" src="?view=guest"/></div><div className="phoneCaption">Clickable prototype · use the phone now</div></div>
      <PresenterNote>Pause here and interact with it. Change the guest count, open Junior Family, switch local plans and ask Elena a question. The point is to prove this direction can become a buildable guest journey, not only a poster idea.</PresenterNote>
    </section>

    <section data-chapter="product" className="elenaDeck deckSection">
      <div className="elenaProfile"><div className="elenaAvatar">E</div><span>AI SERVICE PERSONA · FUTURE POTENTIAL</span><h2>Calm expertise,<br/><em>before arrival.</em></h2><p>Elena is designed as a senior luxury guest-service voice: elegant English, Thai understanding and strong Pattaya knowledge. She answers first and escalates only when a verified answer is unavailable.</p></div>
      <div className="elenaConversation"><div className="clientBubble">Could you plan a rainy afternoon?</div><div className="elenaBubble"><span>ELENA · HT9 CONCIERGE</span>Of course. I would keep the pace gentle: coffee at Skyline Tropics Café and Bistro, followed by an indoor Pattaya option. I’ll confirm current opening hours before you leave.</div><div className="serviceRule"><b>THE SERVICE RULE</b><p>Useful answer first. Thoughtful follow-up second. Human handoff as the last resort.</p></div></div>
      <PresenterNote>Be clear: this is a future product potential, not a promise that the hotel already has AI operations. The prototype defines the desired service standard and the information required to build it responsibly.</PresenterNote>
    </section>

    <section data-chapter="product" className="closingDeck deckSection">
      <div className="closingNumber">09</div><div className="closingCopy"><div className="deckEyebrow light">THE NEW DIRECTION</div><h2>From a place to stay<br/><em>to a world guests enter.</em></h2><p>One visual identity. One seasonal platform. Ten room stories. One connected guest experience.</p><div className="closingActions"><a className="deckPrimary" href="?view=guest" target="_blank">Open guest mini app <b>↗</b></a><a href="https://www.ht9hotel.com/" target="_blank" rel="noreferrer">Current official website ↗</a></div></div>
      <div className="nextSteps"><span>NEXT</span><p>Confirm final claims and operating details</p><p>Select campaign concepts for production</p><p>Connect booking, LINE LIFF and hotel service data</p></div>
      <PresenterNote>Close on the system, not the individual artwork. The value is that campaign, rooms, booking and service now feel like one brand experience.</PresenterNote>
    </section>

    <footer className="deckFooter"><span>HT9 HOTEL PATTAYA</span><p>Creative direction and product prototype · First draft</p><a href="#direction">Back to top ↑</a></footer>
  </main>;
}

function PresenterNote({children}) {
  return <aside className="presenterNote"><span>YOUR TALKING POINT</span><p>{children}</p></aside>;
}
