import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Profile.module.css'
import css from '../styles/Profile.module.css'
import link from 'next/link'

export default function Profile() {
  return (
    <div className="styles.container">
      <Head>
        <title>Profile</title>
        <meta name="Profile" content="Profile of a user" />
      </Head>

      <div className={css.divMainContent}>
        <div className={css.divLeftContent}>
          <h1>My Profile</h1>
          <h2>Settings</h2>

          <div className={css.Form}>
            <form className={css.formProfileSettings} name="formProfileSettings">
              <div className={css.divNameSettings}>
                <div className={css.Firstname}>
                  <label name="lbFirstName">First Name</label>
                  <input name="txFirstName" type="text" placeholder="First Name"></input>
                </div>
                <div className={css.Lastname}>
                  <label name="lbLastName">Last Name</label>
                  <input name="txLastName" type="text" placeholder="Last Name"></input>
                </div>
              </div>
              <div className={css.divPersonalSettings}>
                <div className={css.Birthday}>
                  <label name="lbBirthday">Birthday</label>
                  <input name="dtBirthday" type="date"></input>
                </div>
                <div className={css.Phonenumber}>
                  <label name="lbPhonenumber">Phonenumber</label>
                  <input name="nbPhonennumber" type="tel" placeholder="+43 660 123 123 12"></input>
                </div>
              </div>
              <div className={css.divNewsletter}>
                <div className={css.Newsletter}>
                  <label name="lbNewsletter">Newsletter</label>
                  <input name="txNewsletter" type="email" placeholder="max.muster@email.com"></input>
                </div>
              </div>
              <div className={css.divButton}>
                <button className={css.btSubscribe} name="btSubscribe">Subscribe</button>
              </div>
            </form>
            <hr className={css.horizontalLine}></hr>
          </div>
          <div className={css.divMoreSettings}>
            <a href="/keyPadSettings">Key-Pad Settings</a>
            <a href="#">NFC Settings</a>
            <a href="/signSettings">Sign Settings</a>
          </div>
        </div>
        <div className={css.verticalLine}></div>
        <div className={css.divRightContent}>
        <div className={css.ActiveSignh2}><h2>Active Sign</h2></div>
          <div className={css.divActiveSigns}>

            <div className={css.Sign}>
              <div className={css.Plate}>LL 1111 ZZ</div>
              <div className={css.SignActive}>
                <img src="/checkmark-outline.svg" alt="Checkmark" />
              </div>
              <div className={css.SignInactive}>
                <img src="/close-outline.svg" />
              </div>
            </div>
            <div className={css.Sign}>
              <div className={css.Plate}>LL 1111 ZZ</div>
              <div className={css.SignActive}>
                <img src="/checkmark-outline.svg" alt="Checkmark" />
              </div>
              <div className={css.SignInactive}>
                <img src="/close-outline.svg" />
              </div>
            </div>
            <div className={css.Sign}>
              <div className={css.Plate}>LL 1111 ZZ</div>
              <div className={css.SignActive}>
                <img src="/checkmark-outline.svg" alt="Checkmark" />
              </div>
              <div className={css.SignInactive}>
                <img src="/close-outline.svg" />
              </div>
            </div>



            <div className={css.divButton}>
              <button className={css.btSubscribe} name="AddMore"><a href="/addSign">Add More</a></button>
            </div>
          </div>
          <hr className={css.horizontalLineRight}></hr>
          <div className={css.Moreh2}>
            <h2>More</h2>
            <div className={css.divButton}>
              <button className={css.btSubscribe} name="AddMore">Add More</button>
            </div>
          </div>
          <div className={css.divMore}>
            <div className={css.Components}>
              <div className={css.ComponentsName}>Key-Pad</div>
              <div className={css.ComponentPic}>
                <img src="/keypad.png" alt ="Key Pad"/>
              </div>
              <div className={css.MoreCheckbox}>
                <div className={css.CheckActive}>
                  <img src="/checkmark-outline.svg" alt="Checkmark" />
                </div>
                <div className={css.CheckInactive}>
                  <img src="/close-outline.svg" />
                </div>
              </div>
            </div>
            <div className={css.Components}>
              <div className={css.ComponentsName}>NFC-Chip</div>
              <div className={css.ComponentPic}>
              <img src="/nfc.png" alt ="Key Pad"/>
              </div>
              <div className={css.MoreCheckbox}>
                <div className={css.CheckActive}>
                  <img src="/checkmark-outline.svg" alt="Checkmark" />
                </div>
                <div className={css.CheckInactive}>
                  <img src="/close-outline.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
