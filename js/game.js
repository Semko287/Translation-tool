import Phaser from './lib/phaser.js';

export default class Game extends Phaser.Scene 
{
    constructor() 
    {
        super('game');
    }

    preload() 
    {
    }

    create() 
    {
        var random = Phaser.Math.Between(0, 100);
        console.log(random);
    }
};