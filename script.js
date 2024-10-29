// Panel members data
const panelMembers = [
    {
        name: 'Arneget Abu Rwad',
        position: 'Advisor',
        social: {
            facebook: '#',
            twitter: '#',
            linkedin: '#'
        }
    },
    {
        name: 'John Doe',
        position: 'President',
        social: {
            facebook: '#',
            twitter: '#',
            linkedin: '#'
        }
    },
    {
        name: 'Arif Shakib',
        position: 'Vice President',
        social: {
            facebook: '#',
            twitter: '#',
            linkedin: '#'
        }
    },
    {
        name: 'Jane Smith',
        position: 'General Secretary',
        social: {
            facebook: '#',
            twitter: '#',
            linkedin: '#'
        }
    },
    {
        name: 'Mike Johnson',
        position: 'Treasurer',
        social: {
            facebook: '#',
            twitter: '#',
            linkedin: '#'
        }
    },
    {
        name: 'Emily Brown',
        position: 'Executive Member',
        social: {
            facebook: '#',
            twitter: '#',
            linkedin: '#'
        }
    }
];

// Events data
const events = [
    {
        title: 'AI Workshop',
        date: '2024-02-15',
        time: '2:00 PM - 5:00 PM',
        location: 'Virtual Event',
        description: 'Join us for an interactive workshop on the latest AI technologies and their applications.',
        link: '#'
    },
    {
        title: 'CareerCrafters',
        date: '2024-02-20',
        time: '10:00 AM - 4:00 PM',
        location: 'BIST Campus',
        description: 'Explore career opportunities and get insights from industry professionals in this day-long event.',
        link: '#'
    },
    {
        title: 'Research Seminar',
        date: '2024-02-25',
        time: '3:00 PM - 6:00 PM',
        location: 'BIST Auditorium',
        description: 'Discover cutting-edge research in computer science presented by leading academics and researchers.',
        link: '#'
    }
];

// Utility function for DOM manipulation
const DOM = {
    create: (tag, className, content) => {
        const element = document.createElement(tag);
        if (className) element.className = className;
        if (content) element.innerHTML = content;
        return element;
    },
    
    select: (selector) => document.querySelector(selector),
    
    selectAll: (selector) => document.querySelectorAll(selector)
};

// Function to render panel members
function renderPanelMembers() {
    const panelContainer = DOM.select('.panel-members');
    if (!panelContainer) return;
    
    panelMembers.forEach(member => {
        const memberCard = DOM.create('div', 'panel-member', `
            <div class="panel-member-info">
                <h3>${member.name}</h3>
                <p>${member.position}</p>
                <div class="social-links">
                    ${member.social ? `
                        <a href="${member.social.facebook || '#'}" target="_blank" rel="noopener noreferrer" aria-label="Facebook profile"><i class="fab fa-facebook-f"></i></a>
                        <a href="${member.social.twitter || '#'}" target="_blank" rel="noopener noreferrer" aria-label="Twitter profile"><i class="fab fa-twitter"></i></a>
                        <a href="${member.social.linkedin || '#'}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><i class="fab fa-linkedin-in"></i></a>
                    ` : ''}
                </div>
            </div>
        `);
        panelContainer.appendChild(memberCard);
    });
}

// Function to render events
function renderEvents() {
    const eventContainer = document.querySelector('.event-cards');
    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        eventCard.innerHTML = `
            <div class="event-info">
                <h3>${event.title}</h3>
                <p><i class="far fa-calendar-alt"></i>${new Date(event.date).toLocaleDateString()}</p>
                <p><i class="far fa-clock"></i>${event.time}</p>
                <p><i class="fas fa-map-marker-alt"></i>${event.location}</p>
                <p class="event-description">${event.description}</p>
            </div>
        `;
        eventContainer.appendChild(eventCard);
    });
}

// Function to handle department navigation
function handleDepartmentNav() {
    const departmentLinks = document.querySelectorAll('.department-nav a');
    const departmentContent = document.querySelector('.department-content');

    departmentLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            departmentLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Update content based on the clicked department
            departmentContent.innerHTML = `
                <h3>${link.textContent}</h3>
                <p>Information about the ${link.textContent} department goes here.</p>
            `;
        });
    });
}

// Function to add scroll reveal animations
function addScrollReveal() {
    if (typeof ScrollReveal !== 'undefined') {
        ScrollReveal().reveal('.feature', { 
            delay: 200, 
            distance: '20px', 
            origin: 'bottom', 
            interval: 100 
        });
        ScrollReveal().reveal('.panel-member', { 
            delay: 200, 
            distance: '20px', 
            origin: 'bottom', 
            interval: 100 
        });
        ScrollReveal().reveal('.event-card', { 
            delay: 200, 
            distance: '20px', 
            origin: 'bottom', 
            interval: 100 
        });
    } else {
        console.warn('ScrollReveal is not defined. Skipping animations.');
    }
}

// Function to animate features
function animateFeatures() {
    const features = document.querySelectorAll('.feature');
    features.forEach((feature, index) => {
        feature.style.opacity = '0';
        feature.style.transform = 'translateY(20px)';
        feature.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        feature.style.transitionDelay = `${index * 0.1}s`;

        setTimeout(() => {
            feature.style.opacity = '1';
            feature.style.transform = 'translateY(0)';
        }, 100);
    });
}

