var Snake = (function () {
    const INITIAL_TAIL = 4;
    var fixedTail = true;

    var intervalID;

    var tileCount = 10;
    var gridSize = 400/tileCount;

    const INITIAL_PLAYER = {
        x: Math.floor(tileCount / 2),
        y: Math.floor(tileCount / 2)
    };

    var velocity = { x:0, y:0 };
    var player = { x: INITIAL_PLAYER.x, y: INITIAL_PLAYER.y};
    var walls = false;
    var fruit = { x:1, y:1 };
    var trail = [];
    var tail = INITIAL_TAIL;


})