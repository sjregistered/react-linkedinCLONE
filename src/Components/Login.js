import styled from "styled-components";

function Login(props) {
    return (
        <Container>
            <Nav>
                <a href="/">
                    <img src="images/login-logo.svg" /> 
                </a>
                <div>
                    <Join>Join now</Join>
                    <SignIn>Sign in</SignIn>
                </div>
            </Nav>
            <Section>
                <Hero>
                    <h1>Welcome to your professional community</h1>
                    <img src="images/login-hero.svg"></img>
                </Hero>
                <Form>
                    <Google>
                        <img src="\images\google.svg"></img>
                        Sign in with Google
                    </Google>
                </Form>
            </Section> 
        </Container>
    )
}

const Container = styled.div`
    padding: 0px;
`;
const Nav = styled.nav`
    max-width: 1128px;
    margin: auto;
    padding: 12px 0px 16px;
    display: flex;
    align-items: center;
    position: relative;
    flex-wrap: nowrap;
    justify-content: space-between;

    & > a{
        width: 135px;
        height: 34px;
        @media (max-width: 768px) {
            padding: 0px 5px;
        }
    }
`;

const Join = styled.a`
    font-size: 16px;
    padding: 10px 12px;
    border-radius: 4px;
    color: rgba(0, 0, 0, 0.6);
    text-decoration: none;
    margin-right: 12px;

    &:hover{
        background-color: rgba(0, 0, 0, 0.08);
        color: rgba(0, 0, 0, 0.9);
    }
`;

const SignIn = styled.a`
    font-size: 16px;
    box-shadow: inset 0 0 0 1px #0511fa;
    color: #414afa;
    border-radius: 35px;
    line-height: 40px;
    transition-duration: 180ms;
    padding: 10px 25px;
    font-weight: 600;
    text-align: center;
    background-color: rgba(0, 0, 0, 0);

    &:hover{
        background-color: rgb(180, 183, 250, 0.32);
        color: rgb(0, 11, 250);
        text-decoration: none;
    }
`

const Section = styled.section`
    min-height: 700px;
    display: flex;
    align-content: start;
    padding-top: 40px;
    padding-bottom: 140px;
    padding: 60px 0px;
    position: relative;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1128px;
    align-items: center;
    margin: auto;
    
    @media (max-width: 768px) {
        min-height: 0px;
        margin: auto;
    }
`

const Hero = styled.div`
    width: 100%;
    h1{
        padding-bottom: 0px;
        width: 55%;
        font-size: 56px;
        color: #2977c9;
        font-weight: 10;
        line-height: 70px;
        @media (max-width: 768px) {
            text-align: center;
            font-size: 20px;
            width: 100%;
            line-height: 2;
        }
    }

    img{
        /* z-index: -1; */
        width: 700px;
        height: 670px;
        position: absolute;
        bottom: -2px;
        right: -150px;
        @media (max-width: 768px) {
            top: 230px;
            width: initial;
            position: initial;
            height: initial;
        }
    }
`

const Form = styled.div`
    margin-top: 100px;
    width: 408px;
    @media (max-width: 768px) {
        margin-top: 20px;
    }
`;

const Google = styled.button`
    display: flex;
    justify-content: center;
    background-color: #fff;
    align-items: center;
    height: 56px;
    width: 100%;
    border-radius: 30px;
    box-shadow: 
    inset 0 0 0 1px rgb(0 0 0 / 60%), 
    inset 0 0 0 2px rgb(0 0 0 / 0%), 
    inset 0 0 0 1px rgb(0 0 0 / 0%);

    vertical-align: middle;
    z-index: 0;
    transition-duration: 170ms;
    font-size: 17px;
    font-weight: 100;
    color: rgba(0, 0, 0, 0.7);

    &:hover{
        background-color: rgba(245, 227, 225, 0.2);
        color: rgba(0, 0, 0, 1);
    }
`;

export default Login;