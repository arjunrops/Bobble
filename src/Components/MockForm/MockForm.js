import React from 'react';
import './MockForm.css';
import 'tachyons';
import google from './google.png';
import fb from './fb.png';

const MockForm = () => {
    return (
        <div>
            <article class="mw6 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10" style={{ justifyContent: 'center', backgroundSize: 'cover' }}>
                <form>
                    <div className="tabbed-pane_tabs__1rsRG" bis_skin_checked="1">
                        <div className="  " bis_skin_checked="1" style={{ fontSize: 25 }}>SIGN UP</div>
                        <h1 className="">Create your account</h1>
                        <p className="vds-text vds-spacing--stack-3x"><span>Lorem Ipsum dolor sit amet, consectur adipiscing elit</span></p>
                        <div class="flex-container">
                            <a href="google" ><button type="button" className="google" ><img src={google} className=" googleImg" alt="" /><b >Sign In with Google</b></button></a>

                            <a href="fb" ><button type="button" className="google" ><img src={fb} className=" FbImg" alt="" /><b >Sign In with Facebook</b></button></a>
                        </div><br></br>
                        <div className="f8 ">
                            <p>_____________________________  or  ___________________________</p>
                        </div>
                        <br></br><input type='text' placeholder=' First Name' style={{ fontSize: 20 }} class="input-reset ba b--black-20 pa2 mb2 db w-100" /><br></br>
                        <br></br><input type='text' placeholder='Last Name' style={{ fontSize: 20 }} class="input-reset ba b--black-20 pa2 mb2 db w-100" /><br></br>
                        <br></br><input type='text' placeholder='Email' style={{ fontSize: 20 }} class="input-reset ba b--black-20 pa2 mb2 db w-100" /><br></br>
                        <br></br><input type='password' placeholder='Password' style={{ fontSize: 20 }} class="input-reset ba b--black-20 pa2 mb2 db w-100" /><br></br>
                        <br></br><span >By clicking Sign Up, you agree to our <a href="https://reqres.in">Terms of Use</a> and our <a href="https://reqres.in">Privacy Policy</a>.</span><br></br>
                        <br></br><button className="signin link black dim db mw5 pa2 br2 ba b--black-10 shadow-1" type="button"><span class="vds-button__content">SIGN UP</span></button>
                    </div>
                </form>
            </article>
        </div >
    );
}

export default MockForm;