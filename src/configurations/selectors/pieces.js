export const getPieces = (state) => state.pieces;

export const getRecentPieces = (state) => (state.pieces && state.pieces.recent) || [];
