import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const getSizeOnWidth = (percent) => width * percent;
const getSizeOnHeight = (percent) => height * percent;

const BOARD_BGR_SIZE = getSizeOnWidth(0.85);
const BOARD_SIZE = BOARD_BGR_SIZE * 0.925;
const TILE_SIZE = Math.floor(BOARD_SIZE / 5);

const CONFIG = {
    boardBgrSize: BOARD_BGR_SIZE,
    boardSize: BOARD_SIZE,
    tileSize: TILE_SIZE,
    getSizeOnWidth,
    getSizeOnHeight,
    windowWidth: width,
    windowHeight: height,
};

export default CONFIG;
