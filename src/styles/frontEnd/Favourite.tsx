import {StyleSheet} from 'react-native';

export const searchSt = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    paddingHorizontal: 40,
    flexDirection: 'row',
  },
  heading: {
    fontSize: 24,
    fontFamily: 'Monsterrat',
    color: 'red',
    fontWeight: 'bold',
  },
  MainContainer: {
    marginTop: 30,
    marginRight: 80,
    display: 'flex',
    flexDirection: 'row',
  },
  mainImg: {
    position: 'relative',
    left: 20,
    zIndex: 1,
  },

  data: {
    position: 'absolute',
    left: 160,
    top: 10,
    paddingLeft: 60,
    width: 206,
    height: 126,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
  },
  heding: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 5,
  },

  locator: {
    marginTop: 5,
    display: 'flex',
    flexDirection: 'row',
  },
  locatorImg: {
    paddingLeft: 40,
  },
  heartSty: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'space-between',
    paddingRight: 22,
  },
});
