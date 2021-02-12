import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const BOARD_SIZE = width - 50;
const TILE_SIZE = Math.floor(BOARD_SIZE / 5) - 2;

const CONFIG = {
    boardSize: BOARD_SIZE,
    tileSize: TILE_SIZE,
};

export default CONFIG;
