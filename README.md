# Sticky Notes — Interactive Draggable Notes App

A small, interview-friendly React + TypeScript demo that implements draggable sticky notes with local persistence. Built to showcase component design, state management, drag interactions and simple persistence — ideal to demo during interviews.

Live in this repo:
- Component: [`StickyBoard`](48_Sticky_Note/src/components/Sticky.tsx)  
- Styles: [48_Sticky_Note/src/components/StickyBoard.css](48_Sticky_Note/src/components/StickyBoard.css)  
- App entry: [48_Sticky_Note/src/main.tsx](48_Sticky_Note/src/main.tsx)  
- HTML shell: [48_Sticky_Note/index.html](48_Sticky_Note/index.html)  
- Tooling: [48_Sticky_Note/package.json](48_Sticky_Note/package.json), [48_Sticky_Note/vite.config.ts](48_Sticky_Note/vite.config.ts)

Quick summary
- Purpose: Create, drag, edit and persist sticky notes on a board.
- UX: Click "Add Note" to create a note, drag by the header, type into the textarea. Notes persist to localStorage.
- Implementation highlights: Controlled React state, per-note positions, react-draggable for drag handling, localStorage for persistence.

Why this is interview-friendly
- Small scope, but touches many topics interviewers ask about:
  - Component interfaces and TypeScript types (see [`Note` in StickyBoard`](48_Sticky_Note/src/components/Sticky.tsx))
  - State updates and immutability
  - DOM refs and integrating third-party libs (react-draggable)
  - Persistence and lifecycle (useEffect + localStorage)
  - CSS for layout and UX

How to run
1. Install dependencies:
   npm install
2. Start dev server:
   npm run dev
3. Open the app at the Vite dev URL shown (default: http://localhost:5173) — entry: [48_Sticky_Note/src/main.tsx](48_Sticky_Note/src/main.tsx)

What you will see (output)
- A board UI with an "➕ Add Note" button.
- Each note:
  - Has a header you can drag (only header is draggable).
  - Contains an editable <textarea> for note text.
  - Stores its x/y position and text to localStorage so it reappears after reload.

Real-world use cases
- Lightweight personal note-taking / sticky board
- Prototyping collaborative features (add real-time sync)
- Kanban-lite or idea-capture widgets in dashboards
- Embeddable widgets for documentation or design tools

Interview talking points (concise)
- Why store position inside state vs DOM? (easier persistence, deterministic re-renders)
- Trade-offs: defaultPosition vs controlled position for Draggable
- How to make multi-user (server sync + conflict resolution)
- Accessibility: keyboard-accessible dragging, ARIA considerations
- Testing: unit tests for state updates; e2e for drag/save flows

Possible extensions to mention in interview
- Persist notes server-side and implement optimistic updates
- Add resizing, color selection, and note deletion
- Add user auth + per-user boards
- Add undo/redo and versioning per note
- Add grid-snapping, collision avoidance, or stacking order (z-index)

Notes for reviewers
- See the main component implementation: [`StickyBoard`](48_Sticky_Note/src/components/Sticky.tsx)
- Styles are in: [48_Sticky_Note/src/components/StickyBoard.css](48_Sticky_Note/src/components/StickyBoard.css)
- The project uses Vite; dev script is in [48_Sticky_Note/package.json](48_Sticky_Note/package.json)

If you want, I can also:
- Add README screenshots or an embedded demo GIF
- Add a short `CONTRIBUTING.md` with extension tasks
- Add tests for the note add/drag/save flows
