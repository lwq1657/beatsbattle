"use strict";
cc._RF.push(module, '34899ZXeKRGuZFXeSuRjx4/', 'game');
// Script/game.js

"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: _defineProperty({
        piecePrefab: { //棋子的预制资源
            default: null,
            type: cc.Prefab
        },
        bPantherSF: {
            default: null,
            type: cc.spriteFrame
        },
        rPantherSF: {
            default: null,
            type: cc.spriteFrame
        },
        rjumboSF: {
            default: null,
            type: cc.spriteFrame
        }
    }, "rjumboSF", {
        default: null,
        type: cc.spriteFrame
    }),

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();