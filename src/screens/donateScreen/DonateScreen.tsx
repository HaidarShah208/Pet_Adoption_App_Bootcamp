import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {IMAGES} from '../../constants/assessts/AllAssets';
import Button from '../../components/button/Button';
import {styles} from './DonateScreen';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsDetailsList} from '../../navigation/detailNavigation/DetailNavigation';
import {AppThunk} from '../../store/store';
import useDonationScreen from './useDonationScreen';

interface donateScreenProps {
  navigation: StackNavigationProp<RootStackParamsDetailsList, 'Add_Pet'>;
}

export default function DonateScreen({navigation}: donateScreenProps) {
  const {
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
  } = useDonationScreen();

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
        <Text style={styles.mail}>Pet Age</Text>
        <TextInput
          style={styles.input}
          value={state.petAge}
          keyboardType="numeric"
          onChangeText={text => handleChange('petAge', text)}
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
            title={
              loading ? (
                <ActivityIndicator size="large" color="white" />
              ) : (
                'Donate'
              )
            }
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
