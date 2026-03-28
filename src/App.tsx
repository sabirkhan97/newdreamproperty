// import { useState, useEffect, useRef } from "react";

// const properties = [
//   {
//     id: 1,
//     name: "MVN Mall",
//     type: "Commercial",
//     location: "Gurugram",
//     price: "₹45L onwards",
//     img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
//     tag: "Hot Deal",
//   },
//   {
//     id: 2,
//     name: "BPTP Park",
//     type: "Residential",
//     location: "Sector 83, Gurugram",
//     price: "₹78L onwards",
//     img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
//     tag: "New Launch",
//   },
//   {
//     id: 3,
//     name: "Riviera AIPL",
//     type: "Luxury Villa",
//     location: "Lake City, Gurugram",
//     price: "₹1.2Cr onwards",
//     img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&q=80",
//     tag: "Premium",
//   },
//   {
//     id: 4,
//     name: "ILD Greens",
//     type: "Apartment",
//     location: "Sector 37C, Gurugram",
//     price: "₹62L onwards",
//     img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
//     tag: "Ready to Move",
//   },
//   {
//     id: 5,
//     name: "M3M Golf Estate",
//     type: "Golf Residences",
//     location: "Sector 65, Gurugram",
//     price: "₹3.5Cr onwards",
//     img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
//     tag: "Luxury",
//   },
//   {
//     id: 6,
//     name: "Omaxe State",
//     type: "Commercial Hub",
//     location: "Dwarka, Delhi",
//     price: "₹55L onwards",
//     img: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&q=80",
//     tag: "Upcoming",
//   },
// ];

// const testimonials = [
//   {
//     name: "Rajesh Sharma",
//     role: "Homeowner",
//     text: "Tariq and Baljit helped me find my dream home in just 3 weeks. Their knowledge of Gurugram's market is unparalleled. RERA-certified and absolutely trustworthy!",
//     avatar: "RS",
//   },
//   {
//     name: "Priya Mehta",
//     role: "Investor",
//     text: "Invested in M3M through New Dream Property — the ROI has been exceptional. Professional, transparent, and always available for guidance.",
//     avatar: "PM",
//   },
//   {
//     name: "Anil Verma",
//     role: "Commercial Buyer",
//     text: "Got a prime commercial space in MVN Mall at the best price. The team negotiated brilliantly on my behalf. Highly recommend!",
//     avatar: "AV",
//   },
// ];

// const stats = [
//   { label: "Properties Sold", value: "500+" },
//   { label: "Happy Clients", value: "1200+" },
//   { label: "Years Experience", value: "12+" },
//   { label: "Cities Covered", value: "8+" },
// ];

// export default function App() {
//   const [activeNav, setActiveNav] = useState("home");
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "", type: "Buy" });
//   const [submitted, setSubmitted] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 60);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const scrollTo = (id) => {
//     setActiveNav(id);
//     setMenuOpen(false);
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//   };

//   const filteredProperties =
//     activeFilter === "All"
//       ? properties
//       : properties.filter((p) => p.type.includes(activeFilter));

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//     setTimeout(() => setSubmitted(false), 4000);
//     setFormData({ name: "", phone: "", email: "", message: "", type: "Buy" });
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

//         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

//         :root {
//           --gold: #C9A84C;
//           --gold-light: #E8C97A;
//           --dark: #0D0D0D;
//           --dark2: #141414;
//           --dark3: #1C1C1C;
//           --card: #1A1A1A;
//           --white: #F5F0E8;
//           --gray: #888;
//           --purple: #6B3FA0;
//           --green: #5B8C00;
//         }

//         html { scroll-behavior: smooth; }

//         body {
//           font-family: 'DM Sans', sans-serif;
//           background: var(--dark);
//           color: var(--white);
//           overflow-x: hidden;
//         }

//         /* NAV */
//         nav {
//           position: fixed; top: 0; left: 0; right: 0; z-index: 100;
//           transition: all 0.4s ease;
//           padding: 0 5%;
//         }
//         nav.scrolled {
//           background: rgba(13,13,13,0.97);
//           backdrop-filter: blur(12px);
//           border-bottom: 1px solid rgba(201,168,76,0.2);
//           box-shadow: 0 4px 30px rgba(0,0,0,0.5);
//         }
//         .nav-inner {
//           display: flex; align-items: center; justify-content: space-between;
//           height: 72px; max-width: 1280px; margin: 0 auto;
//         }
//         .nav-logo {
//           display: flex; align-items: center; gap: 12px; cursor: pointer;
//         }
//         .nav-logo .house-icon {
//           width: 38px; height: 38px;
//         }
//         .nav-logo-text { line-height: 1.1; }
//         .nav-logo-text .brand { font-family: 'Playfair Display', serif; font-size: 1.1rem; font-weight: 700; color: var(--gold); letter-spacing: 0.02em; }
//         .nav-logo-text .sub { font-size: 0.65rem; color: var(--gray); letter-spacing: 0.15em; text-transform: uppercase; }
//         .nav-links { display: flex; gap: 2rem; list-style: none; }
//         .nav-links li button {
//           background: none; border: none; color: rgba(245,240,232,0.75);
//           font-family: 'DM Sans', sans-serif; font-size: 0.85rem; font-weight: 500;
//           cursor: pointer; letter-spacing: 0.08em; text-transform: uppercase;
//           padding: 4px 0; position: relative; transition: color 0.3s;
//         }
//         .nav-links li button::after {
//           content: ''; position: absolute; bottom: -2px; left: 0; right: 100%;
//           height: 1px; background: var(--gold); transition: right 0.3s;
//         }
//         .nav-links li button:hover, .nav-links li button.active { color: var(--gold); }
//         .nav-links li button:hover::after, .nav-links li button.active::after { right: 0; }
//         .nav-cta {
//           background: var(--gold); color: var(--dark); border: none;
//           font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 0.8rem;
//           padding: 10px 22px; border-radius: 2px; cursor: pointer;
//           letter-spacing: 0.08em; text-transform: uppercase;
//           transition: background 0.3s, transform 0.2s;
//         }
//         .nav-cta:hover { background: var(--gold-light); transform: translateY(-1px); }
//         .hamburger { display: none; background: none; border: none; cursor: pointer; padding: 4px; }
//         .hamburger span { display: block; width: 24px; height: 2px; background: var(--gold); margin: 5px 0; transition: all 0.3s; }
//         .mobile-menu {
//           display: none; flex-direction: column; gap: 1rem;
//           background: rgba(13,13,13,0.98); padding: 2rem 5%;
//           border-top: 1px solid rgba(201,168,76,0.2);
//         }
//         .mobile-menu button {
//           background: none; border: none; color: var(--white); font-family: 'DM Sans', sans-serif;
//           font-size: 1rem; cursor: pointer; text-align: left; padding: 0.5rem 0;
//           border-bottom: 1px solid rgba(255,255,255,0.06);
//         }

