import Head from 'next/head'
import Image from 'next/image'
import css from '../styles/KeyPadSettings.module.css'

export default function KeyPad() {
  return (
    <div className="styles.container">
      <Head>
        <title>Key-Pad Settings</title>
        <meta name="KeyPadSettings" content="Settings of the Key Pads" />
      </Head>

      <div className={css.divMainContent}>
        <div className={css.MainContentH2}>
          <h2>Key-Pad Settings</h2>
        </div>
        <div className={css.divKeyPads}>
          <div className={css.KeyPadSettings}>
            <div className={css.KeyPad}>
              <div className={css.KeyPadName}>Key-Pad</div>
              <div className={css.KeyPadPic}>
                <img src="/keypad.png" alt ="Key Pad"/>
              </div>
              <div className={css.KeyPadCheckbox}>
                <div className={css.CheckActive}>
                  <img src="/checkmark-outline.svg" alt="Checkmark" />
                </div>
                <div className={css.CheckInactive}>
                  <img src="/close-outline.svg" />
                </div>
              </div>
            </div>
            <div className={css.CurrentCode}>
              <label name="lbCurrentCode">Current Code:</label>
              <input name="txCurrentCode" type="text" placeholder="43**2"></input>
            </div>
            <div className={css.NewCode}>
              <label name="lbNewCode">New Code: </label>
              <input name="lbNewCode" type="text" placeholder="43**2"></input>
            </div>
            <div className={css.divButton}>
                <button className={css.btDelete} name="btDelete">Delete</button>
                <button className={css.btSave} name="btSave">Save</button>
              </div>
          </div>

          <div className={css.KeyPadSettings}>
            <div className={css.KeyPad}>
              <div className={css.KeyPadName}>Key-Pad</div>
              <div className={css.KeyPadPic}>
              <img src="/keypad.png" alt ="Key Pad"/>
              </div>
              <div className={css.KeyPadCheckbox}>
                <div className={css.CheckActive}>
                  <img src="/checkmark-outline.svg" alt="Checkmark" />
                </div>
                <div className={css.CheckInactive}>
                  <img src="/close-outline.svg" />
                </div>
              </div>
            </div>
            <div className={css.CurrentCode}>
              <label name="lbCurrentCode">Current Code:</label>
              <input name="txCurrentCode" type="text" placeholder="43**2"></input>
            </div>
            <div className={css.NewCode}>
              <label name="lbNewCode">New Code: </label>
              <input name="lbNewCode" type="text" placeholder="43**2"></input>
            </div>
            <div className={css.divButton}>
                <button className={css.btDelete} name="btDelete">Delete</button>
                <button className={css.btSave} name="btSave">Save</button>
              </div>
          </div>

          <div className={css.KeyPadSettings}>
            <div className={css.KeyPad}>
              <div className={css.KeyPadName}>Key-Pad</div>
              <div className={css.KeyPadPic}>
              <img src="/keypad.png" alt ="Key Pad"/>
              </div>
              <div className={css.KeyPadCheckbox}>
                <div className={css.CheckActive}>
                  <img src="/checkmark-outline.svg" alt="Checkmark" />
                </div>
                <div className={css.CheckInactive}>
                  <img src="/close-outline.svg" />
                </div>
              </div>
            </div>
            <div className={css.CurrentCode}>
              <label name="lbCurrentCode">Current Code:</label>
              <input name="txCurrentCode" type="text" placeholder="43**2"></input>
            </div>
            <div className={css.NewCode}>
              <label name="lbNewCode">New Code: </label>
              <input name="lbNewCode" type="text" placeholder="43**2"></input>
            </div>
            <div className={css.divButton}>
                <button className={css.btDelete} name="btDelete">Delete</button>
                <button className={css.btSave} name="btSave">Save</button>
              </div>
          </div>
        </div>



      </div>
    </div>
  )
}
