class Kick {
    constructor(name, koreanName, instruction, tips) {
        this.name = name;
        this.koreanName = koreanName;
        this.instruction = instruction;
        this.tips = tips;
    }
}

const axeKick = new Kick('Axe Kick', 'Naeryo Chagi', 'Raise your rear leg vertically as high as possible and bring the heel of the foot down against the target.', 'You need to strike the target with your heel specifically. This kick requires high flexibility.');
const backKick = new Kick('Back Kick', 'Dwi Chagi', 'Turn your body right until you are facing directly away from the target and pivot on your left foot. Continue turning to right and look over their shoulder, lift your right knee to your chest and drive the heel of your foot straight back towards the opponent.', 'For more power, you can start this kick with a front step. If you can maintain more momentum, you can also achieve a spinning back kick.')
const doubleRoundhouseKick = new Kick('Double Roundhouse Kick', 'Narae Chagi', 'Start with your left foot at the back. Perform a left roundhouse kick and quickly jump as you land on your left foot on the back position again, meanwhile landing a right roundhouse kick.', 'Try focusing on both kicks at the same time, this kick is better if both kicks are landed correct and strong enough. You can practice one knee up jumps to get height practice')
const frontKick = new Kick('Front Kick', 'Ap Chagi', 'Start with your left foot back. Raise your right knee and land a kick with the top of your food by extending the knee.', 'Never center the whole kick on your knee to avoid injuries. Take your power from the lifting of your whole leg instead.')
const hookKick = new Kick('Hook Kick', 'Huryeo Chagi', 'For a front leg hook kick, step in with your back foot behind your front food and raise your front leg. Extend the leg and then snap the foot back to hit the target.', 'For a front leg hook kick, aim slightly to the left of the target. For this kick, you need flexible hip flexors and groin.')
const flyingBackKick = new Kick('Flying Back Kick', 'Twi-myo Dwi Chagi', 'Start with your right foot behind. Take a strong step with it, use the strength of your step to jump with your right knee high and turn left with that momentum. When you can see your target from your shoulder, drive the heel of your foot straight back towards the opponent.','The secret of this kick is to kick up with the front kick in order to help to gain height.')
const flyingSideKick = new Kick('Flying Side Kick', 'Twi-myo Yeop Chagi', 'Get some momentum and step forward. With your kicking foot forward, jump and chamber your knee, pull your back leg in and extend the front leg to drive the heel of your foot to hit the target.', 'To achieve this technique better, knee jump practices are very vital. If you can gain more height, then you can land this kick easier.')
const jumpingFrontKick = new Kick('Jumping Front Kick', 'Eedan Ap Chagi', 'Start with your kicking leg in the front. Move towards the target, raise your non-kicking knee up with force and jump up with the momentum. At your highest point, snap your back leg forward to hit the target with the top of your foot.', 'Instead of taking all the power from your knee, try to take the momentum from the jump to make this kick stronger.')
const pushKick = new Kick('Push Kick', 'Meereo Chagi', 'Start with you kicking foot in the back. Chamber the kicking foot and jump forward while your release a kick with the ball of your foot to hit target.', 'For a better momentum option, you can start with your kicking foot front and take a step forward first.')
const roundHouseKick = new Kick('Roundhouse Kick', 'Dollyo Chagi', 'Start with your kicking foot in the back. Chamber the kicking leg and twist your standing foot with your heel looking towards the target. Use the rotation coming from your foot to rotate your hip and snap your kick to hit your target with the top of your foot. Make sure that your knee is 90 degrees to the ground', 'For more accurate and higher roundhouse kicks, working on your hip flexibility is important.')
const sideKick = new Kick('Side Kick', 'Yeop Chagi', 'Rotate your body until your side is facing the target. Pivot on your front leg and your front foot will pivot 180 degrees. As you rotate you will bring your rear leg forward and chamber it. Thrust your foot forward and strike the target with the blade of your food', 'To train, use a chair or rail in order to maintain your balance. This kick gets easier as you practice!')
const spinningHookKick = new Kick('Spinning Hook Kick', 'Dwi Huryeo Chagi', 'You need to use your rear leg for this kick. To master this kick, you need to know how to perform a hook kick well. Turn your body right until you are facing directly away from the target. During this movement, pivot on your left foot. Continue turning to the right and look over your shoulder to find your target. Snap the kicking foot as you approach the target to land a kick with the heel or with the sole. Sweep through the target and land your kicking leg back to the original position', 'Try to sweep the leg back in a big arc. This is easier to counter but easier to perform.')

const kickList = {
    'axe kick': axeKick,
    'back kick': backKick,
    'double roundhouse kick': doubleRoundhouseKick,
    'front kick': frontKick,
    'hook kick': hookKick,
    'flying back kick': flyingBackKick,
    'flying side kick': flyingSideKick,
    'jumping front kick': jumpingFrontKick,
    'push kick': pushKick,
    'roundhouse kick': roundHouseKick,
    'side kick': sideKick,
    'spinning hook kick': spinningHookKick
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function getRandomKick() {
    const kickArray = Object.keys(kickList)
    const randomKick = kickArray[Math.floor(Math.random() * kickArray.length)];
    return randomKick
}

module.exports = {kickList, getRandomKick}