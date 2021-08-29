import styled from "styled-components";

function Header(props) {
    return(
        <Component>
            <Content>
                <Logo>
                    <a href="/home">
                        <img src="images/home-logo.svg" /> 
                    </a>
                </Logo>
                <Search>
                    <div>
                        <input type="text" placeholder="Search on linkedin"></input>
                    </div>
                    <SearchIcn>
                        <img src="images/search-icon.svg"></img>
                    </SearchIcn>
                </Search>
                <Nav>
                    <NavlistWrap>
                        <Navlist>
                            <a> 
                                <img src="images/nav-home.svg" />
                                <span>Home</span>
                            </a>
                        </Navlist>

                        <Navlist>
                            <a> 
                                <img src="images/nav-network.svg" />
                                <span>My Network</span>
                            </a>
                        </Navlist>

                        <Navlist>
                            <a> 
                                <img src="images/nav-jobs.svg" />
                                <span>Jobs</span>
                            </a>
                        </Navlist>

                        <Navlist>
                            <a> 
                                <img src="images/nav-messaging.svg" />
                                <span>Messaging</span>
                            </a>
                        </Navlist>

                        <Navlist>
                            <a> 
                                <img src="images/nav-notifications.svg" />
                                <span>notifications</span>
                            </a>
                        </Navlist>

                    </NavlistWrap>
                </Nav>
            </Content>
        </Component>
    )
    
}

const Component = styled.div`
    background-color: white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    left: 0;
    padding: 0 24px;
    position: fixed;
    top: 0;
    width: 100vw;
    height: 50px;
    z-index: 100; 
`

const Content = styled.div`
    display: flex;
    margin: 0 auto;
    align-items: center;
    min-height: 100%;
    max-width: 1128px;
`

const SearchIcn = styled.div`
    width: 40px;
    position: absolute;
    z-index: 1;
    top: 10px;
    left: 2px;
    border-radius: 0 4px 4px 0;
    margin: 0;
    pointer-events: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 200ms;
`

const Search = styled.div`
    opacity: 1;
    flex-grow: 1;
    position: relative;
    & > div{
        max-width: 290px;
        input{
            box-shadow: none;
            border: none;
            background-color: #eef8f7;
            border-radius: 6px;
            color: rgba(0, 0, 0, 0.9);
            width: 218px;
            padding: 0 8px 0 42px;
            line-height: 1.75;
            font-weight: 400;
            font-size: 14px;
            height: 34px;
            border-color: #dce6f1;
            vertical-align: text-top;
        }
    }
`
const Nav = styled.nav`
    margin-left: auto;
    display: flex;
    @media (max-width: 768px) {
        position: fixed;
        left: 0;
        bottom: 0;
        background: white;
        width: 100%;
    }
`

const NavlistWrap = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    list-style-type: none;
`

const Navlist = styled.li`
    display: flex;
    align-items: center;
    a{
        align-items: center;
        background: transparent;
        display: flex;
        flex-direction: column;
        font-size: 12px;
        font-weight: 400;
        justify-content: center;
        line-height: 1.5;
        min-height: 42px;
        min-width: 80px;
        position: relative;
        text-decoration: none;
        cursor: pointer;

        span{
        color: rgba(0, 0, 0, 0.6);
        display: flex;
        align-items: center;
    }

    @media (max-width: 768px) {
        min-width: 70px;
    }
}

    &:hover, &:active {
        a {
            span {
                color: rgba(0, 0, 0, 0.9);
            }
        }
    }

`

const Logo = styled.a`
    margin-right: 8px;
    font-size: 0px;
`
export default Header;