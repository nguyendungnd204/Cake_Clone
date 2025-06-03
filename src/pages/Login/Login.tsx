import { Facebook, Github } from 'lucide-react'
import React, { useState } from 'react'
import './index.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const Login = () => {
    const [input, setInput] = useState({
        email: '',
        password: ''
    })
    const [isLoading, setIsLoading] = useState(false);

    const eventChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setInput({...input, [e.target.name]: e.target.value})
    }
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        if(input.email === 'nguyendungnd204@gmail.com' && input.password === '123456'){
            setTimeout(() => {
                window.location.href = '/';  
            }, 2000)
           
        }else{
            setTimeout(() => {
                 setIsLoading(false);
                 alert('Invalid email or password');
            }, 2000)
            
        }
             
    }
    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='login-form'>
                    <form onSubmit={handleSubmit}>
                        <h3>Login with</h3>
                        <div className='login-option'>
                            <div className='option'>
                                <a href="">
                                    <Github size={25} />
                                    <span>Github</span>
                                </a>
                            </div>
                            <div className='option'>
                                <a href="">
                                    <Facebook size={25} />
                                    <span>Facebook</span>
                                </a>
                            </div>
                        </div>


                        <p className='separator'>
                            <span>or</span>
                        </p>

                        <div className='input-box'>
                            <label htmlFor="email">Email</label>
                            <input 
                            type="email" 
                            id='email' 
                            name='email' 
                            placeholder='Enter your email...' 
                            onChange={eventChangeHandler}
                            value={input.email}
                            required                           />
                        </div>
                        <div className='input-box'>
                            <label htmlFor="password">Password</label>
                            <input 
                            type="password" 
                            id='password' 
                            name='password' 
                            placeholder='Enter your password...' 
                            onChange={eventChangeHandler}
                            value={input.password}
                            required
                            
                            />
                            
                        </div>

                        <button type='submit'>{isLoading ? 'Đang đăng nhập...': 'Đăng nhập'}</button>
                        <p className='sign-up'> Bạn chưa có tài khoản? <a href="">Đăng ký</a></p>
                    </form>
                </div>
            </div>

            <Footer />

        </>

    )
}

export default Login