import './loginStyle.scss';

export function LoginForm() {

  return (

    <div className="show">
      <div className="login-form">
        <div className="cont-user">
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            version="1.1"
            id="svg1588"
            xmlns="http://www.w3.org/2000/svg">
            <path
              id="Shape"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 8C8 10.2091 9.79086 12 12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8ZM20 18.0625C18.0455 15.5713 15.1858 15 12 15C8.81415 15 5.95452 15.5713 4 18.0625V20H20V18.0625Z"
              fill="#05A8D7" />
          </svg>

          <h1>IDENTIFICAÇÃO</h1>
        </div>
        <div className="form-box">
          <form className="form-have">
            <p>JA TENHO CADASTRO</p>
            <input
              placeholder="Usuário*"
              type="text"
              name="username"
              className="login-box"
              autoComplete="off"
            />
            <input
              placeholder="Senha*"
              type="password"
              name="password"
              className="login-box"
            />
            <button type="submit" className="login-btnhave">ENTRAR</button>
            <a href="esqueci">ESQUECI A MINHA SENHA</a>
          </form>
          <div className="cont-break"/>
          <form className="form-new">
            <p>QUERO ME CADASTRAR</p>
            <input
              placeholder="Usuário*"
              type="text"
              name="username"
              className="login-box"
              autoComplete="off"
            />
            <input
              placeholder="Senha*"
              type="password"
              name="password"
              className="login-box"
            />
            <input
              placeholder="Confirme a senha*"
              type="password"
              name="password"
              className="login-box"
            />
            <button type="submit" className="login-btnhave">CADASTRAR</button>
          </form>
        </div>
      </div>
    </div>
  );
}