//         /* HERO */
//         #home {
//           min-height: 100vh; position: relative;
//           display: flex; align-items: center;
//           background: linear-gradient(135deg, #0a0a0a 0%, #111 50%, #0d0c09 100%);
//           overflow: hidden;
//         }
//         .hero-bg-grid {
//           position: absolute; inset: 0;
//           background-image: linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px);
//           background-size: 60px 60px;
//         }
//         .hero-glow {
//           position: absolute; top: -200px; right: -200px;
//           width: 700px; height: 700px; border-radius: 50%;
//           background: radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%);
//           pointer-events: none;
//         }
//         .hero-glow2 {
//           position: absolute; bottom: -300px; left: -100px;
//           width: 600px; height: 600px; border-radius: 50%;
//           background: radial-gradient(circle, rgba(107,63,160,0.08) 0%, transparent 70%);
//           pointer-events: none;
//         }
//         .hero-content {
//           position: relative; z-index: 2;
//           max-width: 1280px; margin: 0 auto; padding: 0 5%;
//           padding-top: 80px;
//           display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;
//         }
//         .hero-badge {
//           display: inline-flex; align-items: center; gap: 8px;
//           background: rgba(201,168,76,0.1); border: 1px solid rgba(201,168,76,0.3);
//           padding: 6px 16px; border-radius: 100px; margin-bottom: 1.5rem;
//         }
//         .hero-badge .dot { width: 6px; height: 6px; border-radius: 50%; background: var(--gold); animation: pulse 2s infinite; }
//         @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.3)} }
//         .hero-badge span { font-size: 0.75rem; color: var(--gold); letter-spacing: 0.15em; text-transform: uppercase; font-weight: 500; }
//         .hero-title {
//           font-family: 'Playfair Display', serif;
//           font-size: clamp(2.5rem, 5vw, 4.2rem);
//           font-weight: 900; line-height: 1.05;
//           margin-bottom: 1.5rem; color: var(--white);
//         }
//         .hero-title em { color: var(--gold); font-style: italic; }
//         .hero-subtitle {
//           font-size: 1rem; color: rgba(245,240,232,0.6); line-height: 1.7;
//           margin-bottom: 2.5rem; max-width: 480px;
//         }
//         .hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; }
//         .btn-primary {
//           background: var(--gold); color: var(--dark);
//           border: none; padding: 14px 32px; font-family: 'DM Sans', sans-serif;
//           font-weight: 700; font-size: 0.85rem; letter-spacing: 0.1em;
//           text-transform: uppercase; cursor: pointer; border-radius: 2px;
//           transition: all 0.3s;
//         }
//         .btn-primary:hover { background: var(--gold-light); transform: translateY(-2px); box-shadow: 0 8px 25px rgba(201,168,76,0.35); }
//         .btn-outline {
//           background: transparent; color: var(--white);
//           border: 1px solid rgba(245,240,232,0.3); padding: 14px 32px;
//           font-family: 'DM Sans', sans-serif; font-weight: 500; font-size: 0.85rem;
//           letter-spacing: 0.1em; text-transform: uppercase; cursor: pointer;
//           border-radius: 2px; transition: all 0.3s;
//         }
//         .btn-outline:hover { border-color: var(--gold); color: var(--gold); }
//         .hero-card-wrap { position: relative; }
//         .hero-card {
//           background: var(--card);
//           border: 1px solid rgba(201,168,76,0.2);
//           border-radius: 4px; overflow: hidden;
//           box-shadow: 0 30px 60px rgba(0,0,0,0.6);
//           position: relative;
//         }
//         .hero-card img { width: 100%; height: 320px; object-fit: cover; display: block; }
//         .hero-card-info {
//           padding: 1.5rem;
//           background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
//           position: absolute; bottom: 0; left: 0; right: 0;
//         }
//         .hero-card-info h3 { font-family: 'Playfair Display', serif; font-size: 1.2rem; color: var(--white); }
//         .hero-card-info p { font-size: 0.8rem; color: var(--gold); margin-top: 4px; }
//         .hero-float-stat {
//           position: absolute; background: var(--dark3);
//           border: 1px solid rgba(201,168,76,0.2); border-radius: 4px;
//           padding: 12px 18px; text-align: center;
//         }
//         .hero-float-stat.top-left { top: -20px; left: -30px; }
//         .hero-float-stat.bottom-right { bottom: 80px; right: -25px; }
//         .hero-float-stat .big { font-family: 'Playfair Display', serif; font-size: 1.5rem; color: var(--gold); font-weight: 700; }
//         .hero-float-stat .small { font-size: 0.65rem; color: var(--gray); text-transform: uppercase; letter-spacing: 0.1em; }
//         .hero-scroll {
//           position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%);
//           display: flex; flex-direction: column; align-items: center; gap: 8px;
//           cursor: pointer; opacity: 0.6; transition: opacity 0.3s;
//         }
//         .hero-scroll:hover { opacity: 1; }
//         .hero-scroll span { font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); }
//         .scroll-line { width: 1px; height: 40px; background: linear-gradient(to bottom, var(--gold), transparent); animation: scrollAnim 2s infinite; }
//         @keyframes scrollAnim { 0%{transform:scaleY(0);transform-origin:top} 50%{transform:scaleY(1);transform-origin:top} 51%{transform-origin:bottom} 100%{transform:scaleY(0);transform-origin:bottom} }

//         /* SECTION BASE */
//         section { padding: 100px 5%; }
//         .section-header { text-align: center; margin-bottom: 4rem; }
//         .section-label {
//           font-size: 0.7rem; letter-spacing: 0.25em; text-transform: uppercase;
//           color: var(--gold); font-weight: 600; margin-bottom: 1rem; display: block;
//         }
//         .section-title {
//           font-family: 'Playfair Display', serif;
//           font-size: clamp(2rem, 4vw, 3rem); font-weight: 700; line-height: 1.15;
//           color: var(--white);
//         }
//         .section-title em { color: var(--gold); font-style: italic; }
//         .section-desc { margin-top: 1rem; color: var(--gray); font-size: 0.95rem; max-width: 520px; margin-inline: auto; line-height: 1.7; }
//         .max-wrap { max-width: 1280px; margin: 0 auto; }

//         /* STATS */
//         #stats-bar {
//           background: var(--dark3); border-top: 1px solid rgba(201,168,76,0.15);
//           border-bottom: 1px solid rgba(201,168,76,0.15); padding: 50px 5%;
//         }
//         .stats-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 2rem; max-width: 900px; margin: 0 auto; text-align: center; }
//         .stat-item .num { font-family: 'Playfair Display', serif; font-size: 2.8rem; font-weight: 900; color: var(--gold); }
//         .stat-item .lbl { font-size: 0.75rem; color: var(--gray); text-transform: uppercase; letter-spacing: 0.15em; margin-top: 4px; }

//         /* PROPERTIES */
//         #properties { background: var(--dark2); }
//         .filter-bar { display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; margin-bottom: 3rem; }
//         .filter-btn {
//           background: transparent; color: rgba(245,240,232,0.6);
//           border: 1px solid rgba(245,240,232,0.15); padding: 8px 20px;
//           font-family: 'DM Sans', sans-serif; font-size: 0.8rem; font-weight: 500;
//           letter-spacing: 0.08em; cursor: pointer; border-radius: 100px;
//           transition: all 0.3s;
//         }
//         .filter-btn:hover, .filter-btn.active {
//           background: var(--gold); border-color: var(--gold);
//           color: var(--dark); font-weight: 600;
//         }
//         .properties-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
//         .prop-card {
//           background: var(--card); border: 1px solid rgba(255,255,255,0.06);
//           border-radius: 4px; overflow: hidden; cursor: pointer;
//           transition: all 0.4s ease; position: relative;
//         }
//         .prop-card:hover { transform: translateY(-8px); border-color: rgba(201,168,76,0.3); box-shadow: 0 20px 50px rgba(0,0,0,0.5); }
//         .prop-img { position: relative; overflow: hidden; height: 220px; }
//         .prop-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }
//         .prop-card:hover .prop-img img { transform: scale(1.07); }
//         .prop-tag {
//           position: absolute; top: 12px; left: 12px;
//           background: var(--gold); color: var(--dark);
//           font-size: 0.65rem; font-weight: 700; letter-spacing: 0.12em;
//           text-transform: uppercase; padding: 4px 10px; border-radius: 2px;
//         }
//         .prop-body { padding: 1.25rem; }
//         .prop-type { font-size: 0.7rem; color: var(--gold); text-transform: uppercase; letter-spacing: 0.15em; font-weight: 600; margin-bottom: 6px; }
//         .prop-name { font-family: 'Playfair Display', serif; font-size: 1.1rem; color: var(--white); margin-bottom: 4px; }
//         .prop-loc { font-size: 0.8rem; color: var(--gray); margin-bottom: 1rem; display: flex; align-items: center; gap: 4px; }
//         .prop-footer { display: flex; align-items: center; justify-content: space-between; padding-top: 1rem; border-top: 1px solid rgba(255,255,255,0.06); }
//         .prop-price { font-family: 'Playfair Display', serif; font-size: 1rem; color: var(--gold); font-weight: 700; }
//         .prop-enquire {
//           background: transparent; border: 1px solid rgba(201,168,76,0.4);
//           color: var(--gold); font-family: 'DM Sans', sans-serif;
//           font-size: 0.72rem; font-weight: 600; letter-spacing: 0.08em;
//           padding: 6px 14px; cursor: pointer; border-radius: 2px; transition: all 0.3s;
//           text-transform: uppercase;
//         }
//         .prop-enquire:hover { background: var(--gold); color: var(--dark); }

//         /* ABOUT */
//         #about { background: var(--dark); }
//         .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
//         .about-img-wrap { position: relative; }
//         .about-img-main { width: 100%; border-radius: 4px; display: block; object-fit: cover; height: 520px; }
//         .about-cert-badge {
//           position: absolute; bottom: -20px; right: -20px;
//           background: var(--gold); color: var(--dark);
//           padding: 1.5rem; text-align: center; border-radius: 4px;
//           box-shadow: 0 10px 30px rgba(201,168,76,0.3);
//         }
//         .about-cert-badge .cert-text { font-family: 'Playfair Display', serif; font-size: 1rem; font-weight: 900; line-height: 1.2; }
//         .about-cert-badge .cert-sub { font-size: 0.65rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; margin-top: 4px; opacity: 0.7; }
//         .about-content { padding-left: 1rem; }
//         .about-agents { display: flex; gap: 1.5rem; margin: 2rem 0; }
//         .agent-card {
//           flex: 1; background: var(--card); border: 1px solid rgba(201,168,76,0.15);
//           padding: 1.25rem; border-radius: 4px; transition: border-color 0.3s;
//         }
//         .agent-card:hover { border-color: var(--gold); }
//         .agent-avatar {
//           width: 48px; height: 48px; border-radius: 50%;
//           background: linear-gradient(135deg, var(--purple), var(--gold));
//           display: flex; align-items: center; justify-content: center;
//           font-family: 'Playfair Display', serif; font-weight: 700; color: var(--white);
//           font-size: 1rem; margin-bottom: 0.75rem;
//         }
//         .agent-name { font-family: 'Playfair Display', serif; font-size: 0.95rem; color: var(--white); }
//         .agent-role { font-size: 0.72rem; color: var(--gold); text-transform: uppercase; letter-spacing: 0.1em; margin-top: 2px; }
//         .agent-phone { font-size: 0.8rem; color: var(--gray); margin-top: 6px; }
//         .about-features { display: flex; flex-direction: column; gap: 1rem; margin-top: 2rem; }
//         .feature-item { display: flex; align-items: flex-start; gap: 1rem; }
//         .feature-icon {
//           width: 36px; height: 36px; background: rgba(201,168,76,0.1);
//           border: 1px solid rgba(201,168,76,0.2); border-radius: 4px;
//           display: flex; align-items: center; justify-content: center;
//           font-size: 1rem; flex-shrink: 0;
//         }
//         .feature-text h4 { font-size: 0.9rem; color: var(--white); font-weight: 600; margin-bottom: 2px; }
//         .feature-text p { font-size: 0.8rem; color: var(--gray); line-height: 1.5; }

