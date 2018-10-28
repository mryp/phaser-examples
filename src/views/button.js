/**
 * ボタン表示
 */
export class Button extends Phaser.Scene {
    constructor() {
        super('button');
    }

    preload() {
    }

    create() {
        const bg = this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'bg');
        const text = this.add.text(40, 30, 'ボタン押下でメニューに戻る', {fontFamily: 'sans-serif', fontSize: '32px', fill: '#000'});
        const button = this.add.sprite(40, 100, 'button')
            .setOrigin(0)
            .setInteractive()
            .on('pointerout', () => {
                console.log('pointerout');
                this.setButtonFrame(button, 0);
            })
            .on('pointerover', () => {
                console.log('pointerover');
                this.setButtonFrame(button, 1);
            })
            .on('pointerdown', () => {
                console.log('pointerdown');
                this.setButtonFrame(button, 2);
            })
            .on('pointerup', () => {
                console.log('pointerup');
                this.scene.start('menu');
            });
    }

    setButtonFrame(button, frame) {
        button.frame = button.scene.textures.getFrame('button', frame);
    }
}