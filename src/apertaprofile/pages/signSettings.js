import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Profile.module.css'
import css from '../styles/SignSettings.module.css'

export default function SignSettings() {
  return (
    <div className="styles.container">
      <Head>
        <title>Sign Settings</title>
        <meta name="Sign Settings" content="Settings of the Signs from the user" />
      </Head>

      <div className={css.divMainContent}>
        <div className={css.divLeftContent}>
          <h1>Sign Settings</h1>
          <h2>Active Signs</h2>
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
              <button className={css.btAddMore} name="AddMore">Add More</button>
            </div>
        </div>
        </div>
        <div className={css.verticalLine}></div>

        <div className={css.divRightContent}>
        
        <div className={css.Form}>
        <h2>Options</h2>
            <form className={css.formSignSettings} name="formProfileSettings">
            
              <div className={css.divSignNameSettings}>
                <div className={css.SignName}>
                  <label name="lbSignName">Sign Name</label>
                  <input name="txSignName" type="text" placeholder="Name"></input>
                </div>
                <div className={css.SignNumber}>
                  <label name="lbSignNumber">Sign</label>
                  <input name="txSignNumber" type="text" placeholder="LL 1111 ZZ"></input>
                </div>
                
              </div>
              <div className={css.divCarBrandSettings}>
                <div className={css.CarBrand}>
                  <label name="lbCarBrand">Car Brand</label>
                  <input name="txCarBrand" type="text" placeholder="Car Brand"></input>
                </div>
                <div className={css.Period}>
                    <label name="lbPeriod">Set Period</label>
                  <input name="Period" type="checkbox"></input>
                </div>
              </div>
              <div className={css.divTimeSettings}>
                <div className={css.TimeFrom}>
                  <label name="lbFrom">From</label>
                  <input name="txFromTime" type="date"></input>
                </div>
                <div className={css.TimeTo}>
                <label name="lbTo">To</label>
                  <input name="txToTime" type="date"></input>
                </div>
              </div>
              <div className={css.divButton}>
                <button className={css.btDelete} name="btDelete">Delete</button>
                <button className={css.btSave} name="btSave">Save</button>
              </div>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  )
}