//         /* TESTIMONIALS */
//         #testimonials { background: var(--dark3); }
//         .testimonials-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
//         .testi-card {
//           background: var(--card); border: 1px solid rgba(255,255,255,0.06);
//           padding: 2rem; border-radius: 4px; position: relative;
//           transition: all 0.3s;
//         }
//         .testi-card:hover { border-color: rgba(201,168,76,0.2); transform: translateY(-4px); }
//         .testi-quote { font-size: 3rem; line-height: 1; color: rgba(201,168,76,0.2); font-family: 'Playfair Display', serif; margin-bottom: 1rem; }
//         .testi-text { font-size: 0.9rem; color: rgba(245,240,232,0.7); line-height: 1.8; margin-bottom: 1.5rem; }
//         .testi-author { display: flex; align-items: center; gap: 12px; }
//         .testi-avatar {
//           width: 42px; height: 42px; border-radius: 50%;
//           background: linear-gradient(135deg, var(--gold), var(--purple));
//           display: flex; align-items: center; justify-content: center;
//           font-weight: 700; font-size: 0.8rem; color: var(--dark);
//         }
//         .testi-name { font-weight: 600; font-size: 0.9rem; color: var(--white); }
//         .testi-role { font-size: 0.72rem; color: var(--gold); }
//         .stars { color: var(--gold); font-size: 0.8rem; margin-bottom: 1rem; }

//         /* CONTACT */
//         #contact { background: var(--dark2); }
//         .contact-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 4rem; align-items: start; }
//         .contact-info h3 { font-family: 'Playfair Display', serif; font-size: 1.8rem; color: var(--white); margin-bottom: 1rem; }
//         .contact-info p { font-size: 0.9rem; color: var(--gray); line-height: 1.7; margin-bottom: 2rem; }
//         .contact-details { display: flex; flex-direction: column; gap: 1.25rem; }
//         .contact-item { display: flex; align-items: flex-start; gap: 1rem; }
//         .contact-icon {
//           width: 44px; height: 44px; background: rgba(201,168,76,0.1);
//           border: 1px solid rgba(201,168,76,0.2); border-radius: 4px;
//           display: flex; align-items: center; justify-content: center;
//           font-size: 1.1rem; flex-shrink: 0;
//         }
//         .contact-label { font-size: 0.7rem; color: var(--gold); text-transform: uppercase; letter-spacing: 0.12em; font-weight: 600; }
//         .contact-value { font-size: 0.9rem; color: var(--white); margin-top: 2px; }
//         .contact-value a { color: var(--white); text-decoration: none; transition: color 0.3s; }
//         .contact-value a:hover { color: var(--gold); }
//         .contact-form {
//           background: var(--card); border: 1px solid rgba(255,255,255,0.07);
//           padding: 2.5rem; border-radius: 4px;
//         }
//         .contact-form h3 { font-family: 'Playfair Display', serif; font-size: 1.4rem; color: var(--white); margin-bottom: 1.5rem; }
//         .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
//         .form-group { margin-bottom: 1.25rem; }
//         .form-group label { display: block; font-size: 0.72rem; color: var(--gold); text-transform: uppercase; letter-spacing: 0.12em; font-weight: 600; margin-bottom: 8px; }
//         .form-group input, .form-group textarea, .form-group select {
//           width: 100%; background: rgba(255,255,255,0.05);
//           border: 1px solid rgba(255,255,255,0.1); color: var(--white);
//           font-family: 'DM Sans', sans-serif; font-size: 0.9rem;
//           padding: 12px 14px; border-radius: 3px; outline: none;
//           transition: border-color 0.3s;
//         }
//         .form-group input:focus, .form-group textarea:focus, .form-group select:focus {
//           border-color: var(--gold); background: rgba(201,168,76,0.04);
//         }
//         .form-group textarea { height: 110px; resize: vertical; }
//         .form-group select option { background: var(--dark3); }
//         .form-submit { width: 100%; }
//         .success-msg {
//           background: rgba(91,140,0,0.15); border: 1px solid rgba(91,140,0,0.4);
//           color: #8fbc2e; padding: 1rem; border-radius: 3px; text-align: center;
//           font-size: 0.88rem; margin-top: 1rem;
//         }

//         /* FOOTER */
//         footer {
//           background: var(--dark); border-top: 1px solid rgba(201,168,76,0.15);
//           padding: 60px 5% 30px;
//         }
//         .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 3rem; max-width: 1280px; margin: 0 auto 3rem; }
//         .footer-brand .brand-name { font-family: 'Playfair Display', serif; font-size: 1.3rem; color: var(--gold); font-weight: 700; margin-bottom: 6px; }
//         .footer-brand .brand-rera { font-size: 0.7rem; color: var(--gray); letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 1rem; }
//         .footer-brand p { font-size: 0.85rem; color: var(--gray); line-height: 1.7; max-width: 280px; }
//         .footer-col h4 { font-size: 0.75rem; color: var(--gold); text-transform: uppercase; letter-spacing: 0.15em; font-weight: 700; margin-bottom: 1.25rem; }
//         .footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 0.65rem; }
//         .footer-col ul li button {
//           background: none; border: none; color: var(--gray); font-family: 'DM Sans', sans-serif;
//           font-size: 0.85rem; cursor: pointer; text-align: left; transition: color 0.3s; padding: 0;
//         }
//         .footer-col ul li button:hover { color: var(--gold); }
//         .footer-bottom {
//           max-width: 1280px; margin: 0 auto; padding-top: 1.5rem;
//           border-top: 1px solid rgba(255,255,255,0.06);
//           display: flex; align-items: center; justify-content: space-between;
//           font-size: 0.78rem; color: var(--gray);
//         }
//         .rera-badge {
//           display: inline-flex; align-items: center; gap: 6px;
//           background: rgba(201,168,76,0.08); border: 1px solid rgba(201,168,76,0.2);
//           color: var(--gold); padding: 4px 12px; border-radius: 100px;
//           font-size: 0.7rem; font-weight: 600; letter-spacing: 0.1em;
//         }

//         /* PARTNER LOGOS */
//         #partners { background: var(--dark); padding: 50px 5%; }
//         .partners-label { text-align: center; font-size: 0.7rem; color: var(--gray); letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 2rem; }
//         .partners-strip { display: flex; gap: 2rem; align-items: center; justify-content: center; flex-wrap: wrap; }
//         .partner-chip {
//           background: var(--card); border: 1px solid rgba(255,255,255,0.08);
//           padding: 10px 22px; border-radius: 3px;
//           font-weight: 700; font-size: 0.85rem; color: rgba(245,240,232,0.5);
//           letter-spacing: 0.08em; transition: all 0.3s; cursor: default;
//         }
//         .partner-chip:hover { border-color: rgba(201,168,76,0.3); color: var(--gold); }

//         /* RESPONSIVE */
//         @media (max-width: 1024px) {
//           .hero-content { grid-template-columns: 1fr; gap: 3rem; text-align: center; }
//           .hero-subtitle { margin: 0 auto 2.5rem; }
//           .hero-actions { justify-content: center; }
//           .hero-card-wrap { max-width: 480px; margin: 0 auto; }
//           .properties-grid { grid-template-columns: repeat(2, 1fr); }
//           .about-grid { grid-template-columns: 1fr; gap: 3rem; }
//           .about-img-main { height: 350px; }
//           .about-cert-badge { bottom: -15px; right: 10px; }
//           .footer-grid { grid-template-columns: 1fr 1fr; }
//           .testimonials-grid { grid-template-columns: 1fr; max-width: 500px; margin: 0 auto; }
//         }
//         @media (max-width: 768px) {
//           .nav-links, .nav-cta { display: none; }
//           .hamburger { display: block; }
//           .mobile-menu { display: flex; }
//           section { padding: 70px 5%; }
//           .properties-grid { grid-template-columns: 1fr; }
//           .stats-grid { grid-template-columns: repeat(2, 1fr); }
//           .contact-grid { grid-template-columns: 1fr; }
//           .form-row { grid-template-columns: 1fr; }
//           .footer-grid { grid-template-columns: 1fr; gap: 2rem; }
//           .footer-bottom { flex-direction: column; gap: 1rem; text-align: center; }
//           .hero-float-stat { display: none; }
//           .about-agents { flex-direction: column; }
//         }
//       `}</style>

//       {/* NAV */}
//       <nav className={scrolled ? "scrolled" : ""}>
//         <div className="nav-inner">
//           <div className="nav-logo" onClick={() => scrollTo("home")}>
//             <svg className="house-icon" viewBox="0 0 40 38" fill="none">
//               <path d="M20 4L36 17V36H26V26H14V36H4V17L20 4Z" fill="none" stroke="#C9A84C" strokeWidth="2"/>
//               <path d="M14 26H26V36H14V26Z" fill="rgba(201,168,76,0.15)" stroke="#C9A84C" strokeWidth="1.5"/>
//               <rect x="16" y="14" width="8" height="8" rx="1" fill="rgba(91,140,0,0.7)" stroke="#5B8C00" strokeWidth="1"/>
//             </svg>
//             <div className="nav-logo-text">
//               <div className="brand">New Dream Property</div>
//               <div className="sub">RERA Certified · Gurugram</div>
//             </div>
//           </div>
//           <ul className="nav-links">
//             {["home","properties","about","testimonials","contact"].map(id => (
//               <li key={id}><button className={activeNav===id?"active":""} onClick={() => scrollTo(id)}>{id.charAt(0).toUpperCase()+id.slice(1)}</button></li>
//             ))}
//           </ul>
//           <button className="nav-cta" onClick={() => scrollTo("contact")}>Get Free Advice</button>
//           <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
//             <span/><span/><span/>
//           </button>
//         </div>
//         {menuOpen && (
//           <div className="mobile-menu">
//             {["home","properties","about","testimonials","contact"].map(id => (
//               <button key={id} onClick={() => scrollTo(id)}>{id.charAt(0).toUpperCase()+id.slice(1)}</button>
//             ))}
//           </div>
//         )}
//       </nav>

