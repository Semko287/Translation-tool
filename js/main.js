import Phaser from "./lib/phaserdelivr.js";
import Game from "./game.js";

export default new Phaser.Game({
    type: Phaser.AUTO,
    parent: 'default',
    width: 1920,
	height: 1080,
    backgroundColor: '#000000',
    scene: [Game],
    dom: {
        createContainer: true
    },
});
