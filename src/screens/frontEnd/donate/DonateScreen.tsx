import {View, TextInput, Text, TouchableOpacity, ScrollView, Platform, PermissionsAndroid} from 'react-native';
import React, {useEffect, useState} from 'react';
import {IMAGES} from '../../../constants/assessts/AllAssessts';
import {FlatList} from 'react-native';
import {styles} from '../../../styles/frontEnd/DonateScreen';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';

const datas = [
  {dog: 'puppy', location: 'pakistan'},
  {dog: 'all', location: 'pakistan'},
  {dog: 'afas', location: 'pakistan'},
  {dog: 'afda', location: 'pakistan'},
  {dog: 'as', location: 'pakistan'},
];


interface YourState {
  petType: string;
  petBreed: string;
  amount: string;
  vaccinated: string;
  petGender: string;
  petWeight: string;
  petLocation: string;
  description: string;
  // selectedImage: { uri: string } | null;
}
export default function DonateScreen() {
  const [selectedItem, setSelectedItem] = useState('select pet');
  const [isClicked, setIsClicked] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [isClik, setIsClik] = useState(false);
  const [allData, setAllData] = useState(datas);
  const [filePath, setFilePath] = useState({});
  const navigation = useNavigation();
  const [state, setState] = useState<YourState>({
    petType:'',
    petBreed:'',
    amount:'',
    vaccinated:'',
    petGender:'',
    petWeight:'',
    petLocation:'',
    description:'',
  });

  const handleChange = (name: string, value: string): void => {
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePress = () => {
    setIsClicked(!isClicked);
    console.log('clicked');
  };
  const handlePresss = () => {
    setIsClick(!isClick);
    console.log('clicked');
  };
  const handlePres = () => {
    setIsClik(!isClik);
    console.log('clicked');
  };

  const [amount, setamount] = useState('');

  const handleWeightChange = (txt: any) => {
    setamount(txt);
  };

  const onSearch = (text: any) => {
    if (text != '') {
      let searchedData = datas.filter(item => {
        return (
          item.dog.toLocaleLowerCase().indexOf(text.toLocaleLowerCase()) > -1
        );
      });
      setAllData(searchedData);
    } else setAllData(datas);
  };
  return (
<ScrollView>
  <TouchableOpacity onPress={() => {
        navigation.goBack();
      }}>
  <IMAGES.BACK width={25} height={25} style={styles.iMg} />
  </TouchableOpacity>
    <View style={styles.container}>
      <Text style={styles.heading}>Pet Type</Text>
      <TouchableOpacity style={styles.dorpdown} onPress={handlePress}>
        <Text>{selectedItem}</Text>
        {isClicked ? <IMAGES.upArrow /> : <IMAGES.downArrow />}
      </TouchableOpacity>
      {isClicked ? (
        <View style={styles.dropdownArea}>
          <TextInput
            placeholder="search"
            style={styles.searchInput}
            onChangeText={text => {
              onSearch(text);
            }}
          />
          <FlatList
            data={allData}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={styles.Item}
                  onPress={() => {
                    setSelectedItem(item.dog);
                    onSearch('');
                    setIsClicked(false);
                  }}>
                  <Text style={styles.ItemText}>{item.dog}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      ) : null}
      <Text style={styles.mail}>Peet Breed</Text>
      <TextInput
        style={styles.input}
        value={state.petBreed}
        onChangeText={(text) => handleChange('petBreed', text)}
      />
      <Text style={styles.mail}>Amount</Text>
      <TextInput
        style={styles.input}
        value={`${state.amount} $ `}
        onChangeText={(text) => handleChange('amount', text)}
      />

      <Text style={styles.heading}>Vaccinated</Text>
      <TouchableOpacity style={styles.dorpdown} onPress={handlePresss}>
        <Text>{selectedItem}</Text>
        {isClick ? <IMAGES.upArrow /> : <IMAGES.downArrow />}
      </TouchableOpacity>
      {isClick ? (
        <View style={styles.dropdownArea}>
          <TextInput
            placeholder="search"
            style={styles.searchInput}
            onChangeText={text => {
              onSearch(text);
            }}
          />
          <FlatList
            data={allData}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={styles.Item}
                  onPress={() => {
                    setSelectedItem(item.dog);
                    onSearch('');
                    setIsClick(false);
                  }}>
                  <Text style={styles.ItemText}>{item.dog}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      ) : null}
      <Text style={styles.heading}>Gender</Text>
      <TouchableOpacity style={styles.dorpdown} onPress={handlePres}>
        <Text>{selectedItem}</Text>
        {isClik ? <IMAGES.upArrow /> : <IMAGES.downArrow />}
      </TouchableOpacity>
      {isClik ? (
        <View style={styles.dropdownArea}>
          <TextInput
            placeholder="search"
            style={styles.searchInput}
            onChangeText={text => {
              onSearch(text);
            }}
          />
          <FlatList
            data={allData}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={styles.Item}
                  onPress={() => {
                    setSelectedItem(item.dog);
                    onSearch('');
                    setIsClik(false);
                  }}>
                  <Text style={styles.ItemText}>{item.dog}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      ) : null}

      <Text style={styles.mail}>Weight</Text>
      <TextInput
        style={styles.input}
        value={`${state.petWeight} KG `}
        onChangeText={ (text) =>   handleChange('petWeight',text)}
      />
      <Text style={styles.mail}>Loacation</Text>
      <TextInput style={styles.input} value={state.petLocation} onChangeText={(text) =>   handleChange('petLocation',text)} />
      <Text style={styles.mail}>Descriptin</Text>
      <TextInput style={styles.input} value={state.description} onChangeText={(text) =>   handleChange('description',text)} />
      <Text style={styles.heading}>Image</Text>
      <TouchableOpacity style={styles.img}  >
        <IMAGES.ImagePicker/>
      </TouchableOpacity>
    </View>
</ScrollView>
  );
}
