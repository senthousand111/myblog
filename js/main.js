// 主题切换功能
function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    
    // 检查本地存储中的主题偏好
    if (localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        html.classList.add('dark-theme');
    }
    
    themeToggle.addEventListener('click', () => {
        html.classList.toggle('dark-theme');
        
        // 保存主题偏好到本地存储
        if (html.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
}

// 移动端菜单功能
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
}

// Markdown编辑器模拟功能
function setupMarkdownEditor() {
    const editor = document.getElementById('markdownEditor');
    const preview = document.getElementById('preview');
    
    if (editor && preview) {
        editor.addEventListener('input', () => {
            // 这里只是模拟Markdown渲染效果
            // 实际项目中应该使用marked.js等库进行解析
            preview.innerHTML = editor.value
                .replace(/^# (.*$)/gm, '<h1>$1</h1>')
                .replace(/^## (.*$)/gm, '<h2>$1</h2>')
                .replace(/^### (.*$)/gm, '<h3>$1</h3>')
                .replace(/\*\*(.*)\*\*/gm, '<strong>$1</strong>')
                .replace(/\*(.*)\*/gm, '<em>$1</em>')
                .replace(/\n/g, '<br>');
        });
    }
}

// 页面加载完成后初始化所有功能
document.addEventListener('DOMContentLoaded', () => {
    setupThemeToggle();
    setupMobileMenu();
    setupMarkdownEditor();
    
    // 为所有导航链接添加活跃状态
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split('/').pop() || 'index.html';
        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });
});