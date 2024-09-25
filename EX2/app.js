document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const lightThemeBtn = document.getElementById('lightThemeBtn');
    const darkThemeBtn = document.getElementById('darkThemeBtn');
  
    function switchTheme(theme) {
      if (theme === 'dark') {
        body.classList.add('dark');
      } else {
        body.classList.remove('dark');
      }
      localStorage.setItem('theme', theme);
    }
  
    const savedTheme = localStorage.getItem('theme') || 'light';
    switchTheme(savedTheme);
  
    lightThemeBtn.addEventListener('click', () => switchTheme('light'));
    darkThemeBtn.addEventListener('click', () => switchTheme('dark'));
  });  