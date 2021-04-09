import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const BOARD_BGR_SIZE = width * 0.85;
const BOARD_SIZE = BOARD_BGR_SIZE * 0.925;
const TILE_SIZE = Math.floor(BOARD_SIZE / 5);

const CONFIG = {
    boardBgrSize: BOARD_BGR_SIZE,
    boardSize: BOARD_SIZE,
    tileSize: TILE_SIZE,
};

export default CONFIG;
