function celebrate() {
    document.getElementById('celebration').style.display = 'block';
    document.getElementById('refuse').style.display = 'none';
    explodeHearts();
    fullScreenEffect('celebration');
}

function refuse() {
    const refuseMessage = document.getElementById('refuse');
    refuseMessage.style.display = 'block';
    document.getElementById('celebration').style.display = 'none';
    setTimeout(() => {
        refuseMessage.style.display = 'none';
    }, 2000);
    setTimeout(() => {
        refuseMessage.style.display = 'block';
    }, 2500);
    fullScreenEffect('refuse');
}

function explodeHearts() {
    const explosion = document.getElementById('heart-explosion');
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('span');
        heart.className = Math.random() > 0.5 ? 'heart1' : 'heart2';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;
        heart.style.animationDelay = `${Math.random() * 1}s`;
        explosion.appendChild(heart);
        setTimeout(() => {
            heart.remove();
        }, 1000);
    }
}

function fullScreenEffect(type) {
    const effect = document.createElement('div');
    effect.className = `full-screen-effect ${type}`;
    document.body.appendChild(effect);
    setTimeout(() => {
        effect.remove();
    }, 1000);
}