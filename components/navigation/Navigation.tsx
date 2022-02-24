import styled from 'styled-components';
import Link from 'next/link';

const Header = styled.header`
  padding: 12px 48px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, max-content));
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  display: block;
  margin: 0 auto;
  cursor: pointer;
  color: #000;
  text-decoration: none;

  img {
    width: 48px;
    margin: 0 auto;
    display: block;
  }

  p {
    font-size: 24px;
    font-weight: 800;
    text-align: center;
  }
`;

const Icon = styled.a`
  color: #000;
  padding: 12px;
  text-decoration: none;
  cursor: pointer;
  border-radius: 50%;

  &:hover,
  &:focus {
    background: #efefef;
  }

  span {
    font-size: 28px;
  }
`;

const Spacer = styled.div`
  width: 48px;
`;

const Navigation = () => {
  return (
    <Header>
      <Spacer />
      <Link href="/" passHref>
        <Logo>
          <img
            src="https://cdn2.iconfinder.com/data/icons/star-wars-12/512/movie_film_star_wars_cinema_-35-512.png"
            alt="Jawa icon"
          />
          <p>Sandcrawler</p>
        </Logo>
      </Link>
      <Link href="/cart" passHref>
        <Icon>
          <span className="material-icons-outlined">shopping_cart</span>
        </Icon>
      </Link>
    </Header>
  );
};

export default Navigation;
