import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import Toast from 'react-native-toast-message';
import auth from '@react-native-firebase/auth';
import {useState} from 'react';
import ImagePicker, {
  ImagePickerResponse,
  launchImageLibrary,
} from 'react-native-image-picker';
const datas = [
  {dog: 'Cat'},
  {dog: 'Dog'},
  {dog: 'Sheep'},
  {dog: 'Rabit'},
  {dog: 'Cow'},
];

const Gender = [{gender: 'Male'}, {gender: 'Female'}];
const Vaccinated = [{isVaccinated: 'Yes'}, {isVaccinated: 'No'}];
export default function useDonationScreen() {
  const [isPetTypeClicked, setIsPetTypeClicked] = useState(false);
  const [isVaccinatedClick, setIsVaccinatedClick] = useState(false);
  const [isGenderClick, setIsGenderClick] = useState(false);
  const [allData, setAllData] = useState(datas);
  const [gender, setGender] = useState(Gender);
  const [vaccinated, setVaccinated] = useState(Vaccinated);
  const [filePath, setFilePath] = useState('');
  const [fileName, setFileName] = useState('');
  const [loading, setisloading] = useState(false);

  const [state, setState] = useState({
    petType: '',
    petBreed: '',
    petAge: '',
    amount: '',
    petGender: '',
    petWeight: '',
    petLocation: '',
    description: '',
  });

  const [selectedValues, setSelectedValues] = useState({
    petType: 'select pet',
    vaccinated: 'select vaccinated',
    gender: 'select gender',
  });

  const handleChange = (name: string, value: string): void => {
    setSelectedValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePressType = () => {
    setIsPetTypeClicked(!isPetTypeClicked);
  };
  const handlePressVaccinated = () => {
    setIsVaccinatedClick(!isVaccinatedClick);
  };
  const handlePressGender = () => {
    setIsGenderClick(!isGenderClick);
  };

  const onSearch = (text: any) => {
    if (text !== '') {
      let searchedData = datas.filter(item => {
        return item.dog.toLowerCase().indexOf(text.toLowerCase()) > -1;
      });
      setAllData(searchedData);
    } else setAllData(datas);
  };

  const selectFile = async () => {
    const options: ImagePicker.ImageLibraryOptions & {
      title: string;
      customButtons: {};
      storageOptions: {};
    } = {
      title: 'Select Image',
      mediaType: 'photo' as ImagePicker.MediaType,
      customButtons: [
        {name: 'customOptionKey', title: 'Choose File from Custom Option'},
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    try {
      const res: ImagePickerResponse | undefined = await launchImageLibrary(
        options,
      );

      if (res?.didCancel) {
         Toast.show({
          type: 'error',
          text1: 'You cancel upload image  ',
        });
      } else if (res?.assets && res.assets.length > 0) {
        const uri = res.assets[0].uri || '';
        const fileName = res.assets[0].type || '';
        setFileName(fileName);
        setFilePath(uri);
      } else {
       Toast.show({
          type: 'error',
          text1: 'No image selected or an error occurred',
        });
      }
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: 'Image picker error ocurred',
      });
    }
  };

  const uploadImage = async () => {
    let imageType = fileName.split('/').pop();
    let id = Math.random().toString(36).slice(2);
    const userUID = auth().currentUser?.uid;
    const user = auth().currentUser;
    if (userUID) {
      setisloading(true);
      const reference = storage().ref(`images/${id}.${imageType}`);
      try {
        const snapshot = await reference.putFile(filePath);
        const downloadURL = await reference.getDownloadURL();

        const donationCollection = firestore().collection('donations');

        const donationData = {
          ...state,
          ...selectedValues,
          imageURL: downloadURL,
          userId: userUID,
        };
        await donationCollection.add(donationData);
        const favoriteDonationsRef = firestore()
          .collection('favoriteDonations')
          .doc(userUID);

        const favoriteDoc = await favoriteDonationsRef.get();
        if (!favoriteDoc.exists) {
          await favoriteDonationsRef.set({donations: []});
        }
        Toast.show({
          type: 'success',
          text1: 'Donation data saved successfully',
        });
        setisloading(false);
      } catch (error) {
        return Toast.show({
          type: 'error',
          text1: 'Error uploading image to storage or updating Firestore:',
        });
      }
    } else {
      Toast.show({
        type: 'error',
        text1: 'User not authenticated',
      });
    }
  };
  return {
    handleChange,
    handlePressGender,
    handlePressType,
    handlePressVaccinated,
    uploadImage,
    isGenderClick,
    isPetTypeClicked,
    isVaccinatedClick,
    allData,
    setIsGenderClick,
    setIsPetTypeClicked,
    setIsVaccinatedClick,
    state,
    selectedValues,
    onSearch,
    loading,
    vaccinated,
    gender,
    selectFile,
  };
}
