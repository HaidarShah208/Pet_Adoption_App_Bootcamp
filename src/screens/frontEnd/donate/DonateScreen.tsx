import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {IMAGES} from '../../../constants/assessts/AllAssessts';
import ImagePicker, {
  ImagePickerResponse,
  launchImageLibrary,
} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';
import Button from '../../../components/button/Button';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import Toast from 'react-native-toast-message';
import auth from '@react-native-firebase/auth';
import {styles} from '../../../styles/frontEnd/DonateScreen';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsDetailsList} from '../../../navigation/detailNavigation/DetailNavigation';
import {AppThunk} from '../../../redux/store';

const datas = [{dog: 'Cat'}, {dog: 'Dog'}, {dog: 'Sheep'}];

const Gender = [{gender: 'Male'}, {gender: 'Female'}];
const Vaccinated = [{isVaccinated: 'Yes'}, {isVaccinated: 'No'}];

interface donateScreenProps {
  navigation: StackNavigationProp<RootStackParamsDetailsList, 'donate'>;
}

export default function DonateScreen({navigation}: donateScreenProps) {
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
        console.log('User cancelled image picker');
      } else if (res?.assets && res.assets.length > 0) {
        const uri = res.assets[0].uri;
        const fileName = res.assets[0].type;
        setFileName(fileName);
        setFilePath(uri);
      } else {
        console.log('No image selected or an error occurred');
      }
    } catch (err) {
      console.error('ImagePicker error:', err);
    }
  };

  const uploadImage = async () => {
    let imageType = fileName.split('/').pop();
    let id = Math.random().toString(36).slice(2);
    const userUID = auth().currentUser?.uid;

    if (userUID) {
      const reference = storage().ref(`images/${id}.${imageType}`);
      try {
        const snapshot = await reference.putFile(filePath);
        const downloadURL = await reference.getDownloadURL();

        const donationCollection = firestore().collection('donations');

        const donationData = {
          ...state,
          ...selectedValues,
          imageURL: downloadURL,
          userId: userUID, // Include user ID in the donation document
        };
        await donationCollection.add(donationData);
        const favoriteDonationsRef = firestore()
          .collection('favoriteDonations')
          .doc(userUID);

        // Check if the user's favoriteDonations document exists, create if not
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
        console.error(
          'Error uploading image to storage or updating Firestore:',
          error,
        );
      }
    } else {
      console.error('User not authenticated');
    }
  };
  return (
    <ScrollView>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <IMAGES.BACK width={25} height={25} style={styles.iMg} />
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.heading}>Pet Type</Text>
        <TouchableOpacity style={styles.dorpdown} onPress={handlePressType}>
          <Text style={{color: '#101C1D'}}>{selectedValues.petType}</Text>
          {isPetTypeClicked ? <IMAGES.upArrow /> : <IMAGES.downArrow />}
        </TouchableOpacity>
        {isPetTypeClicked ? (
          <View style={styles.dropdownArea}>
            <TextInput
              placeholder="search"
              style={styles.searchInput}
              onChangeText={text => {
                onSearch(text);
              }}
            />
            <FlatList
              scrollEnabled={false}
              data={allData}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={styles.Item}
                    onPress={() => {
                      handleChange('petType', item.dog);
                      onSearch('');
                      setIsPetTypeClicked(false);
                    }}>
                    <Text style={styles.ItemText}>{item.dog}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        ) : null}
        <Text style={styles.mail}>Pet Breed</Text>
        <TextInput
          style={styles.input}
          value={state.petBreed}
          onChangeText={text => handleChange('petBreed', text)}
        />
        <Text style={styles.mail}>Amount</Text>
        <TextInput
          style={styles.input}
          value={`$ ${state.amount}`}
          onChangeText={text =>
            handleChange('amount', text.replace('$', '').trim())
          }
          keyboardType="numeric"
        />

        <Text style={styles.heading}>Vaccinated</Text>
        <TouchableOpacity
          style={styles.dorpdown}
          onPress={handlePressVaccinated}>
          <Text style={{color: '#101C1D'}}>{selectedValues.vaccinated}</Text>
          {isVaccinatedClick ? <IMAGES.upArrow /> : <IMAGES.downArrow />}
        </TouchableOpacity>
        {isVaccinatedClick ? (
          <View style={styles.dropdownArea}>
            <TextInput
              placeholder="search"
              style={styles.searchInput}
              onChangeText={text => {
                onSearch(text);
              }}
            />
            <FlatList
              scrollEnabled={false}
              data={vaccinated}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={styles.Item}
                    onPress={() => {
                      handleChange('vaccinated', item.isVaccinated);
                      onSearch('');
                      setIsVaccinatedClick(false);
                    }}>
                    <Text style={styles.ItemText}>{item.isVaccinated}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        ) : null}
        <Text style={styles.heading}>Gender</Text>
        <TouchableOpacity style={styles.dorpdown} onPress={handlePressGender}>
          <Text style={{color: '#101C1D'}}>{selectedValues.gender}</Text>
          {isGenderClick ? <IMAGES.upArrow /> : <IMAGES.downArrow />}
        </TouchableOpacity>
        {isGenderClick ? (
          <View style={styles.dropdownArea}>
            <TextInput
              placeholder="search"
              style={styles.searchInput}
              onChangeText={text => {
                onSearch(text);
              }}
            />
            <FlatList
              scrollEnabled={false}
              data={gender}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={styles.Item}
                    onPress={() => {
                      handleChange('gender', item.gender);
                      onSearch('');
                      setIsGenderClick(false);
                    }}>
                    <Text style={styles.ItemText}>{item.gender}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        ) : null}
        <Text style={styles.mail}>Weight</Text>
        <TextInput
          style={styles.input}
          value={`KG ${state.petWeight}`}
          onChangeText={text =>
            handleChange('petWeight', text.replace('KG', '').trim())
          }
          keyboardType="numeric"
        />
        <Text style={styles.mail}>Location</Text>
        <TextInput
          style={styles.input}
          value={state.petLocation}
          onChangeText={text => handleChange('petLocation', text)}
        />
        <Text style={styles.mail}>Description</Text>
        <TextInput
          style={styles.input}
          value={state.description}
          onChangeText={text => handleChange('description', text)}
        />
        <Text style={styles.heading}>Image</Text>
        <TouchableOpacity style={styles.img} onPress={selectFile}>
          <IMAGES.ImagePicker />
        </TouchableOpacity>
        <View style={styles.btns}>
          <Button
            title={'Donate'}
            buttonStyle={styles.btns}
            onPress={() => uploadImage()}
          />
        </View>
      </View>
    </ScrollView>
  );
}

function dispatch(arg0: AppThunk) {
  throw new Error('Function not implemented.');
}
