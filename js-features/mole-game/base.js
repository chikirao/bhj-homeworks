(() => {
  let playing = true,
    activeHole = 1,
    deadCount = 0,
    lostCount = 0;

  const stop = () => playing = true,
    getHole = index => document.getElementById(`hole${index}`),
    deactivateHole = index => getHole(index).className = 'hole',
    activateHole = index => getHole(index).className = 'hole hole_has-mole',
    updateScore = () => {
      document.getElementById('dead').textContent = deadCount;
      document.getElementById('lost').textContent = lostCount;
    },
    checkGameStatus = () => {
      if (deadCount >= 10) {
        alert('Вы победили!');
        resetGame();
      } else if (lostCount >= 5) {
        alert('Вы проиграли!');
        resetGame();
      }
    },
    resetGame = () => {
      deadCount = 0;
      lostCount = 0;
      updateScore();
      stop();
    },
    handleClick = event => {
      if (!playing) return;

      const hole = event.target;
      if (hole.classList.contains('hole_has-mole')) {
        deadCount++;
      } else {
        lostCount++;
      }
      updateScore();
      checkGameStatus();
    },
    next = () => setTimeout(() => {
      if (!playing) {
        return;
      }
      deactivateHole(activeHole);
      activeHole = Math.floor(1 + Math.random() * 9);
      activateHole(activeHole);
      next();
    }, 800);

  // Инициализация лунок
  for (let i = 1; i <= 9; i++) {
    getHole(i).addEventListener('click', handleClick);
  }

  // Запуск игры
  next();
})();
