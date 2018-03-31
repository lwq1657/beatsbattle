"use strict";
cc._RF.push(module, '19e21vvTc1Fn487CledqGKy', 'Game');
// Script/Game.js

'use strict';

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

    properties: {

        piecePrefab: {
            default: null,
            type: cc.Prefab
        },

        greenbg: {
            default: null,
            type: cc.Node
        }, //背景节点

        gameState: 'red' //初始执棋方
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {

        this.pieceSFList = ['redmouse', 'bluemouse', 'redcat', 'bluecat', 'reddog', 'bluedog', 'redwolf', 'bluewolf', 'redpanther', 'bluepanther', 'redtiger', 'bluetiger', 'redlion', 'bluelion', 'redjumbo', 'bluejumbo'];
        //图片数组，存储斗兽棋子图片路径，resources文件下
        this.pieceID = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        //棋子ID数组，后面讲打乱用于棋子的随机初始化
        this.pieceSet();
    },

    pieceSet: function pieceSet() {
        //控制棋子摆放,背面棋子点击翻到正面，如果已经翻过就不处理响应
        this.pieceID.sort(function () {
            return 0.5 - Math.random();
        }); //打乱棋子id顺序

        for (var y = 0; y < 4; y++) {
            for (var x = 0; x < 4; x++) {
                //循环摆放棋子
                var newPiece = cc.instantiate(this.piecePrefab); //复制piece预制资源
                //newPiece.id = x + y*4;
                newPiece.isTurn = false;
                newPiece.id = this.pieceID[x + y * 4];
                //console.log(newPiece.id);
                this.greenbg.addChild(newPiece);
                newPiece.setPosition(cc.p(x + 115 + 180 * x, y * 200 + (y + 281))); //根据棋盘和棋子大小计算使每个棋子节点位于指定位置

                newPiece.on(cc.Node.EventType.TOUCH_END, function (event) {

                    var touchPiece = event.target;
                    if (this.gameState === 'red' & touchPiece.isTurn === false) {
                        //轮到对应玩家，才处理点击
                        // console.log(touchPiece.id );
                        // console.log(touchPiece.isTurn);
                        //console.log(this.pieceSFList[touchPiece.id]);//存储图标的数组
                        cc.loader.loadRes(this.pieceSFList[touchPiece.id], cc.SpriteFrame, function (err, spriteFrame) {
                            touchPiece.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                            //棋子正面图片设置
                            touchPiece.isTurn = true; //标志已经翻到正面
                        });
                        console.log("touchsuccess" + touchPiece.id);
                    }
                    // this.exchangePlayer();//交换执棋方
                }.bind(this));
            }
        }
    },

    pieceBattle: function pieceBattle(red, blue) {
        var self = this;
        if (red.id > blue.id || red.id === 0 && blue.id === 15) {
            //将红棋移动至蓝棋位置，蓝棋消失


        } else if (Math.abs(red.id - blue.id) === 1) {
            //红棋蓝棋均消失
        } else if (red.id === 14 && blue.id === 1 || red.id < blue.id) {
            //将蓝棋移动至红棋位置，红棋消失
        }
    },

    exchangePlayer: function exchangePlayer() {
        //交换当前玩家顺序
        if (this.gameState === 'red') {
            this.gameState = 'blue';
        } else {
            this.gameState = 'red';
        }
    },

    reSrartGame: function reSrartGame() {
        this.pieceSet();
        this.exchangePlayer(); //交换下对手顺序，输了的先下
    },

    gameOver: function gameOver() {},
    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();