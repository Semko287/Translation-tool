import Phaser from './lib/phaserdelivr.js';

export default class Game extends Phaser.Scene 
{
    returnBoxProp;

    constructor() 
    {
        super('game');
    }

    preload() 
    {
    }

    create() 
    {
        console.log(this);
        var returnBox = this.returnBoxProp;
        var textStyles = { color: '#fff', fontSize: '24px', fontFamily: 'Arial' };
        var counter = 0;
        
        var random = Phaser.Math.Between(0, 100);
        console.log(random);

        var height = this.scale.height;
        var width = this.scale.width;

        var counterMessage = this.add.text(width / 10, height / 10, `Hits: ${counter}`, textStyles);
        
        returnBox = this.add.text(width/2, height/2, '', textStyles);

        var inputBox = this.add.dom(
            width / 2, 
            height / 10, 
            'input', 
            'background-color: #000; color: #fff; font-size: 24px; border: 2px solid #fff; border-radius: 4px; padding: 4px; width: 300px; height: 40px;',
            'Enter text here'
            );

        inputBox.addListener('keydown');


        inputBox.on('keydown', function (event) 
        {
            if (event.keyCode === 13)
            {
                returnBox.setText(inputBox.node.value);
                returnBox.x = width / 2 - returnBox.width / 2;
            };
        });

        console.log(`height: ${height} width: ${width}`);
        
        returnBox.setInteractive();
        
        this.input.on('pointerover', function (event, gameObjects) 
        {
            console.log('pointerover');
            let margin = 300;

            do
            {
                gameObjects[0].x = gameObjects[0].x + Phaser.Math.Between(-100, 100);
                gameObjects[0].y = gameObjects[0].y + Phaser.Math.Between(-100, 100);
            } while (gameObjects[0].x > width - margin || gameObjects[0].x < margin || gameObjects[0].y > height - margin || gameObjects[0].y < margin);

            counter++;

            counterMessage.text = `Hits: ${counter}`;
        });






        var messageBox = this.add.text(width /2, height - 50, `height: ${height} width: ${width}`, textStyles);
        messageBox.x = width / 2 - messageBox.width / 2;

        this.scale.on('resize', function (baseSize)
        {
            var scaleX = window.innerWidth / baseSize.width;
            var scaleY = window.innerHeight / baseSize.height;
            var scale = Math.min(scaleX, scaleY);
            console.log('resize', scale);
            messageBox.text = `height: ${baseSize.width * scale} width: ${baseSize.height * scale}`;
        }, this);
    };

    update()
    {
    }
};