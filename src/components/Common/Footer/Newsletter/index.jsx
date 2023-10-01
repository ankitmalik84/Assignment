import Button from "../../../Common/Button";

import styles from "./index.module.scss";

const Newsletter = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <h3 className={styles.title}>Sign up for the newsletter</h3>
          <form className={styles.form} onSubmit={"/"}>
            <>
              <input
                className={styles.input}
                placeholder="Your email address"
                type="email"
                required
              />
              <Button type="submit" className={styles.button}>
                Sign up
              </Button>
            </>
          </form>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
