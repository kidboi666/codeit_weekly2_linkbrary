import handlePasswordSight from './components/eyesOnOff.js';
import { $eyes, $passwordRe } from './components/eyesOnOff.js';
import valueWrong from './components/passwordRepeat.js';
const $signUpButton = document.querySelector('.signup_button');

$eyes.addEventListener('click', handlePasswordSight);
$passwordRe.addEventListener('change', valueWrong);
$signUpButton.addEventListener('submit', valueWrong);
