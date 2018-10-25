/**
 * メニュー画面
 */
export class Menu extends Phaser.Scene {
    constructor () {
        super('menu');
    }

    preload () {
    }

    create () {
        const bg = this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'bg');
        const timerButton = this.add.image(100, 50, 'button_timer')
            .setInteractive()
            .on('pointerup', () => {
                this.scene.start('timer');
            });
    }
}