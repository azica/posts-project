import React, {useState, useRef} from 'react';
import menuList from './../menuList.json'
import logo from './../images/logo.svg'
import searchIcon from './../images/search-icon.svg'
import menuBurger from './../images/menuBurger.svg'
import arrow from './../images/arrow.svg'
import closeIcon from './../images/close-icon.svg'
import useClickOutside from '../hooks/useClickOutside';

const Header = ({setQuery}) => {
	const [showSearchForm, setShowSearchForm] = useState(false);
	const [showMenu, setShowMenu] = useState(false);
	const searchRef = useRef();
	const navRef = useRef();
	const searchHandler = () => {
		setShowSearchForm(!showSearchForm)
	}	
	const changeHandler = (e) => {
		setQuery(e.target.value)
		
	}
	const showMenuHandler = () => {
		setShowMenu(!showMenu)
	}
	if(showMenu) {
		document.body.style.overflow = "hidden"
	}else {
		document.body.style.overflow = "initial"
	}
	useClickOutside(searchRef, setShowSearchForm)
	useClickOutside(navRef, setShowMenu)

	return (
		<header id='header' className="header">
			<div className="container">
			<div className="header__top">
				<div className="menu__burger" onClick={showMenuHandler}>
					<img src={menuBurger} alt="menu-burger"/>
				</div>
				<a href="/" className="header__logo">
					<img src={logo} alt="site-logo" />
				</a>
				<div className="search__block" ref={searchRef}>
					<img 
						onClick={searchHandler}
						src={searchIcon} 
						alt={logo.title} 
						className="search__icon"/>
					<form className={`search__form ${showSearchForm ? "active" : ""}`}>
						<input 
							onChange={changeHandler}
							type="search" 
							name="search" 
							className="search__input" 
							placeholder="Search here..."/>
						<button className="search__button">
							<img 
								src={searchIcon} 
								alt={logo.title}
								/>
						</button>
					</form>
				</div>
			</div>
			<div className="header__bottom" ref={navRef}>
				<nav className={`header__menu menu ${showMenu? "active" : ""}`} >
					<div className="menu__top">
						<a href="/" className="header__logo-mbile">
							<img src={logo} alt="site-logo" />
						</a>
						<div className="menu__close" onClick={()=>setShowMenu(!showMenu)}>
							<img src={closeIcon} alt="menu-close"/>
						</div>
					</div>
					<ul className="menu__list">
						{Object.keys(menuList).map((menuItem,index)=>(
							<li className="menu__item" key={index}>
								<a href="#">{menuItem} {menuList[menuItem].length > 0 && <img src={`${arrow}`}/>}</a>
								{menuList[menuItem].length > 0 &&
									<ul className="submenu">
										{menuList[menuItem].map((submenuItem, index)=><li key={index} className="submenu__item">
											<a href="#">{submenuItem}<img src={`${arrow}`}/></a>
										</li>)}
									</ul>
								}
						</li>
						))}
					</ul>
				</nav>
			</div>
			</div>
		</header>
	);
}


window.addEventListener('scroll', function() {
	var header = document.getElementById('header');
	if (window.scrollY > 200) {
		header.classList.add('header__out');
	} else {
		header.classList.remove('header__out');
	}
});
export default Header;
