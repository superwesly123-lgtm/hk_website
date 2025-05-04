// Main JS file for website functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle (can be implemented if needed)
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            if (targetId) {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Project tabs functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all tabs
                tabBtns.forEach(b => b.classList.remove('active'));
                
                // Add active class to clicked tab
                this.classList.add('active');
                
                // Hide all tab panes
                document.querySelectorAll('.tab-pane').forEach(pane => {
                    pane.classList.remove('active');
                });
                
                // Show the selected tab pane
                const tabId = this.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });
    }

    // Publication year filter
    const yearFilters = document.querySelectorAll('.year-filter a');
    if (yearFilters.length > 0) {
        yearFilters.forEach(filter => {
            filter.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from all filters
                yearFilters.forEach(f => f.classList.remove('active'));
                
                // Add active class to clicked filter
                this.classList.add('active');
                
                // Get selected year
                const selectedYear = this.textContent;
                
                // Filter publications
                const publications = document.querySelectorAll('.publication');
                
                publications.forEach(pub => {
                    if (selectedYear === '全部') {
                        pub.style.display = 'block';
                    } else {
                        // Check if publication contains the selected year
                        const yearText = pub.querySelector('.authors').textContent;
                        if (yearText.includes(selectedYear)) {
                            pub.style.display = 'block';
                        } else {
                            pub.style.display = 'none';
                        }
                    }
                });
            });
        });
    }

    // FAQ accordions
    const faqItems = document.querySelectorAll('.faq-item h3');
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            item.addEventListener('click', function() {
                // Toggle active class
                this.classList.toggle('active');
                
                // Toggle content visibility
                const content = this.nextElementSibling;
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
            });
        });
        
        // Add initial styling for FAQ items
        document.querySelectorAll('.faq-item h3').forEach(heading => {
            heading.style.cursor = 'pointer';
            heading.style.position = 'relative';
            heading.style.paddingRight = '30px';
            
            // Add plus/minus indicator
            const indicator = document.createElement('span');
            indicator.innerHTML = '+';
            indicator.style.position = 'absolute';
            indicator.style.right = '10px';
            indicator.style.top = '50%';
            indicator.style.transform = 'translateY(-50%)';
            indicator.style.fontSize = '18px';
            heading.appendChild(indicator);
            
            // Hide content initially
            const content = heading.nextElementSibling;
            content.style.overflow = 'hidden';
            content.style.maxHeight = null;
            content.style.transition = 'max-height 0.3s ease-out';
            
            // Update indicator when clicked
            heading.addEventListener('click', function() {
                const icon = this.querySelector('span');
                icon.innerHTML = this.classList.contains('active') ? '−' : '+';
            });
        });
    }

    // Contact form validation (basic example)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            let valid = true;
            const formInputs = this.querySelectorAll('input, textarea');
            
            formInputs.forEach(input => {
                if (input.hasAttribute('required') && input.value.trim() === '') {
                    valid = false;
                    input.style.borderColor = 'red';
                } else {
                    input.style.borderColor = '#ddd';
                }
            });
            
            if (valid) {
                // Here you would typically send the form data to a server
                // For this template, just show a success message
                const formWrapper = contactForm.parentElement;
                contactForm.style.display = 'none';
                
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.innerHTML = '<h3>感謝您的訊息!</h3><p>我們將儘快回覆您。</p>';
                formWrapper.appendChild(successMessage);
            }
        });
    }
}); 