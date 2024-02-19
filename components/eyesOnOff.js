const $eyes = document.querySelector('.password_eyes');
const $password = document.querySelector('#passwordToggle');
const $passwordRe = document.querySelector('#passwordToggleRepeat');

const handlePasswordSight = (event) => {
  if ($password.type === 'password') {
    $password.type = 'text';
    $eyes.src = '/asset/eye-off.svg';
    $eyes.classList.add('eyes_offset');
    $passwordRe.type = 'text';
  } else if ($password.type === 'text') {
    $password.type = 'password';
    $eyes.src = '/asset/eye-on.svg';
    $eyes.classList.remove('eyes_offset');
    $passwordRe.type = 'password';
  }
};

$eyes.addEventListener('click', handlePasswordSight);
