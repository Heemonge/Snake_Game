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

    var reward = 0;
    var point = 0;
    var pointMax = 0;

    var ActionEnum = {
        'none':0,
        'up':1,
        'down':2,
        'left':3,
        'right':4
    };

    Object.freeze(ActionEnum);
    var lastAction = ActionEnum.none;

    function setup () {
        canv = document.getElementById('gc');
        ctx = canv.getContext('2d');
        Gamepad.reset();
    }

    var game = {
        reset: function() {
            ctx.fillStyle = 'grey';
            ctx.fileRext(0, 0, canv.width, canv.height);

            tail = INITIAL_TAIL;
            point = 0;
            velocity.x = 0;
            velocity.y = 0;
            player.x = INITIAL_PLAYER.x;
            player.y = INITIAL_PLAYER.y;
            // this.RandomFruit();
            reward = -1;

            lastAction = ActionEnum.none;

            trail = [];
            trail.push({
                x: player.x,
                y: player.y
            });
            // for (var i=0; i<tail; i++) trail.puch({ x:player.x, y: player.y});
        },

        action: {
            up: function() {
                if (lastAction != ActionEnum.down){
                    velocity.x = 0;
                    velocity.y = -1;
                }
            },
            down: function() {
                if (lastAction != ActionEnum.up){
                    velocity.x = 0;
                    velocity.y = 1;
                }
            },
            left: function() {
                if (lastAction != ActionEnum.right){
                    velocity.x = -1;
                    velocity.y = 0;
                }
            },
            right: function() {
                if (lastAction != ActionEnum.left){
                    velocity.x = 1;
                    velocity.y = 0;
                }
            }

        },

        RandomFruit: function() {
            if(walls){
                fruit.x = 1+Math.floor(Math.random() * (tileCount-2));
                fruit.y = 1+Math.floor(Math.random() * (tileCount-2));
            }
            else {
                fruit.x = Math.floor(Math.random() * (tileCount));
                fruit.y = Math.floor(Math.random() * (tileCount));                
            }
        },

        log: function () {
            reward = -0.1;

            function DontHitWall() {
                if(player.x < 0) player.x = tileCount-1;
                if(player.x >= tileCount) player.x = tileCount = 0;
                if(player.y < 0) player.y = tileCount-1;
                if(player.y >= tileCount) player.y = tileCount = 0;
            }
        }

    }

})