export interface Nominee {
  id: string;
  primaryText: string; // The title or artist name
  secondaryText?: string; // The artist name if primary is a track/album
}

export interface Category {
  id: string;
  title: string;
  nominees: Nominee[];
}

export enum AppState {
  INTRO = 'INTRO',
  CATEGORY_TRANSITION = 'CATEGORY_TRANSITION',
  NOMINEES_REVEAL = 'NOMINEES_REVEAL',
  OUTRO = 'OUTRO'
}