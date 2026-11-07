"use client";

import { useMemo, useState } from "react";
const imageBase = import.meta.env.BASE_URL + "images/";

const bookingUrl = "https://ibe.hoteliers.guru/ibe/En/HT9-Hotel-Pattaya-Chonburi-TH";
const lineUrl = "https://line.me/R/ti/p/@567qfmmh";

const rooms = [
  { name: "Superior Double Room", size: "23 sq.m", image: `${imageBase}rooms/superior.jpg`, story: "Morning, on your terms." },
  { name: "Deluxe Double / Twin", size: "29 sq.m", image: `${imageBase}rooms/deluxe.jpg`, story: "Before the night begins." },
  { name: "Junior Family", size: "65 sq.m", image: `${imageBase}rooms/junior-family.jpg`, story: "Rain outside. Ritual inside.", sample: true },
  { name: "2 Bedroom", size: "45 sq.m", image: `${imageBase}rooms/two-bedroom.jpg`, story: "The group chat, in real life." },
  { name: "2 Bedroom Thai Heritage", size: "70 sq.m", image: `${imageBase}rooms/thai-heritage.jpg`, story: "Old soul. New plans." },
  { name: "2 Bedroom Family", size: "70 sq.m", image: `${imageBase}rooms/family.jpg`, story: "Still talking about today." },
  { name: "2 Bedroom Grand", size: "81 sq.m", image: `${imageBase}rooms/grand.jpg`, story: "Stay in for one more." },
  { name: "2 Bedroom Grand Tropical", size: "81 sq.m", image: `${imageBase}rooms/grand-tropical.jpg`, story: "Summer is a state of mind." },
  { name: "2 Bedroom Grand Executive", size: "81 sq.m", image: `${imageBase}rooms/grand-executive.jpg`, story: "The night can wait." },
  { name: "Topstar Private Residence", size: "180 sq.m", image: `${imageBase}rooms/topstar.jpg`, story: "Make an entrance. Eventually." },
];

const recommendations = {
  Couples: [
    ["Slow coast evening", "Jomtien Beach first, then Skyline Tropics on the 9th floor.", "Hotel + TAT"],
    ["Craft and culture", "The Sanctuary of Truth, followed by an unhurried return to Jomtien.", "TAT"],
  ],
  Family: [
    ["Big-energy day", "Columbia Pictures Aquaverse, then a quiet family-room reset.", "Hotel offer + official attraction"],
    ["Rain-ready discovery", "Underwater World Pattaya is included in TAT’s Pattaya itinerary.", "TAT"],
  ],
  Rainy: [
    ["Stay close", "Coffee and homemade snacks at Skyline Tropics Café and Bistro.", "Hotel"],
    ["Indoor idea", "Underwater World or a slower lunch—ask the concierge to confirm current hours.", "TAT · confirmation needed"],
  ],
};

const conciergeAnswers = {
  "Plan a rainy afternoon": "Of course. I would keep the pace gentle: begin with coffee at Skyline Tropics Café and Bistro, then consider Underwater World Pattaya, which appears in the Tourism Authority of Thailand’s Pattaya itinerary. I’ll confirm current opening hours before you leave.",
  "A quiet couple plan": "I’d suggest late-afternoon time at Jomtien Beach, followed by dinner or drinks at Skyline Tropics on the 9th floor. If you would like more culture, the Sanctuary of Truth is a thoughtful addition earlier in the day. Shall I shape this around sunset?",
  "Airport transfer": "HT9 lists private airport transfer service for solo travellers and groups, with vehicle size selected for the party. Please share your airport, flight number, arrival time and luggage count; I’ll prepare the request for confirmation.",
  "Which room fits us?": "I can narrow it quickly. The verified range runs from the 23 sq.m Superior Double Room to the 180 sq.m Topstar Private Residence. Tell me how many adults and children are travelling, and whether privacy, a bathtub or more living space matters most.",
};

