# Will You Be My Valentine? 💕

Interactive Valentine's Day web/desktop app built with React + Vite + Electron.

## 🎯 What It Does

1. **Default Scene**: Full-screen `background1.png` with centered clickable envelope area.
2. **Click to Open**: Click the envelope → smoothly fades in `background2.png` overlay (1s opacity transition).
3. **Layered Backgrounds**: Uses dual bg-layer divs for seamless crossfade effect.
4. **Minimal & Smooth**: No distractions, pure interaction.

## 🛠 Tech & Structure

**Key Files:**

- `src/App.jsx`: React component with state (`isOpened`), imports bg1/bg2, renders layered divs + clickable envelope.
- `src/App.css`: Core styles - `.scene` (full viewport), `.bg-layer` (cover bg), `.bg-layer-top` (opacity transition), `.clickable-envelope` (absolute positioned trigger).
- `src/index.css`: Custom fonts loaded (@font-face for Biro Script Plus, Lavonia Classy, Computer Says No) + global reset.
- `src/assets/`: background1.png (base), background2.png (overlay), fonts/\*.ttf.

**Interaction Flow:**

```
background1.png (opacity 1)
+ overlay background2.png (opacity 0, .opened → opacity 1)
+ clickable envelope (removed after click)
```

## 🚀 Run It

```bash
npm install
npm run dev  # Vite HMR + Electron app
```

Browser: http://localhost:5173

## 📱 Responsive & Effects

- Full viewport (100vw/100vh).
- Smooth opacity transition on bg layers.
- Cursor pointer on envelope.
- Fonts ready for text reveals (future).

## Future Enhancements

- Animate envelope opening SVG.
- Reveal message on bg2 ("Will you be my valentine?").
- Sound effects.
- Back button or toggle.

Perfect starter for romantic surprise app! ✨
