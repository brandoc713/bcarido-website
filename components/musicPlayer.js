import React from 'react';

const MusicPlayer = () => {
    return (
        <div style={{ maxWidth: '100%', overflow: 'hidden' }}>
            <iframe 
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/playlist/6gw7UNlapa46V9huEECF2m?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
            </iframe>
        </div>
    )
}

export default MusicPlayer;