const initialTiles = [];

for (let i = 0; i < 25; i++) {
    initialTiles.push({ index: i, hide: false });
}

const initialState = {
    name: '',
    tiles: initialTiles,
};

export default (state = initialState, action) => {
    console.log('Reduce board action', action);
    return state;
};
