import Logo from './Img/logo.png';
import Logo2 from './Img/logo2.png';
import Logo3 from './Img/logo3.png';
import Logo4 from './Img/logo4.png';
import Logo5 from './Img/logo5.png';
import Logo6 from './Img/logo6.png';
import Logo7 from './Img/logo7.png';
import Logo8 from './Img/logo8.png';
import Logo9 from './Img/logo9.png';
import Logo10 from './Img/logo10.png';
import Logo11 from './Img/logo11.png';
import Logo12 from './Img/logo12.png';
import Logo13 from './Img/logo13.png';

function Princie() {
    return (
        <>
            <div className="grid-container">
                <div className="item1">
                    <input className="input" type="text" size="36" value="        Search anithing..."/>
                    <img className="image2" src={Logo11} alt="" />
                    <img className="image4" src={Logo13} alt="" />
                    <div className="border"></div>
                    <div className="btn-style5">
                        <img className="image3" src={Logo12} alt="Logo" />
                        <p className="text3">Maxie Mon Wachid</p>
                        <p className="text2">@Maxie Mon Wachid</p>
                        <select className="btn-style6" name="" id=""></select>
                    </div>
                    <p>Welcome back, Maxie</p>
                </div>
                <div className="item2">
                    <div className="margin">
                        <img src={Logo} alt="Logo"/>
                    </div>
                    <p className='margin2'>Princie</p>
                    <button className="btn-style btn-pick">
                        <img className="image" src={Logo2} alt="Logo"/>
                        <span>Dashboard</span>
                    </button>
                    <button className="btn-style">
                        <img className="image" src={Logo3} alt="Logo"/>
                        <span>Product</span>
                        <span className="btn-style2">2</span>
                    </button>
                    <button className="btn-style">
                        <img className="image" src={Logo4} alt="Logo"/>
                        <span>Store</span>
                    </button>
                    <button className="btn-style">
                        <img className="image" src={Logo5} alt="Logo"/>
                        <span>Visitor</span>
                    </button>
                    <button className="btn-style">
                        <img className="image" src={Logo6} alt="Logo"/>
                        <span>Analytics</span>
                    </button>
                    <button className="btn-style">
                        <img className="image" src={Logo7} alt="Logo"/>
                        <span>Notification</span>
                        <span className="btn-style2">11</span>
                    </button>
                    <div className="block">0</div>
                    <button className="btn-style">
                        <img className="image" src={Logo8} alt="Logo"/>
                        <span>Help Center</span>
                    </button>
                    <button className="btn-style">
                        <img className="image" src={Logo9} alt="Logo"/>
                        <span>Settings</span>
                    </button>
                    <div className="text">
                        <img className="image" src={Logo10} alt="Logo"/>
                        <span>Dark Mode</span>
                    <button className="btn-style3">
                        <span className="btn-style4"></span>
                    </button>
                    </div>
                </div>
                <div className="item3">Menu2</div>
                <div className="item4">Main</div>  
                <div className="item5">Right</div>
            </div>
        </>
    );
}
export default Princie;