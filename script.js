// ============================================
// KIDS NURSERY RHYMES - JAVASCRIPT
// ============================================

// Rhymes Data
const rhymesData = [
    {
        id: 'twinkle-twinkle',
        name: 'Twinkle Twinkle Little Star',
        emoji: '⭐',
        audio: 'audio/twinkle-twinkle.mp3',
        description: 'Classic bedtime rhyme'
    },
    {
        id: 'johny-johny',
        name: 'Johny Johny Yes Papa',
        emoji: '👦',
        audio: 'audio/johny-johny.mp3',
        description: 'Funny question rhyme'
    },
    {
        id: 'baa-baa',
        name: 'Baa Baa Black Sheep',
        emoji: '🐑',
        audio: 'audio/baa-baa.mp3',
        description: 'Sheep adventure rhyme'
    },
    {
        id: 'humpty-dumpty',
        name: 'Humpty Dumpty',
        emoji: '🥚',
        audio: 'audio/humpty-dumpty.mp3',
        description: 'Classic nursery rhyme'
    },
    {
        id: 'wheels-on-bus',
        name: 'Wheels on the Bus',
        emoji: '🚌',
        audio: 'audio/wheels-on-bus.mp3',
        description: 'Fun action rhyme'
    },
    {
        id: 'rain-rain',
        name: 'Rain Rain Go Away',
        emoji: '🌧️',
        audio: 'audio/rain-rain.mp3',
        description: 'Weather rhyme'
    },
    {
        id: 'hickory-dickory',
        name: 'Hickory Dickory Dock',
        emoji: '🐭',
        audio: 'audio/hickory-dickory.mp3',
        description: 'Clock rhyme'
    },
    {
        id: 'abc-song',
        name: 'ABC Song',
        emoji: '🔤',
        audio: 'audio/abc-song.mp3',
        description: 'Learning alphabet'
    },
    {
        id: 'five-little-ducks',
        name: 'Five Little Ducks',
        emoji: '🦆',
        audio: 'audio/five-little-ducks.mp3',
        description: 'Counting rhyme'
    },
    {
        id: 'finger-family',
        name: 'Finger Family',
        emoji: '👨‍👩‍👧‍👦',
        audio: 'audio/finger-family.mp3',
        description: 'Family finger rhyme'
    },
    {
        id: 'old-macdonald',
        name: 'Old MacDonald Had a Farm',
        emoji: '🚜',
        audio: 'audio/old-macdonald.mp3',
        description: 'Farm animals rhyme'
    },
    {
        id: 'happy-and-know-it',
        name: 'If You\'re Happy and You Know It',
        emoji: '😊',
        audio: 'audio/happy-and-know-it.mp3',
        description: 'Action rhyme'
    },
    {
        id: 'london-bridge',
        name: 'London Bridge is Falling Down',
        emoji: '🌉',
        audio: 'audio/london-bridge.mp3',
        description: 'Bridge rhyme'
    },
    {
        id: 'row-row-row',
        name: 'Row Row Row Your Boat',
        emoji: '🚣',
        audio: 'audio/row-row-row.mp3',
        description: 'Boating rhyme'
    },
    {
        id: 'jack-and-jill',
        name: 'Jack and Jill',
        emoji: '⛰️',
        audio: 'audio/jack-and-jill.mp3',
        description: 'Adventure rhyme'
    },
    {
        id: 'mary-had-lamb',
        name: 'Mary Had a Little Lamb',
        emoji: '🐑',
        audio: 'audio/mary-had-lamb.mp3',
        description: 'Animal companion rhyme'
    },
    {
        id: 'hot-cross-buns',
        name: 'Hot Cross Buns',
        emoji: '🥐',
        audio: 'audio/hot-cross-buns.mp3',
        description: 'Food rhyme'
    },
    {
        id: 'three-little-kittens',
        name: 'Three Little Kittens',
        emoji: '🐱',
        audio: 'audio/three-little-kittens.mp3',
        description: 'Cat rhyme'
    },
    {
        id: 'ten-little-fingers',
        name: 'Ten Little Fingers',
        emoji: '🖐️',
        audio: 'audio/ten-little-fingers.mp3',
        description: 'Counting fingers'
    },
    {
        id: 'ding-dong-bell',
        name: 'Ding Dong Bell',
        emoji: '🔔',
        audio: 'audio/ding-dong-bell.mp3',
        description: 'Bell rhyme'
    }
];

// DOM Elements
const rhymesGrid = document.getElementById('rhymes-grid');
const playlistItems = document.getElementById('playlist-items');
const audioPlayer = document.getElementById('playlist-audio');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const progressBar = document.getElementById('progress-bar');
const volumeControl = document.getElementById('volume');
const currentTrackName = document.getElementById('current-track-name');

let currentRhymeIndex = 0;

// ============================================
// INITIALIZE RHYMES GRID
// ============================================

