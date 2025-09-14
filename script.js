// DOM Elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.getElementById('navbar');
const langButtons = document.querySelectorAll('.lang-btn');

// Language translations
const translations = {
    en: {
        // Page Title
        page_title: 'Alfanugerah - Digital Marketing & BPO Services',
        
        // Navigation
        nav_home: 'Home',
        nav_services: 'Services',
        nav_emerging_markets: 'Emerging Markets',
        nav_about: 'About',
        nav_contact: 'Contact',
        
        // Hero Section
        hero_title: 'Specialized Digital Marketing & BPO Solutions',
        hero_subtitle: 'Alfanugerah is a digital marketing company specializing in premium Business Process Outsourcing (BPO) services. We help clients scale their businesses efficiently while significantly reducing operational costs.',
        hero_btn_services: 'Our Services',
        hero_btn_contact: 'Get Started',
        
        // Services Section
        services_title: 'Our Services',
        services_subtitle: 'Comprehensive business process outsourcing solutions tailored to your needs',
        service_branding_title: 'Branding & Brand Management',
        service_branding_desc: 'Complete brand development and management services to establish and maintain your brand identity in the market.',
        service_telemarketing_title: 'Telemarketing Campaigns',
        service_telemarketing_desc: 'Strategic telemarketing campaigns designed to generate leads and drive sales growth for your business.',
        service_sales_title: 'Sales Team Management',
        service_sales_desc: 'Professional sales team management and training to maximize your sales performance and revenue.',
        service_warehouse_title: 'Warehousing Solutions',
        service_warehouse_desc: 'Efficient warehousing and inventory management solutions to optimize your supply chain operations.',
        service_delivery_title: 'Delivery & Logistics',
        service_delivery_desc: 'Comprehensive delivery and logistics services to ensure timely and cost-effective distribution.',
        service_aftersales_title: 'After-Sales Service',
        service_aftersales_desc: 'Dedicated after-sales support to maintain customer satisfaction and build long-term relationships.',
        
        // About Section
        about_why_title: 'Why Choose Alfanugerah',
        about_why_desc1: 'Alfanugerah stands out as your premier partner for digital marketing and BPO solutions. Our expertise in emerging markets, combined with deep local knowledge and global strategy, ensures your business achieves sustainable growth while reducing operational costs.',
        about_why_desc2: 'We understand the unique challenges of scaling businesses in today\'s competitive landscape. Our comprehensive approach integrates cutting-edge technology with human expertise to deliver exceptional results that exceed expectations.',
        
        // BPO Section
        bpo_title: 'What is BPO?',
        bpo_desc: 'Business Process Outsourcing (BPO) is a strategic practice where companies delegate specific business operations and responsibilities to external service providers. This approach allows businesses to focus on their core competencies while reducing costs and improving efficiency.',
        bpo_benefit_cost_title: 'Cost Reduction',
        bpo_benefit_cost_desc: 'Significantly lower operational expenses',
        bpo_benefit_focus_title: 'Focus on Core Business',
        bpo_benefit_focus_desc: 'Concentrate on what you do best',
        bpo_benefit_scale_title: 'Scalability',
        bpo_benefit_scale_desc: 'Easy scaling up or down based on needs',
        bpo_benefit_expertise_title: 'Expertise Access',
        bpo_benefit_expertise_desc: 'Access to specialized skills and technology',
        
        // Vision & Mission
        vision_title: 'Vision',
        vision_desc: 'To be the leading digital marketing and BPO service provider in Southeast Asia, empowering businesses to thrive in emerging markets through innovative solutions and local expertise.',
        mission_title: 'Mission',
        mission_desc: 'To deliver exceptional BPO services that combine global best practices with deep local market knowledge, helping our clients achieve sustainable growth while significantly reducing operational costs.',
        
        // Emerging Markets
        emerging_title: 'Emerging Markets',
        emerging_subtitle: 'Unlocking opportunities in Southeast Asia\'s rapidly growing economies',
        seasia_title: 'Southeast Asia Potential',
        focus_countries: 'Focus on Indonesia, Malaysia, Vietnam',
        feature_middle_class: 'Rising middle class',
        feature_digital: 'Digital adoption',
        feature_mobile: 'Mobile-first consumers',
        localization_title: 'Importance of Localization',
        local_lang_title: 'Local Language Campaigns',
        local_lang_desc: 'Campaigns in local languages build trust and engagement with your target audience',
        local_face_title: '"Local Face" Marketing',
        local_face_desc: 'Having a "local face" in marketing improves relatability and cultural connection',
        how_alfanugerah_title: 'How Alfanugerah Helps',
        local_expertise_title: 'Local Expertise + Global Strategy',
        local_expertise_desc: 'We combine deep local market knowledge with proven global strategies',
        multilingual_title: 'Multilingual Teams',
        multilingual_desc: 'Our diverse teams speak local languages and understand cultural nuances',
        
        // Contact Section
        contact_title: 'Get In Touch',
        contact_subtitle: 'Ready to transform your business? Contact us today for a free consultation',
        contact_email_label: 'Email',
        contact_whatsapp_label: 'WhatsApp',
        contact_office_label: 'Office',
        contact_office_address: '123 Business District<br>Jakarta, Indonesia',
        form_name_placeholder: 'Your Name',
        form_email_placeholder: 'Your Email',
        form_subject_placeholder: 'Subject',
        form_message_placeholder: 'Your Message',
        form_submit_btn: 'Send Message'
    },
    id: {
        // Page Title
        page_title: 'Alfanugerah - Layanan Digital Marketing & BPO',
        
        // Navigation
        nav_home: 'Beranda',
        nav_services: 'Layanan',
        nav_emerging_markets: 'Pasar Berkembang',
        nav_about: 'Tentang',
        nav_contact: 'Kontak',
        
        // Hero Section
        hero_title: 'Solusi Digital Marketing & BPO Terspesialisasi',
        hero_subtitle: 'Alfanugerah adalah perusahaan digital marketing yang mengkhususkan diri dalam layanan Business Process Outsourcing (BPO) premium. Kami membantu klien mengembangkan bisnis mereka secara efisien sambil mengurangi biaya operasional secara signifikan.',
        hero_btn_services: 'Layanan Kami',
        hero_btn_contact: 'Mulai Sekarang',
        
        // Services Section
        services_title: 'Layanan Kami',
        services_subtitle: 'Solusi business process outsourcing yang komprehensif dan disesuaikan dengan kebutuhan Anda',
        service_branding_title: 'Branding & Manajemen Brand',
        service_branding_desc: 'Layanan pengembangan dan manajemen brand lengkap untuk membangun dan mempertahankan identitas brand Anda di pasar.',
        service_telemarketing_title: 'Kampanye Telemarketing',
        service_telemarketing_desc: 'Kampanye telemarketing strategis yang dirancang untuk menghasilkan prospek dan mendorong pertumbuhan penjualan bisnis Anda.',
        service_sales_title: 'Manajemen Tim Penjualan',
        service_sales_desc: 'Manajemen dan pelatihan tim penjualan profesional untuk memaksimalkan kinerja penjualan dan pendapatan Anda.',
        service_warehouse_title: 'Solusi Pergudangan',
        service_warehouse_desc: 'Solusi pergudangan dan manajemen inventori yang efisien untuk mengoptimalkan operasi rantai pasokan Anda.',
        service_delivery_title: 'Pengiriman & Logistik',
        service_delivery_desc: 'Layanan pengiriman dan logistik komprehensif untuk memastikan distribusi yang tepat waktu dan hemat biaya.',
        service_aftersales_title: 'Layanan Purna Jual',
        service_aftersales_desc: 'Dukungan purna jual yang dedicated untuk mempertahankan kepuasan pelanggan dan membangun hubungan jangka panjang.',
        
        // About Section
        about_why_title: 'Mengapa Memilih Alfanugerah',
        about_why_desc1: 'Alfanugerah menonjol sebagai mitra utama Anda untuk solusi digital marketing dan BPO. Keahlian kami di pasar berkembang, dikombinasikan dengan pengetahuan lokal yang mendalam dan strategi global, memastikan bisnis Anda mencapai pertumbuhan berkelanjutan sambil mengurangi biaya operasional.',
        about_why_desc2: 'Kami memahami tantangan unik dalam mengembangkan bisnis di lanskap kompetitif saat ini. Pendekatan komprehensif kami mengintegrasikan teknologi mutakhir dengan keahlian manusia untuk memberikan hasil luar biasa yang melampaui ekspektasi.',
        
        // BPO Section
        bpo_title: 'Apa itu BPO?',
        bpo_desc: 'Business Process Outsourcing (BPO) adalah praktik strategis di mana perusahaan mendelegasikan operasi bisnis dan tanggung jawab tertentu kepada penyedia layanan eksternal. Pendekatan ini memungkinkan bisnis untuk fokus pada kompetensi inti mereka sambil mengurangi biaya dan meningkatkan efisiensi.',
        bpo_benefit_cost_title: 'Pengurangan Biaya',
        bpo_benefit_cost_desc: 'Biaya operasional yang jauh lebih rendah',
        bpo_benefit_focus_title: 'Fokus pada Bisnis Inti',
        bpo_benefit_focus_desc: 'Berkonsentrasi pada apa yang terbaik Anda lakukan',
        bpo_benefit_scale_title: 'Skalabilitas',
        bpo_benefit_scale_desc: 'Mudah meningkatkan atau menurunkan skala berdasarkan kebutuhan',
        bpo_benefit_expertise_title: 'Akses Keahlian',
        bpo_benefit_expertise_desc: 'Akses ke keterampilan dan teknologi khusus',
        
        // Vision & Mission
        vision_title: 'Visi',
        vision_desc: 'Menjadi penyedia layanan digital marketing dan BPO terdepan di Asia Tenggara, memberdayakan bisnis untuk berkembang di pasar berkembang melalui solusi inovatif dan keahlian lokal.',
        mission_title: 'Misi',
        mission_desc: 'Memberikan layanan BPO yang luar biasa yang menggabungkan praktik terbaik global dengan pengetahuan pasar lokal yang mendalam, membantu klien kami mencapai pertumbuhan berkelanjutan sambil mengurangi biaya operasional secara signifikan.',
        
        // Emerging Markets
        emerging_title: 'Pasar Berkembang',
        emerging_subtitle: 'Membuka peluang di ekonomi Asia Tenggara yang berkembang pesat',
        seasia_title: 'Potensi Asia Tenggara',
        focus_countries: 'Fokus pada Indonesia, Malaysia, Vietnam',
        feature_middle_class: 'Kelas menengah yang berkembang',
        feature_digital: 'Adopsi digital',
        feature_mobile: 'Konsumen mobile-first',
        localization_title: 'Pentingnya Lokalisasi',
        local_lang_title: 'Kampanye Bahasa Lokal',
        local_lang_desc: 'Kampanye dalam bahasa lokal membangun kepercayaan dan keterlibatan dengan target audiens Anda',
        local_face_title: 'Marketing "Wajah Lokal"',
        local_face_desc: 'Memiliki "wajah lokal" dalam marketing meningkatkan daya tarik dan koneksi budaya',
        how_alfanugerah_title: 'Bagaimana Alfanugerah Membantu',
        local_expertise_title: 'Keahlian Lokal + Strategi Global',
        local_expertise_desc: 'Kami menggabungkan pengetahuan pasar lokal yang mendalam dengan strategi global yang terbukti',
        multilingual_title: 'Tim Multibahasa',
        multilingual_desc: 'Tim kami yang beragam berbicara bahasa lokal dan memahami nuansa budaya',
        
        // Contact Section
        contact_title: 'Hubungi Kami',
        contact_subtitle: 'Siap untuk mentransformasi bisnis Anda? Hubungi kami hari ini untuk konsultasi gratis',
        contact_email_label: 'Email',
        contact_whatsapp_label: 'WhatsApp',
        contact_office_label: 'Kantor',
        contact_office_address: '123 Distrik Bisnis<br>Jakarta, Indonesia',
        form_name_placeholder: 'Nama Anda',
        form_email_placeholder: 'Email Anda',
        form_subject_placeholder: 'Subjek',
        form_message_placeholder: 'Pesan Anda',
        form_submit_btn: 'Kirim Pesan'
    }
};

