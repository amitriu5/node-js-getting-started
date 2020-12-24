import './button.css';
import '../../fonts/icomoon/style.css';

export const createButton = ({
  primary = false,
  size = 'lg',
  label,
  iconId,
  onClick,
  border
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.addEventListener('click', onClick);

  if(iconId){
    const icon = document.createElement('i');
    icon.className =  ['rsicon', `rsicon-${iconId}`].join(' ');
    btn.appendChild(icon);
  }


  const mode = primary ? 'btn-primary' : 'btn-secondary';
  const classNames = ['btn', `btn-${size}`, mode];
  if(border){
    classNames.push('btn-border');
  }
  btn.className = classNames.join(' ');

  return btn;
};
