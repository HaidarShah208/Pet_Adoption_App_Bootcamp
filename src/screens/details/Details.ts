import {StyleSheet} from 'react-native';
import {FONTS} from '../../constants/fonts/AllFonts';

export const DetialsStyle = StyleSheet.create({
  MainConaier: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  ImgView: {
    alignSelf: 'center',
    height: 330,
  },
  InfoContainer: {
    width: 360,
    minHeight: 490,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  InfoHeading: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  InfoText: {
    color: 'black',
    fontSize: 24,
    fontFamily: FONTS.BOLD,
    fontWeight: 'bold',
  },
  InfoSub: {
    color: 'black',
    fontSize: 14,
  },
  Price: {
    fontSize: 24,
    color: '#F6A530',
    fontWeight: 'bold',
  },
  furthurConainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  furthurInfo: {
    backgroundColor: '#FEF6EA',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: 75,
    height: 59,
    borderRadius: 18,
  },
  inerTxt: {
    color: '#F6A530',
    fontFamily: FONTS.SemiBold,
    fontSize: 13,
  },
  inerTxts: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  detailsInfo: {
    display: 'flex',
    flexDirection: 'row',
  },
  NameInfo: {
    paddingLeft: 10,
    paddingTop: 5,
  },
  Name: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
  owner: {
    fontSize: 11,
    color: 'black',
  },
  locaiton: {
    display: 'flex',
    paddingTop: 10,
    flexDirection: 'row',
  },
  loc: {
    fontSize: 11,
    textTransform: 'capitalize',
    color: 'black',
    paddingRight: 8,
  },
  MainInfo: {
    paddingTop: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  discription: {
    fontFamily: FONTS.REGULER,
    fontSize: 13,
    color: 'black',
  },
  DisContainer: {
    paddingHorizontal: 18,
    marginTop: 20,
    textAlign: 'center',
    alignItems: 'center',
  },
  readMore: {
    textDecorationLine: 'underline',
  },
  buttonStyle: {
    width: 321,
  },
  btnsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
