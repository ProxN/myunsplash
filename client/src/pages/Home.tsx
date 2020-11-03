import React, { useEffect } from 'react';
import Button from '../components/Button';
import DeletePhoto from '../components/DeletePhoto';
import usePhotoStore from '../store/photoStore';
import {
  Container,
  Grid,
  PhotoBox,
  Img,
  PhotoOverlay,
  OveryLayAction,
  ImageLabel,
} from './Home.styles';

const spans = [1, 2, 3];

interface PhotoProps {
  url: string;
  id: string;
  label: string;
}

const Photo: React.FC<PhotoProps> = ({ url, id, label }) => {
  const { showDeleteModal } = usePhotoStore();
  return (
    <>
      <PhotoBox rowSpan={spans[Math.floor(Math.random() * 3)]}>
        <PhotoOverlay>
          <OveryLayAction>
            <Button
              onClick={() => showDeleteModal(id)}
              rounded
              variant='danger'
            >
              delete
            </Button>
          </OveryLayAction>
          <ImageLabel>{label}</ImageLabel>
        </PhotoOverlay>
        <Img src={url} />
      </PhotoBox>
    </>
  );
};

const Home: React.FC = () => {
  const { getPhotos, photos, deleteModal } = usePhotoStore();

  useEffect(() => {
    const onLoad = async (): Promise<void> => {
      await getPhotos();
    };
    onLoad();
  }, []);

  return (
    <>
      <Container>
        <Grid>
          {photos.length > 0 ? (
            photos.map((el) => (
              <Photo id={el._id} url={el.url} key={el._id} label={el.label} />
            ))
          ) : (
            <h1 style={{ textAlign: 'center' }}>No photos</h1>
          )}
        </Grid>
      </Container>
      {deleteModal && <DeletePhoto />}
    </>
  );
};

export default Home;
