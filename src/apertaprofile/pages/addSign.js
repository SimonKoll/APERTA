import Head from 'next/head'
import Image from 'next/image'
import css from '../styles/AddSign.module.css'
import link from 'next/link'

export default function AddSign() {
  return (
    <div className="styles.container">
      <Head>
        <title>Add Sign</title>
        <meta name="Add Sign" content="Add Sign Page" />
      </Head>

      <div className={css.divMainContent}>
          <div className={css.AddSignH2}>
          <h2>Add Sign</h2>
          </div>

          <div className={css.Form}>
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
              <button className={css.btAdd} name="btAdd">Add</button>
            </div>
          </form>
        
      </div>
    </div>
    </div>
  )
}
