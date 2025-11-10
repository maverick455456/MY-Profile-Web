'use client';
import React, { useEffect, useRef } from 'react';

type XY = { x: number; y: number };

export default function CuteRobot() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const robotRef = useRef<HTMLDivElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);

  const pos = useRef<XY>({ x: 18, y: typeof window !== 'undefined' ? Math.max(120, window.innerHeight - 240) : 300 });
  const vel = useRef<XY>({ x: 0, y: 0 });
  const target = useRef<XY>({ ...pos.current });
  const docked = useRef<boolean>(false);
  const typingId = useRef<number>(0);
  const cachedVoice = useRef<SpeechSynthesisVoice | null>(null);

  // --- voice + typewriter ---
  const pickCuteVoice = () => {
    if (!('speechSynthesis' in window)) return null;
    const vs = window.speechSynthesis.getVoices();
    const prefs = [/Google UK English Female/i, /Google US English/i, /Microsoft .* Neural/i, /Jenny/i, /Aria/i, /Zira/i, /Samantha/i, /Female/i];
    for (const rx of prefs) {
      const v = vs.find(vo => rx.test(vo.name));
      if (v) return v;
    }
    return vs[0] || null;
  };

  const speakCute = (text: string) => {
    try {
      if (!('speechSynthesis' in window)) return;
      const u = new SpeechSynthesisUtterance(text);
      cachedVoice.current = cachedVoice.current || pickCuteVoice();
      if (cachedVoice.current) u.voice = cachedVoice.current;
      u.lang = 'en-US'; u.rate = 1.08; u.pitch = 1.55; u.volume = 1;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(u);
    } catch {}
  };

  const typeText = async (text: string, speed = 22) => {
    const bubble = bubbleRef.current!;
    typingId.current += 1; const id = typingId.current;
    bubble.innerHTML = ''; bubble.classList.add('show');
    for (let i = 0; i < text.length; i++) {
      if (id !== typingId.current) return;
      bubble.append(text[i]);
      // eslint-disable-next-line no-await-in-loop
      await new Promise(r => setTimeout(r, speed));
    }
    const cur = document.createElement('span'); cur.className = 'cursor'; bubble.append(cur);
  };

  const sayTyped = (text: string, speed = 22) => { typeText(text, speed); speakCute(text); };

  // --- motion helpers ---
  const pickWaypoint = () => {
    const W = window.innerWidth, H = window.innerHeight;
    const cx = W * 0.5, cy = H * 0.6;
    const rX = Math.random() * W * 0.45 + W * 0.1;
    const rY = Math.random() * H * 0.35 + H * 0.15;
    target.current.x = Math.max(12, Math.min(W - 180, (rX + cx) / 2 + (Math.random() - 0.5) * 80));
    target.current.y = Math.max(80, Math.min(H - 180, (rY + cy) / 2 + (Math.random() - 0.5) * 40));
  };

  const setPupil = (id: 'pL' | 'pR', cx: number, cy: number, lookX: number, lookY: number) => {
    const p = wrapRef.current!.querySelector<SVGCircleElement>(`#${id}`);
    if (!p) return;
    const dx = lookX - (pos.current.x + cx);
    const dy = lookY - (pos.current.y + cy);
    const ang = Math.atan2(dy, dx);
    const dist = Math.min(3.6, Math.hypot(dx, dy) / 120 * 3.6);
    p.setAttribute('cx', (cx + Math.cos(ang) * dist).toFixed(2));
    p.setAttribute('cy', (cy + Math.sin(ang) * dist).toFixed(2));
  };

  // --- raf loop ---
  useEffect(() => {
    const rw = wrapRef.current!, robot = robotRef.current!;
    let raf = 0;

    const loop = (now: number) => {
      const k = 0.09, d = 0.86;
      const ax = (target.current.x - pos.current.x) * k + Math.sin(now * 0.006 + pos.current.y * 0.01) * 0.12;
      const ay = (target.current.y - pos.current.y) * k + Math.cos(now * 0.005 + pos.current.x * 0.01) * 0.10;
      vel.current.x = (vel.current.x + ax) * d; vel.current.y = (vel.current.y + ay) * d;
      pos.current.x += vel.current.x; pos.current.y += vel.current.y;

      const minX = 12, maxX = window.innerWidth - 180, minY = 72, maxY = window.innerHeight - 180;
      if (pos.current.x < minX || pos.current.x > maxX) { vel.current.x *= -0.4; pickWaypoint(); }
      if (pos.current.y < minY || pos.current.y > maxY) { vel.current.y *= -0.4; pickWaypoint(); }
      pos.current.x = Math.max(minX, Math.min(maxX, pos.current.x));
      pos.current.y = Math.max(minY, Math.min(maxY, pos.current.y));

      rw.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      const tilt = Math.max(-12, Math.min(12, vel.current.x * 60));
      robot.style.transform = `rotate(${tilt}deg)`;

      const sh = robot.querySelector<HTMLDivElement>('.shadow');
      if (sh) {
        const w = 88 - Math.min(22, Math.abs(vel.current.y) * 520);
        sh.style.width = `${Math.max(60, w)}px`;
        sh.style.opacity = `${0.56 - Math.min(0.28, Math.abs(vel.current.y) * 0.9)}`;
      }

      const leadX = target.current.x + 80 + vel.current.x * 40;
      const leadY = target.current.y + 80 + vel.current.y * 40;
      setPupil('pL', 86, 99, leadX, leadY);
      setPupil('pR', 114, 99, leadX, leadY);

      const speed = Math.hypot(vel.current.x, vel.current.y);
      if (speed > 1.6 && Math.random() < 0.006) {
        robot.animate(
          [{ transform: `rotate(${tilt}deg)` }, { transform: `rotate(${tilt + 360}deg)` }],
          { duration: 600, easing: 'cubic-bezier(.6,.1,.2,1)' }
        );
      }
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);

    const onResize = () => {
      target.current.x = Math.max(12, Math.min(window.innerWidth - 180, target.current.x));
      target.current.y = Math.max(72, Math.min(window.innerHeight - 180, target.current.y));
    };
    window.addEventListener('resize', onResize, { passive: true });
    const onVoices = () => { cachedVoice.current = null; };
    window.speechSynthesis?.addEventListener('voiceschanged', onVoices);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      window.speechSynthesis?.removeEventListener('voiceschanged', onVoices);
    };
  }, []);

  // greet + first move
  useEffect(() => {
    const rw = wrapRef.current!;
    pos.current = { x: 18, y: Math.max(120, window.innerHeight - 240) };
    rw.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
    sayTyped('Hello, welcome to N-Tech world!', 22);
    const t = setTimeout(() => pickWaypoint(), 900);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onRobotClick = () => {
    if (docked.current) { docked.current = false; wrapRef.current?.classList.remove('docked'); }
    pickWaypoint(); sayTyped('Hello, I’m N-Tech Robot!', 22);
  };

  const onDockToggle = () => {
    docked.current = !docked.current;
    wrapRef.current?.classList.toggle('docked', docked.current);
    if (docked.current) {
      target.current.x = 12; target.current.y = Math.max(100, window.innerHeight - 200);
      sayTyped('Docked. Click me to undock!', 18);
    } else {
      pickWaypoint(); sayTyped('Undocked. Wandering around!', 20);
    }
  };

  return (
    <>
      <div className="robot-wrap" ref={wrapRef} aria-live="polite">
        <div className="bubble" ref={bubbleRef}></div>
        <button className="dock-btn" onClick={onDockToggle} aria-label="Dock/Undock">–</button>

        <div className="robot idle" ref={robotRef} onClick={onRobotClick}>
          <div className="shadow" />
          <svg viewBox="0 0 200 200" aria-label="N-Tech cute flying robot">
            <defs>
              <linearGradient id="botBody" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#dbe4ff" />
              </linearGradient>
              <radialGradient id="eyeGlow" cx="50%" cy="50%" r="60%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#a7c4ff" />
              </radialGradient>
            </defs>
            <g className="prop" style={{ transformOrigin: '100px 44px' }}>
              <circle cx="100" cy="44" r="8.5" fill="#eef3ff" stroke="#9fb2ff" strokeWidth="2" />
              <rect x="58" y="40" width="84" height="8" rx="4" fill="#c8d4ff" />
              <rect x="72" y="40" width="56" height="8" rx="4" fill="#9fb2ff" />
            </g>
            <g className="body">
              <ellipse cx="100" cy="100" rx="54" ry="42" fill="url(#botBody)" stroke="#a8b6ff" strokeWidth="2" />
              <rect x="66" y="82" width="68" height="34" rx="16" fill="#0d1333" stroke="#7d89ff" strokeWidth="2" />
              <g>
                <circle cx="86" cy="99" r="8" fill="url(#eyeGlow)" />
                <circle id="pL" cx="86" cy="99" r="3.1" fill="#18204a" />
                <rect className="lid" x="78" y="91" width="16" height="18" rx="8" fill="#0d1333" />
              </g>
              <g>
                <circle cx="114" cy="99" r="8" fill="url(#eyeGlow)" />
                <circle id="pR" cx="114" cy="99" r="3.1" fill="#18204a" />
                <rect className="lid" x="106" y="91" width="16" height="18" rx="8" fill="#0d1333" />
              </g>
              <circle cx="74" cy="106" r="4" fill="#ffb1cf" opacity=".85" />
              <circle cx="126" cy="106" r="4" fill="#ffb1cf" opacity=".85" />
              <rect x="92" y="118" width="16" height="8" rx="4" fill="#ff9dd4" stroke="#ff7ab6" strokeWidth="1.5" />
            </g>
            <g className="prop" style={{ transformOrigin: '100px 154px' }}>
              <circle cx="100" cy="154" r="8.5" fill="#eef3ff" stroke="#9fb2ff" strokeWidth="2" />
              <rect x="58" y="150" width="84" height="8" rx="4" fill="#c8d4ff" />
              <rect x="72" y="150" width="56" height="8" rx="4" fill="#9fb2ff" />
            </g>
          </svg>
        </div>
      </div>

      <style jsx>{`
        .robot-wrap{position:fixed;left:12px;bottom:18px;width:160px;height:160px;z-index:9999;pointer-events:auto;user-select:none;will-change:transform;}
        .robot{position:absolute;inset:0;width:160px;height:160px;will-change:transform,filter;}
        .shadow{position:absolute;left:50%;bottom:2px;width:88px;height:18px;transform:translateX(-50%);background:radial-gradient(50% 50% at 50% 50%, rgba(0,0,0,.36), rgba(0,0,0,0));filter:blur(2px);opacity:.56;transition:width .2s ease,opacity .2s ease;}
        .bubble{position:absolute;left:100%;bottom:70%;margin-left:10px;max-width:260px;font-size:14px;line-height:1.4;color:#fff;background:rgba(255,255,255,.10);border:1px solid rgba(255,255,255,.18);border-radius:12px;padding:10px 12px;backdrop-filter:blur(10px);box-shadow:0 10px 24px rgba(0,0,0,.28);opacity:0;transform:translateY(6px);pointer-events:none;}
        .bubble.show{opacity:1;transform:translateY(0);transition:opacity .2s ease,transform .2s ease;}
        .bubble :global(.cursor){display:inline-block;width:8px;margin-left:2px;background:#ffffffcb;height:14px;vertical-align:-2px;animation:blinkCursor 1s steps(1) infinite;}
        @keyframes blinkCursor{50%{background:transparent}}
        @keyframes floaty{0%{transform:translateY(0)}50%{transform:translateY(-6px)}100%{transform:translateY(0)}}
        @keyframes spin{to{transform:rotate(360deg)}}
        @keyframes blink{0%,92%,100%{transform:scaleY(1)}95%{transform:scaleY(.05)}}
        .idle :global(.body){animation:floaty 3.8s ease-in-out infinite;}
        .idle :global(.prop){animation:spin .7s linear infinite;}
        .idle :global(.lid){transform-origin:center;animation:blink 4.6s ease-in-out infinite;}
        .dock-btn{position:absolute;right:-6px;top:-6px;width:26px;height:26px;border-radius:999px;border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.12);color:#fff;display:grid;place-items:center;cursor:pointer;font-size:13px}
        :global(.docked) .robot{transform:scale(.82) translate(8px,4px)}
        :global(.docked) .shadow{width:70px;opacity:.5}
        @media (prefers-reduced-motion:reduce){.idle :global(.body),.idle :global(.prop),.idle :global(.lid){animation:none}}
      `}</style>
    </>
  );
                                                       }
