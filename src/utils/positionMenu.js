import getPosition from "./getPosition";

const positionMenu = (e, menu) => {
  const clickCoords = getPosition(e);
  const clickCoordsX = clickCoords.x;
  const clickCoordsY = clickCoords.y;

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  if (windowWidth - clickCoordsX < menu.current.width) {
    menu.current.style.left = windowWidth - menu.current.width + 'px';
  } else {
    menu.current.style.left = clickCoordsX + 'px';
  }

  if (windowHeight - clickCoordsY < menu.current.height) {
    menu.current.style.top = windowHeight - menu.current.height + 'px';
  } else {
    menu.current.style.top = clickCoordsY + 'px';
  }
};
export default positionMenu