/**
 * タイマーイベントで画面遷移
 */
export class Timer extends Phaser.Scene {
    constructor () {
        super('timer');
    }

    preload () {
    }

    create () {
        const bg = this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'bg');
        this.time.addEvent({ delay: 3000 }).callback = () => {
            console.log('タイマーイベント');
            this.scene.start('menu');
        };
    }
}