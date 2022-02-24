import styled from 'styled-components';
import Link from 'next/link';
import { useCart } from '@components/cartProvider';

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
  position: relative;

  &:hover,
  &:focus {
    background: #efefef;
  }

  span {
    font-size: 28px;
  }
`;

const IconBubble = styled.div`
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #30cdff;
  border: 2px solid #fff;
  color: #000;
  font-weight: 800;
  font-size: 12px;
  position: absolute;
  border-radius: 50%;
  right: 4px;
  bottom: 4px;
`;

const Spacer = styled.div`
  width: 48px;
`;

const Navigation = () => {
  const { count, cartId } = useCart();

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
          {!!count && <IconBubble>{count}</IconBubble>}
        </Icon>
      </Link>
    </Header>
  );
};

export default Navigation;
