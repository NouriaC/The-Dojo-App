import { useState } from 'react';
import './Signup.css'
import { useSignup } from '../../hooks/useSignup';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [thumbnail, setThumbnail] = useState(null);
    const [thumbnailError, setThumbnailError] = useState(null);
    const { signup, isPending, error } = useSignup();

    const handleFileChange = (e) => {
        setThumbnail(null)
        let selected = e.target.files[0];
        if(!selected) {
            setThumbnailError('Please select a file')
            return
        }
        if(!selected.type.includes('image')) {
            setThumbnailError('Selected file must be an image')
            return
        }
        if(selected.size > 500000) {
            setThumbnailError('Image file size must be less than 500kb')
            return
        }
        setThumbnailError(null);
        setThumbnail(selected)
        console.log('thumbnail updated')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        signup(email, password, displayName, thumbnail);
    }
    
    return (
        <form className='auth-form' onSubmit={handleSubmit}>
            <h2>Sign up</h2>
            <label>
                <span>email:</span>
                <input
                 required
                 type="email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <label>
                <span>password:</span>
                <input
                 required
                 type="password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <label>
                <span>displayName:</span>
                <input
                 required
                 type="text"
                 value={displayName}
                 onChange={(e) => setDisplayName(e.target.value)}
                />
            </label>
            <label>
                <span>profile thumbnail:</span>
                <input
                 required
                 type="file"
                 onChange={handleFileChange}
                 />
                 {thumbnailError && <div className='error'>{thumbnailError}</div>}
            </label>
            {!isPending && <button className='btn'>Sign up</button>}
            {isPending && <button className='btn' disabled>Loading...</button>}
            {error && <div className='error'>{error}</div>}
        </form>
    )
}