function initializeRhymesGrid() {
    rhymesGrid.innerHTML = '';
    
    rhymesData.forEach((rhyme, index) => {
        const rhymeCard = document.createElement('div');
        rhymeCard.className = 'rhyme-card';
        rhymeCard.innerHTML = `
            <span class="rhyme-emoji">${rhyme.emoji}</span>
            <h3 class="rhyme-name">${rhyme.name}</h3>
            <p>${rhyme.description}</p>
            <button class="rhyme-btn" onclick="window.location.href='rhymes/${rhyme.id}.html'">
                Learn More ➜
            </button>
        `;
        
        rhymeCard.addEventListener('mouseenter', () => {
            const emoji = rhymeCard.querySelector('.rhyme-emoji');
            emoji.style.animation = 'none';
            setTimeout(() => {
                emoji.style.animation = 'bounce 0.6s ease-in-out';
            }, 10);
        });
        
        rhymesGrid.appendChild(rhymeCard);
    });
}

// ============================================
// PLAYLIST FUNCTIONALITY
// ============================================

function initializePlaylist() {
    playlistItems.innerHTML = '';
    
    rhymesData.forEach((rhyme, index) => {
        const playlistItem = document.createElement('div');
        playlistItem.className = 'playlist-item';
        if (index === 0) playlistItem.classList.add('active');
        
        playlistItem.innerHTML = `${rhyme.emoji} ${rhyme.name.substring(0, 15)}...`;
        playlistItem.dataset.audio = rhyme.audio;
        playlistItem.dataset.title = rhyme.name;
        playlistItem.dataset.index = index;
        
        playlistItem.addEventListener('click', () => {
            loadTrack(index);
            playTrack();
        });
        
        playlistItems.appendChild(playlistItem);
    });
}

function loadTrack(index) {
    currentRhymeIndex = index;
    const rhyme = rhymesData[index];
    
    audioPlayer.src = rhyme.audio;
    currentTrackName.textContent = rhyme.name;
    
    // Update active state in playlist
    document.querySelectorAll('.playlist-item').forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
}

function playTrack() {
    audioPlayer.play().catch(err => {
        console.log('Autoplay prevented:', err);
    });
}

function pauseTrack() {
    audioPlayer.pause();
}

// ============================================
// PLAYER CONTROLS
// ============================================

playBtn.addEventListener('click', playTrack);
pauseBtn.addEventListener('click', pauseTrack);

audioPlayer.addEventListener('timeupdate', () => {
    const percent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.style.width = percent + '%';
});

// Auto-play next rhyme
audioPlayer.addEventListener('ended', () => {
    currentRhymeIndex = (currentRhymeIndex + 1) % rhymesData.length;
    loadTrack(currentRhymeIndex);
    playTrack();
});

// Progress bar click to seek
document.querySelector('.progress-container').addEventListener('click', (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    audioPlayer.currentTime = percent * audioPlayer.duration;
});

// Volume control
volumeControl.addEventListener('input', (e) => {
    audioPlayer.volume = e.target.value / 100;
});

// ============================================
// GOOGLE ADSENSE INITIALIZATION
// ============================================

window.adsbygoogle = window.adsbygoogle || [];
function adsbygoogle_init() {
    try {
        (adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: "ca-pub-xxxxxxxxxxxxxxxx",
            enable_page_level_ads: true
        });
    } catch(e) {
        console.log('AdSense not loaded');
    }
}

adsbygoogle_init();

// ============================================
// HERO ANIMATIONS
// ============================================

function animateHeroCharacters() {
    const characters = document.querySelectorAll('.character');
    
    characters.forEach(char => {
        // Add subtle movement on scroll
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            char.style.transform = `translateY(${scrolled * 0.1}px)`;
        });
    });
}

// ============================================
// SMOOTH SCROLL
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease-in-out';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.rhyme-card').forEach(card => {
    observer.observe(card);
});

// ============================================
// LAZY LOADING IMAGES
// ============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Debounce function for scroll events
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

// Throttle function for resize events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ============================================
// PAGE LOAD INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initializeRhymesGrid();
    initializePlaylist();
    animateHeroCharacters();
    
    // Load first track
    loadTrack(0);
    
    // SEO: Add structured data
    addStructuredData();
    
    console.log('Kids Nursery Rhymes website loaded successfully!');
});

// ============================================
// STRUCTURED DATA FOR SEO
// ============================================

function addStructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Kids Nursery Rhymes",
        "description": "Popular kids nursery rhymes with animations and educational songs",
        "image": "https://example.com/images/og-image.jpg",
        "hasPart": rhymesData.map(rhyme => ({
            "@type": "AudioObject",
            "name": rhyme.name,
            "description": rhyme.description,
            "contentUrl": rhyme.audio
        }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
}

// ============================================
// SERVICE WORKER REGISTRATION (PWA)
// ============================================

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(registration => {
        console.log('Service Worker registered successfully!', registration);
    }).catch(error => {
        console.log('Service Worker registration failed:', error);
    });
}

// ============================================
// ERROR HANDLING
// ============================================

window.addEventListener('error', (event) => {
    console.error('Error caught:', event.error);
});

audioPlayer.addEventListener('error', () => {
    console.log('Audio loading error');
    alert('Could not load audio file. Please check your connection.');
});