//       {/* HERO */}
//       <section id="home">
//         <div className="hero-bg-grid"/>
//         <div className="hero-glow"/>
//         <div className="hero-glow2"/>
//         <div className="hero-content max-wrap">
//           <div>
//             <div className="hero-badge"><span className="dot"/><span>RERA Certified Real Estate</span></div>
//             <h1 className="hero-title">Find Your <em>Dream</em><br/>Property in<br/>Gurugram</h1>
//             <p className="hero-subtitle">
//               Trusted by 1200+ happy families. Tariq Khan & Baljit Khatri bring you the finest residential and commercial properties across Gurugram and Delhi NCR.
//             </p>
//             <div className="hero-actions">
//               <button className="btn-primary" onClick={() => scrollTo("properties")}>Explore Properties</button>
//               <button className="btn-outline" onClick={() => scrollTo("contact")}>Talk to an Expert</button>
//             </div>
//           </div>
//           <div className="hero-card-wrap">
//             <div className="hero-float-stat top-left">
//               <div className="big">500+</div>
//               <div className="small">Deals Closed</div>
//             </div>
//             <div className="hero-card">
//               <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80" alt="Luxury Property" />
//               <div className="hero-card-info">
//                 <h3>M3M Golf Estate</h3>
//                 <p>Sector 65, Gurugram · ₹3.5Cr onwards</p>
//               </div>
//             </div>
//             <div className="hero-float-stat bottom-right">
//               <div className="big">12+</div>
//               <div className="small">Yrs Experience</div>
//             </div>
//           </div>
//         </div>
//         <div className="hero-scroll" onClick={() => scrollTo("stats-bar")}>
//           <span>Scroll</span>
//           <div className="scroll-line"/>
//         </div>
//       </section>

//       {/* STATS */}
//       <div id="stats-bar">
//         <div className="stats-grid">
//           {stats.map(s => (
//             <div className="stat-item" key={s.label}>
//               <div className="num">{s.value}</div>
//               <div className="lbl">{s.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* PROPERTIES */}
//       <section id="properties">
//         <div className="max-wrap">
//           <div className="section-header">
//             <span className="section-label">Our Portfolio</span>
//             <h2 className="section-title">Featured <em>Properties</em></h2>
//             <p className="section-desc">Hand-picked properties from top developers — MVN, BPTP, Riviera, ILD, M3M, Omaxe & more.</p>
//           </div>
//           <div className="filter-bar">
//             {["All","Residential","Commercial","Luxury","Apartment"].map(f => (
//               <button key={f} className={`filter-btn${activeFilter===f?" active":""}`} onClick={() => setActiveFilter(f)}>{f}</button>
//             ))}
//           </div>
//           <div className="properties-grid">
//             {filteredProperties.map(p => (
//               <div className="prop-card" key={p.id}>
//                 <div className="prop-img">
//                   <img src={p.img} alt={p.name} />
//                   <div className="prop-tag">{p.tag}</div>
//                 </div>
//                 <div className="prop-body">
//                   <div className="prop-type">{p.type}</div>
//                   <div className="prop-name">{p.name}</div>
//                   <div className="prop-loc">📍 {p.location}</div>
//                   <div className="prop-footer">
//                     <span className="prop-price">{p.price}</span>
//                     <button className="prop-enquire" onClick={() => scrollTo("contact")}>Enquire</button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ABOUT */}
//       <section id="about">
//         <div className="max-wrap about-grid">
//           <div className="about-img-wrap">
//             <img src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=700&q=80" alt="Office" className="about-img-main"/>
//             <div className="about-cert-badge">
//               <div className="cert-text">RERA<br/>Certified</div>
//               <div className="cert-sub">Since 2012</div>
//             </div>
//           </div>
//           <div className="about-content">
//             <span className="section-label">About Us</span>
//             <h2 className="section-title" style={{textAlign:"left"}}>The Team Behind<br/><em>New Dream Property</em></h2>
//             <p style={{color:"var(--gray)",fontSize:"0.9rem",lineHeight:"1.8",marginTop:"1rem",marginBottom:"1.5rem"}}>
//               Founded in Gurugram, New Dream Property is a RERA-certified real estate advisory firm helping buyers, investors, and businesses find the perfect property. With over a decade of experience, our team offers transparent guidance, end-to-end support, and unmatched market knowledge across NCR.
//             </p>
//             <div className="about-agents">
//               <div className="agent-card">
//                 <div className="agent-avatar">TK</div>
//                 <div className="agent-name">Tariq Khan</div>
//                 <div className="agent-role">Senior Property Advisor</div>
//                 <div className="agent-phone">+91-9870483003</div>
//               </div>
//               <div className="agent-card">
//                 <div className="agent-avatar">BK</div>
//                 <div className="agent-name">Baljit Khatri</div>
//                 <div className="agent-role">Real Estate Consultant</div>
//                 <div className="agent-phone">+91-8368179667</div>
//               </div>
//             </div>
//             <div className="about-features">
//               {[
//                 {icon:"🏛️", title:"RERA Certified", desc:"Fully registered and compliant with all real estate regulations."},
//                 {icon:"🤝", title:"End-to-End Support", desc:"From property search to registration — we handle everything."},
//                 {icon:"📊", title:"Best Market Rates", desc:"Our network ensures you get the most competitive pricing."},
//               ].map(f => (
//                 <div className="feature-item" key={f.title}>
//                   <div className="feature-icon">{f.icon}</div>
//                   <div className="feature-text"><h4>{f.title}</h4><p>{f.desc}</p></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* PARTNER LOGOS */}
//       <div id="partners">
//         <div className="partners-label">Our Trusted Developer Partners</div>
//         <div className="partners-strip">
//           {["MVN Mall","BPTP","Riviera AIPL","ILD Greens","GIC","M3M","Omaxe"].map(p => (
//             <div className="partner-chip" key={p}>{p}</div>
//           ))}
//         </div>
//       </div>

//       {/* TESTIMONIALS */}
//       <section id="testimonials">
//         <div className="max-wrap">
//           <div className="section-header">
//             <span className="section-label">Client Stories</span>
//             <h2 className="section-title">What Our <em>Clients Say</em></h2>
//             <p className="section-desc">Real experiences from real people who found their dream property with us.</p>
//           </div>
//           <div className="testimonials-grid">
//             {testimonials.map(t => (
//               <div className="testi-card" key={t.name}>
//                 <div className="testi-quote">"</div>
//                 <div className="stars">★★★★★</div>
//                 <p className="testi-text">{t.text}</p>
//                 <div className="testi-author">
//                   <div className="testi-avatar">{t.avatar}</div>
//                   <div>
//                     <div className="testi-name">{t.name}</div>
//                     <div className="testi-role">{t.role}</div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CONTACT */}
//       <section id="contact">
//         <div className="max-wrap">
//           <div className="section-header">
//             <span className="section-label">Get In Touch</span>
//             <h2 className="section-title">Let's Find Your <em>Perfect Property</em></h2>
//             <p className="section-desc">Reach out for a free consultation. Our experts are ready to help you.</p>
//           </div>
//           <div className="contact-grid">
//             <div className="contact-info">
//               <h3>Visit Our Office</h3>
//               <p>Come meet us at our Gurugram office, or give us a call. We're happy to schedule a site visit at your convenience.</p>
//               <div className="contact-details">
//                 <div className="contact-item">
//                   <div className="contact-icon">📍</div>
//                   <div>
//                     <div className="contact-label">Address</div>
//                     <div className="contact-value">609, 6th Floor, SVH-83<br/>Metro Street Sec-83<br/>Gurugram - 122004</div>
//                   </div>
//                 </div>
//                 <div className="contact-item">
//                   <div className="contact-icon">📞</div>
//                   <div>
//                     <div className="contact-label">Phone</div>
//                     <div className="contact-value">
//                       <a href="tel:+919870483003">+91-9870483003</a><br/>
//                       <a href="tel:+918368179667">+91-8368179667</a>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="contact-item">
//                   <div className="contact-icon">✉️</div>
//                   <div>
//                     <div className="contact-label">Email</div>
//                     <div className="contact-value"><a href="mailto:tariq.khan.guy@gmail.com">tariq.khan.guy@gmail.com</a></div>
//                   </div>
//                 </div>
//                 <div className="contact-item">
//                   <div className="contact-icon">🌐</div>
//                   <div>
//                     <div className="contact-label">Website</div>
//                     <div className="contact-value"><a href="https://www.newdreamproperty.com" target="_blank" rel="noopener noreferrer">www.newdreamproperty.com</a></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="contact-form">
//               <h3>Send Us a Message</h3>
//               <form onSubmit={handleSubmit}>
//                 <div className="form-row">
//                   <div className="form-group">
//                     <label>Your Name</label>
//                     <input type="text" placeholder="Rahul Sharma" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
//                   </div>
//                   <div className="form-group">
//                     <label>Phone Number</label>
//                     <input type="tel" placeholder="+91 98765 43210" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
//                   </div>
//                 </div>
//                 <div className="form-group">
//                   <label>Email Address</label>
//                   <input type="email" placeholder="you@email.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
//                 </div>
//                 <div className="form-group">
//                   <label>I'm Looking to</label>
//                   <select value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})}>
//                     <option>Buy</option>
//                     <option>Rent</option>
//                     <option>Invest</option>
//                     <option>Sell</option>
//                   </select>
//                 </div>
//                 <div className="form-group">
//                   <label>Message</label>
//                   <textarea placeholder="Tell us about the property you're looking for..." value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} />
//                 </div>
//                 <button type="submit" className="btn-primary form-submit">Send Enquiry →</button>
//                 {submitted && <div className="success-msg">✅ Thank you! We'll call you back within 24 hours.</div>}
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer>
//         <div className="footer-grid">
//           <div className="footer-brand">
//             <div className="brand-name">New Dream Property</div>
//             <div className="brand-rera">RERA Certified Real Estate</div>
//             <p>Turning dreams into reality since 2012. Your trusted real estate partner in Gurugram and Delhi NCR.</p>
//             <div style={{marginTop:"1rem"}}>
//               <span className="rera-badge">✓ RERA Certified</span>
//             </div>
//           </div>
//           <div className="footer-col">
//             <h4>Quick Links</h4>
//             <ul>
//               {["home","properties","about","testimonials","contact"].map(id => (
//                 <li key={id}><button onClick={() => scrollTo(id)}>{id.charAt(0).toUpperCase()+id.slice(1)}</button></li>
//               ))}
//             </ul>
//           </div>
//           <div className="footer-col">
//             <h4>Property Types</h4>
//             <ul>
//               {["Residential","Commercial","Luxury Villas","Plots","Office Space"].map(t => (
//                 <li key={t}><button onClick={() => scrollTo("properties")}>{t}</button></li>
//               ))}
//             </ul>
//           </div>
//           <div className="footer-col">
//             <h4>Contact</h4>
//             <ul>
//               <li><button>+91-9870483003</button></li>
//               <li><button>+91-8368179667</button></li>
//               <li><button>tariq.khan.guy@gmail.com</button></li>
//               <li><button>Sector-83, Gurugram</button></li>
//             </ul>
//           </div>
//         </div>
//         <div className="footer-bottom">
//           <span>© 2026 New Dream Property. All rights reserved.</span>
//           <span>Designed for Tariq Khan & Baljit Khatri · Gurugram</span>
//         </div>
//       </footer>
//     </>
//   );
// }

