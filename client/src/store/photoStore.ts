import create, { State, SetState } from 'zustand';
import axios from 'axios';
import config from '../constants/config';

interface Photo {
  label: string;
  url: string;
  _id: string;
}

interface IPhotoState extends State {
  photos: Photo[];
  error: string;
  deleteModal: boolean;
  photoId: string;
  getPhotos: () => Promise<void>;
  addPhoto: (body: IAddPhotoBody) => Promise<void>;
  deletePhoto: (deltePhoto: string) => Promise<void>;
  showDeleteModal: (photoId: string) => void;
  hideDeleteModal: () => void;
}

interface IResponseData {
  status: string;
  data: Photo[];
}

interface IAddPhotoRes {
  status: string;
  data: Photo;
}

interface IAddPhotoBody {
  url: string;
  label: string;
}

interface IUser {
  id: string;
  username: string;
}
const getUserFromLocalStorage = (): IUser | null => {
  const userStr = localStorage.getItem('user');
  if (userStr) {
    const user = JSON.parse(userStr) as IUser;
    return user;
  }
  return null;
};

const usePhotoStore = create<IPhotoState>(
  (set: SetState<IPhotoState>, get): IPhotoState => ({
    photos: [],
    error: '',
    deleteModal: false,
    photoId: '',
    getPhotos: async () => {
      try {
        const user = getUserFromLocalStorage();
        if (user) {
          const res = await axios.get<IResponseData>(
            `${config.API_URL}gallery/images/${user.id}`
          );
          set({ photos: res.data.data.reverse() });
        }
      } catch (error) {
        set({ error: 'Something went worng!' });
      }
    },
    addPhoto: async (body: IAddPhotoBody) => {
      try {
        const user = getUserFromLocalStorage();
        if (user) {
          const res = await axios.post<IAddPhotoRes>(
            `${config.API_URL}gallery`,
            {
              user: user.id,
              ...body,
            }
          );
          const { photos } = get();
          set({ photos: [res.data.data, ...photos] });
        }
      } catch (error) {
        set({ error: 'Something went worng!' });
      }
    },
    deletePhoto: async (password: string) => {
      try {
        const { photoId, photos } = get();
        const user = getUserFromLocalStorage();
        if (user) {
          await axios.post(`${config.API_URL}gallery/${photoId}`, {
            username: user.username,
            password,
          });
          set({ photos: photos.filter((el) => el._id !== photoId) });
        }
      } catch (error) {
        set({ error: 'Something went worng!' });
      }
    },
    showDeleteModal: (photoId: string) => {
      set({ deleteModal: true, photoId });
    },
    hideDeleteModal: () => {
      set({ deleteModal: false });
    },
  })
);

export default usePhotoStore;
