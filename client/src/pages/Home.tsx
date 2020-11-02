import React from 'react';
import Button from '../components/Button';
import {
  Container,
  Grid,
  PhotoBox,
  Img,
  PhotoOverlay,
  OveryLayAction,
  ImageLabel,
} from './Home.styles';

const images = [
  {
    key: 1,
    url: 'https://picsum.photos/451/750',
  },
  {
    key: 2,
    url: 'https://picsum.photos/407/550',
  },
  {
    key: 3,
    url: 'https://picsum.photos/698/800',
  },
  {
    key: 4,
    url: 'https://picsum.photos/401/800',
  },
  {
    key: 5,
    url: 'https://picsum.photos/556/748',
  },
  {
    key: 6,
    url: 'https://picsum.photos/556/749',
  },
  {
    key: 7,
    url: 'https://picsum.photos/556/750',
  },
  {
    key: 8,
    url: 'https://picsum.photos/556/751',
  },
  {
    key: 9,
    url: 'https://picsum.photos/556/752',
  },
  {
    key: 10,
    url: 'https://picsum.photos/556/753',
  },
];

const spans = [1, 2, 3];

const Photo: React.FC<{ url: string }> = ({ url }) => {
  return (
    <PhotoBox rowSpan={spans[Math.floor(Math.random() * 3)]}>
      <PhotoOverlay>
        <OveryLayAction>
          <Button rounded variant='danger'>
            delete
          </Button>
        </OveryLayAction>
        <ImageLabel>Hello World</ImageLabel>
      </PhotoOverlay>
      <Img src={url} />
    </PhotoBox>
  );
};

const Home: React.FC = () => {
  return (
    <Container>
      <Grid>
        {images.map((el) => (
          <Photo url={el.url} key={el.key} />
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