// Function to handle department tabs
function handleDepartmentTabs() {
    const departmentNav = document.querySelector('.department-nav');
    const departmentInfos = document.querySelectorAll('.department-info');

    if (!departmentNav) {
        console.error('Department navigation not found');
        return;
    }

    departmentNav.addEventListener('click', (event) => {
        const clickedTab = event.target.closest('.department-tab');
        if (!clickedTab) return; // Click was not on a tab

        console.log('Tab clicked:', clickedTab.textContent);

        const department = clickedTab.getAttribute('data-department');
        console.log('Department:', department);

        // Remove active class from all tabs and infos
        departmentNav.querySelectorAll('.department-tab').forEach(tab => tab.classList.remove('active'));
        departmentInfos.forEach(info => info.classList.remove('active'));

        // Add active class to clicked tab and corresponding info
        clickedTab.classList.add('active');
        const activeInfo = document.getElementById(department);
        if (activeInfo) {
            activeInfo.classList.add('active');
            console.log('Activated info:', department);
        } else {
            console.error('Could not find info element for', department);
        }
    });
}

// Updated mobile menu handling function
function handleMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    let isMenuOpen = false;

    if (!menuToggle || !navLinks) return;

    menuToggle.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', isMenuOpen);
        
        // Toggle body scroll
        if (isMenuOpen) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (isMenuOpen && !navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            isMenuOpen = false;
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            isMenuOpen = false;
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

// Function to handle form submission
function handleFormSubmission(formId, action) {
    const form = document.getElementById(formId);
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            if (action === 'register') {
                // Check if passwords match
                if (data.password !== data['confirm-password']) {
                    alert('Passwords do not match');
                    return;
                }
                // Remove confirm-password from data
                delete data['confirm-password'];
            }

            // Here you would typically send this data to your backend
            console.log(`${action.charAt(0).toUpperCase() + action.slice(1)} data:`, data);

            // Simulate successful registration/login
            alert(`${action.charAt(0).toUpperCase() + action.slice(1)} successful!`);
            
            // Set login state
            localStorage.setItem('isLoggedIn', 'true');
            
            // Redirect to home page
            window.location.href = 'index.html';
        });
    }
}

// Function to update nav based on auth state
function updateNavAuth() {
    const desktopAuthButtons = document.querySelector('.auth-buttons.desktop-only');
    const mobileAuthButtons = document.querySelector('.mobile-auth-buttons');

    // Check if user is logged in (this is a placeholder - replace with actual auth check)
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (isLoggedIn) {
        if (desktopAuthButtons) {
            desktopAuthButtons.innerHTML = `<button class="logout-btn">Logout</button>`;
            desktopAuthButtons.querySelector('.logout-btn').addEventListener('click', handleLogout);
        }
        if (mobileAuthButtons) {
            mobileAuthButtons.innerHTML = `<button class="logout-btn">Logout</button>`;
            mobileAuthButtons.querySelector('.logout-btn').addEventListener('click', handleLogout);
        }
    } else {
        if (desktopAuthButtons) {
            desktopAuthButtons.innerHTML = `
                <button class="login-btn">Login</button>
                <button class="register-btn">Register</button>
            `;
            desktopAuthButtons.querySelector('.login-btn').addEventListener('click', openLoginForm);
            desktopAuthButtons.querySelector('.register-btn').addEventListener('click', openRegisterForm);
        }
        if (mobileAuthButtons) {
            mobileAuthButtons.innerHTML = `
                <button class="login-btn" id="mobile-login-btn">Login</button>
                <button class="register-btn" id="mobile-register-btn">Register</button>
            `;
            mobileAuthButtons.querySelector('.login-btn').addEventListener('click', openLoginForm);
            mobileAuthButtons.querySelector('.register-btn').addEventListener('click', openRegisterForm);
        }
    }
}

// Function to handle logout
function handleLogout() {
    // Clear auth state (replace with actual logout logic)
    localStorage.removeItem('isLoggedIn');
    updateNavAuth();
    window.location.href = 'index.html';
}

// Function to open register form
function openRegisterForm() {
    window.location.href = 'register.html';
}

// Function to open login form
function openLoginForm() {
    window.location.href = 'login.html';
}

// Function to handle button clicks
function handleButtonClicks() {
    const heroJoinBtn = document.getElementById('hero-join-btn');
    const ctaJoinBtn = document.getElementById('cta-join-btn');
    const contactBtn = document.getElementById('contact-btn');
    const mobileLoginBtn = document.getElementById('mobile-login-btn');
    const mobileRegisterBtn = document.getElementById('mobile-register-btn');

    if (heroJoinBtn) heroJoinBtn.addEventListener('click', openRegisterForm);
    if (ctaJoinBtn) ctaJoinBtn.addEventListener('click', openRegisterForm);
    if (contactBtn) contactBtn.addEventListener('click', openRegisterForm);
    if (mobileLoginBtn) mobileLoginBtn.addEventListener('click', openLoginForm);
    if (mobileRegisterBtn) mobileRegisterBtn.addEventListener('click', openRegisterForm);
}

// Update the init function
function init() {
    console.log('Initializing...');
    try {
        renderPanelMembers();
        renderEvents();
        handleDepartmentTabs();
        handleMobileMenu(); // Add this line
        addScrollReveal();
        animateFeatures();
        updateNavAuth();
        handleButtonClicks();
        handleFormSubmission('register-form', 'register');
        handleFormSubmission('login-form', 'login');
        console.log('All handlers set up');
    } catch (error) {
        console.error('Error during initialization:', error);
    }
}

// Run initialization when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const handleScroll = debounce(() => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}, 100);

window.addEventListener('scroll', handleScroll);

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

function initLazyLoad() {
    document.querySelectorAll('.feature, .panel-member, .event-card').forEach(element => {
        observer.observe(element);
    });
}
