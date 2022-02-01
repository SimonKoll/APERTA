import Head from 'next/head'
import Image from 'next/image'
import css from '../styles/Login.module.css'

export default function Login() {
    return (
        <section className="style.container">
            <Head>
                <title>Login/Register</title>
                <meta name="Login" content="Login/Register Page"></meta>
            </Head>

        <section className={css.MainMain}>
            <section className={css.divMainContent}>
                <section className={css.auth_box}>
                    <section className={css.login}>
                        <section className={css.header}>
                            <h2>Login</h2>
                        </section>
                        <section className={css.item_list}>
                            <section className={css.item}>
                                <i className={css.google}></i>
                                <i className={css.github}></i>
                                <i className={css.linkedin}></i>
                            </section>
                        </section>
                        <section className={css.content}>
                            <form className={css.formLogin}>
                                <section className={css.MailIcon}></section>
                                <input name="txEmail" type="text" placeholder="max.muster@mail.com"></input>
                                <section className={css.PasswordIcon}></section>
                                <input name="password" type="password" placeholder='Password'></input>
                                <section className={css.blue}></section>
                                <button name="submit" type="submit">Login</button>
                                <a href="" className={css.forgetPassword}>Forget Password?</a>
                            </form>
                        </section>
                    </section>
                    <section className={css.register}>
                        <section className={css.header}>
                            <h2>Register</h2>
                        </section>
                        <section className={css.item_list}>
                            <i className={css.google}></i>
                            <i className={css.github}></i>
                            <i className={css.linkedin}></i>
                        </section>
                        <section className={css.content}>
                            <form className={css.formRegister}>
                            <section className={css.UserIcon}></section>
                                <input name="txName" type="text" placeholder="Max Muster"></input>
                                <section className={css.MailIcon}></section>
                                <input name="txEmail" type="text" placeholder="max.muster@mail.com"></input>
                                <section className={css.PasswordIcon}></section>
                                <input name="password" type="password" placeholder='Password'></input>
                                <button name="submit" type="submit">Register</button>
                            </form>
                        </section>
                    </section>
                    <section className={css.box_color}>
                        <h3 className={css.title}>Not registered yet?</h3>
                        <button type="button" className={css.register_btn}>Register</button>
                        <h3 className={css.title2}>Already have an account?</h3>
                        <button type="button" className={css.login_btn}>Login</button>
                    </section>
                </section>
                </section>
            </section>
        </section>
 )
}
