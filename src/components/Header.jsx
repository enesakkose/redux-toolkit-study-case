import React from 'react'

function Header({user, setUser}) {
  const loginHandle  = (user) => {
    setUser(user)
  }

  const logoutHandle = () => {
    setUser(false)
  }
  return (
    <header style={{padding: "30px 0"}}>
        TODO

        {!user && (<nav> <button onClick={() => loginHandle({id:1, userName: 'enstw'})}>ENES ile giriş yap</button>
        <button onClick={() => loginHandle({id:2, userName: 'velitw'})}>Veli ile giriş yap</button>
        </nav>)}

        {user && (
          <nav>
            Hoşgeldin {user.userName}
            <button onClick={logoutHandle}>Çıkış Yap</button>
          </nav>
        )}
    </header>
  )
}

export default Header