export default function Home() {
  const [guests, setGuests] = useState(2);
  const [detailOpen, setDetailOpen] = useState(false);
  const [recTab, setRecTab] = useState("Couples");
  const [chat, setChat] = useState([
    { from: "concierge", text: "Good afternoon. I’m Elena, your digital guest service specialist. Tell me the kind of stay you have in mind, and I’ll help you shape it." }
  ]);
  const [message, setMessage] = useState("");
  const [notice, setNotice] = useState("");
  const staySummary = useMemo(() => `${guests} guest${guests === 1 ? "" : "s"} · room availability confirmed live`, [guests]);

  const ask = (question) => {
    setChat(current => [...current, {from:"guest", text:question}, {from:"concierge", text:conciergeAnswers[question] || "I’ll look at this carefully. If a hotel-specific detail is not yet in my approved information, please allow me a moment. I’ll ask our guest service agent to contact you immediately."}]);
    setTimeout(() => document.querySelector("#concierge-chat")?.scrollIntoView({behavior:"smooth", block:"center"}), 40);
  };
  const submit = (event) => { event.preventDefault(); if (!message.trim()) return; ask(message.trim()); setMessage(""); };
  const search = () => { setNotice("Stay preferences saved. Showing the verified room collection."); setTimeout(() => document.querySelector("#rooms")?.scrollIntoView({behavior:"smooth"}), 250); };

  return (
    <main>
      <header className="topbar">
        <a className="wordmark" href="#home" aria-label="HT9 home">HT9 <span>JOMTIEN · PATTAYA</span></a>
        <button className="conciergeShortcut" onClick={() => document.querySelector("#concierge")?.scrollIntoView({behavior:"smooth"})}><span className="statusDot"/>Ask Elena</button>
      </header>

      <section id="home" className="hero">
        <div className="heroImage" aria-hidden="true" />
        <div className="heroShade" />
        <div className="heroCopy reveal">
          <div className="kicker">YOUR STAY, THOUGHTFULLY ARRANGED</div>
          <h1>Jomtien,<br/><em>made easy.</em></h1>
          <p>A modern hotel world inside LINE—rooms, local ideas and calm help before you arrive.</p>
        </div>
        <div className="scrollHint">Explore <span>↓</span></div>
      </section>

      <section className="bookingWrap" aria-label="Search your stay">
        <div className="bookingCard">
          <div className="bookingIntro"><span>Plan your stay</span><b>Best rate guarantee · Free Wi-Fi</b></div>
          <div className="dateGrid">
            <label>Check-in<input type="date" defaultValue="2026-08-08" /></label>
            <label>Check-out<input type="date" defaultValue="2026-08-10" /></label>
          </div>
          <div className="guestRow"><div><span>Guests</span><b>{staySummary}</b></div><div className="counter"><button onClick={() => setGuests(Math.max(1, guests-1))}>−</button><strong>{guests}</strong><button onClick={() => setGuests(Math.min(7, guests+1))}>+</button></div></div>
          <button className="primaryButton" onClick={search}>Find your room <span>↗</span></button>
          {notice && <div className="notice">{notice}</div>}
        </div>
      </section>

      <section className="about section" id="hotel">
        <div className="sectionLabel">01 · THE HOTEL</div>
        <h2>A quieter base,<br/><em>close to the coast.</em></h2>
        <p className="lead">HT9 Hotel is in Jomtien, Pattaya—200 metres from Jomtien Beach, 1 kilometre from Sukhumvit Road and 7 kilometres from Pattaya City Centre, according to the official hotel website.</p>
        <div className="factStrip"><div><b>200 m</b><span>to Jomtien Beach</span></div><div><b>10</b><span>room types</span></div><div><b>24 hr</b><span>front desk</span></div></div>
        <div className="editorialImage"><img src={`${imageBase}hotel/exterior.jpg`} alt="HT9 Hotel exterior"/><span>Jomtien · Pattaya</span></div>
      </section>

      <section id="rooms" className="roomsSection section darkSection">
        <div className="sectionLabel coral">02 · STAY</div>
        <div className="sectionTitleRow"><h2>Rooms for the<br/><em>way you travel.</em></h2><p>From an efficient double room to a private residence. Rates and occupancy are checked live.</p></div>
        <div className="featuredScroller">
          {rooms.slice(0,3).map(room => <button className="featuredRoom" key={room.name} onClick={() => room.sample && setDetailOpen(true)}>
            <img src={room.image} alt={room.name}/><div className="roomOverlay"><span>{room.size}</span><h3>{room.name}</h3><b>{room.sample ? "View designed sample" : "Explore room"} →</b></div>
          </button>)}
        </div>
        <a className="outlineButton" href={bookingUrl} target="_blank" rel="noreferrer">Check live availability</a>
      </section>

      <section className="stories section">
        <div className="sectionLabel">03 · TEN ROOM STORIES</div>
        <h2>One room.<br/><em>One story.</em></h2>
        <p className="lead compact">An editorial way to choose: begin with the feeling, then verify the practical fit.</p>
        <div className="storyGrid">
          {rooms.map((room, index) => <button key={room.name} className="storyCard" onClick={() => room.sample && setDetailOpen(true)}>
            <img src={`${imageBase}stories/poster-${String(index+1).padStart(2,"0")}.jpg`} alt={`${room.name} campaign story`}/>
            <div><span>{String(index+1).padStart(2,"0")}</span><b>{room.name}</b>{room.sample && <em>Full sample page</em>}</div>
          </button>)}
        </div>
      </section>

      <section id="experience" className="experience section blueSection">
        <div className="sectionLabel cream">04 · EXPERIENCE</div>
        <h2>Your day,<br/><em>with room to change.</em></h2>
        <div className="experienceHero"><img src={`${imageBase}hotel/rooftop-pool.jpg`} alt="HT9 rooftop swimming pool"/><div><span>ABOVE THE CITY</span><h3>Rooftop swimming pool</h3><p>Panoramic city views are described by the official hotel website. Operating hours require confirmation.</p></div></div>
        <div className="miniCards">
          <article><span>DINING</span><h3>Skyline Tropics</h3><p>9th-floor restaurant with city views.</p></article>
          <article><span>COFFEE</span><h3>Café & Bistro</h3><p>Quality coffee, a relaxed atmosphere and homemade snacks.</p></article>
          <article><span>SERVICE</span><h3>Private transfer</h3><p>Airport transport for solo travellers and groups; confirmation required.</p></article>
        </div>
      </section>

      <section className="recommend section" id="local">
        <div className="sectionLabel">05 · LOCAL NOTES</div>
        <h2>Plans with a<br/><em>point of view.</em></h2>
        <p className="lead compact">Curated from approved hotel information and official tourism sources. The concierge confirms live details before travel.</p>
        <div className="tabs">{Object.keys(recommendations).map(key => <button className={recTab===key?"active":""} onClick={() => setRecTab(key)} key={key}>{key}</button>)}</div>
        <div className="recList">{recommendations[recTab].map(([title,text,source],i) => <article key={title}><div className="recNumber">0{i+1}</div><div><h3>{title}</h3><p>{text}</p><span>{source}</span></div><b>↗</b></article>)}</div>
      </section>

      <section id="concierge" className="concierge section">
        <div className="conciergeHead"><div className="avatar">E</div><div><span><i/>AVAILABLE IN PROTOTYPE</span><h2>Meet Elena.</h2></div></div>
        <p className="conciergeIntro">A calm, senior-service voice designed around 20 years of luxury guest-care experience and a decade of Pattaya knowledge. This persona is a product concept—not a claim about a current HT9 employee.</p>
        <div id="concierge-chat" className="chatWindow">{chat.map((item,index) => <div key={index} className={`bubble ${item.from}`}>{item.from==="concierge" && <small>ELENA · HT9 CONCIERGE</small>}{item.text}</div>)}</div>
        <div className="quickPrompts">{Object.keys(conciergeAnswers).map(question => <button key={question} onClick={() => ask(question)}>{question}</button>)}</div>
        <form className="chatInput" onSubmit={submit}><input value={message} onChange={e=>setMessage(e.target.value)} placeholder="Ask about your stay or Pattaya…" aria-label="Message Elena"/><button aria-label="Send">↑</button></form>
        <p className="handoff">When a verified answer is unavailable: “Please allow me a moment. I’ll ask our guest service agent to contact you immediately.”</p>
      </section>

      <section className="finalCta section">
        <span>WHEN YOU’RE READY</span><h2>Let’s make<br/><em>Jomtien easy.</em></h2>
        <a className="primaryButton" href={bookingUrl} target="_blank" rel="noreferrer">Book on the official engine <b>↗</b></a>
        <a className="textButton" href={lineUrl} target="_blank" rel="noreferrer">Contact HT9 in LINE →</a>
        <div className="contactCard"><span>HT9 HOTEL PATTAYA</span><p>277/10 Moo 12, Nongprue, Banglamung, Chonburi 20150</p><p>+66 (0) 33 033 182</p></div>
      </section>

      <section className="sources section" id="sources"><details><summary>Prototype knowledge base & sources <span>＋</span></summary><div className="sourceBody"><p><b>Approved hotel source:</b> HT9 official website and its official booking engine. Used for location, room names and sizes, facilities, dining, services and contact details.</p><p><b>Local source:</b> Tourism Authority of Thailand Pattaya and Chonburi pages; Columbia Pictures Aquaverse official website.</p><p><b>Approved visual library:</b> Client Google Drive room folders and campaign presentation assets.</p><p><b>Requires confirmation before build:</b> live rates, inventory, room occupancy, pool and dining hours, menus, transport prices, response SLA, LIFF credentials and AI access to hotel operations.</p><a href="https://www.ht9hotel.com/" target="_blank" rel="noreferrer">Official hotel website ↗</a></div></details></section>

      <nav className="bottomNav" aria-label="Mini app navigation">
        <a href="#home"><span>⌂</span>Home</a><a href="#rooms"><span>□</span>Stay</a><a href="#local"><span>◇</span>Explore</a><a href="#concierge"><span>✦</span>Concierge</a>
      </nav>

      {detailOpen && <RoomDetail close={() => setDetailOpen(false)} />}
    </main>
  );
}

