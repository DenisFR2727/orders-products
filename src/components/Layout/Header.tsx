import TopMenu from "./TopMenu";
import classes from "./Header.module.scss";

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.headerContent}>
        <div className={classes.logoSearch}>
          <div className={classes.logo}>
            <img src="/images/logo/shield-user.png" alt="Logo" />
            <p className={classes.logoText}>Inventory</p>
          </div>
          <div>
            <input
              className={classes.search}
              type="search"
              placeholder="Поиск"
            />
          </div>
        </div>
        <TopMenu />
      </div>
    </header>
  );
}
export default Header;
