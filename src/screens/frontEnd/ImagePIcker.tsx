import React, { FC, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import ImagePicker, { launchImageLibrary, ImageLibraryOptions, MediaType, ImagePickerResponse } from 'react-native-image-picker';

interface AppProps {}

interface Resource {
  uri?: string;
  data?: string;
}

const  ImagePickers: FC<AppProps> = () => {
  const [resource, setResource] = useState<Resource>({});

  const selectFile = async () => {
    const options: ImagePicker.ImageLibraryOptions & { title: string ,customButtons:{},storageOptions:{}
} = {
        title: 'Select Image',
        mediaType: 'photo' as ImagePicker.MediaType, // Explicitly set the type
        customButtons: [
          { name: 'customOptionKey', title: 'Choose File from Custom Option' },
        ],
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
  
    try {
      const res: ImagePickerResponse | undefined = await launchImageLibrary(options);
console.log('res', res.assets)
      if (res.didCancel) {
        setResource({
          uri: res.uri,
          data: res.data,
        });
      } else {
        console.log('User cancelled image picker');
      }
    } catch (err) {
      console.error('ImagePicker error:', err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        {resource.uri && (
          <Image source={{ uri: resource.uri.toString() }} style={{ width: 100, height: 100 }} />
        )}
        {resource.data && (
          <Image source={{ uri: `data:image/jpeg;base64,${resource.data}` }} style={{ width: 200, height: 200 }} />
        )}

        {resource.uri && <Text style={{ alignItems: 'center' }}>{resource.uri.toString()}</Text>}

        <TouchableOpacity onPress={selectFile} style={styles.button}>
          <Text style={styles.buttonText}>Select File</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  button: {
    width: 250,
    height: 60,
    backgroundColor: '#3740ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginBottom: 12,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff',
  },
});

export default ImagePickers;
