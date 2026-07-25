import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Eye,
  Layers,
  Printer,
  Image as ImageIcon,
  Wand2,
  Star,
  Plus,
  Minus,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  Music2,
} from "lucide-react";

import immersive from "@/assets/immersive-menu.jpg";
import menu1 from "@/assets/menu-1.jpg";
import menu2 from "@/assets/menu-2.jpg";
import menu3 from "@/assets/menu-3.jpg";
import menu4 from "@/assets/menu-4.jpg";
import menu5 from "@/assets/menu-5.jpg";
import menu6 from "@/assets/menu-6.jpg";
import menu7 from "@/assets/menu-7.jpg";
import menu8 from "@/assets/menu-8.jpg";
import menu9 from "@/assets/menu-9.jpg";
import menu10 from "@/assets/menu-10.jpg";
import beforeMenu from "@/assets/before-menu.jpg";
import afterMenu from "@/assets/after-menu.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Création de Menus Gastronomiques | Lens Oua Agency" },
      {
        name: "description",
        content:
          "Menus gastronomiques élégants et prêts à l'impression : restaurants, hôtels, cafés, bars et lounges. Créations sur-mesure par Lens Oua Agency.",
      },
      { property: "og:title", content: "Menus Gastronomiques — Lens Oua Agency" },
      {
        property: "og:description",
        content:
          "Des menus modernes, raffinés et professionnels qui donnent envie de commander.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Création de menus gastronomiques",
          provider: {
            "@type": "Organization",
            name: "Lens Oua Agency",
          },
          areaServed: "Côte d'Ivoire",
          description:
            "Design de menus premium pour restaurants, hôtels, cafés, bars et lounges.",
        }),
      },
    ],
  }),
  component: Portfolio,
});

/* ------------------------------------------------------------------ */
/*  Cursor + progress                                                  */
/* ------------------------------------------------------------------ */

function CursorGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, { stiffness: 120, damping: 20, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 120, damping: 20, mass: 0.4 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-[60] hidden h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full md:block"
      style={{
        left: sx,
        top: sy,
        background:
          "radial-gradient(circle, rgba(255,46,154,0.18) 0%, rgba(139,92,246,0.08) 40%, transparent 70%)",
        mixBlendMode: "screen",
      }}
    />
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });
  return (
    <motion.div
      className="fixed left-0 top-0 z-[70] h-[3px] w-full origin-left"
      style={{
        scaleX,
        background:
          "linear-gradient(90deg, #FF2E9A 0%, #8B5CF6 50%, #FF2E9A 100%)",
      }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Nav                                                                */
/* ------------------------------------------------------------------ */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  const links = [
    { label: "Réalisations", href: "#realisations" },
    { label: "Méthode", href: "#methode" },
    { label: "Avantages", href: "#avantages" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className={`glass flex items-center gap-2 rounded-full px-4 py-2 transition-all ${
            scrolled ? "shadow-[0_0_40px_rgba(255,46,154,0.15)]" : ""
          }`}
        >
          <span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-[#FF2E9A] to-[#8B5CF6] text-[10px] font-bold">
            L
          </span>
          <span className="font-display text-sm font-semibold tracking-tight">
            Lens Oua Agency
          </span>
        </a>

        <nav className="hidden md:block">
          <ul className="glass flex items-center gap-1 rounded-full px-2 py-2 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-4 py-2 text-[color:var(--color-fog)] transition-colors hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#devis"
          className="group glass flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all hover:bg-[#FF2E9A]/15"
        >
          <span className="hidden sm:inline">Demander un devis</span>
          <span className="sm:hidden">Devis</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </motion.header>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative min-h-screen overflow-hidden pt-32">
      {/* glow bg */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 top-1/3 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70"
          style={{
            background:
              "radial-gradient(closest-side, rgba(255,46,154,0.35), rgba(139,92,246,0.15) 45%, transparent 70%)",
            filter: "blur(20px)",
          }}
        />
        <div className="absolute inset-0 [background:radial-gradient(1px_1px_at_20%_30%,rgba(255,255,255,0.4),transparent),radial-gradient(1px_1px_at_70%_60%,rgba(255,255,255,0.3),transparent),radial-gradient(1px_1px_at_45%_80%,rgba(255,255,255,0.25),transparent)]" />
      </div>

      <motion.div style={{ opacity }} className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em] text-[color:var(--color-fog)]"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#FF2E9A]" />
          Portfolio · Menus gastronomiques
        </motion.div>

        <div className="mt-8 grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(2.75rem,8vw,7rem)] font-semibold leading-[0.95] tracking-tight"
            >
              Menus <br />
              <span className="text-gradient italic">Gastronomiques</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 max-w-xl text-lg text-[color:var(--color-fog)] sm:text-xl"
            >
              Des menus élégants qui mettent vos plats en valeur et renforcent
              l'image de votre établissement.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#realisations"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#FF2E9A] to-[#8B5CF6] px-7 py-4 text-sm font-semibold text-white shadow-[0_10px_40px_-10px_rgba(255,46,154,0.6)] transition-all hover:shadow-[0_20px_60px_-10px_rgba(255,46,154,0.8)]"
              >
                Découvrir nos créations
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </a>
              <a
                href="#devis"
                className="glass inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                Demander un devis
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 max-w-lg text-sm leading-relaxed text-[color:var(--color-fog)]/80"
            >
              Votre menu est souvent le premier contact entre votre restaurant
              et vos clients. Nous créons des menus modernes, raffinés et
              professionnels qui donnent envie de commander avant même la
              première bouchée.
            </motion.p>
          </div>

          {/* Floating mockups */}
          <div className="relative hidden h-[560px] w-full lg:block">
            <motion.div
              style={{ y: y2 }}
              className="absolute right-10 top-0 w-56 rotate-[6deg] overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
            >
              <img src={menu1} alt="" className="h-full w-full object-cover" />
            </motion.div>
            <motion.div
              style={{ y: y1 }}
              className="absolute left-4 top-24 w-64 -rotate-[8deg] overflow-hidden rounded-2xl border border-white/10 shadow-2xl glow-pink"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <img src={menu2} alt="" className="h-full w-full object-cover" />
            </motion.div>
            <motion.div
              style={{ y: y3 }}
              className="absolute bottom-4 right-20 w-52 rotate-[4deg] overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <img src={menu5} alt="" className="h-full w-full object-cover" />
            </motion.div>
          </div>
        </div>

        {/* Marquee-ish stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 gap-6 border-t border-white/5 pt-8 sm:grid-cols-4"
        >
          {[
            ["+120", "Menus créés"],
            ["48h", "Premier aperçu"],
            ["100%", "Prêt à imprimer"],
            ["★ 5.0", "Note clients"],
          ].map(([k, v]) => (
            <div key={v}>
              <div className="font-display text-3xl font-semibold sm:text-4xl">{k}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.15em] text-[color:var(--color-fog)]">
                {v}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Reveal helper                                                      */
/* ------------------------------------------------------------------ */

function Reveal({
  children,
  delay = 0,
  y = 30,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Problem                                                            */
/* ------------------------------------------------------------------ */

function Problem() {
  return (
    <section className="relative py-32 sm:py-40">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.25em] text-[#FF2E9A]">
            Le constat
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-display text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.05] tracking-tight">
            Un menu mal conçu peut{" "}
            <span className="text-gradient italic">faire perdre</span> des
            ventes.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[color:var(--color-fog)]">
            Un menu chargé, difficile à lire ou visuellement dépassé peut
            diminuer la valeur perçue de vos plats. Même une excellente cuisine
            mérite une présentation à la hauteur.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[color:var(--color-fog)]">
            Chez Lens Oua Agency, nous concevons des menus élégants qui
            facilitent la lecture, valorisent vos spécialités et améliorent
            l'expérience de vos clients.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Gallery                                                            */
/* ------------------------------------------------------------------ */

const GALLERY = [
  { img: menu1, title: "Menu Gastronomique Noir & Or", cat: "Restaurant étoilé", desc: "Élégance intemporelle, dorures et typographie raffinée." },
  { img: menu2, title: "Menu Restaurant Chic", cat: "Restaurant contemporain", desc: "Bordeaux profond, sérif classique, papier texturé." },
  { img: menu5, title: "Menu Lounge", cat: "Bar & Lounge", desc: "Ambiance néon, glassmorphism et signatures nocturnes." },
  { img: menu3, title: "Menu Café Moderne", cat: "Café & Pâtisserie", desc: "Illustrations douces, ton terracotta, chaleureux." },
  { img: menu4, title: "Menu Pizzeria Premium", cat: "Pizzeria", desc: "Rouge italien, dorures, esprit trattoria élevé." },
  { img: menu6, title: "Menu Bistrot Français", cat: "Bistrot", desc: "Ardoise, calligraphie et cadre à la française." },
  { img: menu7, title: "Menu Sushi", cat: "Restaurant japonais", desc: "Épure, contrastes rouges, calligraphie orientale." },
  { img: menu8, title: "Menu Grill", cat: "Steakhouse", desc: "Charbon, cuivre et typographie bold." },
  { img: menu9, title: "Menu Cocktail", cat: "Cocktail bar", desc: "Dégradés rose/violet, sensualité graphique." },
  { img: menu10, title: "Menu Hôtel", cat: "Hôtellerie 5★", desc: "Marbre, or foil et prestige discret." },
];

function Gallery() {
  return (
    <section id="realisations" className="relative py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="text-xs uppercase tracking-[0.25em] text-[#FF2E9A]">
                Nos réalisations
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-display text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.05] tracking-tight">
                Une galerie de menus,{" "}
                <span className="text-gradient italic">une signature.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-md text-base text-[color:var(--color-fog)]">
              Chaque menu est pensé pour l'identité de l'établissement, la
              lisibilité et l'envie de commander.
            </p>
          </Reveal>
        </div>

        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6 [&>*]:break-inside-avoid">
          {GALLERY.map((item, i) => (
            <GalleryCard key={item.title} {...item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryCard({
  img,
  title,
  cat,
  desc,
  index,
}: {
  img: string;
  title: string;
  cat: string;
  desc: string;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-3xl border border-white/5 bg-[color:var(--color-ink-2)]"
    >
      <div className="relative overflow-hidden">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="w-full transition-transform duration-[900ms] ease-out group-hover:scale-[1.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(circle at 50% 100%, rgba(255,46,154,0.35), transparent 60%)",
          }}
        />
      </div>
      <div className="relative p-6">
        <div className="flex items-center justify-between">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#FF2E9A]">
            {cat}
          </span>
          <ArrowUpRight className="h-4 w-4 text-[color:var(--color-fog)] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
        </div>
        <h3 className="mt-3 font-display text-xl font-semibold leading-tight">
          {title}
        </h3>
        <p className="mt-2 text-sm text-[color:var(--color-fog)]">{desc}</p>
      </div>
    </motion.article>
  );
}

/* ------------------------------------------------------------------ */
/*  Immersive fullscreen                                               */
/* ------------------------------------------------------------------ */

function Immersive() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-2, 2]);
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section ref={ref} className="relative h-[110vh] overflow-hidden">
      <motion.div style={{ scale, rotate }} className="absolute inset-0">
        <img
          src={immersive}
          alt="Menu gastronomique ouvert sur une table de marbre noir"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--color-ink)]/80 via-transparent to-[color:var(--color-ink)]" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(255,46,154,0.2), transparent 45%), radial-gradient(circle at 70% 70%, rgba(139,92,246,0.18), transparent 50%)",
          }}
        />
      </motion.div>

      <motion.div
        style={{ y }}
        className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-5 sm:px-8"
      >
        <Reveal>
          <span className="text-xs uppercase tracking-[0.3em] text-white/70">
            Expérience magazine
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-3xl font-display text-[clamp(2.25rem,6vw,5.5rem)] font-semibold leading-[0.98]">
            Un objet <span className="italic text-gradient">précieux</span>{" "}
            posé sur la table.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            Marbre noir, verres à vin, lumière chaude — vos menus prennent
            place dans un décor à la hauteur de votre cuisine.
          </p>
        </Reveal>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Advantages                                                         */
/* ------------------------------------------------------------------ */

const ADVANTAGES = [
  { icon: Eye, title: "Lecture claire", desc: "Une organisation qui guide le regard vers vos meilleures ventes." },
  { icon: Layers, title: "Hiérarchie visuelle", desc: "Chaque plat trouve sa place, chaque catégorie respire." },
  { icon: Sparkles, title: "Design premium", desc: "Une signature graphique qui élève l'image de votre marque." },
  { icon: Printer, title: "Prêt à l'impression", desc: "Fichiers CMJN, fond perdu, exports professionnels inclus." },
  { icon: ImageIcon, title: "Image haut de gamme", desc: "Direction artistique, retouches et mises en scène soignées." },
  { icon: Wand2, title: "Personnalisation complète", desc: "Adapté à votre identité, votre carte et votre clientèle." },
];

function Advantages() {
  return (
    <section id="avantages" className="relative py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-16 max-w-3xl">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em] text-[#FF2E9A]">
              Nos avantages
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.05] tracking-tight">
              Pourquoi choisir{" "}
              <span className="text-gradient italic">nos menus ?</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ADVANTAGES.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="glass group relative overflow-hidden rounded-3xl p-8 transition-all hover:-translate-y-1"
            >
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,46,154,0.5), transparent 70%)",
                }}
              />
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#FF2E9A]/20 to-[#8B5CF6]/20 ring-1 ring-white/10">
                  <a.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-fog)]">
                  {a.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Method timeline                                                    */
/* ------------------------------------------------------------------ */

const STEPS = [
  { n: "01", t: "Analyse de votre établissement", d: "Identité, ambiance, positionnement et clientèle cible." },
  { n: "02", t: "Étude de votre carte", d: "Structure, hiérarchie, plats signatures et rentabilité." },
  { n: "03", t: "Création graphique", d: "Direction artistique, typographies, mise en page premium." },
  { n: "04", t: "Révisions", d: "Ajustements précis jusqu'au rendu final validé." },
  { n: "05", t: "Livraison des fichiers", d: "PDF impression, versions numériques et sources." },
];

function Method() {
  return (
    <section id="methode" className="relative py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-20 max-w-3xl">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em] text-[#FF2E9A]">
              Notre méthode
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.05] tracking-tight">
              Cinq étapes pour un menu{" "}
              <span className="text-gradient italic">irréprochable.</span>
            </h2>
          </Reveal>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[#FF2E9A]/50 via-[#8B5CF6]/30 to-transparent md:left-1/2" />
          <div className="space-y-16 md:space-y-24">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`relative grid grid-cols-[40px_1fr] items-start gap-6 md:grid-cols-2 md:gap-16 ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="hidden md:block" />
                <div className={i % 2 === 1 ? "md:pr-16 md:text-right" : "md:pl-16"}>
                  <div className="absolute left-4 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#FF2E9A] shadow-[0_0_20px_#FF2E9A] md:left-1/2" />
                  <span className="font-display text-6xl font-semibold text-gradient">
                    {s.n}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-semibold">
                    {s.t}
                  </h3>
                  <p className="mt-3 max-w-md text-[color:var(--color-fog)] md:mx-0 md:max-w-none">
                    {s.d}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Before / After                                                     */
/* ------------------------------------------------------------------ */

function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  useEffect(() => {
    const move = (clientX: number) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const p = ((clientX - rect.left) / rect.width) * 100;
      setPos(Math.max(2, Math.min(98, p)));
    };
    const onMove = (e: MouseEvent) => dragging.current && move(e.clientX);
    const onTouch = (e: TouchEvent) =>
      dragging.current && move(e.touches[0].clientX);
    const stop = () => (dragging.current = false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchmove", onTouch);
    window.addEventListener("touchend", stop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("touchend", stop);
    };
  }, []);

  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-14 max-w-3xl">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em] text-[#FF2E9A]">
              Avant / Après
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.05] tracking-tight">
              La différence se{" "}
              <span className="text-gradient italic">voit immédiatement.</span>
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div
            ref={containerRef}
            className="relative aspect-[16/10] w-full select-none overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
          >
            <img
              src={afterMenu}
              alt="Menu premium Lens Oua Agency"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              <img
                src={beforeMenu}
                alt="Menu classique dépassé"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs uppercase tracking-widest text-white backdrop-blur">
              Avant
            </span>
            <span className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-[#FF2E9A] to-[#8B5CF6] px-3 py-1 text-xs uppercase tracking-widest text-white">
              Après · Lens Oua
            </span>

            <div
              className="absolute inset-y-0 w-px bg-white/80 shadow-[0_0_20px_rgba(255,46,154,0.8)]"
              style={{ left: `${pos}%` }}
            />
            <button
              type="button"
              onMouseDown={() => (dragging.current = true)}
              onTouchStart={() => (dragging.current = true)}
              aria-label="Faire glisser pour comparer"
              className="absolute top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full bg-white text-black shadow-[0_0_30px_rgba(255,46,154,0.6)]"
              style={{ left: `${pos}%` }}
            >
              <div className="flex items-center gap-0.5">
                <ArrowRight className="h-3 w-3 rotate-180" />
                <ArrowRight className="h-3 w-3" />
              </div>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Testimonials                                                       */
/* ------------------------------------------------------------------ */

const TESTIMONIALS = [
  {
    name: "Aïcha Konan",
    place: "Le Baobab d'Or — Abidjan",
    quote:
      "Notre nouveau menu a transformé l'expérience client. Les invités le photographient dès qu'ils s'assoient.",
    initials: "AK",
  },
  {
    name: "Jean-Marc Delacroix",
    place: "Bistrot Cocody",
    quote:
      "Un travail d'orfèvre. Nos plats signatures se vendent 30% de plus depuis la refonte.",
    initials: "JD",
  },
  {
    name: "Fatou N'Guessan",
    place: "Café Lumière",
    quote:
      "Élégant, moderne et parfaitement à l'image de notre établissement. Bravo à toute l'équipe.",
    initials: "FN",
  },
  {
    name: "Karim Ouattara",
    place: "Lounge 225",
    quote:
      "Le rendu impression est bluffant. Une carte cocktail qui fait honneur à nos créations.",
    initials: "KO",
  },
];

function Testimonials() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-16 max-w-3xl">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em] text-[#FF2E9A]">
              Ils nous ont fait confiance
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.05] tracking-tight">
              Des restaurateurs{" "}
              <span className="text-gradient italic">enthousiastes.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="glass relative overflow-hidden rounded-3xl p-8 sm:p-10"
            >
              <div className="mb-4 flex items-center gap-1 text-[#FF2E9A]">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="font-display text-xl leading-snug text-white sm:text-2xl">
                « {t.quote} »
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#FF2E9A] to-[#8B5CF6] font-display text-sm font-semibold text-white">
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <div className="truncate font-semibold">{t.name}</div>
                  <div className="truncate text-sm text-[color:var(--color-fog)]">
                    {t.place}
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FAQ                                                                */
/* ------------------------------------------------------------------ */

const FAQ = [
  {
    q: "Quels formats fournissez-vous ?",
    a: "Nous livrons vos fichiers en PDF haute définition prêt à imprimer (CMJN, 300 dpi, fond perdu), en versions numériques optimisées web, ainsi que les fichiers sources sur demande.",
  },
  {
    q: "Le menu est-il prêt pour l'impression ?",
    a: "Oui. Chaque menu est livré aux normes professionnelles d'imprimerie : traits de coupe, marges de sécurité, profil colorimétrique CMJN et vérification pré-presse incluse.",
  },
  {
    q: "Pouvez-vous créer un menu recto-verso ?",
    a: "Absolument. Recto-verso, dépliant, format livret ou grand format : nous adaptons le support à votre carte et à votre expérience client.",
  },
  {
    q: "Travaillez-vous avec tous les types de restaurants ?",
    a: "Oui : restaurants gastronomiques, bistrots, maquis, hôtels, cafés, pâtisseries, bars, lounges, pizzerias, sushi bars, steakhouses. Chaque univers a sa signature.",
  },
  {
    q: "Combien de temps faut-il pour réaliser un menu ?",
    a: "Un premier aperçu vous est présenté sous 48h. Le projet complet est livré en 7 à 14 jours selon la complexité et les allers-retours de validation.",
  },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="mb-14">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em] text-[#FF2E9A]">
              Questions fréquentes
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.05] tracking-tight">
              Tout ce qu'il faut{" "}
              <span className="text-gradient italic">savoir.</span>
            </h2>
          </Reveal>
        </div>

        <div className="space-y-3">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="glass overflow-hidden rounded-2xl"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-white/5"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg font-medium sm:text-xl">
                    {item.q}
                  </span>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/5">
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-[color:var(--color-fog)]">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CTA                                                                */
/* ------------------------------------------------------------------ */

function CTA() {
  return (
    <section id="devis" className="relative overflow-hidden py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 top-1/2 h-[700px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(255,46,154,0.35), rgba(139,92,246,0.2) 40%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-[clamp(2.25rem,6vw,5rem)] font-semibold leading-[1] tracking-tight">
            Donnez à votre restaurant un menu{" "}
            <span className="text-gradient italic">à la hauteur</span> de votre
            cuisine.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-[color:var(--color-fog)]">
            Nous créons des menus qui séduisent vos clients dès le premier
            regard.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#devis-form"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#FF2E9A] to-[#8B5CF6] px-9 py-5 text-base font-semibold text-white shadow-[0_20px_60px_-10px_rgba(255,46,154,0.7)] transition-all hover:shadow-[0_30px_80px_-10px_rgba(255,46,154,0.9)]"
            >
              Demander un devis
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Quote form                                                         */
/* ------------------------------------------------------------------ */

const ETABLISSEMENTS = [
  "Restaurant",
  "Hôtel",
  "Maquis",
  "Café",
  "Pâtisserie",
  "Bar",
  "Lounge",
  "Autre",
];

const FORMATS: { label: string; multiplier: number }[] = [
  { label: "A4 (21 × 29,7 cm)", multiplier: 1.2 },
  { label: "A5 (14,8 × 21 cm)", multiplier: 1 },
  { label: "Carré (21 × 21 cm)", multiplier: 1.15 },
  { label: "Long / DL (10 × 21 cm)", multiplier: 1.05 },
  { label: "Livret plié", multiplier: 1.35 },
  { label: "Format personnalisé", multiplier: 1.5 },
];

const BASE_PRICE_PER_PAGE = 12000; // FCFA
const SETUP_FEE = 25000;

function estimateQuote(pages: number, formatLabel: string) {
  const fmt = FORMATS.find((f) => f.label === formatLabel) ?? FORMATS[0];
  const safePages = Math.min(Math.max(pages || 1, 1), 200);
  const base = SETUP_FEE + safePages * BASE_PRICE_PER_PAGE * fmt.multiplier;
  const low = Math.round((base * 0.85) / 1000) * 1000;
  const high = Math.round((base * 1.2) / 1000) * 1000;
  return { low, high };
}

const fcfa = (n: number) =>
  new Intl.NumberFormat("fr-FR").format(n) + " FCFA";


function QuoteForm() {
  const [form, setForm] = useState({
    nom: "",
    etablissement: ETABLISSEMENTS[0],
    pages: "4",
    format: FORMATS[0],
    email: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!form.nom.trim()) errs.nom = "Veuillez indiquer votre nom.";
    if (!/^\S+@\S+\.\S+$/.test(form.email))
      errs.email = "Adresse e-mail invalide.";
    const p = Number(form.pages);
    if (!Number.isFinite(p) || p < 1 || p > 200)
      errs.pages = "Entre 1 et 200 pages.";
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSent(true);
  }

  const inputCls =
    "w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-white/40 outline-none transition focus:border-[#FF2E9A]/60 focus:bg-white/[0.07] focus:ring-2 focus:ring-[#FF2E9A]/30";
  const labelCls =
    "mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-[color:var(--color-fog)]";

  return (
    <section id="devis-form" className="relative py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
        <div
          className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(139,92,246,0.25), transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(255,46,154,0.25), transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-14 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--color-fog)]">
              <Sparkles className="h-3.5 w-3.5 text-[#FF2E9A]" />
              Formulaire de devis
            </span>
            <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-tight">
              Parlez-nous de votre{" "}
              <span className="text-gradient italic">projet de menu</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-[color:var(--color-fog)]">
              Remplissez ce formulaire, nous revenons vers vous sous 24 heures
              avec une proposition personnalisée.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="glass relative overflow-hidden rounded-3xl p-8 sm:p-12">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#FF2E9A] to-[#8B5CF6] glow-pink">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-display text-3xl font-semibold">
                  Merci, votre demande est envoyée.
                </h3>
                <p className="mt-4 max-w-md text-[color:var(--color-fog)]">
                  Notre équipe vous contactera très prochainement à l’adresse{" "}
                  <span className="text-white">{form.email}</span>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="nom" className={labelCls}>
                      Nom complet
                    </label>
                    <input
                      id="nom"
                      type="text"
                      autoComplete="name"
                      maxLength={80}
                      value={form.nom}
                      onChange={(e) => update("nom", e.target.value)}
                      placeholder="Jean Dupont"
                      className={inputCls}
                    />
                    {errors.nom && (
                      <p className="mt-2 text-sm text-[#FF2E9A]">{errors.nom}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className={labelCls}>
                      Adresse e-mail
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      maxLength={120}
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="vous@restaurant.com"
                      className={inputCls}
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-[#FF2E9A]">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="etablissement" className={labelCls}>
                      Type d’établissement
                    </label>
                    <select
                      id="etablissement"
                      value={form.etablissement}
                      onChange={(e) => update("etablissement", e.target.value)}
                      className={inputCls}
                    >
                      {ETABLISSEMENTS.map((o) => (
                        <option key={o} value={o} className="bg-[#12131D]">
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="format" className={labelCls}>
                      Format souhaité
                    </label>
                    <select
                      id="format"
                      value={form.format}
                      onChange={(e) => update("format", e.target.value)}
                      className={inputCls}
                    >
                      {FORMATS.map((o) => (
                        <option key={o} value={o} className="bg-[#12131D]">
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="pages" className={labelCls}>
                      Nombre de pages
                    </label>
                    <input
                      id="pages"
                      type="number"
                      min={1}
                      max={200}
                      value={form.pages}
                      onChange={(e) => update("pages", e.target.value)}
                      placeholder="Ex. 8"
                      className={inputCls}
                    />
                    {errors.pages && (
                      <p className="mt-2 text-sm text-[#FF2E9A]">
                        {errors.pages}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col items-center gap-4 pt-4 sm:flex-row sm:justify-between">
                  <p className="text-xs text-[color:var(--color-fog)]">
                    Vos informations restent strictement confidentielles.
                  </p>
                  <button
                    type="submit"
                    className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#FF2E9A] to-[#8B5CF6] px-8 py-4 text-sm font-semibold text-white shadow-[0_20px_60px_-10px_rgba(255,46,154,0.7)] transition-all hover:shadow-[0_30px_80px_-10px_rgba(255,46,154,0.9)]"
                  >
                    Envoyer ma demande
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer                                                             */
/* ------------------------------------------------------------------ */



function Footer() {
  return (
    <footer className="relative border-t border-white/5 pb-10 pt-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-[#FF2E9A] to-[#8B5CF6] text-sm font-bold">
                L
              </span>
              <span className="font-display text-xl font-semibold">
                Lens Oua Agency
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm text-[color:var(--color-fog)]">
              Studio de design graphique dédié aux établissements de
              restauration exigeants.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-fog)]">
              Navigation
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                ["Accueil", "#top"],
                ["À propos", "#"],
                ["Services", "#"],
                ["Nos réalisations", "#realisations"],
                ["Contact", "#devis"],
              ].map(([l, h]) => (
                <li key={l}>
                  <a
                    href={h}
                    className="text-white/80 transition-colors hover:text-[#FF2E9A]"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-fog)]">
              Suivez-nous
            </h4>
            <ul className="mt-5 flex flex-wrap gap-3">
              {[
                { Icon: Facebook, l: "Facebook" },
                { Icon: Instagram, l: "Instagram" },
                { Icon: Music2, l: "TikTok" },
                { Icon: Linkedin, l: "LinkedIn" },
                { Icon: MessageCircle, l: "WhatsApp" },
              ].map(({ Icon, l }) => (
                <li key={l}>
                  <a
                    href="#"
                    aria-label={l}
                    className="glass grid h-11 w-11 place-items-center rounded-full transition-all hover:-translate-y-0.5 hover:bg-[#FF2E9A]/20"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 text-xs text-[color:var(--color-fog)] sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Lens Oua Agency. Tous droits réservés.</p>
          <p>Créé avec passion à Abidjan.</p>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

function Portfolio() {
  return (
    <main className="relative bg-[color:var(--color-ink)] text-white">
      <CursorGlow />
      <ScrollProgress />
      <Nav />
      <Hero />
      <Problem />
      <Gallery />
      <Immersive />
      <Advantages />
      <Method />
      <BeforeAfter />
      <Testimonials />
      <Faq />
      <CTA />
      <QuoteForm />
      <Footer />
    </main>
  );
}
