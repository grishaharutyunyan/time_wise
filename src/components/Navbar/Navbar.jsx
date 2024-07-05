import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCog, faBell, faComment } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    return (
        <nav style={{
            backgroundColor: 'white',
            color: '#333',
            padding: '1rem',
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                border: '2px solid rgba(0, 0, 255, 0.5)',
                borderRadius: '10px',
                padding: '0.5rem'
            }}>
                <div style={{ fontSize: '1.5rem' }}>
                    <img src="/logo.png" alt="Logo" style={{ maxWidth: '150px' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div
                        style={{
                            borderRadius: '50%',
                            backgroundColor: 'white',
                            width: '30px',
                            height: '30px',
                            marginRight: '10px',
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            border: '2px solid rgba(0, 0, 255, 0.5)',
                        }}
                        onClick={toggleSearch}
                    >
                        {/* Font Awesome Search Icon */}
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                    {isSearchOpen && (
                        <input
                            type="text"
                            placeholder="Search task,goals..."
                            style={{
                                borderRadius: '5px',
                                padding: '0.5rem',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                border: '2px solid rgba(0, 0, 255, 0.5)',
                                color:'rgba(0, 0, 255, 0.5)',
                                
                            }}
                        />
                    )}
                    {/* Notification Icon */}
                    <div
                        style={{
                            borderRadius: '50%',
                            backgroundColor: 'white',
                            width: '30px',
                            height: '30px',
                            marginRight: '10px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            border: '2px solid rgba(0, 0, 255, 0.5)',
                        }}
                    >
                        <FontAwesomeIcon icon={faBell} />
                    </div>
                    {/* Chat Icon */}
                    <div
                        style={{
                            borderRadius: '50%',
                            backgroundColor: 'white',
                            width: '30px',
                            height: '30px',
                            marginRight: '10px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            border: '2px solid rgba(0, 0, 255, 0.5)',
                        }}
                    >
                        <FontAwesomeIcon icon={faComment} />
                    </div>
                    {/* Settings Icon */}
                    <div
                        style={{
                            borderRadius: '50%',
                            backgroundColor: 'white',
                            width: '30px',
                            height: '30px',
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            border: '2px solid rgba(0, 0, 255, 0.5)',
                        }}
                    >
                        <FontAwesomeIcon icon={faCog} />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
