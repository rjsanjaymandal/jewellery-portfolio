// Search drawer styling
const StyledSearchDrawer = styled(Drawer)`
  .ant-drawer-header {
    background: ${props => props.isDarkMode 
      ? 'var(--color-background-alt-dark-theme)' 
      : 'var(--color-background-alt-light-theme)'};
    border-bottom: none;
  }
  
  .ant-drawer-title {
    color: ${props => props.isDarkMode ? 'white' : 'var(--color-text)'};
    font-family: var(--font-heading);
    font-weight: 600;
  }
  
  .ant-drawer-body {
    background: ${props => props.isDarkMode 
      ? 'var(--color-background-dark-theme)' 
      : 'var(--color-background-light-theme)'};
    padding: var(--spacing-md);
  }
  
  .ant-input-search {
    .ant-input {
      background: ${props => props.isDarkMode 
        ? 'rgba(255, 255, 255, 0.05)' 
        : 'white'};
      border: 1px solid ${props => props.isDarkMode 
        ? 'rgba(255, 255, 255, 0.1)' 
        : 'var(--color-border)'};
      color: ${props => props.isDarkMode ? 'white' : 'var(--color-text)'};
      height: 50px;
      font-size: 1.1rem;
      
      &::placeholder {
        color: ${props => props.isDarkMode 
          ? 'rgba(255, 255, 255, 0.5)' 
          : 'rgba(0, 0, 0, 0.3)'};
      }
    }
    
    .ant-input-search-button {
      height: 50px;
      background: var(--color-primary) !important;
      border-color: var(--color-primary) !important;
      
      &:hover {
        background: var(--color-primary-dark) !important;
        border-color: var(--color-primary-dark) !important;
      }
    }
  }
`;

// Spacer for fixed header
const HeaderSpacer = styled.div`
  height: ${props => props.scrolled ? '140px' : '180px'};
  transition: height var(--transition-medium);
`;

// Navbar component
const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();
  
  // Check if we're on the home page
  const isHome = location.pathname === '/';
  
  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handleMenuClick = (e) => {
    navigate(e.key);
    if (visible) {
      onClose();
    }
  };
  
  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  const menuItems = [
    {
      key: "/",
      icon: <HomeOutlined />,
      label: "Home",
    },
    {
      key: "/about",
      icon: <InfoCircleOutlined />,
      label: "About",
    },
    {
      key: "/collection",
      icon: <ShoppingOutlined />,
      label: "Collection",
    },
    {
      key: "/contact",
      icon: <MailOutlined />,
      label: "Contact",
    },
  ];

  return (
    <>
      <HeaderSpacer scrolled={scrolled} />
      <StyledHeader scrolled={scrolled} isDarkMode={isDarkMode}>
        {/* Top header with contact info */}
        <HeaderTop scrolled={scrolled} isDarkMode={isDarkMode}>
          <TopContainer justify="space-between" align="middle">
            <Col xs={0} sm={12}>
              <Space size={20}>
                <TopInfo>
                  <PhoneOutlined /> +91 98765 43210
                </TopInfo>
                <TopInfo>
                  <ClockCircleOutlined /> Mon-Sat: 10:00 AM - 8:00 PM
                </TopInfo>
              </Space>
            </Col>
            <Col xs={24} sm={12} style={{ textAlign: 'right' }}>
              <Space size={20} style={{ justifyContent: 'flex-end' }}>
                <TopInfo>
                  <MailOutlined /> info@ramavatargems.com
                </TopInfo>
                <SocialIcons>
                  <SocialIcon icon={<FacebookOutlined />} />
                  <SocialIcon icon={<InstagramOutlined />} />
                  <SocialIcon icon={<TwitterOutlined />} />
                </SocialIcons>
              </Space>
            </Col>
          </TopContainer>
        </HeaderTop>

        {/* Main header with logo */}
        <MainHeader scrolled={scrolled} isHome={isHome} isDarkMode={isDarkMode}>
          <HeaderContainer justify="center" align="middle">
            <Col span={24} style={{ textAlign: 'center' }}>
              <LogoContainer onClick={() => navigate("/")} style={{ display: 'inline-flex' }}>
                <LogoIcon />
                <Logo level={3} scrolled={scrolled} isHome={isHome} isDarkMode={isDarkMode}>
                  Ramavatar<span className="primary-text">gems</span>
                </Logo>
              </LogoContainer>
            </Col>
          </HeaderContainer>
        </MainHeader>

        {/* Navigation menu */}
        <NavContainer scrolled={scrolled} isDarkMode={isDarkMode}>
          <MenuContainer justify="space-between" align="middle">
            <Col xs={0} md={20}>
              <StyledMenu
                mode="horizontal"
                selectedKeys={[location.pathname]}
                onClick={handleMenuClick}
                items={menuItems}
                theme="dark"
                scrolled={scrolled}
                isDarkMode={isDarkMode}
              />
            </Col>
            <Col xs={0} md={4} style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <ActionButtons>
                <SearchButton
                  icon={<SearchOutlined />} 
                  onClick={toggleSearch}
                  scrolled={scrolled}
                  isDarkMode={isDarkMode}
                />
                <ThemeToggle />
              </ActionButtons>
            </Col>
            <Col xs={24} md={0} style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Space>
                <ThemeToggle />
                <MobileMenuButton
                  icon={<MenuOutlined />}
                  onClick={showDrawer}
                  size="large"
                  scrolled={scrolled}
                  isDarkMode={isDarkMode}
                />
              </Space>
            </Col>
          </MenuContainer>
        </NavContainer>

        {/* Mobile drawer menu */}
        <StyledDrawer
          title={
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <GoldOutlined className="logo-icon" />
              Ramavatar<span className="primary-text">gems</span>
            </div>
          }
          placement="right"
          onClose={onClose}
          open={visible}
          width={300}
          closeIcon={<CloseOutlined />}
          isDarkMode={isDarkMode}
        >
          <Menu
            mode="vertical"
            selectedKeys={[location.pathname]}
            onClick={handleMenuClick}
            items={menuItems}
            style={{ borderRight: 0 }}
            theme={isDarkMode ? "dark" : "light"}
          />
          
          <div className="drawer-footer">
            <div className="contact-info">
              <div className="title">Contact Us</div>
              <div className="info-item">
                <PhoneOutlined /> +91 98765 43210
              </div>
              <div className="info-item">
                <MailOutlined /> info@ramavatargems.com
              </div>
              <div className="info-item">
                <ClockCircleOutlined /> Mon-Sat: 10:00 AM - 8:00 PM
              </div>
            </div>
            
            <div className="social-icons">
              <div className="social-icon">
                <FacebookOutlined />
              </div>
              <div className="social-icon">
                <InstagramOutlined />
              </div>
              <div className="social-icon">
                <TwitterOutlined />
              </div>
            </div>
          </div>
        </StyledDrawer>
        
        {/* Search Drawer */}
        <StyledSearchDrawer
          title="Search Our Collections"
          placement="top"
          onClose={toggleSearch}
          open={searchVisible}
          height={120}
          isDarkMode={isDarkMode}
        >
          <Search
            placeholder="Search for jewelry..."
            enterButton="Search"
            size="large"
            onSearch={value => {
              console.log(value);
              toggleSearch();
            }}
          />
        </StyledSearchDrawer>
      </StyledHeader>
    </>
  );
};

export default Navbar;
