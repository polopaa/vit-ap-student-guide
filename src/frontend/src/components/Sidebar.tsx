// Sidebar.tsx — kept for backwards compatibility.
// The fullscreen menu is now integrated directly into Layout.tsx.
// This file re-exports a no-op stub so any leftover imports don't break.

export function Sidebar(_props: { open?: boolean; onClose?: () => void }) {
  return null;
}
