/**
 * メニュー画面
 */
export class Menu extends Phaser.Scene {
    constructor() {
        super('menu');
    }

    preload() {
    }

    create() {
        const bg = this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'bg');
        const timerText = this.add.text(40, 30, 'タイマー', {fontFamily: 'sans-serif', fontSize: '32px', fill: '#000'})
            .setInteractive()
            .on('pointerup', () => {
                this.scene.start('timer');
            });
        const buttonText = this.add.text(40, 100, 'ボタン画像', {fontFamily: 'sans-serif', fontSize: '32px', fill: '#000'})
            .setInteractive()
            .on('pointerup', () => {
                this.scene.start('button');
            });
    }
}