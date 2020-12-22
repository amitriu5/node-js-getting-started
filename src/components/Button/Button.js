import './button.css';

export const createButton = ({
  primary = false,
  size = 'lg',
  backgroundColor,
  label,
  iconId,
  onClick,
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.addEventListener('click', onClick);


  const icon = document.createElement('i');
  icon.className =  ['rsicon', `rsicon-${iconId}`].join(' ');
  btn.appendChild(icon);


  const mode = primary ? 'btn-primary' : 'btn-secondary';
  btn.className = ['btn', `btn-${size}`, mode, 'btn-border'].join(' ');

  btn.style.backgroundColor = backgroundColor;

  return btn;
};
