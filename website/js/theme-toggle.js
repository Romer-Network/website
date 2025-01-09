// Enhanced theme toggle implementation for Quarto
document.addEventListener('DOMContentLoaded', () => {
    // Add transition styles
    const style = document.createElement('style');
    style.textContent = `
        html.transition,
        html.transition *,
        html.transition *:before,
        html.transition *:after {
            transition: background-color 0.3s ease, 
                       color 0.3s ease, 
                       border-color 0.3s ease, 
                       box-shadow 0.3s ease !important;
            transition-delay: 0 !important;
        }
    `;
    document.head.appendChild(style);

    // Get the theme toggle button using the correct ID
    const themeToggle = document.querySelector('#quarto-dark-toggle1');
    
    if (themeToggle) {
        // Initialize theme based on stored preference or system preference
        const storedTheme = localStorage.getItem('quarto-color-scheme');
        const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const defaultTheme = systemDarkMode ? 'dark' : 'light';
        
        // Function to update theme
        const updateTheme = (theme) => {
            document.documentElement.classList.add('transition');
            document.documentElement.setAttribute('data-theme', theme);
            document.documentElement.setAttribute('data-bs-theme', theme);
            localStorage.setItem('quarto-color-scheme', theme);
            
            // Update icon
            const icon = themeToggle.querySelector('i');
            if (icon) {
                icon.className = theme === 'dark' 
                    ? 'bi bi-moon-stars-fill'
                    : 'bi bi-sun-fill';
            }
            
            // Remove transition class after animation completes
            setTimeout(() => {
                document.documentElement.classList.remove('transition');
            }, 300);
        };

        // Set initial theme
        updateTheme(storedTheme || defaultTheme);

        // Handle theme toggle click
        themeToggle.addEventListener('click', (e) => {
            e.preventDefault();
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            updateTheme(newTheme);
        });

        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (!localStorage.getItem('quarto-color-scheme')) {
                updateTheme(e.matches ? 'dark' : 'light');
            }
        });
    } else {
        console.warn('Theme toggle button not found. Check if the ID "quarto-dark-toggle1" exists.');
    }
});