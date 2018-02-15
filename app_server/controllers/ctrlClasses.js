const classes = function(req, res) {
    res.render('classes',{
        classes:[
            {class:'Guardian',description:'Guardians are the masters of protection. Their special ability is the use of three virtues; Virtue of Courage, Justice and Resolve, which enhance their attacks and defenses until they are used to aid allies. The guardian\'s play-style has a flexible feel and is adept at supporting their allies or damaging their foes. '},
            {class:'Revenant',description:'A profession that was introduced in the Heart of Thorns expansion, Revenants manipulate the Mists in the battlefield. Capable of channeling legendary figures in order to have access to different skills, Revenants use a special resource called Energy in order to cast their abilities. They have enough flexibility to play multiple roles during a battle, depending on their Legend of choice. It is only available to players that have purchased either the Heart of Thorns or the Path of Fire expansion. '},
            {class:'Warrior',description:'Masters of martial combat, warriors have access to a wider selection of weapon types than any other profession, allowing for a multitude of play styles. Warriors\' unique resource, Adrenaline, is built through sustained attacking and can be spent to unleash powerful burst attacks during combat. '},
            {class:'Engineer',description:'Masters of mechanical mayhem, engineers deploy engineering kits and turrets to mix up the battlefield. The engineer\'s profession mechanic is the tool belt - each healing, utility or elite skill adds a skill to this belt, providing them with added utility when it is needed most.'},
            {class:'Ranger',description:'Rangers are masters of their natural surroundings, and use a versatile set of skills to hunt their enemies. The rangers are also accompanied by their trusted pets, fighting in unison with their own set of pet skills to pick off their enemies one by one. '}

        ]
    });
};

module.exports = {
    classes
};