function RoomDetail({close}) {
  return <div className="detailPage" role="dialog" aria-modal="true" aria-label="Junior Family room detail">
    <div className="detailTop"><button onClick={close}>←</button><span>ROOM DETAIL · DESIGNED SAMPLE</span><button onClick={() => document.querySelector("#concierge")?.scrollIntoView()}>✦</button></div>
    <div className="detailHero"><img src={`${imageBase}rooms/junior-family.jpg`} alt="Junior Family room"/><div><span>03 · JUNIOR FAMILY</span><h1>Rain outside.<br/><em>Ritual inside.</em></h1></div></div>
    <div className="detailContent">
      <div className="detailStats"><div><b>65</b><span>sq.m</span></div><div><b>1</b><span>separate bedroom</span></div><div><b>✓</b><span>bathtub</span></div></div>
      <h2>Space to arrive<br/><em>at your own pace.</em></h2>
      <p>The official room page describes a separate bedroom, a spacious living area and a bathtub—designed to balance privacy, rest and time together.</p>
      <div className="detailImage"><img src={`${imageBase}stories/poster-03.jpg`} alt="Junior Family editorial room story"/><span>CAMPAIGN STORY VISUAL</span></div>
      <h3>Verified room amenities</h3>
      <div className="amenities"><span>Private balcony</span><span>Air-conditioning</span><span>Hairdryer</span><span>Free toiletries</span><span>Shower</span><span>Fridge</span><span>Safety deposit box</span><span>Sofa</span><span>Telephone</span><span>Wardrobe</span><span>Dining area</span></div>
      <div className="confirmBox"><b>Confirm before booking</b><p>Maximum occupancy, bedding configuration, bathtub availability by unit and any extra-person charges should be checked against live inventory.</p></div>
      <a className="primaryButton" href={bookingUrl} target="_blank" rel="noreferrer">Check this room live <span>↗</span></a>
      <button className="outlineDark" onClick={close}>Return to all rooms</button>
    </div>
  </div>;
}