import { useState, useEffect } from "react";

const properties = [
  {
    id: 1,
    name: "MVN Mall",
    type: "Commercial",
    location: "Gurugram",
    price: "₹45L onwards",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
    tag: "Hot Deal",
  },
  {
    id: 2,
    name: "BPTP Park",
    type: "Residential",
    location: "Sector 83, Gurugram",
    price: "₹78L onwards",
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
    tag: "New Launch",
  },
  {
    id: 3,
    name: "Riviera AIPL",
    type: "Luxury Villa",
    location: "Lake City, Gurugram",
    price: "₹1.2Cr onwards",
    img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&q=80",
    tag: "Premium",
  },
  {
    id: 4,
    name: "ILD Greens",
    type: "Apartment",
    location: "Sector 37C, Gurugram",
    price: "₹62L onwards",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
    tag: "Ready to Move",
  },
  {
    id: 5,
    name: "M3M Golf Estate",
    type: "Luxury Villa",
    location: "Sector 65, Gurugram",
    price: "₹3.5Cr onwards",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
    tag: "Luxury",
  },
  {
    id: 6,
    name: "Omaxe State",
    type: "Commercial",
    location: "Dwarka, Delhi",
    price: "₹55L onwards",
    img: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&q=80",
    tag: "Upcoming",
  },
];

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Homeowner",
    text: "Tariq and Baljit helped me find my dream home in just 3 weeks. Their knowledge of Gurugram's market is unparalleled. RERA-certified and absolutely trustworthy!",
    avatar: "RS",
  },
  {
    name: "Priya Mehta",
    role: "Investor",
    text: "Invested in M3M through New Dream Property — the ROI has been exceptional. Professional, transparent, and always available for guidance.",
    avatar: "PM",
  },
  {
    name: "Anil Verma",
    role: "Commercial Buyer",
    text: "Got a prime commercial space in MVN Mall at the best price. The team negotiated brilliantly on my behalf. Highly recommend!",
    avatar: "AV",
  },
];

const stats = [
  { label: "Properties Sold", value: "500+" },
  { label: "Happy Clients", value: "1200+" },
  { label: "Years Experience", value: "12+" },
  { label: "Cities Covered", value: "8+" },
];

