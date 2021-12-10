import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

import icon from '../images/cryptocurrency.png';

const Navbar = () => {
    const [activeMenu, setActiveMenu] = React.useState(true);
    const [screenSize, setScreenSize] = React.useState(null);

    React.useEffect( () =>{
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    },[]);

    React.useEffect( () =>{
       setActiveMenu(screenSize < 768?false: true);
    },[screenSize]);

    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="small" />
                <Typography.Title level={3} className="logo"> <Link to="/"> Crypto Global Stats</Link></Typography.Title>
                 <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}> 
                    <MenuOutlined/>
                 </Button>
            </div>
            {activeMenu && (
                <Menu theme="dark">
                <Menu.Item icon={<HomeOutlined />} >
                    <Link to="/" >Home</Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined />} >
                    <Link to="/cryptocurrencies" >Cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectOutlined />} >
                    <Link to="/nfts" >NFTs</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined />} >
                    <Link to="/news" >News</Link>
                </Menu.Item>
            </Menu>
            )}

        </div>
    )
}

export default Navbar
