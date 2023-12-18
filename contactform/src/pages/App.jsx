import {useRef} from 'react';
import emailjs from '@emailjs/browser';


export default function App() {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hui40ds', 'template_rf1t6ve', form.current, 'QWc6t_Mo9vomm4-Oz')
            .then((result) => {
                console.log(result.text)
                alert("Messge send ! Thank you")
            }, (error) => {
                console.log(error.text)
            });
        e.target.reset()
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="container">
            <h1>Get in touch</h1>
            <div className="email block">
                <label htmlFor="frm-email">Email</label>
                <input
                    id="frm-email"
                    type="email"
                    name="email"
                    placeholder="E-Mail"
                    autoComplete="email"
                    required
                />
            </div>
            <div className="block phone">
                <label htmlFor="frm-phone">Phone</label>
                <input
                    id="frm-phone"
                    type="tel"
                    name="phone"
                    placeholder="Phone-Number"
                    autoComplete="tel"
                    required
                />
            </div>
            <div className="name block">
                <div>
                    <label htmlFor="frm-first">First Name</label>
                    <input
                        id="frm-first"
                        type="text"
                        name="first"
                        placeholder="First-Name"
                        autoComplete="given-name"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="frm-last">Last Name</label>
                    <input
                        id="frm-last"
                        type="text"
                        name="last"
                        placeholder="Second-Name"
                        autoComplete="family-name"
                        required
                    />
                </div>
            </div>
            <div className="message block">
                <label htmlFor="frm-message">Message</label>
                <textarea id="frm-message" rows="6" name="message" placeholder="Your lovely message.."></textarea>
            </div>
            <div className="button block">
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}
