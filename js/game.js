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
        this.load.html('inputform', 'assets/text/inputbox.html');
    }

    create() 
    {
        var  returnBox = this.returnBoxProp;
        
        var random = Phaser.Math.Between(0, 100);
        console.log(random);

        var height = window.innerHeight;
        var width = window.innerWidth;
        
        returnBox = this.add.text(width/2, height/2, '', { color: '#fff', fontSize: '24px', fontFamily: 'Arial' });

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
        returnBox.on('mouseover', function (event) 
        {
            returnBox.setStyle({ color: '#ff0' });
        });

        returnBox.inputEnabled = true;





        var messageBox = this.add.text(width /2, height - 50, `height: ${height} width: ${width}`, { color: '#fff', fontSize: '24px', fontFamily: 'Arial' });
        messageBox.x = width / 2 - messageBox.width / 2;
    };

    update()
    {
    }
};