export default function App() {
  const [activeNav, setActiveNav] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "", type: "Buy" });
  const [submitted, setSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setActiveNav(id);
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const filteredProperties =
    activeFilter === "All"
      ? properties
      : properties.filter((p) => p.type.includes(activeFilter));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", phone: "", email: "", message: "", type: "Buy" });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Outfit:wght@300;400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --gold: #A8722A;
          --gold-light: #C9913A;
          --gold-pale: #FDF3E7;
          --gold-border: #DDB87A;
          --cream: #FDFAF5;
          --cream2: #F7F1E8;
          --cream3: #EDE4D4;
          --white: #FFFFFF;
          --ink: #1A1208;
          --text: #3D3020;
          --muted: #7A6A50;
          --light-muted: #A89880;
          --green: #3D6B00;
          --green-bg: #F0F7E6;
          --shadow: rgba(168,114,42,0.13);
          --shadow-strong: rgba(26,18,8,0.10);
        }

        html { scroll-behavior: smooth; }
        body {
          font-family: 'Outfit', sans-serif;
          background: var(--cream);
          color: var(--text);
          overflow-x: hidden;
        }

        nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          transition: all 0.4s ease; padding: 0 5%;
        }
        nav.scrolled {
          background: rgba(253,250,245,0.97);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--cream3);
          box-shadow: 0 2px 20px var(--shadow-strong);
        }
        .nav-inner {
          display: flex; align-items: center; justify-content: space-between;
          height: 72px; max-width: 1280px; margin: 0 auto;
        }
        .nav-logo { display: flex; align-items: center; gap: 11px; cursor: pointer; }
        .nav-logo .house-icon { width: 36px; height: 36px; }
        .nav-logo-text .brand {
          font-family: 'Cormorant Garamond', serif; font-size: 1.1rem;
          font-weight: 700; color: var(--gold); letter-spacing: 0.01em;
        }
        .nav-logo-text .sub {
          font-size: 0.62rem; color: var(--muted);
          letter-spacing: 0.14em; text-transform: uppercase;
        }
        .nav-links { display: flex; gap: 2rem; list-style: none; }
        .nav-links li button {
          background: none; border: none; color: var(--muted);
          font-family: 'Outfit', sans-serif; font-size: 0.82rem; font-weight: 500;
          cursor: pointer; letter-spacing: 0.06em; text-transform: uppercase;
          padding: 4px 0; position: relative; transition: color 0.3s;
        }
        .nav-links li button::after {
          content: ''; position: absolute; bottom: -2px; left: 0; right: 100%;
          height: 1.5px; background: var(--gold); transition: right 0.3s;
        }
        .nav-links li button:hover,
        .nav-links li button.active { color: var(--gold); }
        .nav-links li button:hover::after,
        .nav-links li button.active::after { right: 0; }
        .nav-cta {
          background: var(--gold); color: #fff;
          border: none; font-family: 'Outfit', sans-serif;
          font-weight: 600; font-size: 0.78rem;
          padding: 10px 22px; border-radius: 3px; cursor: pointer;
          letter-spacing: 0.08em; text-transform: uppercase;
          transition: background 0.3s, transform 0.2s, box-shadow 0.3s;
        }
        .nav-cta:hover { background: var(--gold-light); transform: translateY(-1px); box-shadow: 0 6px 20px var(--shadow); }
        .hamburger { display: none; background: none; border: none; cursor: pointer; padding: 4px; }
        .hamburger span { display: block; width: 24px; height: 2px; background: var(--gold); margin: 5px 0; }
        .mobile-menu {
          display: none; flex-direction: column;
          background: var(--white); border-top: 1px solid var(--cream3);
          box-shadow: 0 8px 30px var(--shadow-strong);
        }
        .mobile-menu button {
          background: none; border: none; color: var(--text);
          font-family: 'Outfit', sans-serif; font-size: 0.95rem;
          cursor: pointer; text-align: left;
          padding: 1rem 5%; border-bottom: 1px solid var(--cream3);
        }

        /* HERO */
        #home {
          min-height: 100vh; position: relative;
          display: flex; align-items: center;
          background: var(--cream); overflow: hidden;
        }
        .hero-dots {
          position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(var(--cream3) 1.5px, transparent 1.5px);
          background-size: 36px 36px; opacity: 0.7;
        }
        .hero-glow {
          position: absolute; top: -100px; right: -100px;
          width: 600px; height: 600px; border-radius: 50%; pointer-events: none;
          background: radial-gradient(circle, rgba(168,114,42,0.08) 0%, transparent 65%);
        }
        .hero-content {
          position: relative; z-index: 2;
          max-width: 1280px; margin: 0 auto; padding: 0 5%;
          padding-top: 90px;
          display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center;
        }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--gold-pale); border: 1px solid var(--gold-border);
          padding: 6px 16px; border-radius: 100px; margin-bottom: 1.5rem;
        }
        .hero-badge .dot { width: 6px; height: 6px; border-radius: 50%; background: var(--gold); animation: pulse 2s infinite; }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.3)} }
        .hero-badge span { font-size: 0.72rem; color: var(--gold); letter-spacing: 0.14em; text-transform: uppercase; font-weight: 600; }
        .hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.6rem, 5vw, 4.4rem);
          font-weight: 700; line-height: 1.05; color: var(--ink); margin-bottom: 1.4rem;
        }
        .hero-title em { color: var(--gold); font-style: italic; }
        .hero-subtitle {
          font-size: 1rem; color: var(--muted); line-height: 1.75;
          margin-bottom: 2.5rem; max-width: 460px; font-weight: 300;
        }
        .hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; }
        .btn-primary {
          background: var(--gold); color: #fff; border: none;
          padding: 14px 32px; font-family: 'Outfit', sans-serif;
          font-weight: 600; font-size: 0.83rem; letter-spacing: 0.09em;
          text-transform: uppercase; cursor: pointer; border-radius: 3px; transition: all 0.3s;
        }
        .btn-primary:hover { background: var(--gold-light); transform: translateY(-2px); box-shadow: 0 10px 28px var(--shadow); }
        .btn-outline {
          background: transparent; color: var(--gold);
          border: 1.5px solid var(--gold-border); padding: 14px 32px;
          font-family: 'Outfit', sans-serif; font-weight: 600; font-size: 0.83rem;
          letter-spacing: 0.09em; text-transform: uppercase; cursor: pointer;
          border-radius: 3px; transition: all 0.3s;
        }
        .btn-outline:hover { background: var(--gold-pale); border-color: var(--gold); }
        .hero-card-wrap { position: relative; }
        .hero-card {
          background: var(--white); border: 1px solid var(--cream3); border-radius: 10px;
          overflow: hidden; box-shadow: 0 24px 60px var(--shadow-strong), 0 4px 16px var(--shadow);
        }
        .hero-card img { width: 100%; height: 300px; object-fit: cover; display: block; }
        .hero-card-info { padding: 1.25rem 1.5rem; background: var(--white); border-top: 1px solid var(--cream3); }
        .hero-card-info h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.15rem; color: var(--ink); font-weight: 600; }
        .hero-card-info p { font-size: 0.8rem; color: var(--gold); margin-top: 3px; font-weight: 500; }
        .hero-float-stat {
          position: absolute; background: var(--white);
          border: 1px solid var(--cream3); border-radius: 8px;
          padding: 12px 18px; text-align: center;
          box-shadow: 0 8px 24px var(--shadow-strong);
        }
        .hero-float-stat.top-left { top: -18px; left: -28px; }
        .hero-float-stat.bottom-right { bottom: 90px; right: -22px; }
        .hero-float-stat .big { font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; color: var(--gold); font-weight: 700; }
        .hero-float-stat .small { font-size: 0.62rem; color: var(--muted); text-transform: uppercase; letter-spacing: 0.12em; margin-top: 2px; }
        .hero-scroll {
          position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 8px;
          cursor: pointer; opacity: 0.45; transition: opacity 0.3s;
        }
        .hero-scroll:hover { opacity: 1; }
        .hero-scroll span { font-size: 0.62rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); }
        .scroll-line { width: 1px; height: 36px; background: linear-gradient(to bottom, var(--gold), transparent); animation: scrollAnim 2s infinite; }
        @keyframes scrollAnim { 0%{transform:scaleY(0);transform-origin:top} 50%{transform:scaleY(1);transform-origin:top} 51%{transform-origin:bottom} 100%{transform:scaleY(0);transform-origin:bottom} }

        /* SHARED */
        section { padding: 100px 5%; }
        .section-header { text-align: center; margin-bottom: 4rem; }
        .section-label { font-size: 0.68rem; letter-spacing: 0.26em; text-transform: uppercase; color: var(--gold); font-weight: 700; margin-bottom: 0.75rem; display: block; }
        .section-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(2rem, 4vw, 3rem); font-weight: 700; line-height: 1.15; color: var(--ink); }
        .section-title em { color: var(--gold); font-style: italic; }
        .section-desc { margin-top: 0.9rem; color: var(--muted); font-size: 0.95rem; max-width: 520px; margin-inline: auto; line-height: 1.7; font-weight: 300; }
        .max-wrap { max-width: 1280px; margin: 0 auto; }

        /* STATS */
        #stats-bar { background: var(--gold); padding: 50px 5%; }
        .stats-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 2rem; max-width: 900px; margin: 0 auto; text-align: center; }
        .stat-item .num { font-family: 'Cormorant Garamond', serif; font-size: 2.8rem; font-weight: 700; color: #fff; }
        .stat-item .lbl { font-size: 0.72rem; color: rgba(255,255,255,0.78); text-transform: uppercase; letter-spacing: 0.14em; margin-top: 4px; }

        /* PROPERTIES */
        #properties { background: var(--cream2); }
        .filter-bar { display: flex; gap: 0.6rem; justify-content: center; flex-wrap: wrap; margin-bottom: 3rem; }
        .filter-btn {
          background: var(--white); color: var(--muted); border: 1.5px solid var(--cream3);
          padding: 8px 20px; font-family: 'Outfit', sans-serif; font-size: 0.78rem; font-weight: 500;
          letter-spacing: 0.06em; cursor: pointer; border-radius: 100px; transition: all 0.25s;
        }
        .filter-btn:hover { border-color: var(--gold-border); color: var(--gold); }
        .filter-btn.active { background: var(--gold); border-color: var(--gold); color: #fff; font-weight: 600; box-shadow: 0 4px 14px var(--shadow); }
        .properties-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .prop-card {
          background: var(--white); border: 1px solid var(--cream3);
          border-radius: 8px; overflow: hidden; cursor: pointer; transition: all 0.35s ease;
        }
        .prop-card:hover { transform: translateY(-7px); border-color: var(--gold-border); box-shadow: 0 20px 50px var(--shadow-strong), 0 4px 16px var(--shadow); }
        .prop-img { position: relative; overflow: hidden; height: 210px; }
        .prop-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }
        .prop-card:hover .prop-img img { transform: scale(1.06); }
        .prop-tag { position: absolute; top: 12px; left: 12px; background: var(--gold); color: #fff; font-size: 0.62rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; padding: 4px 10px; border-radius: 3px; }
        .prop-body { padding: 1.25rem; }
        .prop-type { font-size: 0.68rem; color: var(--gold); text-transform: uppercase; letter-spacing: 0.14em; font-weight: 700; margin-bottom: 5px; }
        .prop-name { font-family: 'Cormorant Garamond', serif; font-size: 1.15rem; color: var(--ink); font-weight: 600; margin-bottom: 4px; }
        .prop-loc { font-size: 0.78rem; color: var(--muted); margin-bottom: 1rem; }
        .prop-footer { display: flex; align-items: center; justify-content: space-between; padding-top: 1rem; border-top: 1px solid var(--cream3); }
        .prop-price { font-family: 'Cormorant Garamond', serif; font-size: 1.05rem; color: var(--gold); font-weight: 700; }
        .prop-enquire {
          background: transparent; border: 1.5px solid var(--gold-border); color: var(--gold);
          font-family: 'Outfit', sans-serif; font-size: 0.7rem; font-weight: 600;
          letter-spacing: 0.08em; padding: 6px 14px; cursor: pointer; border-radius: 3px;
          text-transform: uppercase; transition: all 0.25s;
        }
        .prop-enquire:hover { background: var(--gold); color: #fff; border-color: var(--gold); }

        /* ABOUT */
        #about { background: var(--cream); }
        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
        .about-img-wrap { position: relative; }
        .about-img-border { position: absolute; top: 16px; left: 16px; right: -16px; bottom: -16px; border: 2px solid var(--gold-border); border-radius: 8px; z-index: 0; }
        .about-img-main { width: 100%; border-radius: 8px; display: block; object-fit: cover; height: 520px; box-shadow: 0 20px 50px var(--shadow-strong); position: relative; z-index: 1; }
        .about-cert-badge {
          position: absolute; bottom: -16px; right: -16px; z-index: 2;
          background: var(--gold); color: #fff; padding: 1.25rem 1.5rem;
          text-align: center; border-radius: 8px; box-shadow: 0 10px 30px var(--shadow);
        }
        .about-cert-badge .cert-text { font-family: 'Cormorant Garamond', serif; font-size: 1rem; font-weight: 700; line-height: 1.2; }
        .about-cert-badge .cert-sub { font-size: 0.62rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; margin-top: 4px; opacity: 0.85; }
        .about-content { padding-left: 1rem; }
        .about-agents { display: flex; gap: 1.25rem; margin: 2rem 0; }
        .agent-card {
          flex: 1; background: var(--white); border: 1.5px solid var(--cream3);
          padding: 1.25rem; border-radius: 8px; transition: all 0.3s;
          box-shadow: 0 2px 12px var(--shadow);
        }
        .agent-card:hover { border-color: var(--gold-border); box-shadow: 0 8px 28px var(--shadow); transform: translateY(-3px); }
        .agent-avatar {
          width: 46px; height: 46px; border-radius: 50%;
          background: linear-gradient(135deg, var(--gold), var(--gold-light));
          display: flex; align-items: center; justify-content: center;
          font-family: 'Cormorant Garamond', serif; font-weight: 700; color: #fff;
          font-size: 1rem; margin-bottom: 0.75rem;
        }
        .agent-name { font-family: 'Cormorant Garamond', serif; font-size: 0.95rem; color: var(--ink); font-weight: 600; }
        .agent-role { font-size: 0.68rem; color: var(--gold); text-transform: uppercase; letter-spacing: 0.1em; margin-top: 2px; font-weight: 600; }
        .agent-phone { font-size: 0.78rem; color: var(--muted); margin-top: 6px; }
        .about-features { display: flex; flex-direction: column; gap: 1rem; margin-top: 2rem; }
        .feature-item { display: flex; align-items: flex-start; gap: 1rem; }
        .feature-icon { width: 38px; height: 38px; background: var(--gold-pale); border: 1.5px solid var(--gold-border); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; flex-shrink: 0; }
        .feature-text h4 { font-size: 0.88rem; color: var(--ink); font-weight: 600; margin-bottom: 2px; }
        .feature-text p { font-size: 0.78rem; color: var(--muted); line-height: 1.55; }

        /* PARTNERS */
        #partners { background: var(--cream3); border-top: 1px solid var(--cream3); border-bottom: 1px solid var(--cream3); padding: 50px 5%; }
        .partners-label { text-align: center; font-size: 0.68rem; color: var(--light-muted); letter-spacing: 0.22em; text-transform: uppercase; margin-bottom: 2rem; }
        .partners-strip { display: flex; gap: 1.25rem; align-items: center; justify-content: center; flex-wrap: wrap; }
        .partner-chip { background: var(--white); border: 1.5px solid var(--cream3); padding: 9px 20px; border-radius: 5px; font-weight: 700; font-size: 0.8rem; color: var(--muted); letter-spacing: 0.08em; transition: all 0.28s; cursor: default; box-shadow: 0 2px 8px var(--shadow); }
        .partner-chip:hover { border-color: var(--gold-border); color: var(--gold); box-shadow: 0 4px 16px var(--shadow); }

        /* TESTIMONIALS */
        #testimonials { background: var(--cream2); }
        .testimonials-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .testi-card { background: var(--white); border: 1.5px solid var(--cream3); padding: 2rem; border-radius: 8px; box-shadow: 0 2px 12px var(--shadow); transition: all 0.3s; }
        .testi-card:hover { border-color: var(--gold-border); transform: translateY(-4px); box-shadow: 0 12px 32px var(--shadow); }
        .testi-quote { font-size: 3rem; line-height: 1; color: var(--gold-border); font-family: 'Cormorant Garamond', serif; margin-bottom: 0.75rem; }
        .testi-text { font-size: 0.88rem; color: var(--muted); line-height: 1.8; margin-bottom: 1.5rem; font-weight: 300; }
        .testi-author { display: flex; align-items: center; gap: 12px; }
        .testi-avatar { width: 42px; height: 42px; border-radius: 50%; background: linear-gradient(135deg, var(--gold), var(--gold-light)); display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.78rem; color: #fff; }
        .testi-name { font-weight: 600; font-size: 0.88rem; color: var(--ink); }
        .testi-role { font-size: 0.68rem; color: var(--gold); font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; }
        .stars { color: var(--gold); font-size: 0.85rem; margin-bottom: 1rem; letter-spacing: 2px; }

        /* CONTACT */
        #contact { background: var(--cream); }
        .contact-grid { display: grid; grid-template-columns: 1fr 1.25fr; gap: 4rem; align-items: start; }
        .contact-info h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; color: var(--ink); margin-bottom: 1rem; font-weight: 700; }
        .contact-info p { font-size: 0.9rem; color: var(--muted); line-height: 1.75; margin-bottom: 2rem; font-weight: 300; }
        .contact-details { display: flex; flex-direction: column; gap: 1.25rem; }
        .contact-item { display: flex; align-items: flex-start; gap: 1rem; }
        .contact-icon { width: 44px; height: 44px; background: var(--gold-pale); border: 1.5px solid var(--gold-border); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; flex-shrink: 0; }
        .contact-label { font-size: 0.68rem; color: var(--gold); text-transform: uppercase; letter-spacing: 0.12em; font-weight: 700; }
        .contact-value { font-size: 0.88rem; color: var(--text); margin-top: 2px; line-height: 1.6; }
        .contact-value a { color: var(--text); text-decoration: none; transition: color 0.3s; }
        .contact-value a:hover { color: var(--gold); }
        .contact-form { background: var(--white); border: 1.5px solid var(--cream3); padding: 2.5rem; border-radius: 10px; box-shadow: 0 8px 32px var(--shadow-strong); }
        .contact-form h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.45rem; color: var(--ink); margin-bottom: 1.5rem; font-weight: 700; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .form-group { margin-bottom: 1.25rem; }
        .form-group label { display: block; font-size: 0.68rem; color: var(--gold); text-transform: uppercase; letter-spacing: 0.12em; font-weight: 700; margin-bottom: 7px; }
        .form-group input, .form-group textarea, .form-group select {
          width: 100%; background: var(--cream2); border: 1.5px solid var(--cream3);
          color: var(--text); font-family: 'Outfit', sans-serif; font-size: 0.88rem;
          padding: 11px 14px; border-radius: 5px; outline: none; transition: border-color 0.3s, background 0.3s;
        }
        .form-group input:focus, .form-group textarea:focus, .form-group select:focus { border-color: var(--gold-border); background: var(--gold-pale); }
        .form-group textarea { height: 110px; resize: vertical; }
        .form-submit { width: 100%; }
        .success-msg { background: var(--green-bg); border: 1.5px solid rgba(61,107,0,0.25); color: var(--green); padding: 1rem; border-radius: 5px; text-align: center; font-size: 0.86rem; margin-top: 1rem; font-weight: 500; }

        /* FOOTER */
        footer { background: var(--ink); color: rgba(255,255,255,0.7); padding: 60px 5% 30px; }
        .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 3rem; max-width: 1280px; margin: 0 auto 3rem; }
        .footer-brand .brand-name { font-family: 'Cormorant Garamond', serif; font-size: 1.3rem; color: var(--gold-border); font-weight: 700; margin-bottom: 4px; }
        .footer-brand .brand-rera { font-size: 0.65rem; color: rgba(255,255,255,0.38); letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 1rem; }
        .footer-brand p { font-size: 0.82rem; color: rgba(255,255,255,0.45); line-height: 1.7; max-width: 280px; }
        .footer-col h4 { font-size: 0.7rem; color: var(--gold-border); text-transform: uppercase; letter-spacing: 0.16em; font-weight: 700; margin-bottom: 1.25rem; }
        .footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 0.6rem; }
        .footer-col ul li button { background: none; border: none; color: rgba(255,255,255,0.42); font-family: 'Outfit', sans-serif; font-size: 0.82rem; cursor: pointer; text-align: left; transition: color 0.25s; padding: 0; }
        .footer-col ul li button:hover { color: var(--gold-border); }
        .footer-bottom { max-width: 1280px; margin: 0 auto; padding-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.08); display: flex; align-items: center; justify-content: space-between; font-size: 0.75rem; color: rgba(255,255,255,0.28); }
        .rera-badge { display: inline-flex; align-items: center; gap: 6px; background: rgba(201,145,58,0.15); border: 1px solid rgba(201,145,58,0.35); color: var(--gold-border); padding: 4px 12px; border-radius: 100px; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.1em; margin-top: 1rem; }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .hero-content { grid-template-columns: 1fr; gap: 3rem; text-align: center; }
          .hero-subtitle { margin: 0 auto 2.5rem; }
          .hero-actions { justify-content: center; }
          .hero-card-wrap { max-width: 480px; margin: 0 auto; }
          .properties-grid { grid-template-columns: repeat(2, 1fr); }
          .about-grid { grid-template-columns: 1fr; gap: 3rem; }
          .about-img-main { height: 360px; }
          .testimonials-grid { grid-template-columns: 1fr; max-width: 500px; margin: 0 auto; }
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 768px) {
          .nav-links, .nav-cta { display: none; }
          .hamburger { display: block; }
          .mobile-menu { display: flex; }
          section { padding: 70px 5%; }
          .properties-grid { grid-template-columns: 1fr; }
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .contact-grid { grid-template-columns: 1fr; }
          .form-row { grid-template-columns: 1fr; }
          .footer-grid { grid-template-columns: 1fr; gap: 2rem; }
          .footer-bottom { flex-direction: column; gap: 1rem; text-align: center; }
          .hero-float-stat { display: none; }
          .about-agents { flex-direction: column; }
          .about-img-border { display: none; }
        }
      `}</style>

      {/* NAV */}
      <nav className={scrolled ? "scrolled" : ""}>
        <div className="nav-inner">
          <div className="nav-logo" onClick={() => scrollTo("home")}>
            <svg className="house-icon" viewBox="0 0 40 38" fill="none">
              <path d="M20 4L36 17V36H26V26H14V36H4V17L20 4Z" fill="none" stroke="#A8722A" strokeWidth="2"/>
              <path d="M14 26H26V36H14V26Z" fill="rgba(168,114,42,0.12)" stroke="#A8722A" strokeWidth="1.5"/>
              <rect x="16" y="14" width="8" height="8" rx="1" fill="rgba(61,107,0,0.55)" stroke="#3D6B00" strokeWidth="1"/>
            </svg>
            <div className="nav-logo-text">
              <div className="brand">New Dream Property</div>
              <div className="sub">RERA Certified · Gurugram</div>
            </div>
          </div>
          <ul className="nav-links">
            {["home","properties","about","testimonials","contact"].map(id => (
              <li key={id}>
                <button className={activeNav === id ? "active" : ""} onClick={() => scrollTo(id)}>
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              </li>
            ))}
          </ul>
          <button className="nav-cta" onClick={() => scrollTo("contact")}>Free Consultation</button>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span/><span/><span/>
          </button>
        </div>
        {menuOpen && (
          <div className="mobile-menu">
            {["home","properties","about","testimonials","contact"].map(id => (
              <button key={id} onClick={() => scrollTo(id)}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home">
        <div className="hero-dots"/>
        <div className="hero-glow"/>
        <div className="hero-content max-wrap">
          <div>
            <div className="hero-badge">
              <span className="dot"/>
              <span>RERA Certified Real Estate</span>
            </div>
            <h1 className="hero-title">Find Your <em>Dream</em><br/>Property in<br/>Gurugram</h1>
            <p className="hero-subtitle">
              Trusted by 1200+ happy families. Tariq Khan & Baljit Khatri bring you the finest residential and commercial properties across Gurugram and Delhi NCR.
            </p>
            <div className="hero-actions">
              <button className="btn-primary" onClick={() => scrollTo("properties")}>Explore Properties</button>
              <button className="btn-outline" onClick={() => scrollTo("contact")}>Talk to an Expert</button>
            </div>
          </div>
          <div className="hero-card-wrap">
            <div className="hero-float-stat top-left">
              <div className="big">500+</div>
              <div className="small">Deals Closed</div>
            </div>
            <div className="hero-card">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80" alt="Luxury Property"/>
              <div className="hero-card-info">
                <h3>M3M Golf Estate</h3>
                <p>Sector 65, Gurugram · ₹3.5Cr onwards</p>
              </div>
            </div>
            <div className="hero-float-stat bottom-right">
              <div className="big">12+</div>
              <div className="small">Yrs Experience</div>
            </div>
          </div>
        </div>
        <div className="hero-scroll" onClick={() => scrollTo("stats-bar")}>
          <span>Scroll</span>
          <div className="scroll-line"/>
        </div>
      </section>

      {/* STATS */}
      <div id="stats-bar">
        <div className="stats-grid">
          {stats.map(s => (
            <div className="stat-item" key={s.label}>
              <div className="num">{s.value}</div>
              <div className="lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PROPERTIES */}
      <section id="properties">
        <div className="max-wrap">
          <div className="section-header">
            <span className="section-label">Our Portfolio</span>
            <h2 className="section-title">Featured <em>Properties</em></h2>
            <p className="section-desc">Hand-picked properties from top developers — MVN, BPTP, Riviera, ILD, M3M, Omaxe & more.</p>
          </div>
          <div className="filter-bar">
            {["All","Residential","Commercial","Luxury","Apartment"].map(f => (
              <button key={f} className={`filter-btn${activeFilter === f ? " active" : ""}`} onClick={() => setActiveFilter(f)}>{f}</button>
            ))}
          </div>
          <div className="properties-grid">
            {filteredProperties.map(p => (
              <div className="prop-card" key={p.id}>
                <div className="prop-img">
                  <img src={p.img} alt={p.name}/>
                  <div className="prop-tag">{p.tag}</div>
                </div>
                <div className="prop-body">
                  <div className="prop-type">{p.type}</div>
                  <div className="prop-name">{p.name}</div>
                  <div className="prop-loc">📍 {p.location}</div>
                  <div className="prop-footer">
                    <span className="prop-price">{p.price}</span>
                    <button className="prop-enquire" onClick={() => scrollTo("contact")}>Enquire</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="max-wrap about-grid">
          <div className="about-img-wrap">
            <div className="about-img-border"/>
            <img src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=700&q=80" alt="Office" className="about-img-main"/>
            <div className="about-cert-badge">
              <div className="cert-text">RERA<br/>Certified</div>
              <div className="cert-sub">Since 2012</div>
            </div>
          </div>
          <div className="about-content">
            <span className="section-label">About Us</span>
            <h2 className="section-title" style={{textAlign:"left"}}>The Team Behind<br/><em>New Dream Property</em></h2>
            <p style={{color:"var(--muted)",fontSize:"0.9rem",lineHeight:"1.8",marginTop:"1rem",marginBottom:"1.5rem",fontWeight:"300"}}>
              Founded in Gurugram, New Dream Property is a RERA-certified real estate advisory firm helping buyers, investors, and businesses find the perfect property. With over a decade of experience, our team offers transparent guidance, end-to-end support, and unmatched market knowledge across NCR.
            </p>
            <div className="about-agents">
              <div className="agent-card">
                <div className="agent-avatar">TK</div>
                <div className="agent-name">Tariq Khan</div>
                <div className="agent-role">Senior Property Advisor</div>
                <div className="agent-phone">+91-9870483003</div>
              </div>
              <div className="agent-card">
                <div className="agent-avatar">BK</div>
                <div className="agent-name">Baljit Khatri</div>
                <div className="agent-role">Real Estate Consultant</div>
                <div className="agent-phone">+91-8368179667</div>
              </div>
            </div>
            <div className="about-features">
              {[
                {icon:"🏛️", title:"RERA Certified", desc:"Fully registered and compliant with all real estate regulations."},
                {icon:"🤝", title:"End-to-End Support", desc:"From property search to registration — we handle everything."},
                {icon:"📊", title:"Best Market Rates", desc:"Our network ensures you get the most competitive pricing."},
              ].map(f => (
                <div className="feature-item" key={f.title}>
                  <div className="feature-icon">{f.icon}</div>
                  <div className="feature-text"><h4>{f.title}</h4><p>{f.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <div id="partners">
        <div className="partners-label">Our Trusted Developer Partners</div>
        <div className="partners-strip">
          {["MVN Mall","BPTP","Riviera AIPL","ILD Greens","GIC","M3M","Omaxe"].map(p => (
            <div className="partner-chip" key={p}>{p}</div>
          ))}
        </div>
      </div>

      {/* TESTIMONIALS */}
      <section id="testimonials">
        <div className="max-wrap">
          <div className="section-header">
            <span className="section-label">Client Stories</span>
            <h2 className="section-title">What Our <em>Clients Say</em></h2>
            <p className="section-desc">Real experiences from real people who found their dream property with us.</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map(t => (
              <div className="testi-card" key={t.name}>
                <div className="testi-quote">"</div>
                <div className="stars">★★★★★</div>
                <p className="testi-text">{t.text}</p>
                <div className="testi-author">
                  <div className="testi-avatar">{t.avatar}</div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="max-wrap">
          <div className="section-header">
            <span className="section-label">Get In Touch</span>
            <h2 className="section-title">Let's Find Your <em>Perfect Property</em></h2>
            <p className="section-desc">Reach out for a free consultation. Our experts are ready to help you.</p>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Visit Our Office</h3>
              <p>Come meet us at our Gurugram office, or give us a call. We're happy to schedule a site visit at your convenience.</p>
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div>
                    <div className="contact-label">Address</div>
                    <div className="contact-value">609, 6th Floor, SVH-83<br/>Metro Street Sec-83<br/>Gurugram - 122004</div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div>
                    <div className="contact-label">Phone</div>
                    <div className="contact-value">
                      <a href="tel:+919870483003">+91-9870483003</a><br/>
                      <a href="tel:+918368179667">+91-8368179667</a>
                    </div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div>
                    <div className="contact-label">Email</div>
                    <div className="contact-value"><a href="mailto:tariq.khan.guy@gmail.com">tariq.khan.guy@gmail.com</a></div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">🌐</div>
                  <div>
                    <div className="contact-label">Website</div>
                    <div className="contact-value"><a href="https://www.newdreamproperty.com" target="_blank" rel="noopener noreferrer">www.newdreamproperty.com</a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <h3>Send Us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input type="text" placeholder="Rahul Sharma" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}/>
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="+91 98765 43210" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}/>
                  </div>
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="you@email.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}/>
                </div>
                <div className="form-group">
                  <label>I'm Looking to</label>
                  <select value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})}>
                    <option>Buy</option>
                    <option>Rent</option>
                    <option>Invest</option>
                    <option>Sell</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea placeholder="Tell us about the property you're looking for..." value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}/>
                </div>
                <button type="submit" className="btn-primary form-submit">Send Enquiry →</button>
                {submitted && <div className="success-msg">✅ Thank you! We'll call you back within 24 hours.</div>}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand-name">New Dream Property</div>
            <div className="brand-rera">RERA Certified Real Estate</div>
            <p>Turning dreams into reality since 2012. Your trusted real estate partner in Gurugram and Delhi NCR.</p>
            <div><span className="rera-badge">✓ RERA Certified</span></div>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {["home","properties","about","testimonials","contact"].map(id => (
                <li key={id}><button onClick={() => scrollTo(id)}>{id.charAt(0).toUpperCase()+id.slice(1)}</button></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Property Types</h4>
            <ul>
              {["Residential","Commercial","Luxury Villas","Plots","Office Space"].map(t => (
                <li key={t}><button onClick={() => scrollTo("properties")}>{t}</button></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><button>+91-9870483003</button></li>
              <li><button>+91-8368179667</button></li>
              <li><button>tariq.khan.guy@gmail.com</button></li>
              <li><button>Sector-83, Gurugram</button></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 New Dream Property. All rights reserved.</span>
          <span>Designed for Tariq Khan & Baljit Khatri · Gurugram</span>
        </div>
      </footer>
    </>
  );
}