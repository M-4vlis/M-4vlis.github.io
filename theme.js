// Controle do tema (claro/escuro)
document.addEventListener("DOMContentLoaded", () => {
    // Verifica se há preferência salva
    const savedTheme = localStorage.getItem('theme');
    
    // Botão para alternar tema
    const themeToggle = document.createElement('button');
    themeToggle.id = 'theme-toggle';
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.setAttribute('aria-label', 'Alternar tema claro/escuro');
    themeToggle.title = 'Alternar tema';
    
    // Estilizando o botão
    themeToggle.style.position = 'fixed';
    themeToggle.style.top = '20px';
    themeToggle.style.right = '20px';
    themeToggle.style.backgroundColor = '#007acc';
    themeToggle.style.color = '#fff';
    themeToggle.style.border = 'none';
    themeToggle.style.borderRadius = '50%';
    themeToggle.style.width = '40px';
    themeToggle.style.height = '40px';
    themeToggle.style.fontSize = '16px';
    themeToggle.style.cursor = 'pointer';
    themeToggle.style.display = 'flex';
    themeToggle.style.justifyContent = 'center';
    themeToggle.style.alignItems = 'center';
    themeToggle.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
    themeToggle.style.zIndex = '1000';
    themeToggle.style.transition = 'all 0.3s ease';
    
    document.body.appendChild(themeToggle);
    
    // Define classe no body para controle de tema em vez de atributo no html
    const setTheme = (theme) => {
      if (theme === 'dark') {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        themeToggle.style.backgroundColor = '#f0c14b';
        themeToggle.style.color = '#1e1e1e';
      } else {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        themeToggle.style.backgroundColor = '#007acc';
        themeToggle.style.color = '#fff';
      }
    };
    
    // Inicializa com o tema salvo ou preferência do sistema
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Verifica preferência do sistema
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    }
    
    // Evento de clique para alternar tema
    themeToggle.addEventListener('click', () => {
      // Verifica se o body tem a classe dark-theme
      const isDark = document.body.classList.contains('dark-theme');
      const newTheme = isDark ? 'light' : 'dark';
      
      localStorage.setItem('theme', newTheme);
      setTheme(newTheme);
    });
  });