// Current language
let currentLang = localStorage.getItem('language') || 'en';

// Language switching functionality
function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update active button
    langButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update all text content
    updateContent(lang);
}

function updateContent(lang) {
    const elements = document.querySelectorAll('[data-lang-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else if (element.tagName === 'TITLE') {
                document.title = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    switchLanguage(currentLang);
});

// Add event listeners for language buttons
langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        switchLanguage(btn.dataset.lang);
    });
});

// Mobile Navigation Toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.service-card, .about-text, .contact-item, .stat, .benefit-item, .vm-item, .advantage-item, .benefit, .feature-item');
animateElements.forEach(el => {
    observer.observe(el);
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };
        
        // Validate form
        if (!data.name || !data.email || !data.subject || !data.message) {
            showMessage('Please fill in all fields.', 'error');
            return;
        }
        
        if (!isValidEmail(data.email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate form submission
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            showMessage('Thank you for your message! We\'ll get back to you soon.', 'success');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show message function
function showMessage(message, type) {
    // Remove existing message
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message
    const messageEl = document.createElement('div');
    messageEl.className = `form-message ${type}`;
    messageEl.textContent = message;
    
    // Add styles
    messageEl.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        font-weight: 500;
        z-index: 10000;
        opacity: 0;
        transform: translateX(100px);
        transition: all 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
        ${type === 'success' 
            ? 'background: #10b981; color: white;' 
            : 'background: #ef4444; color: white;'
        }
    `;
    
    document.body.appendChild(messageEl);
    
    // Animate in
    setTimeout(() => {
        messageEl.style.opacity = '1';
        messageEl.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        messageEl.style.opacity = '0';
        messageEl.style.transform = 'translateX(100px)';
        setTimeout(() => {
            messageEl.remove();
        }, 300);
    }, 5000);
}

// Add loading animation for service cards
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// Add counter animation for stats
function animateCounters() {
    const stats = document.querySelectorAll('.stat h3');
    stats.forEach(stat => {
        const target = parseInt(stat.textContent.replace(/\D/g, ''));
        const suffix = stat.textContent.replace(/\d/g, '');
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current) + suffix;
        }, 50);
    });
}

// Trigger counter animation when stats section is visible
const statsSection = document.querySelector('.about-stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statsObserver.observe(statsSection);
}

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero');
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 50);
    }
});

// Add smooth reveal animation for sections
const revealSections = document.querySelectorAll('section');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

revealSections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.6s ease-out';
    revealObserver.observe(section);
});

// Add active state to navigation links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.pageYOffset + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            // Remove active class from all nav links
            navLinks.forEach(link => link.classList.remove('active'));
            // Add active class to current section's nav link
            const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
});

// Add CSS for active nav link
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #2563eb !important;
    }
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(style);

console.log('Alfanugerah website loaded successfully!');