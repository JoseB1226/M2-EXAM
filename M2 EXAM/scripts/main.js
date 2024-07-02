
import GameScene from './scenes/GameScene.js';
import MainMenuScene from './scenes/MainMenuScene.js';
import WinScene from './scenes/WinScene.js';
import GameOverScene from './scenes/GameOverScene.js';

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [MainMenuScene, GameScene, WinScene, GameOverScene,],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    pixelArt: true, 
    roundPixels: true // Round pixels to avoid sub-pixel rendering
    
};

var game = new Phaser.Game(config);