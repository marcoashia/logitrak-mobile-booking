import { atom } from 'jotai';

// Atom for managing the logo state (true for reactLynxLogo, false for lynxLogo)
export const alterLogoAtom = atom(false);

// If you have other global states, you can define their atoms here.
// For example:
// export const userAtom = atom<User | null>(null);
// export const settingsAtom = atom<Settings>({ theme: 'light', notifications: true });
