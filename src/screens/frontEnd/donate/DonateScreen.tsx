import {View,TextInput, Text, StyleSheet,TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {IMAGES} from '../../../constants/assessts/AllAssessts';
import {FlatList} from 'react-native';
import {FONTS} from '../../../constants/fonts/AllFonts';
import Input from '../../../components/input/Input';

const datas = [
  {dog: 'puppy', location: 'pakistan'},
  {dog: 'all', location: 'pakistan'},
  {dog: 'afas', location: 'pakistan'},
  {dog: 'afda', location: 'pakistan'},
  {dog: 'as', location: 'pakistan'},
];
export default function DonateScreen() {
  const [selectedItem, setSelectedItem] = useState('select pet');
  const [isClicked, setIsClicked] = useState(false);
  const [allData, setAllData] = useState(datas);
  const [email, setEmail] = useState('');
  const [passowrd, setPassword] = useState('');

  const handleChange=()=>{

  }


  const handlePress = () => {
    setIsClicked(!isClicked);
    console.log('clicked');
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
      <TextInput style={styles.input} value={email} onChangeText={email => setEmail(email)} />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'column',
    justifyContent: 'center',  
    alignItems: 'center', 
  },
  heading: {
    fontSize: 18,
    fontFamily: FONTS.SemiBold,
    color: '#101C1D',
    alignSelf:'flex-start',
    marginStart:55,
    marginTop:30
  },
  dorpdown: {
    fontFamily: FONTS.SemiBold,
    color: '#101C1D',
    width: 303,
    height: 50,
    borderRadius: 10,
    borderBottomWidth: 2,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'space-between',
  },
  Icon: {
    width: 12,
    height: 12,
  },
  dropdownArea: {
    width: '90%',
    height: 300,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    elevation: 5,
    alignSelf: 'center',
  },
  searchInput: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    marginTop: 10,
    alignSelf: 'center',
  },
  Item: {
    width: '85%',
    height: 50,
    marginTop: 5,
    borderBottomWidth: 0.2,
    borderBottomColor: 'black',
    alignSelf: 'center',
  },ItemText:{
    fontFamily: FONTS.SemiBold,
    color: '#101C1D',
  },  mail: {
    fontSize: 21,
    fontFamily:FONTS.SemiBold,
    color: '#101C1D',
    marginTop: 20,
    alignSelf:'flex-start',
    marginStart:55,
  },
  input: {
    height: 40,
    color: 'black',
    fontSize: 16,
    borderBottomWidth: 2,
    minWidth: 302,
    minHeight: 40,
  },
});
