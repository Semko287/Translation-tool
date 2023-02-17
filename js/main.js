import Phaser from "./lib/phaser.js";
import Game from "./game.js";

export default new Phaser.Game({
    type: Phaser.AUTO,
    width: 1920,
	height: 1080,
    backgroundColor: '#000000',
    scene: Game
});
