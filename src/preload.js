/**
 * 画像読み込み初期化
 */
export class Preload extends Phaser.Scene {
    constructor () {
        super('preload');
    }

    preload () {
        this.load.image('bg', 'assets/bg_default.png');
        this.load.image('button_timer', 'assets/button_timer.png');
    }

    create () {
        this.resize();
        this.scene.start('menu');
    }

    resize() {
        const canvas = this.game.canvas, width = window.innerWidth, height = window.innerHeight;
        const wratio = width / height, ratio = canvas.width / canvas.height;

        if (wratio < ratio) {
            canvas.style.width = width + "px";
            canvas.style.height = (width / ratio) + "px";
        } else {
            canvas.style.width = (height * ratio) + "px";
            canvas.style.height = height + "px";
        }
    }
}