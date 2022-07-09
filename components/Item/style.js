import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 3,
        alignItems: 'center'
    },
    text: {
        marginVertical: 10,
        fontWeight: 'bold',
        fontSize: 24
    },
    box: {
        width: '100%',
        height: '100%',
        shadowColor: COLORS.shadowBox,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.25,
        elevation: 4,
        shadowRadius: 20,
        borderRadius: 20
    },
    boxImage: {
        width: '100%',
        height: '100%',
        borderRadius: 20
    }
});
