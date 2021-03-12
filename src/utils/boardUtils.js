import { ImageConfig } from '../configurations';

const DROP_AREA = {};

const setDropArea = (x, y, width, height) => {
    DROP_AREA.width = width;
    DROP_AREA.height = height;
    DROP_AREA.x = x;
    DROP_AREA.y = y;

    // console.log('Component width is: ' + DROP_AREA.width);
    // console.log('Component height is: ' + DROP_AREA.height);
    // console.log('X offset to page: ' + DROP_AREA.x);
    // console.log('Y offset to page: ' + DROP_AREA.y);
};

const scale = 0.5; // TODO: remove hoặc set về 1 khi làm đc thao tác clone 1 Piece với scale 1 để drag

// DropEvent example {"locationX": 12, "locationY": 28, "pageX": 50.5, "pageY": 188}
// vấn đề: locationX chỉ tính với parent, nếu drag thông qua 1 tile ko phải tile đầu tiên thì tính toạ độ của cả Piece bị sai
// GestureState example
// {"dx": 28.5, "dy": -448, "moveX": 50.5, "moveY": 188, "numberActiveTouches": 0,
// "stateID": 0.12946666578999189, "vx": 0.0204823923044166, "vy": -0.0204823923044166, "x0": 22, "y0": 636}
const checkDropOnBoard = (pieceConfig, event) => {
    console.log('Check drop on board', pieceConfig);

    const { col, row } = pieceConfig;
    const pieceWidth = col * ImageConfig.tileSize * scale;
    const pieceHeight = row * ImageConfig.tileSize * scale;

    // tính vị trí góc trên trái của Piece
    const { x: piecePx, y: piecePy } = event;

    // console.log('Drop event', event.nativeEvent);
    // console.log('GestureState', gestureState);
    console.log('Current position of Piece', piecePx, piecePy);

    // Khoảng cách tương đối giữa topLeft của piece so với topLeft của board
    const distanceX = piecePx - DROP_AREA.x;
    const distanceY = piecePy - DROP_AREA.y;

    console.log('Distance between 2 corner', distanceX, distanceY);
    console.log('Piece bound', pieceWidth, pieceHeight);

    // check piece nằm ngoài board
    if (
        distanceX + pieceWidth < 0 ||
        distanceY + pieceHeight < 0 ||
        distanceX > DROP_AREA.width ||
        distanceY > DROP_AREA.height
    ) {
        console.log('Piece over board - full');
        return false;
    }

    // xác định vị trí drop
    const colIndex = Math.round(distanceX / ImageConfig.tileSize);
    const rowIndex = Math.round(distanceY / ImageConfig.tileSize);
    console.log('drop position', colIndex, rowIndex);
    if (colIndex + col > 5 || rowIndex + row > 5) {
        console.log('Piece over board - 1 part');
        return false;
    }

    return { colIndex, rowIndex };
};

const boardUtils = {
    setDropArea,
    checkDropOnBoard,
};

export default boardUtils;
