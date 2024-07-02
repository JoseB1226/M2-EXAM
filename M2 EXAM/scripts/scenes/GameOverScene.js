class GameOverScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameOverScene' });
    }

    preload() {
        
        this.load.image('gameOver', 'assets/images/gameover/gameoverBG.png');
        this.load.image('mainMenuButton', 'assets/images/buttons/MainMenubtn.png');
        this.load.image('restartButton', 'assets/images/buttons/Retrybtn.png');

        this.load.audio('buttonSfx', 'assets/audio/sfx/buttonSFX.mp3');
    }

    create(data) {
        if (this.scene.get('MainMenuScene').bgm && this.scene.get('MainMenuScene').bgm.isPlaying) {
            this.scene.get('MainMenuScene').bgm.stop();
        }
        const gameOver = this.add.image(400, 300, 'gameOver').setDisplaySize(800, 600);
        
        const score = data.score;

        
        const scoreText = this.add.text(400, 200, 'Score: ' + score, {fontSize: '32px', fill: '#fff' });
        scoreText.setOrigin(0.5);

        
        const mainMenuButton = this.add.image(400, 300, 'mainMenuButton').setInteractive();
        mainMenuButton.setPosition(this.sys.game.config.width / 2, this.sys.game.config.height - 150);
        mainMenuButton.on('pointerup', () => {
            this.sound.play('buttonSfx');
            this.scene.start('MainMenuScene');
        });

        
        const restartButton = this.add.image(400, 400, 'restartButton').setInteractive();
        restartButton.setScale(0.5);
        restartButton.setPosition(this.sys.game.config.width / 2, this.sys.game.config.height - 90);
        restartButton.on('pointerup', () => {
            this.sound.play('buttonSfx');
            this.scene.start('GameScene');
        });
    }
}
export default GameOverScene;