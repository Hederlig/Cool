import "./Header.css";

const Header = () => {
  return (
    <div>
      <header class="dark">
        <h1 class="site-title">Cool Fashion</h1>
        <nav role="navigation">
          <a href="javascript:void(0);" class="ic menu" tabindex="1">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
          </a>
          <a href="javascript:void(0);" class="ic close"></a>
          <ul class="main-nav">
            <li class="top-level-link">
              <a href="#">
                <span>Home</span>
              </a>
            </li>

            <li class="top-level-link">
              <div class="sub-menu-block">
                <div class="row">
                  <div>
                    <h2 class="sub-menu-head">Killar</h2>
                    <ul class="sub-menu-lists">
                      <li>
                        <a href="#">Jeans</a>
                      </li>
                      <li>
                        <a href="#">Shorts</a>
                      </li>
                      <li>
                        <a href="#">T-shirts</a>
                      </li>
                      <li>
                        <a href="#">Långarmat</a>
                      </li>
                      <li>
                        <a href="#">Stickat</a>
                      </li>
                      <li>
                        <a href="#">Hoodies</a>
                      </li>
                      <li>
                        <a href="#">Se mer</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2 class="sub-menu-head">Tjejer</h2>
                    <ul class="sub-menu-lists">
                      <li>
                        <a href="#">Toppar</a>
                      </li>
                      <li>
                        <a href="#">Byxor</a>
                      </li>
                      <li>
                        <a href="#">Jeans</a>
                      </li>
                      <li>
                        <a href="#">Kjolar</a>
                      </li>
                      <li>
                        <a href="#">Se mer</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2 class="sub-menu-head">Skor</h2>
                    <ul class="sub-menu-lists">
                      <li>
                        <a href="#">Killar</a>
                      </li>
                      <li>
                        <a href="#">Tjejer</a>
                      </li>
                      <li>
                        <a href="#">Se alla</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
