import 'phaser';
import {Preload} from "./preload";
import {Menu} from "./views/menu";
import {Timer} from "./views/timer";

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: [Preload, Menu, Timer]
};

var game = new Phaser.Game(config);
